// mostly used for testing different modules

import { random_string } from "./lib/rlib";
import {binary_to_text, text_to_binary } from "./lib/binary_ascii";

let word = "test";
let binary = text_to_binary(word);
let re_word = binary_to_text(binary);

console.log(word);
console.log(binary);
console.log(re_word);