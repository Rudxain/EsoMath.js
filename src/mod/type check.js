/**
check if `x` is a primitive (non-object) type.
`null` is primitive, despite being an `object`
@param {*} x

@example
isPrimitive(0) //true
isPrimitive(1n) //true
isPrimitive('') //true
isPrimitive(new Set()) //false
isPrimitive(new Map()) //false
isPrimitive(false) //true
isPrimitive([]) //false
*/
export const isPrimitive = x => x === null || !(typeof x == 'object' || typeof x == 'function')

/**
check if `x` is either `Number` (object-wrapped) or `number` (primitive)
@param {*} x

@example
isNumber(0) //true
isNumber(NaN) //true
isNumber(Infinity) //true
isNumber(new Number) //true
isNumber(Object(0)) //true
isNumber('0') //false
*/
export const isNumber = x => typeof x?.valueOf?.() == 'number'

/**
check if `x` is either `BigInt` (object-wrapped) or `bigint` (primitive)
@param {*} x

@example
isBigInt(0n) //true
isBigInt(Object(0n)) //true
isBigInt(Number.MAX_VALUE) //false
*/
export const isBigInt = x => typeof x?.valueOf?.() == 'bigint'

/**
check if `x` can be operated as a numerical/mathematical value,
regardless if it's object-wrapped, or non-finite.
@param {*} x

@example
isNumeric(0n) //true
isNumeric(Object(0n)) //true
isNumeric(0) //true
isNumeric(NaN) //true
isNumeric(Object(Infinity)) //true
isNumeric('0') //false
*/
export const isNumeric = x => isNumber(x) || isBigInt(x)