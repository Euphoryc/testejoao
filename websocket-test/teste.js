 const WebSocket = require('ws');
 
 // cria uma conexao websocket com protocolo criptografado (wss)
 const socket = new WebSocket('wss://websocket-fh6l.onrender.com');

 // Se a conexao for feita com sucesso
 socket.onopen = function(event) {
     console.log('Conexao ligada com sucesso');
 };

 // mensagem recebida
 socket.onmessage = function(event) {
     console.log('Mensagem recebida:', event.data);
 };

