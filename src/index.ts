import {randomInRange} from './randomInRange';
import {signedMod} from './signedMod';
import {randomInArray} from './randomInArray'
import {wait} from './wait'

interface Sorters {}
interface HAT {
    randomInRange: (min: number, max: number) => number
	signedMod: (num: number, modulator: number) => number
	randomInArray: <T>(array: T[]) => T
	wait: (seconds: number, callback?: () => any) => void
	sorters: Sorters
}

export const hat: HAT = {
	randomInRange: (min: number, max: number) => {
		return randomInRange(min, max);
	},
	signedMod: (num: number, modulator: number): number => {
		return signedMod(num, modulator);
	},
	randomInArray: <T>(array: T[]): T => {
		return randomInArray(array);
	},
	wait: (seconds: number, callback?: () => any) => {
		return wait(seconds, callback);
	},
	sorters: {}
};

export class Hat implements HAT {
	public randomInRange(min: number, max: number) {
		return randomInRange(min, max);
	}
	public signedMod(num: number, modulator: number) {
		return signedMod(num, modulator);
	};
	public randomInArray<T>(array: T[]): T {
		return randomInArray(array);
	}
	public wait(seconds: number, callback?: () => any) {
		return wait(seconds, callback);
	}
	sorters: Sorters = {};
}

export default hat;