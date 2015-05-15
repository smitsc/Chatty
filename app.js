var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){ 
   console.log( 'a user connected' ); 
 
   socket.on('chat message', function(msg){ 
    io.emit('chat message', msg); 
	console.log('getting here ' + msg);
   }); 
 }); 

// Your App is listening on port 300
http.listen(1337, function(){
  console.log( 'listen on: localhost:3000' );
});