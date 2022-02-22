// Port of the userdatas portion of the API

import { lerp, round } from "./rlib";



class UDim {
	Scale: number;
	Offset: number;

	
	add(ud2: UDim) {
		let newScale = this.Scale + ud2.Scale;
		let newOffset = this.Offset + ud2.Offset;
		const newUDim = new UDim(newScale, newOffset);
		return newUDim;
	}

	minus(ud2: UDim) {
		let newScale = this.Scale - ud2.Scale;
		let newOffset = this.Offset - ud2.Offset;
		const newUDim = new UDim(newScale, newOffset);
		return newUDim;
	}


	constructor(scale: number, offset: number) {
		this.Scale = scale;
		this.Offset = offset;
	}
}


class UDim2 {
	X: UDim;
	Y: UDim;
	Width: UDim;
	Height: UDim;


	add(v2: UDim2) {
		let x1 = this.X;
		let y1 = this.Y;
		let x2 = v2.X;
		let y2 = v2.Y;
		let nud = new UDim2(x1.add(x2), y1.add(y2));
		return nud
	}

	minus(v2: UDim2) {
		let x1 = this.X;
		let y1 = this.Y;
		let x2 = v2.X;
		let y2 = v2.Y;
		let nud = new UDim2(x1.minus(x2), y1.minus(y2));
		return nud
	}

	Lerp(goal: UDim2, alpha: number) {
		let xud1: UDim = this.X;
		let xud2: UDim = goal.X;
		let yud1: UDim = this.Y;
		let yud2: UDim = goal.Y;
		let xud11: number = this.X.Scale;
		let xud12: number = this.X.Offset;
		let xud21: number = goal.X.Scale;
		let xud22: number = goal.X.Offset;
		let yud11: number = this.Y.Scale;
		let yud12: number = this.Y.Offset;
		let yud21: number = goal.Y.Scale;
		let yud22: number = goal.Y.Offset;

		let ixscale: number = lerp(xud11, xud21, alpha);
		let ixoffset: number = lerp(xud12, xud22, alpha);
		let iyscale: number = lerp(yud11, yud21, alpha);
		let iyoffset: number = lerp(yud12, yud22, alpha);

		let iUDim1: UDim = new UDim(ixscale, ixoffset);
		let iUDim2: UDim = new UDim(iyscale, iyoffset);

		let nud = new UDim2(iUDim1, iUDim2);
		return nud;
	}


	constructor(x: UDim, y: UDim) {
		this.X = x;
		this.Y = y;
		this.Width = x;
		this.Height = y;
	}
}


class Vector2 {
	X: number;
	Y: number;
	Magnitude: number;
	// Unit: number;

	constructor(x: number, y: number) {
		this.X = x;
		this.Y = y;
		this.Magnitude = round(Math.sqrt(this.X^2 + this.Y^2), 1);
	}
}

let v2 = new Vector2(3, 4);
console.log(round(v2.Magnitude, 1));