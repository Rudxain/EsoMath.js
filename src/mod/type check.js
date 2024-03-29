/**
check if `x` is a primitive (non-object) type.
`null` is primitive, despite being an `object`
@template T
@param {T} x

@example
isPrimitive(0) //true
isPrimitive(1n) //true
isPrimitive('') //true
isPrimitive(new Set()) //false
isPrimitive(new Map()) //false
isPrimitive(false) //true
isPrimitive([]) //false
*/
export const isPrimitive = x => /**@type {T extends primitive ? true : false}*/(
	x === null || !(typeof x == 'object' || typeof x == 'function')
)

/**
check if `x` is either `Number` (object-wrapped) or `number` (primitive)
@template T
@param {T} x

@example
isNumber(0) //true
isNumber(NaN) //true
isNumber(Infinity) //true
isNumber(new Number) //true
isNumber(Object(0)) //true
isNumber('0') //false
*/
export const isNumber = x => /**@type {T extends number | {valueOf(): number} ? true : false}*/(
	typeof x?.valueOf?.() == 'number'
)

/**
check if `x` is either `BigInt` (object-wrapped) or `bigint` (primitive)
@template T
@param {T} x

@example
isBigInt(0n) //true
isBigInt(Object(0n)) //true
isBigInt(Number.MAX_VALUE) //false
*/
export const isBigInt = x => /**@type {T extends bigint | {valueOf(): bigint} ? true : false}*/(
	typeof x?.valueOf?.() == 'bigint'
)

/**
check if `x` can be operated as a numerical/mathematical value,
regardless if it's object-wrapped, or non-finite.
@template T
@param {T} x

@example
is_numeric(0n) //true
is_numeric(Object(0n)) //false
is_numeric(0) //true
is_numeric(NaN) //true
is_numeric(Object(Infinity)) //false
is_numeric('0') //false
*/
export const is_numeric = x => /**@type {T extends numeric ? true : false}*/(
	typeof x == 'number' || typeof x == 'bigint'
)