const os = require('os')

//platform

console.log(os.platform())

//cpu arch

console.log(os.arch())


//cpu core info

console.log(os.cpus())

//free memory
console.log(os.freemem())
console.log(os.totalmem())

console.log(os.homedir())
console.log(os.uptime())