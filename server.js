var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;


var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

   if(request.method == 'GET' && parsedUrl.path == '/listings'){
	   
	   response.writeHead(200, {'Context-Type': 'text/plain'});
	   response.write(listingData);
	   response.end();
	   
   }
   
	else {
		
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.write('Bad gateway error');
		response.end();
	}
   
   };

fs.readFile('listings.json', 'utf8', function(err, data) {
 
   if (err){
	   
	   console.log(err);
   }
   
   else {
   listingData = data; 
   }
   
   server = http.createServer(requestHandler); 
   
   server.listen(port, function() {
	   console.log('Server listening on: http://localhost:' + port);
   }); 
   
  
});

 
   