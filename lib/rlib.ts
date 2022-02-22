// collection of functions making my life easier

let alphabet: Array<string> = [
	'a', 'b', 'c', 'd', 'e', 'f', 
	'g', 'h', 'i', 'j', 'k', 'l',
	'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x',
	'y', 'z'
];
let specials: Array<string> = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '?'];
let numerics: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let alphanumeric: Array<string> = [];
let characters: Array<string> = [];

alphabet.forEach(char => {
	alphanumeric.push(char);
	alphanumeric.push(char.toUpperCase());
})
numerics.forEach(num => alphanumeric.push(num));

alphanumeric.forEach(char => characters.push(char));
specials.forEach(char => characters.push(char));

export { alphabet, specials, numerics, alphanumeric, characters };


export let lerp = (v1: number, v2: number, t: number) => {
	return v1 + (v2 - v1) * t
}

export let round = (base: number, precision: number) => {
	let multi = 10^(precision || 0);
	return Math.round(base * multi) / multi;
}

export let get_random_int = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export let random_string = (length: number = 8, specials: boolean = false) => {
	let str = "";

	if (specials) {
		for (let i: number = 1; i < length; i++) {
			str = str + characters[Math.floor(Math.random() * characters.length)];
		}
	} else {
		for (let i: number = 1; i < length; i++) {
			str = str + alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
		}
	}
	return str;
}