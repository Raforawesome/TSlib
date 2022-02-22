"use strict";
// Port of the userdatas portion of the API
Object.defineProperty(exports, "__esModule", { value: true });
const rlib_1 = require("./rlib");
class UDim {
    constructor(scale, offset) {
        this.Scale = scale;
        this.Offset = offset;
    }
    add(ud2) {
        let newScale = this.Scale + ud2.Scale;
        let newOffset = this.Offset + ud2.Offset;
        const newUDim = new UDim(newScale, newOffset);
        return newUDim;
    }
    minus(ud2) {
        let newScale = this.Scale - ud2.Scale;
        let newOffset = this.Offset - ud2.Offset;
        const newUDim = new UDim(newScale, newOffset);
        return newUDim;
    }
}
class UDim2 {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
        this.Width = x;
        this.Height = y;
    }
    add(v2) {
        let x1 = this.X;
        let y1 = this.Y;
        let x2 = v2.X;
        let y2 = v2.Y;
        let nud = new UDim2(x1.add(x2), y1.add(y2));
        return nud;
    }
    minus(v2) {
        let x1 = this.X;
        let y1 = this.Y;
        let x2 = v2.X;
        let y2 = v2.Y;
        let nud = new UDim2(x1.minus(x2), y1.minus(y2));
        return nud;
    }
    Lerp(goal, alpha) {
        let xud1 = this.X;
        let xud2 = goal.X;
        let yud1 = this.Y;
        let yud2 = goal.Y;
        let xud11 = this.X.Scale;
        let xud12 = this.X.Offset;
        let xud21 = goal.X.Scale;
        let xud22 = goal.X.Offset;
        let yud11 = this.Y.Scale;
        let yud12 = this.Y.Offset;
        let yud21 = goal.Y.Scale;
        let yud22 = goal.Y.Offset;
        let ixscale = (0, rlib_1.lerp)(xud11, xud21, alpha);
        let ixoffset = (0, rlib_1.lerp)(xud12, xud22, alpha);
        let iyscale = (0, rlib_1.lerp)(yud11, yud21, alpha);
        let iyoffset = (0, rlib_1.lerp)(yud12, yud22, alpha);
        let iUDim1 = new UDim(ixscale, ixoffset);
        let iUDim2 = new UDim(iyscale, iyoffset);
        let nud = new UDim2(iUDim1, iUDim2);
        return nud;
    }
}
class Vector2 {
    // Unit: number;
    constructor(x, y) {
        this.X = x;
        this.Y = y;
        this.Magnitude = (0, rlib_1.round)(Math.sqrt(this.X ^ 2 + this.Y ^ 2), 1);
    }
}
let v2 = new Vector2(3, 4);
console.log((0, rlib_1.round)(v2.Magnitude, 1));
