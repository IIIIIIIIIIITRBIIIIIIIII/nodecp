import * as password from 'generate-password'
const path = password.generate({length:69,numbers:true})
console.log(path)
