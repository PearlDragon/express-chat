var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('dist'));

/*
app.get('/', function (req, res) {
   res.send('Hello World');
})
*/

app.ws('/', (ws, req) => {
  connects.push(ws);

  ws.on('message', message => {
    console.log('Received -', message);
    
    connects.forEach(socket => {
      socket.send(message);
    });
  });
  
  ws.on('close', () => {
    connects = connects.filter(conn => {
      return (conn === ws) ? false : true;
    });
  });
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
