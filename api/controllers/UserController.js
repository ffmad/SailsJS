/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
	'new' : function (req, res) {
		res.view();
	},

	/**
	* Overrides for the settings in `config/controllers.js`
	* (specific to UserController)
	*/
	//_config: {}

	create: function(req, res, next) {

		/*var userObj = {
		  name: req.param('name'),
		  title: req.param('title'),
		  email: req.param('email'),
		  password: req.param('password'),
		  confirmation: req.param('confirmation')
		}*/

		// Create a User with the params sent from 
		// the sign-up form --> new.ejs
		User.create( req.params.all(), function userCreated(err, user) {

			// // If there's an error
			// if (err) return next(err);

			if (err) {
			// If error redirect back to sign-up page
				return next(err);
			}

			res.json(user);
		 	
		});
	}

  
};
