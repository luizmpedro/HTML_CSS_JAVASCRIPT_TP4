class calculator() {

	constructor(initialValue) {
		this.currentValue = initialValue;
	}
	
	constructor() {
		this.currentValue = 0;
	}
	
	operate(newValue;"sum"){
		currentValue += newValue;
		return currentValue;
	}
	
	operate(newValue;"subtract"){
		currentValue -= newValue;
		return currentValue;
	}
	
	operate(newValue;"multiply"){
		currentValue *= newValue;
		return currentValue;
	}
	
	operate(newValue;"divide"){
		currentValue /= newValue;
		return currentValue;
	}
}