"use strict";
// collection of functions making my life easier
Object.defineProperty(exports, "__esModule", { value: true });
exports.random_string = exports.get_random_int = exports.round = exports.lerp = exports.characters = exports.alphanumeric = exports.numerics = exports.specials = exports.alphabet = void 0;
let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];
exports.alphabet = alphabet;
let specials = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', '?'];
exports.specials = specials;
let numerics = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
exports.numerics = numerics;
let alphanumeric = [];
exports.alphanumeric = alphanumeric;
let characters = [];
exports.characters = characters;
alphabet.forEach(char => {
    alphanumeric.push(char);
    alphanumeric.push(char.toUpperCase());
});
numerics.forEach(num => alphanumeric.push(num));
alphanumeric.forEach(char => characters.push(char));
specials.forEach(char => characters.push(char));
let lerp = (v1, v2, t) => {
    return v1 + (v2 - v1) * t;
};
exports.lerp = lerp;
let round = (base, precision) => {
    let multi = 10 ^ (precision || 0);
    return Math.round(base * multi) / multi;
};
exports.round = round;
let get_random_int = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
exports.get_random_int = get_random_int;
let random_string = (length = 8, specials = false) => {
    let str = "";
    if (specials == true) {
        for (let i = 1; i < length; i++) {
            str = str + characters[Math.floor(Math.random() * characters.length)];
        }
    }
    else {
        for (let i = 1; i < length; i++) {
            str = str + alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
        }
    }
    return str;
};
exports.random_string = random_string;
