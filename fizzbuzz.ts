/**
 * take a number, if number divisible by 3 fizz, if 5 buzz, 3 & 5 fizzbuzz
 * @param {integer}
 * @return console.log {string}
 * @example:
 * fizzBuzz(5) // 1, 2, fizz, 4, buzz
fizzBuzz(3) // 1, 2, fizz
fizzBuzz(15) // 1, 2, fizz, 4, buzz, 6, 7, 8, fizz, 10, 11, fizz, 13, 14, fizzbuzz 
 * @pseudocode
 *
 * 
 */


function fizzBuzz(num:number): void {
    //loop 1 to the number
    for (let i = 1; i<=num; i++){
        if (i % 3 == 0 && i% 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i);
        }
        //conditionals to check %3 & 5%, %3, %5
        //console.log num or fizz, buzz, fizzbuzz 
    }
}

fizzBuzz(15) 