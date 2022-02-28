"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b, e_3, _c;
exports.__esModule = true;
exports.binary_to_text = exports.text_to_binary = exports.reversed_translations = exports.translations = void 0;
var letters = {
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
};
var specials = {
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
};
exports.translations = new Map();
exports.reversed_translations = new Map();
try {
    for (var _d = __values(Object.entries(letters)), _e = _d.next(); !_e.done; _e = _d.next()) {
        var _f = __read(_e.value, 2), k = _f[0], v = _f[1];
        exports.translations.set(k.toLowerCase(), "011".concat(v));
        exports.translations.set(k.toUpperCase(), "010".concat(v));
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var _g = __values(Object.entries(specials)), _h = _g.next(); !_h.done; _h = _g.next()) {
        var _j = __read(_h.value, 2), k = _j[0], v = _j[1];
        exports.translations.set(k, v);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
    }
    finally { if (e_2) throw e_2.error; }
}
try {
    for (var _k = __values(exports.translations.entries()), _l = _k.next(); !_l.done; _l = _k.next()) {
        var _m = __read(_l.value, 2), k = _m[0], v = _m[1];
        exports.reversed_translations.set(v, k);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_l && !_l.done && (_c = _k["return"])) _c.call(_k);
    }
    finally { if (e_3) throw e_3.error; }
}
var text_to_binary = function (text) {
    var final_string = "";
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        var translation = exports.translations.get(char);
        if (i < text.length) {
            translation ? final_string += "".concat(exports.translations.get(char), " ") : void (0);
        }
        else {
            translation ? final_string += exports.translations.get(char) : void (0);
        }
    }
    return final_string;
};
exports.text_to_binary = text_to_binary;
var binary_to_text = function (text) {
    var final_string = "";
    var arr = text.split(' ');
    arr.forEach(function (binary_word) {
        var char = exports.reversed_translations.get(binary_word);
        char ? final_string += char : void (0);
    });
    return final_string;
};
exports.binary_to_text = binary_to_text;
