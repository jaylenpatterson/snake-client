const net = require("net");
// const setupInput = require("./input");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection(
    {IP, PORT}
  );
  //Listens for data from the server. If data is true then console.logs that message to our
  conn.on("data", function(data) {
    console.log(data);
  });

  conn.on("connect", function() {
    console.log("SLIMY ROPE HAS ENTERED THE ARENA");
  });

  conn.on('connect', () => {
    conn.write("Name: JXL");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = connect;


