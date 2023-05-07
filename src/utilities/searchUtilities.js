
/**
 * Prepares a string for search by removing spaces and punctuation and converting to all lowercase
 * @param {string?} string The string to be prepared for search
 * @returns {string} The prepared string
 */
const prepareString = (string) => string?.toLowerCase().replaceAll(/[\s-&+!"'.,+$()]/g, "") || ""

/**
 * Search for an exact match, case insensitively
 * @param {string?} toSearch The string to search
 * @param {string?} term The search term to check for 
 * @returns {boolean} true if it was found, false if it was not
 */
export const searchExact = (toSearch, term) => prepareString(toSearch) === prepareString(term)

/**
 * Searces for partial or full match inside a string, case insensitively
 * @param {string?} toSearch The string to search
 * @param {string?} term The search term to check for 
 * @returns {boolean} true if it was found, false if it was not
 */
export const search = (toSearch, term) => prepareString(toSearch).includes(prepareString(term))

/**
 * Search an array of strings, case insensitively
 * @param {string[]} toSearch The array of strings to search
 * @param {string} term The search term to check for 
 * @returns {boolean} true if it was found somewhere in the array, false if it was not
 */
export const searchArray = (toSearch, term) => toSearch?.some(item => searchExact(item, term))

/**
 * Gets a number on the end of a string
 * @param {string} str The input string with a number at the end
 * @returns {number | NaN} The number at the end or NaN
 */
export const getNumAtEnd = (str) => parseInt(str.slice(str.search(/\d+$/)))