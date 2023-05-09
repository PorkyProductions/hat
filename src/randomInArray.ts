import {randomInRange} from './randomInRange'
export const randomInArray = <T>(array: T[]): T => array[randomInRange(0, array.length - 1)];
