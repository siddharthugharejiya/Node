const http = require('http');
const data = require('./data')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(data))
    res.end()
})
server.listen(9595,()=>{
console.log("server is running 9595")
})