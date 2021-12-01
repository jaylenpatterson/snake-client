const  connect  = require("./client");
const  setupInput  = require("./input");


let conn = connect();
console.log("Connecting ...");
setupInput(conn);


