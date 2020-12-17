const balancedBrackets = (string) => {
  // defining stack and putting first elmeent in strnig in
  const stack = [string[0]];

  // defining pairs
  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  // string to find closing brackets
  const closing = "]})";

  // loopting through elements
  for (let i = 1; i < string.length; i++) {
    // current bracket
    const bracket = string[i];

    // if opening brackets, put in stack (opening brackets are keys)
    if (brackets.hasOwnProperty(bracket)) {
      // push only opening brackets
      stack.push(bracket);
    }

    // if we're dealing with closing brackets
    if (closing.includes(bracket)) {
      // get last elem in stack
      const lastBracket = stack[stack.length - 1];

      // the closing bracket should match the last bracket in the stack
      if (brackets[lastBracket] !== bracket) {
        return false;
      } else {
        // pop the last opening bracket and move on
        stack.pop();
      }
    }
  }

  // our stack should be empty at the end
  return stack.length === 0;
};

const balancedBracketInput = "([])(){}(())()()";

const balancedBracketActual = balancedBrackets(balancedBracketInput);
console.log(
  "LOG ~ file: balancedBrackets.ts ~ line 10 ~ balancedBracketActual",
  balancedBracketActual
);
