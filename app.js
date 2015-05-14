var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ 
   console.log( 'a user connected' ); 
 
   socket.on('chat message', function(msg){ 
    io.emit('chat message', msg); 
	console.log('gettinh here');
   }); 
 }); 

// Your App is listening on port 300
http.listen(1337, function(){
  console.log( 'listen on: localhost:3000' );
});