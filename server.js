/*

	Vossavisa2

	Copyright © 2016 Terje Nesthus
	This work is free. You can redistribute it and/or modify it under the
	terms of the Do What The Fuck You Want To Public License, Version 2,
	as published by Terje Nesthus. See http://www.wtfpl.net/ for more details. It
	comes without any warranty, to:

     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Terje Nesthus. See
     * http://www.wtfpl.net/ for more details. 

*/


var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./src/server/routes');
var debug = require('debug')('http');
var http = require('http');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
