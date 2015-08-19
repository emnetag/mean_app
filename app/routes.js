// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
	
	module.exports = function(app) {

		// server routes ===========================================================
		// handle things like api calls
		// authentication routes

		// sample api route
		app.get('/api/nerds', function(req, res) {
			// use mongoose to get all nerds in the db
			Nerd.find(function(err, nerds) {

				// if there is an error retrieving, send the error.
								// nothing after res.send(err) will execute

				if (err)
					res.send(err);

				res.json(nerds); // return all nerds in JSON format
			});
		});	

		// route to handle creating goes here
		// route to handlde delete goes here

		// frontend routes ===========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

	};