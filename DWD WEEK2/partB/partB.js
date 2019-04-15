var express = require('express');
var app = express();
var expletivesDir = ["Discordant","Cacophonic", "Nickleback","Droll"];
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   band_name = req.query.band_name;
		if (band_name) {
			numberExpletives = Math.floor((Math.random() * 4) + 1);;
			Expletives = req.query.band_name + " is ";
			var i;
			for (i = 0; i < numberExpletives; i++) { 
			if (i == numberExpletives-1){
			Expletives += expletivesDir[Math.floor((Math.random() * 4))] + ".";
			}
			else{Expletives += expletivesDir[Math.floor((Math.random() * 4))] + " and ";
			}
1			}
			
		} else {
			Expletives = {};
		}
   response = {
	   Expletives
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

