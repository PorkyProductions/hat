export function signedMod(num: number, modulator: number): number {
	if (num >= 0){
		return num % modulator;
	} else {
		return modulator - (-num % modulator);
	}
}