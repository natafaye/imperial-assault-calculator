# Imperial Assault

This is a calculator for the Star Wars board game [Imperial Assault](https://www.fantasyflightgames.com/en/products/star-wars-imperial-assault) 
that calculates the likelihood of getting different damage amounts for a particular attack and defense 

[Check it out here](https://natafaye.github.io/imperial-assault-calculator/)

## Damage Stats

You can input attack and defense data by hand, or use the drop down to select cards that fill the data.
The likelihood of each damage value is shown in a bar graph.
The Required Accuracy is the accuracy below which the damage will be zero. Or in other words, the distance to the target.

The browser's back button will undo each change to attack/defense data.
You can bookmark a page to save that combo of attack and defense data. It does not save the Required Accuracy.

The algorithm is calculated on your computer, so it will run faster or slower on different devices.
Calculating with more than 6 dice or with rerolls may take a very long time.
Calculating with more than 10 dice will pretty definitely cause an error and/or crash the tab.

## Compare Attacks

You can add multiple attacks, either normally in a modal or through a bulk or quick add.
For each attack it will calculate the average damage vs a black die and a white die.
To try it against more defenses, you can click the stats button to open the Damage Stats page with this attack.

Columns can be sorted and shown/hidden.

## Algorithm Assumptions

To calculate the damage likelihoods, the calculator makes certain assumptions about the players and interpreations of game rules, including:

- Players will make reroll ability and surge ability choices that are most likely to optimize damage
- A player can use one reroll ability, see the results, then decide whether or not and how to use another reroll ability
- The word "then" on a card indicates sequence not dependence
- A reroll ability that says to reroll "all" attack or defense die can be used after another reroll ability, to reroll the remaining dice
  
## Creators  

Created with much love for complicated board games and taking too long on your turn.

[jtfuller3](https://github.com/jtfuller3) wrote the behemoth of an algorithm

[natafaye](https://github.com/natafaye) wrote the React UI and converted the algorithm from Python to Javascript, with a few additions

[Donate to Our Board Game Addiction](https://www.buymeacoffee.com/nataliecodes)
