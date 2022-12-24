/**
 * Search a string, case insensitively
 * @param {string} toSearch The string to search
 * @param {string} term The search term to check for 
 * @returns {boolean} true if it was found, false if it was not
 */
export const search = (toSearch, term) => toSearch?.toLowerCase().includes(term.toLowerCase())

/**
 * Search an array of strings, case insensitively
 * @param {string[]} toSearch The array of strings to search
 * @param {string} term The search term to check for 
 * @returns {boolean} true if it was found somewhere in the array, false if it was not
 */
export const searchArray = (toSearch, term) => toSearch?.some(item => search(item, term))

/**
 * Gets a number on the end of a string
 * @param {string} str The input string with a number at the end
 * @returns {number | NaN} The number at the end or NaN
 */
export const getNumAtEnd = (str) => parseInt(str.slice(str.search(/\d+$/)))