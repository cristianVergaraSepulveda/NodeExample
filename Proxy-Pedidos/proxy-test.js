var http = require("http");  
http.createServer(function (req, res) { 
  res.writeHead(200, { 'Content-Type': 'text/plain' }); 
  res.write('Respuesta en servidor original! ' + '\n' + JSON.stringify(req.headers, true, 2)); 
  res.end(); 
}).listen(9000); 