import randomInRange from './randomInRange';


interface HedgehogInterface {
    randomInRange: (min: number, max: number) => number
}

export const hedgehog: HedgehogInterface = {
	randomInRange: (min: number, max: number) => {
		return randomInRange(min, max);
	}
};

export class Hedgehog implements HedgehogInterface {
	randomInRange!: (min: number, max: number) => number;
	constructor() {
		this.randomInRange = (min: number, max: number) => {
			return randomInRange(min, max);
		};
	}
}