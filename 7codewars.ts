/**https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript
 * 
 * @description You are going to be given a word. Your job is to
 * return the middle character of the word. If the word's length
 * is odd, return the middle character. If the word's length is
 * even, return the middle 2 characters.
 * 
 * PREP
 * 
 * @param {string} s
 * @return {string}
 * @examples
 * Kata.getMiddle("test") should return "es"
 * Kata.getMiddle("testing") should return "t"
 * Kata.getMiddle("middle") should return "dd"
 * Kata.getMiddle("A") should return "A"
 * @pseudocode
 * 
 * count the length of the string 
 * if the length is odd 
 *      return the letter with index that is half of the length 
 * else 
 *      return 2 letters from half of the length of the string
 */

export function getMiddle(s:string): string {
    let numberofChar = s.length //4 
  
    if (numberofChar % 2 == 1) { //false
        return s[numberofChar/2]
    } else {
        return s[numberofChar/2-1]+s[numberofChar/2]   //s[2]s[3] = 'st' expects s[1]s[2]
    }
}