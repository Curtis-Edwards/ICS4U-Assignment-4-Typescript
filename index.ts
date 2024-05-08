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
  
  // check if integer is palindrome
  if (integer === integer.split('').reverse().join('')); {
    return integer.reverse()
  } else {
    return integer.reverse()
  }
}

const minInt: number = 10
const maxInt: number = 20

for (let counter = minInt; counter <= maxInt; counter++) {
  let intDepth: number = PalindromeDepth(counter, 0)
  console.log(`${counter} is a depth ${intDepth} palindrome.`)
}

console.log("\nDone.")
