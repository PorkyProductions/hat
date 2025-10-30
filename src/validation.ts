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

const isEmail = (str: string): boolean => {
	if (typeof str !== 'string') return false;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(str);
};
const isURL = (str: string): boolean => {
	if (typeof str !== 'string') return false;
	
	try {
		new URL(str);
		return true;
	} catch {
		const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
		return urlRegex.test(str);
	}
};
const isNumber = (value: any): boolean => {
	if (value === null || value === undefined) return false;
	
	if (typeof value === 'string') {
		value = value.trim();
		if (value === '') return false;
	}
	
	const num = Number(value);
	return !isNaN(num) && isFinite(num);
};
const isDate = (value: any): boolean => {
	if (value === null || value === undefined) return false;
	
	if (value instanceof Date) {
		return !isNaN(value.getTime());
	}
	
	const date = new Date(value);
	return !isNaN(date.getTime());
};
const isInteger = (value: any): boolean => {
	if (!isNumber(value)) return false;
	const num = Number(value);
	return num === Math.floor(num);
};
const isPhoneNumber = (str: string): boolean => {
	if (typeof str !== 'string') return false;
	const digitsOnly = str.replace(/\D/g, '');
	return digitsOnly.length >= 7 && digitsOnly.length <= 15;
};
const isHexColor = (str: string): boolean => {
	if (typeof str !== 'string') return false;
	const hexColorRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
	return hexColorRegex.test(str);
};
const isBoolean = (value: any): boolean => {
	if (typeof value === 'boolean') return true;
	
	if (typeof value === 'string') {
		const lower = value.toLowerCase().trim();
		return lower === 'true' || lower === 'false' || lower === '1' || lower === '0';
	}
	
	if (typeof value === 'number') {
		return value === 0 || value === 1;
	}
	
	return false;
};
const isAlphanumeric = (str: string): boolean => {
	if (typeof str !== 'string') return false;
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;
	return alphanumericRegex.test(str);
};
const isJSON = (str: string): boolean => {
	if (typeof str !== 'string') return false;
	
	try {
		JSON.parse(str);
		return true;
	} catch {
		return false;
	}
};
const isEmpty = (value: any): boolean => {
	if (value === null || value === undefined) return true;
	if (typeof value === 'string') return value.trim().length === 0;
	if (Array.isArray(value)) return value.length === 0;
	if (typeof value === 'object') return Object.keys(value).length === 0;
	return false;
};

export {
	isEmail,
	isURL,
	isNumber,
	isDate,
	isInteger,
	isPhoneNumber,
	isHexColor,
	isBoolean,
	isAlphanumeric,
	isJSON,
	isEmpty,
};