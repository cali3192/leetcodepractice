const balancedBrackets = (string) => {
  const stack = [string[0]];

  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const closing = "]})";

  for (let i = 1; i < string.length; i++) {
    const bracket = string[i];

    if (brackets.hasOwnProperty(bracket)) {
      stack.push(bracket);
    }

    if (closing.includes(bracket)) {
      console.log({ stack, bracket });
      const lastBracket = stack[stack.length - 1];
      if (brackets[lastBracket] !== bracket) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};

const balancedBracketInput = "([])(){}(())()()";

const balancedBracketActual = balancedBrackets(balancedBracketInput);
console.log(
  "LOG ~ file: balancedBrackets.ts ~ line 10 ~ balancedBracketActual",
  balancedBracketActual
);
