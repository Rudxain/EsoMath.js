import {isNumber, isBigInt} from './type check'
export const
	isInt = x => (isNumber(x) && x % 1 == 0) || isBigInt(x),
	isInf = x => x === +Infinity || x === -Infinity,
	isInfNaN = x => isInf(x) || x != x,
	isNegZero = x => x === 0 && 1 / x < 0 //signed/negative/minus zero (-0)