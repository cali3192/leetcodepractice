// 1. letter logs before digital

// letter logs sorted by lexicolog

// when letter logs same, sort lexicographically

// digits are in order

function reorderLogFiles(logs: string[]): string[] {
  const letterLogs = [];
  const digitLogs = [];

  // sorting our letter and digit logs
  for (const log of logs) {
    const firstLog = log.split(" ")[1];

    // if we don't get NaN, we have a digit
    if (!isNaN(parseInt(firstLog))) {
      digitLogs.push(log);
    } else {
      // 4. digit logs maintain order
      letterLogs.push(log);
    }
  }

  letterLogs.sort((a, b) => {
    const { key: akey, values: aValues } = getValues(a);

    const { key: bkey, values: bValues } = getValues(b);

    // 2. sort on lexical "values" based on contents
    if (aValues < bValues) {
      return -1;
    } else if (aValues > bValues) {
      return 1;

      // 3. if Contents are the same, sorting on "key" aka identifiers
    } else {
      if (akey < bkey) {
        return -1;
      } else if (akey > bkey) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  // 1. letterLogs before digitLogs
  return letterLogs.concat(digitLogs);
}

const getValues = (log: string) => {
  const index = log.indexOf(" ");
  let key = log.substring(0, index);
  const values = log.substring(index, log.length);

  return {
    key,
    values,
  };
};
