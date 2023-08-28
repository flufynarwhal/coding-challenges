/**https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/typescript 
 * Write a function that removes the spaces from the string, then return the resultant string.
 * export function noSpace(x:string):string {
  // Your Code
}


Examples:
 * @description Write a function that removes the spaces from the string, then return the resultant string. 
 * PREP
 * @param {string} x
 * @returns {string} 
 * @examples
 * input: '8 j 8   mBliB8g  imjB8B8  jl  B' 
 * output: '8j8mBliB8gimjB8B8jlB'
 * @pseudocode
 * use a string method that removes spaces
 * apply the method to the string input
 * return string without spaces
 */


export function noSpace(x:string):string {
    return x.replace(' ',"")
  }

