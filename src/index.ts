import randomInRange from './randomInRange';
import signedMod from './signedMod';


interface HedgehogInterface {
    randomInRange: (min: number, max: number) => number
	signedMod: (num: number, modulator: number) => number
}

export const hedgehog: HedgehogInterface = {
	randomInRange: (min: number, max: number) => {
		return randomInRange(min, max);
	},
	signedMod: (num: number, modulator: number): number => {
		return signedMod(num, modulator);
	}
};

export class Hedgehog implements HedgehogInterface {
	randomInRange!: (min: number, max: number) => number;
	signedMod!: (num: number, modulator: number) => number;
	constructor() {
		this.randomInRange = (min: number, max: number) => {
			return randomInRange(min, max);
		};
		this.signedMod = (num: number, modulator: number) => {
			return signedMod(num, modulator);
		};
	}
}