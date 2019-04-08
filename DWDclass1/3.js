var fs = require('fs');

var data = '<!DOCTYPE html>' + '<html><body>';

var path = 'my-file.txt';

var fs  = require("fs");
var array = fs.readFileSync(path).toString().split('\n');
    for (var i = 0; i < array.length; i++){
		data += '<h1>'+array[i]+'</h1>'+'<br />';
	}
	data += '</body></html>';
	fs.writeFile("temp.html", data, function(err, data) {
		  if (err) console.log(err);
		  console.log("Successfully Written to File.");
	});