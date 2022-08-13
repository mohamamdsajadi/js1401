const http = require('http') ; 
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end("this is the home page ");
    }
    if (req.url === '/salam'){
    res.end(" tu es sur la page de bonjour");
    }

})
server.listen(5000)