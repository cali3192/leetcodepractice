// 1. letter logs before digital

// letter logs sorted by lexicolog

// when letter logs same, sort lexicographically

// digits are in order

function reorderLogFiles(logs: string[]): string[] {
  const letterLogs = [];
  const digitLogs = [];

  // O(n) first loop to populate letter and digit logs
  for (const log of logs) {
    const firstLog = log.split(" ")[1]; // the "identifier" so we can ignore
    console.log({ log, firstLog });

    // check our first "non-identifier value"
    // if we don't get NaN, we have a digit log
    if (!isNaN(parseInt(firstLog))) {
      // 4. digit logs maintain order
      digitLogs.push(log);
    } else {
      // place in letter logs to be sorted later
      letterLogs.push(log);
    }
  }

  console.log("\n\n", { letterLogs, digitLogs });

  // O(nlogn) to sosrt our letter logs
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
  console.log(`\n\nLOG: `, { log });
  let splitLog = log.split(" ");

  // the identifier
  let key = splitLog[0];

  const values = splitLog.splice(1).join(" ");
  console.log({ values });

  // the key is the identifier that can be used to "break a tie" for order
  return {
    key,
    values,
  };
};
