/**
 * @license
 * 
 * MIT License
 * Copyright (c) 2023 PorkyProductions
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {randomInRange} from './randomInRange';
import {signedMod} from './signedMod';
import {randomInArray} from './randomInArray';
import {wait} from './wait';
import {factorial} from './factorial';
import * as print from './print';

export {
	// fns
	randomInRange,
	signedMod,
	randomInArray,
	wait,
	factorial,
	print,
};

interface HAT {
    randomInRange: (min: number, max: number) => number
	signedMod: (num: number, modulator: number) => number
	randomInArray: <T>(array: T[]) => T
	wait: <TCallback>(seconds: number, callback?: () => TCallback | void) => void
	factorial: (number: number) => number
}

export const hat: HAT = {
	randomInRange: (min: number, max: number) => randomInRange(min, max),
	signedMod: (num: number, modulator: number): number => signedMod(num, modulator),
	randomInArray: <T>(array: T[]): T => randomInArray(array),
	wait: <TCallback>(seconds: number, callback?: () => TCallback | void) => wait(seconds, callback),
	factorial: (number: number): number => factorial(number),
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
	public factorial(number: number): number {
		return factorial(number);
	}
}

export default hat;