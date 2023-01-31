import fs from 'fs'
fs.readFile('./welcome.txt', (error, data) => {
    if ( error ) return console.error(error)
    else return console.log(data.toString())
})