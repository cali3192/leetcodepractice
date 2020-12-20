function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0,
    tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    let sElem = s[sIndex],
      tElem = t[tIndex];

    if (sElem === tElem) {
      sIndex++;
    }

    tIndex++;
  }

  return sIndex === s.length;
}
