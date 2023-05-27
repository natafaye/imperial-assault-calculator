import { CLASS_CARD, MOD, UNIT, WEAPON } from "../data"

/**
 * Prepares a string for search by removing spaces and punctuation and converting to all lowercase
 */
const prepareString = (string: string | undefined) => string?.toLowerCase().replaceAll(/[\s-&+!"'.,+$()]/g, "") || ""

/**
 * Search for an exact match, case insensitively
 */
export const searchExact = (toSearch: string | undefined, term: string) => prepareString(toSearch) === prepareString(term)

/**
 * Searces for partial or full match inside a string, case insensitively
 */
export const search = (toSearch: string | undefined, term: string) => prepareString(toSearch).includes(prepareString(term))

/**
 * Search an array of strings, case insensitively
 */
export const searchArray = (toSearch: string[] | undefined, term: string) => toSearch?.some(item => searchExact(item, term))

/**
 * Gets a number on the end of a string
 */
export const getNumAtEnd = (string: string) => parseInt(string.slice(string.search(/\d+$/)))

/**
 * Gets the type (unit, weapon, mod, or class card) of a card
 */
export const getCardType = (card: Card) => {
    if(card.id >= 4000) return CLASS_CARD
    if(card.id >= 3000) return MOD
    if(card.id >= 2000) return WEAPON
    else return UNIT
}