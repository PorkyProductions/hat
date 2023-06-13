interface HATString extends String {  
    emojify: (string: string) => string;
}
export class HatString extends String implements HATString {
	constructor(string: string) {
		super(string);
		this.emojify = this.emojify.bind(this);
	}
	public emojify = (string: string) => String.fromCodePoint(parseInt(string, 16));
}