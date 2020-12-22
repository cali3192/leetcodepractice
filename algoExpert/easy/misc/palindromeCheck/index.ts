export function isPalindrome(string: string) {
  // Write your code here.
  let left = 0,
    right = string.length - 1;

  while (left < right) {
    let leftChar = string[left],
      rightChar = string[right];

    if (leftChar !== rightChar) return false;

    left++;
    right--;
  }

  return true;
}
