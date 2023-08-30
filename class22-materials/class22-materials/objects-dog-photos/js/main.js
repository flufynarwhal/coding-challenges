//Get a dog photo from the dog.ceo api and place the photo in the DOM


let keyword = 'margarita'

const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`




fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    })