/**
 * PYTHON CONVERSION
 * 
 * Add parenthesis around if conditions
 * Add curly brackets around blocks if more than one line
 * Add const (or let) when variable is created
 * Remove self from method parameters
 * 
 * not                                          ->      !
 * condition and condition                      ->      condition && condition
 * condition or condition                       ->      condition || condition
 * 
 * #                                            ->      //
 * self                                         ->      this
 * __init__                                     ->      constructor
 * num ** power                                 ->      Math.pow(num, power)
 * ==                                           ->      ===
 * np.base_repr(num, base)                      ->      num.toString(base)
 * 
 * array.append(value)                          ->      array.push(value)
 * array.append(array2)                         ->      array.push(array2) NOT array.push(...array2)
 * len(array)                                   ->      array.length
 * array[:]                                     ->      [...array]
 * np.copy(array)                               ->      [...array]
 * array[::-1]                                  ->      array.slice().reverse()
 * not array                                    ->      !array.length
 * array1 += array2                             ->      array1 = addArrays(array1, array2) NOT array1.push(...array2)
 * array.pop(index)                             ->      array.splice(index, 1)
 * max(array)                                   ->      Math.max(...array)
 * 
 * np.argmax(array)                             ->      argmax(array)
 * np.argmin(array)                             ->      argmin(array)
 * np.full(size, value, type)                   ->      full(size, value)
 * for rollid, p in enumerate(probabilities):   ->      probabilities.forEach((p, rollid) => {
 * for item in array:                           ->      for(const item of array) {
 * 
 * set()                                        ->      new Set()
 * set.union(toAdd)                             ->      union(set, toAdd)
 * set.copy()                                   ->      new Set(set)
 * set1 - set2                                  ->      difference(set1, set2) // makes copy
 * value in set                                 ->      set.has(value)
 * set in array                                 ->      setInArray(set, array)
 * not set                                      ->      !set.size
 * 
 */

export function full(size: number, value: number) {
    let array = Array(size)
    for (let i = 0; i < size; i++) {
        array[i] = value
    }
    return array
}

export function union<Type>(a: Set<Type>, b: Set<Type> | any) {
    const c = new Set(a)
    if(b instanceof Set) {
        b.forEach(item => c.add(item))
    }
    else c.add(b)
    return c
}

export function difference<Type>(a: Set<Type>, b: Set<Type>) {
    const c = new Set(a)
    for(const item of b) {
        c.delete(item)
    }
    return c
}

export function setInArray<Type>(array: Set<Type>[], set: Set<Type>) {
    return array.some(item => isEqualSet(item, set))
}

export function range(size: number, start = 0) {
    let array = new Array(size)
    for (let i = 0; i < size; ++i) {
        array[i] = start + i
    }
    return array
}

export function argmax(array: number[]) {
    return array.indexOf(Math.max(...array))
}

export function argmin(array: number[]) {
    return array.indexOf(Math.min(...array))
}

export function addArrays(a: number[], b: number[]) {
    if(!a) return b
    if(!b) return a
    const sum = new Array(a.length)
    for(let i = 0; i < a.length; i++) {
        sum[i] = a[i] + b[i]
    }
    return sum
}

/**
 * Checks if two sets are equal to each other with one level deep equals
 */
export function isEqualSet<Type>(a: Set<Type>, b: Set<Type>) {
    return a.size === b.size && Array.from(a).every(item => b.has(item))
}