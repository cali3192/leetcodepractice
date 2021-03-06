// helper to format input data, returns data as well as type (in case of a "1" vs 1 scenario where its not clear)
const formatData = (data) => {
  const dataType = {
    type: typeof data,
  };

  // objects and arrays can be stringified - truthy check because null is an obj
  if (!!data && typeof data === "object") {
    // return { result: JSON.stringify(data), type: typeof data };
    return { ...dataType, result: JSON.stringify(data) };
  } else {
    // return { result: data, type: typeof data };
    result = { ...dataType, result: data };
  }
};

const assertEquals = (expected, actual) => {
  // getting the formatted expected and tpye
  const { result: stringExpected, type: expectedType } = formatData(expected);

  // getting the formatted actual and type
  const { result: stringActual, type: actualType } = formatData(actual);

  // if the strings objs or primatives are equal
  return stringExpected === stringActual
    ? // return a pass statement
      console.log(`%c Pass!`, "color: #4CAF50")
    : // return a helpful error message
      console.error(
        `%c Failed
        Expected: 
        ${stringExpected} type: ${expectedType}1213

        But Got: 
        ${stringActual} type: ${actualType} `,
        "color: #B00020"
      );
};

module.exports = assertEquals;
