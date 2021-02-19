function mostVisitedPattern(username, timestamp, website) {
  // loop through and get search history of each person

  const enteriesMap = username.map((username, index) => {
    return [username, timestamp[index], website[index]];
  });

  console.log({ enteriesMap });

  // group websites by users
  // O(n)
  const entriesByUsers = {};
  enteriesMap.forEach((entry) => {
    if (!entriesByUsers[entry[0]]) entriesByUsers[entry[0]] = [];
    entriesByUsers[entry[0]].push(entry[2]);
  });

  const seq = {};
  let max = ["", 0];

  // Object.entries(entriesByUsers).forEach(([index, websites]  ) => {
  // const seqByUsers = {};

  // for(let i = 0; i < websites.length - 2; i++) {
  //     for(let j = i + 1; j < websites.length - 1 ; j++) {
  //         for(let k = j + 1; k < websites.length ; k++) {

  //             const key = `${websites[i]}|${ websites[j]}|${websites[k]}`;
  //             if (!seqByUsers[key]) {
  //                 seqByUsers[key] = 1;
  //             }

  //             console.log({ websites, key })
  //         }
  //     }
  // }
  // )

  Object.entries(entriesByUsers).forEach(([index, websites]) => {
    const seqByUsers = new Map();

    for (let i = 0; i < websites.length - 2; i++) {
      for (let j = 0; j < websites.length - 1; j++) {
        for (let k = 0; k < websites.length; k++) {
          // const key = `${websites[i]}|${websites[j]}|${websites[k]}`;
          const key = [websites[i], websites[j], websites[k]];

          const count = seqByUsers.get(key);
          seqByUsers.set(key, count ? count + 1 : 1);
        }
      }
    }

    console.log(seqByUsers);
  });

  return [];
}
