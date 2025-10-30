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

import { EmojiDictionary } from './types';

const emojiDict: EmojiDictionary = {
	a: '🐶',
	b: '🐱',
	c: '🐭',
	d: '🐹',
	e: '🐰',
	f: '🦊',
	g: '🐻',
	h: '🐼',
	i: '🐨',
	j: '🐯',
	k: '🦁',
	l: '🐮',
	m: '🐷',
	n: '🐸',
	o: '🐵',
	p: '🐔',
	q: '🐧',
	r: '🐦',
	s: '🐤',
	t: '🐣',
	u: '🐥',
	v: '🐺',
	w: '🐗',
	x: '🐴',
	y: '🦄',
	z: '🦌',
	'1': '👍',
	'2': '👎',
	'3': '👏',
	'4': '👊',
	'5': '👋',
	'6': '👌',
	'7': '👍',
	'8': '👐',
	'9': '👆',
	'0': '👇',
	'!': '😡',
	'?': '😕',
	'.': '😐',
	',': '😑',
	'(': '😔',
	')': '😓',
	'*': '😎',
	'/': '😘',
	'#': '😜',
	$: '😝',
	'%': '😞',
	'^': '😟',
	'&': '😠',
	'=': '😢',
	'+': '😣',
	'-': '😤',
	_: '😥',
	'{': '😧',
	'}': '😨',
	'[': '😩',
	']': '😪',
	'|': '😫',
	':': '😬',
	';': '😭',
	'<': '😮',
	'>': '😯',
	'@': '😰',
	'~': '😱',
	'`': '😲',
};

export function emojify(str: string) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		const emoji = emojiDict[char];
		// If there's a corresponding emoji, append it to the result, otherwise keep the original character
		result += emoji ? emoji : char;
	}
	return result;
}

export function deEmojify(str: string) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let emojiFound = false;
		for (const [char, emoji] of Object.entries(emojiDict)) {
			if (str.substr(i, emoji.length) === emoji) {
				result += char;
				i += emoji.length - 1;
				emojiFound = true;
				break;
			}
		}
		if (!emojiFound) {
			result += str[i];
		}
	}

	return result;
}

export class HATString extends String {
	constructor(value: string) {
		super(value);
	}

	emojify(): string {
		let result = '';

		for (let i = 0; i < this.length; i++) {
			const char = this[i];
			const emoji = emojiDict[char];

			// If there's a corresponding emoji, append it to the result, otherwise keep the original character
			result += emoji ? emoji : char;
		}

		return result;
	}

	static deEmojify(str: string): string {
		let result = '';

		for (let i = 0; i < str.length; i++) {
			let emojiFound = false;

			for (const [char, emoji] of Object.entries(emojiDict)) {
				if (str.substr(i, emoji.length) === emoji) {
					result += char;
					i += emoji.length - 1;
					emojiFound = true;
					break;
				}
			}

			if (!emojiFound) {
				result += str[i];
			}
		}

		return result;
	}
}