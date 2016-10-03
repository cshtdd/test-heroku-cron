var http = require('http')

const PORT=process.env.PORT || 8080

var server = http.createServer((request, response) => response.end("nothing to see here. move along..."))

server.listen(PORT, () => console.log("+++Server listening on: http://localhost:%s", PORT))