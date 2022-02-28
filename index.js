"use strict";
// mostly used for testing different modules
exports.__esModule = true;
var binary_ascii_1 = require("./lib/binary_ascii");
var word = "test";
var binary = (0, binary_ascii_1.text_to_binary)(word);
var re_word = (0, binary_ascii_1.binary_to_text)(binary);
console.log(word);
console.log(binary);
console.log(re_word);
