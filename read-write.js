const {readFileSync , writeFileSync} = require('fs') ;
const first = readFileSync('./first.txt' , 'utf-8')
const second = readFileSync('./second.txt' , 'utf-8')
console.log(first + '\n' + second) ; 
writeFileSync('./first.txt' , ' bonjournee ca va ') 
console.log(first)