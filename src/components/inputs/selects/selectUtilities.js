
export const search = (toCheck, input) => toCheck.toLowerCase().includes(input.toLowerCase())
export const searchArray = (toCheck, input) => toCheck.some(item => search(item, input))

export const getNumAtEnd = (str) => parseInt(str.slice(str.search(/\d+$/)))