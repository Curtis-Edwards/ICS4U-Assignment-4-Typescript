/*
 * This is the PalindromeDepth program
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-05-08
 */

/*
 * This function calculates the palindrome depth of a number
 */
function PalindromeDepth(integer: number, currentDepth: number): number {
  
  let reversedInteger = ""
  // reverse integer
  for (let counter = Integer.length - 1; counter >= 0; counter--) {
    reversedInteger += integer[counter]
  }
  // check if integer is palindrome
  if (integer != reversedInteger) {
    PalindromeDepth(integer + reversedInteger, currentDepth + 1)
  }
  return currentDepth
}

const minInt: number = 10
const maxInt: number = 20

for (let counter = minInt; counter <= maxInt; counter++) {
  let intDepth: number = PalindromeDepth(counter, 0)
  console.log(`${counter} is a depth ${intDepth} palindrome.`)
}

console.log("\nDone.")
