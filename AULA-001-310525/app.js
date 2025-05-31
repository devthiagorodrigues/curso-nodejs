const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Ola mundo, do servidor!');
    res.end()
});
server.listen(3001);