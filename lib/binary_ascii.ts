let letters: Object = {  // prefix with 010 for uppercase, 011 for lowercase
    "a": "00001",
    "b": "00010",
    "c": "00011",
    "d": "00100",
    "e": "00101",
    "f": "00110",
    "g": "00111",
    "h": "01000",
    "i": "01001",
    "j": "01010",
    "k": "01011",
    "l": "01100",
    "m": "01101",
    "n": "01110",
    "o": "01111",
    "p": "10000",
    "q": "10001",
    "r": "10010",
    "s": "10011",
    "t": "10100",
    "u": "10101",
    "v": "10110",
    "w": "10111",
    "x": "11000",
    "y": "11001",
    "z": "10010"
}

let specials: Object = {
    " ": "00100000",
    ".": "00101110",
    ",": "00101100",
    "!": "00100001",
    "?": "00111111",
    '"': "00100010",
    "#": "00100011",
    "$": "00100100",
    "%": "00100101",
    "&": "00100110",
    "'": "00100111",
    "(": "00101000",
    ")": "00101001",
    "*": "00101010",
    "+": "00101011",
    "-": "00101101",
    "/": "00101111",
    "1": "00110001",
    "2": "00110010",
    "3": "00110011",
    "4": "00110100",
    "5": "00110101",
    "6": "00110110",
    "7": "00110111",
    "8": "00111000",
    "9": "00111001",
    "0": "00110000",
    ":": "00111010",
    ";": "00111011",
    "<": "00111100",
    "=": "00111101",
    ">": "00111110",
    "@": "01000000"
}


export let translations: Map<string, string> = new Map();
export let reversed_translations: Map<string, string> = new Map();

for (const [k, v] of Object.entries(letters)) {
    translations.set(k.toLowerCase(), `011${v}`);
    translations.set(k.toUpperCase(), `010${v}`);
}
for (const [k, v] of Object.entries(specials)) {
    translations.set(k, v);
}

for (const [k, v] of translations.entries()) {
    reversed_translations.set(v, k);
}


export let text_to_binary = (text: string) => {
    let final_string = "";
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        let translation = translations.get(char);
        if (i < text.length) {
            translation ? final_string += `${translations.get(char)} ` : void (0)
        } else {
            translation ? final_string += translations.get(char) : void (0)
        }
    }
    return final_string;
}

export let binary_to_text = (text: string) => {
    let final_string = "";
    let arr = text.split(' ');
    arr.forEach(binary_word => {
        let char = reversed_translations.get(binary_word);
        char ? final_string += char : void (0);
    })
    return final_string;
}