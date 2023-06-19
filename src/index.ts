import {randomInRange} from './randomInRange';
import {signedMod} from './signedMod';
import {randomInArray} from './randomInArray';
import {wait} from './wait';
import * as print from './print';

export {
	// fns
	randomInRange,
	signedMod,
	randomInArray,
	wait,
	print,
};

interface HAT {
    randomInRange: (min: number, max: number) => number
	signedMod: (num: number, modulator: number) => number
	randomInArray: <T>(array: T[]) => T
	wait: <TCallback>(seconds: number, callback?: () => TCallback | void) => void
}

export const hat: HAT = {
	randomInRange: (min: number, max: number) => randomInRange(min, max),
	signedMod: (num: number, modulator: number): number => signedMod(num, modulator),
	randomInArray: <T>(array: T[]): T => randomInArray(array),
	wait: <TCallback>(seconds: number, callback?: () => TCallback | void) => wait(seconds, callback),
};

export class Hat implements HAT {
	public randomInRange(min: number, max: number) {
		return randomInRange(min, max);
	}
	public signedMod(num: number, modulator: number) {
		return signedMod(num, modulator);
	}
	public randomInArray<T>(array: T[]): T {
		return randomInArray(array);
	}
	public wait<TCallback>(seconds: number, callback?: () => TCallback | void) {
		return wait(seconds, callback);
	}
}

export default hat;