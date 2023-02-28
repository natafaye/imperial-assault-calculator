#!/usr/bin/env python3.7
# last edited 20230225 by science et al

from copy import deepcopy
from iadice import dice, acc, hit, sur, blo, eva, dod
import numpy as np


def byte2id(byte):
    id = 0
    for bitid, bit in enumerate(byte[::-1]):
        id += bit * 6 ** bitid
    return id


def defensefloor(result):
    result[blo] = max(0, result[blo])
    result[eva] = max(0, result[eva])
    result[dod] = max(0, result[dod])


class Attack:

    def __init__(self, dice, surge, bonus=[0, 0, 0, 0, 0, 0], distance=0, rerollabilities=[[], []], special=''):
        self.dice = dice
        self.surgeabilities = []
        for ability in surge:
            self.surgeabilities.append(np.asarray(ability, np.byte))
        self.bonus = np.asarray(bonus, np.byte)
        self.distance = distance
        self.rerollabilities = rerollabilities
        # attacker's reroll abilities are first list, defender's are second list
        # each reroll ability is [type of dice (0 for attack), max number of dice]
        self.special = special
        self.genrolls()
        self.average = self.calcaverage(self.probabilities)

    def id2byte(self, id):
        byte = []
        for bit in np.base_repr(id, base=6):
            byte.append(int(bit))
        while len(byte) < len(self.dice):
            byte.insert(0, 0)
        return byte

    def genrolls(self):
        # enumerate all possible rolls
        self.rolls = np.full(6 ** len(self.dice), 0, np.ubyte)
        self.probabilities = np.full(6 ** len(self.dice), 6 ** len(self.dice), np.uint)  
        # np.uint means max 12 dice, min probability is 6 ** (-2 * ndice) because of rerolls
        for rollid in range(self.rolls.size):
            baseresult = np.copy(self.bonus)
            rollbyte = self.id2byte(rollid)
            for diceid, sideid in enumerate(rollbyte):
                color = self.dice[diceid]
                baseresult += dice[color][sideid]
                finalresult = self.rollresult(baseresult)
                self.rolls[rollid] = finalresult[hit]
        if self.special == 'punchdagger':
            self.punchdagger()
        # Step 3 rerolls
        diceleft = set(range(len(self.dice)))
        self.probabilities = self.genrerolls(self.probabilities, self.rerollabilities, diceleft)

    def genrerolls(self, probabilities, abilities, diceleft):
        # assumes players know which set of dice is best to reroll for each ability and which order to use abilities
        # use reroll abilities for attacker and then defender
        if abilities[0]:  # attacker uses an ability
            playerid = 0
        elif abilities[1]:  # defender uses an ability
            playerid = 1
        else:  # no abilities left
            return probabilities
        if not diceleft:  # no dice left
            return probabilities
        newprobabilities = np.full(6 ** len(self.dice), 0, np.uint)
        for rollid, p in enumerate(probabilities):
            if p:
                probabilitieslist = []
                hitslist = []
                # use an ability
                for abilityid, ability in enumerate(abilities[playerid]):
                    sets = []
                    branches = [set()]
                    while branches:
                        branch = branches.pop()
                        for diceid in diceleft:
                            if self.dicetype(diceid) == ability[0] and diceid not in branch:
                                newbranch = branch.union({diceid})
                                if newbranch not in sets:
                                    sets.append(newbranch)
                                    if len(newbranch) < ability[1]:
                                        branches.append(newbranch)
                    for s in sets:
                        probabilities2 = self.reroll(rollid, s, p)
                        abilities2 = deepcopy(abilities)
                        abilities2[playerid].pop(abilityid)
                        diceleft2 = diceleft.copy() - s
                        probabilities2 = self.genrerolls(probabilities2, abilities2, diceleft2)
                        probabilitieslist.append(probabilities2)
                        hitslist.append(self.calcaverage(probabilities2))
                # or skip rest of this player's abilities
                probabilities0 = self.reroll(rollid, set(), p)
                abilities0 = deepcopy(abilities)
                abilities0[playerid] = []
                probabilities0 = self.genrerolls(probabilities0, abilities0, diceleft)
                probabilitieslist.append(probabilities0)
                hitslist.append(self.calcaverage(probabilities0))
                # now choose best for player
                if playerid == 0:  # attacker chooses max
                    probabilitiesid = np.argmax(hitslist)
                else:  # defender chooses min
                    probabilitiesid = np.argmin(hitslist)
                newprobabilities += probabilitieslist[probabilitiesid]
        return newprobabilities


    def dicetype(self, diceid):
        color = self.dice[diceid]
        if color in ['black', 'white']:
            return 1  # defense dice
        else:
            return 0  # attack dice

    
    def reroll(self, rollid, s, ptot):  # spreads out probability based on dice rerolled
        rollbytes = [self.id2byte(rollid)]
        for diceid in s:
            newrollbytes = []
            for rollbyte in rollbytes:
                for sideid in range(6):
                    newrollbyte = rollbyte[:]
                    newrollbyte[diceid] = sideid
                    newrollbytes.append(newrollbyte)
            rollbytes = newrollbytes
        p = ptot / 6 ** len(s)
        probabilities = np.full(6 ** len(self.dice), 0, np.uint)
        for rollbyte in rollbytes:
            probabilities[byte2id(rollbyte)] = p
        return probabilities


    def rollresult(self, baseresult):
        # floor of 0 for defense results
        defensefloor(baseresult)
        # spend excess surges
        if baseresult[sur] > baseresult[eva]:
            baseresult[sur] -= baseresult[eva]
            baseresult[eva] = 0
            possibleresults = [baseresult]
            # generate all possible results from spending surges
            surgesets = [set()]
            surgebranches = [set()]
            while surgebranches:
                surgebranch = surgebranches.pop()
                for surgeindex in range(len(self.surgeabilities)):
                    if surgeindex not in surgebranch:
                        newsurgebranch = surgebranch.union({surgeindex})
                        if newsurgebranch not in surgesets:
                            surgesets.append(newsurgebranch)
                            newresult = np.copy(baseresult)
                            for sindex in newsurgebranch:
                                newresult += self.surgeabilities[sindex]
                            if newresult[sur] >= 0:
                                possibleresults.append(np.copy(newresult))
                                if newresult[sur]:
                                    surgebranches.append(newsurgebranch)
        else:
            baseresult[eva] -= baseresult[sur]
            baseresult[sur] = 0
            possibleresults = [baseresult]
        # calculate damage for each possible result
        for result in possibleresults:
            defensefloor(result)
            if result[hit] > result[blo]:
                if result[dod] or result[acc] < self.distance:
                    result[hit] = 0
                else:
                    result[hit] -= result[blo]
                result[blo] = 0
            else:
                result[blo] -= result[hit]
                result[hit] = 0
        bestresult = possibleresults[0]
        for result in possibleresults:
            if result[hit] > bestresult[hit]:
                bestresult = result
        return bestresult

    def calcaverage(self, probabilities):
        return float(np.dot(self.rolls, probabilities)) / probabilities.sum()

    def calchist(self):
        return np.histogram(self.rolls, list(range(max(self.rolls) + 2)), weights=self.probabilities, density=True)

    def punchdagger(self):
        newrolls = np.copy(self.rolls)
        for rollid in range(self.rolls.size):
            rollbyte = self.id2byte(rollid)
            potentials = []
            for diceid, sideid in enumerate(rollbyte):
                if self.dicetype(diceid) == 0:  # attack dice
                    color = self.dice[diceid]
                    side = dice[color][sideid]
                    if side[hit] + side[sur] == 1:  # only one attack symbol
                        for newsideid in range(6):
                            newrollbyte = rollbyte[:]
                            newrollbyte[diceid] = newsideid
                            newhits = self.rolls[byte2id(newrollbyte)]
                            potentials.append(newhits)
            if potentials:
                newrolls[rollid] = max(potentials)
        self.rolls = newrolls
