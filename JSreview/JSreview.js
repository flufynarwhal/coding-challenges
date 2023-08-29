let num = 15

num = num - 10

console.log(num)

//let numFromInput = Number(document.querySelector('#dance').value)

//numFromInput += 25 

//alert(numFromInput)

//--- Hard
// create variable that holds the h1


const h1 = document.querySelector('h1')

h1.addEventListener('click', addTwo)

function addTwo() {
    let numFromInput = Number(document.querySelector('#dance').value)
    numFromInput += 25

    alert( num + numFromInput)
}