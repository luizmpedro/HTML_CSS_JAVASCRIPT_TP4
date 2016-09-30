class calculator() {

	constructor(initialValue) {
		this.currentValue = initialValue;
	}
	
	operate(newValue;operation) {		
		if (operation == "sum") {
			currentValue += newValue;
			return currentValue;
		} else if (operation == "subtract") {
			currentValue -= newValue;
			return currentValue;
		} else if (operation == "multiply") {
			currentValue *= newValue;
			return currentValue;
		} else if (operation == "divide") {
			currentValue /= newValue;
			return currentValue;
		} else {
			return 0;
		}
	}
}
