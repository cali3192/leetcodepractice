/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */

var mostVisitedPattern = function (username, timestamp, website) {
  // Create a map of entries and sort it based on timestamps: [userName, timeStamp, website][]
  // O(n log n)
  const entriesMap = timestamp
    .map((item, i) => [username[i], timestamp[i], website[i]])
    .sort((a, b) => a[1] - b[1]);

  // group websites by users: { user: website }
  // O(n)
  const entriesByUsers = {};
  entriesMap.forEach((entry) => {
    if (!entriesByUsers[entry[0]]) {
      entriesByUsers[entry[0]] = [];
    }

    entriesByUsers[entry[0]].push(entry[2]);
  });

  const seq = {};
  let max = ["", 0];

  // get all possible 3-sequences for each user and increment the count of each sequence in seq
  // O(n ^ 3)
  Object.entries(entriesByUsers).forEach(([key, websites]) => {
    // const seqByUsers = {};
    const seqByUsers = new Map();

    // 3 loops for the top 3 visited websites
    for (let i = 0; i < websites.length - 2; i++) {
      for (let j = i + 1; j < websites.length - 1; j++) {
        for (let k = j + 1; k < websites.length; k++) {
          // key is the sequence
          const key = [websites[i], websites[j], websites[k]];

          seqByUsers.set(seqByUsers.get(key || 0) + 1);
        }
      }
    }

    const seqUsersArr = [...seqByUsers.keys()];

    seqUsersArr.forEach((seqByUser) => {
      // mapping the frequency of each website pattern
      seq[seqByUser] = (seq[seqByUser] || 0) + 1;

      if (
        // if the current frequency is equaltomax and lexicographically less
        (seq[seqByUser] === max[1] && seqByUser < max[0]) ||
        // or if new seq is strictly larger
        seq[seqByUser] > max[1]
      ) {
        // update our max srray
        max = [seqByUser, seq[seqByUser]];
      }
    });
  });

  // the subseq is stored at max[0]
  return max[0];
};
