"use strict";

const wsPort = 3000,
      WebSocketServer = require('ws').Server;

var wss = new WebSocketServer( { port: wsPort } );
console.log( '[' + new Date() + '] WebSocket Listen ' + wsPort );

wss.on( 'connection', function ( ws ) {
  console.log( 'connected' );

  ws.on( 'message', function ( message ) {
    console.log( 'message ' + message );

    // echo back
    ws.send( message );
  });

  ws.on( 'close', function() {
    console.log( 'closed' );
  } );
});
