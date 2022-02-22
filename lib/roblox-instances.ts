// WIP Complete instance API port not including userdatas; for emulation purposes

class Instance {
	protected BaseClass: string = "none";
	protected Children: Array<Instance> = [];
	Name: string;
	ClassName: string;

	constructor() {
		this.ClassName = this.constructor.name;
		this.Name = "Instance";
	}
}

class BasePart extends Instance {

}


let instance = new Instance()
let bp = new BasePart()

console.log(instance.ClassName, bp.ClassName)