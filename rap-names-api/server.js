const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birchLocation': "London, England, UK"
    },
    'Chance the Rapper' : {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birchLocation': "Chicago, Illinois"
    },
    'Dylan' : {
        'age': 31,
        'birthName': 'Dylan',
        'birchLocation': "Dylon, Dylan"
    }
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) =>{
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
    
})

app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT}! you better go catch it!`)
})