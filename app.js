//Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via http.


// 1. crete a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 1560;

const server = http.createServer((req, res) => {
  //res.statusCode = 200;                           Moved to and replaced by homeRoute function
  //res.setHeader('Content-Type', 'text/plain');    Moved to and replaced by homeRoute function
  homeRoute(req, res);
  userRoute(req, res);
  //res.end('Hello World\n');//AFTER THIS YOU CAN SEND ANYTHING BECASUE THE HEADERS ARE ALREADY WRITEN
});

server.listen(port, hostname, () => {//If dont define a hostname it will lisren to the outside...
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 2. Handle the HTTP route GET / and POST / i.e Home
function homeRoute(req, res){
  // if url == "/" && GET
  if (req.url === "/"){
    // //show search
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Header\n");
    res.write("Search form\n");
    res.write("footer\n");
    res.end('Ending response\n')
  }
  // if url == "/" && POST
    //redirect to /:username
}   
// 3. Handle the HTTP route GET /:username / i.e /josegutierrez2
  // if url == "/...."
function userRoute(req, res){
  let username = req.url.replace("/", "");//Check that the parameter after "/" exists
  if(username.length > 0){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Header\n");
    res.write(`Information about user: ${username}\n`);
    res.write("footer\n");
    res.end('Ending response\n')
    //get json from Treehouse
      // on end
        // show the user profile
      // on error
        // show the error
  }
}           
// 4. Function that handles the reading of files and merge in value 
  // Read from file and get a string
    // merge values into string.