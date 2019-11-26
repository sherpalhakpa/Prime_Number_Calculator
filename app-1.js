var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (request,response){
  response.sendfile('index.html', {root: path.join(__dirname, './public') });
});

app.use('/oldwork', express.static(path.join(__dirname, '../public_html')))

app.get('/index.html', function handleHomePage(request,response){
  response.sendFile(__dirname+"/"+"index.html");
});

app.get('/checkisbn', function handleProcessGet(request,response){
retVal = request.query.userNumber;
if (isValid(retVal)){
  response.send(retVal + 'Works');
}
else {
  response.send(retVal + " is not a prime number, prime factors of " + retVal + " are: " + factorsOf(retVal) );
}


function isValid(n){
 return true;
}

});

var server = app.listen(3000, function ServerListner() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Using Forms and Express, listening at http://%s:%s", host, port);
});
