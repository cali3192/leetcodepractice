// Feel free to add new properties and methods to the class.
type MinMaxElement = {
  min: number;
  max: number;
};

export class MinMaxStack {
  stack: number[] = [];
  minMaxStack: MinMaxElement[] = [];

  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }

  peek() {
    // looking at the last elem in stack
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();

    return this.stack.pop();
  }

  push(number: number) {
    this.stack.push(number);

    let newMinMax: MinMaxElement = { min: number, max: number };

    if (this.minMaxStack.length > 0) {
      const { min: currentMin, max: currentMax } = this.minMaxStack[
        this.minMaxStack.length - 1
      ];

      newMinMax = {
        min: Math.min(number, currentMin),
        max: Math.max(number, currentMax),
      };
    }

    this.minMaxStack.push(newMinMax);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
