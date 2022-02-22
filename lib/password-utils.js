"use strict";
// module for secure cryptographics hashes and streamlined password class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = exports.Hash = exports.sha256_hash = void 0;
var SHA256 = require("crypto-js/sha256");
let sha256_hash = (str) => {
    return SHA256(str).toString();
};
exports.sha256_hash = sha256_hash;
class Hash {
    constructor(value, store_plain = false) {
        if (store_plain == true) {
            this.plain = value;
        }
        this.value = SHA256(value).toString();
    }
}
exports.Hash = Hash;
class Password {
    constructor(value, store_plain = false) {
        if (store_plain == true) {
            this.plain = value;
        }
        let createdHash = new Hash(value);
        this.hashObj = createdHash;
        this.hash = createdHash.value;
    }
    compare(toCompare) {
        let hashed = new Hash(toCompare).value;
        return hashed == this.hash;
    }
    change(oldPass, newPass) {
        let oldHash = new Hash(oldPass).value;
        if (oldHash == this.hash) {
            let newHash = new Hash(newPass);
            this.hashObj = newHash;
            this.hash = newHash.value;
        }
    }
}
exports.Password = Password;
