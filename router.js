

// 2. Handle the HTTP route GET / and POST / i.e Home
function home(req, res){
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
function user(req, res){//name modified to avoid redundancy
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

//exportig methods
module.exports.home = home;
module.exports.user = user;