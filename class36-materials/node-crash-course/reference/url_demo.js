const url = require('url')

const myUrl = new URL('htt://mywebiste.com/hello.html?id=100&status=active')

// serialized URL

console.log(myUrl.href)
console.log(myUrl.toString())
// host (root domain)
console.log(myUrl.host)

// Hostname (does not get port)
console.log(myUrl.hostname)

console.log(myUrl.pathname)

//serialized query
console.log(myUrl.search)
//params object
console.log(myUrl.searchParams)
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))