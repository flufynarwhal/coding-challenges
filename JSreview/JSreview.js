// let num = 15

// num = num - 10

// console.log(num)

// //let numFromInput = Number(document.querySelector('#dance').value)

// //numFromInput += 25 

// //alert(numFromInput)

// //--- Hard
// // create variable that holds the h1


const h2 = document.querySelector('h2')

h2.addEventListener('click', hello)

function hello() {
    alert('Hello!')
}

document.querySelector('#ageChecker').addEventListener('click', checkAge)

const p = document.querySelector('p')

function checkAge() {
    let age = Number(document.querySelector('input').value)
    
    if (age < 16 ) {
        p.innerText = ('you cannot drive')
    } else if (age < 18) {
        p.innerText = ('you can\'t hate from outside the club, because they can\'t even get in')
    } else if (age < 21) {
        p.innerText = (`you cannot drink`)
    } else if (age < 25) {
        p.innerText = (`you cant rent cars affordably`)
    } else if (age < 30) {
        p.innerText = (`you cannot rent fancy cars affordably`)
    } else {
        p.innerText = (`there is nothing left to look forward too`)
    }
}

 
function subTwo(num1, num2) {
    console.log(num1 - num2)
}

//subTwo(10, 7)

function divthree(num1, num2, num3) {
    console.log(num1/num2/num3)
}

//divthree(12, 4, 3)

function multithree(num1, num2, num3) {
    console.log(num1*num2*num3)
}

//multithree(2, 3, 5)


function threeNum(n1, n2, n3) {
    return ((n1 + n2) % n3) 
}



function fourNum(n1, n2, n3, n4) {
    if (n1*n2 > 100 ) {
        console.log(n1*n2+n3+n4)
    } else if (n1*n2 < 100) {
        console.log(n1*n2-n3-n4)
    } else {
        alert((n1*n2*n3)% n4)
    }
}

document.querySelector('#cToF').addEventListener('click', cToF)

// c to f
function cToF() {
    // need value in C
    let temp = Number(document.querySelector('input').value)
    // convert c to F
    tempF = temp* 1.8 + 32
    // show the temp in F
    document.querySelector('#tempF').innerText = tempF

}