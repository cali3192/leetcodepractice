const formatData = (data) => {
  if (typeof data === "object") {
    return { result: JSON.stringify(data), type: typeof data };
  } else {
    return { result: data, type: typeof data };
  }
};

const assertEquals = (expected, actual) => {
  //
  const { result: stringExpected, type: expectedType } = formatData(expected);
  const { result: stringActual, type: actualType } = formatData(actual);

  return stringExpected === stringActual
    ? console.log(`%c Pass!`, "color: #4CAF50")
    : console.error(
        `%c Failed: 
        Expected: 
        ${stringExpected} type: ${expectedType}

        But Got: 
        ${stringActual} type: ${actualType} `,
        "color: #B00020"
      );
};

const testAssert = assertEquals("1", 1);

module.exports = assertEquals;
