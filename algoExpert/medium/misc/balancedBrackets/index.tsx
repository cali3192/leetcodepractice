export function balancedBrackets(string: string) {
  // Write your code here.

  // defining our pairs
  const bracketPairs: { [key: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // getting all the interested elems to later filter
  let possibilities =
    Object.keys(bracketPairs) + "" + Object.values(bracketPairs);

  // helper to remove non bracket elemnts
  const cleanInput = getOnlyBrackets(string, possibilities);

  // stack to store brackets
  const stack = [];

  // loop through brackets
  for (const bracket of cleanInput) {
    // if opening bracket
    if (!!bracketPairs[bracket]) {
      // push to stack
      stack.push(bracket);
    } else {
      // otherwise, get last elem from stack
      const openBracket = stack.pop() as string;

      // does the openbrackets closing bracket match the current closing bracket
      if (bracketPairs[openBracket] !== bracket) {
        // if not return
        return false;
      }
    }
  }

  // if we matched all brackets, our stack should be empty
  return stack.length === 0;
}

const getOnlyBrackets = (input: string, bracketPairs: string): string => {
  // creating an array to eventually filter
  const arr = input.split("");

  // filtering array for brackets
  const filteredArr = arr.filter((elem) => {
    // is element a bracket
    return bracketPairs.includes(elem);
  });

  // return a string of brackets
  return filteredArr.join("");
};
