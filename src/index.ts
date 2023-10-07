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
import { matrixMultiply } from './matrixMultiplication';
import { emojify, deEmojify, HATString } from './emojify';
import * as print from './print';

import type { Matrix } from './types';
export type { Maybe, MaybeArray, Matrix } from './types';


export {
	// fns
	randomInRange,
	signedMod,
	randomInArray,
	wait,
	factorial,
	matrixMultiply,
	emojify,
	deEmojify,
	HATString,
	print,
};

interface HAT {
    randomInRange: (min: number, max: number) => number
	signedMod: (num: number, modulator: number) => number
	randomInArray: <T>(array: T[]) => T
	wait: <TCallback>(seconds: number, callback?: () => TCallback | void) => void
	factorial: (number: number) => number
	matrixMultiply: (matrixA: Matrix, matrixB: Matrix) => Matrix
	emojify: (str: string) => string
	deEmojify: (str: string) => string
	print: typeof print
}

export const hat: HAT = {
	randomInRange: (min: number, max: number) => randomInRange(min, max),
	signedMod: (num: number, modulator: number): number => signedMod(num, modulator),
	randomInArray: <T>(array: T[]): T => randomInArray(array),
	wait: <TCallback>(seconds: number, callback?: () => TCallback | void) => wait(seconds, callback),
	factorial: (number: number): number => factorial(number),
	matrixMultiply: (matrixA: Matrix, matrixB: Matrix): Matrix => matrixMultiply(matrixA, matrixB),
	emojify: (str: string): string => emojify(str),
	deEmojify: (str: string): string => deEmojify(str),
	print: print,
};

export class Hat implements HAT {
	private __refresh(): HAT {
		return new Hat();
	} 
	public randomInRange(min: number, max: number) {
		this.__refresh();
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
	public matrixMultiply(matrixA: Matrix, matrixB: Matrix): Matrix {
		return matrixMultiply(matrixA, matrixB);
	}
	public emojify(str: string): string {
		return emojify(str);
	}
	public deEmojify(str: string): string {
		return deEmojify(str);
	}
	public print = print;
}

export default hat;