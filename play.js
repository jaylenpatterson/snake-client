const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:'165.227.47.243', // IP address here,
    port:'50541'// PORT number here,
  });
//Listens for data from the server. If data is true then console.logs that message to our terminal
  conn.on("data", function(data){
    console.log(data)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
