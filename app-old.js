const http = require("http");

http
  .createServer((req, res) => {
    //res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hola mundo");
    res.end();
  })
  .listen(8080);

console.log("escuchando tus bobadas", 8080);
