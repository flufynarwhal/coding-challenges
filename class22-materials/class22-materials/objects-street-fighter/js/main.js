//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function Streetfighter(name, health, speed, specialMove) {
    this.name = name
    this.health = health
    this.speed = speed
    this.specialMove = specialMove

    this.throw = function() {
        console.log('YEEEETTTttt')
    }
    this.taunt = function() {
        console.log(`you can't handle my ${this.specialMove}`)
    }
    this.fatality = function() {
        console.log('gettt out of hereeeee')
    }
}

let chunLi = new Streetfighter('Chun Li', 100, 100, 'Spinning bird kick!!!')