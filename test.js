const steem = require('steem');	steem.broadcast.comment(
						wifkey, // Your posting wif
						"", // Parent Author
						test2, // Parent Permlink
						votey,
						permlink, // Your post permlink
						'', // Title
						answer2, // Body
						{ tags: ['thanks'], app: 'ganeshaway' }, // Json Metadata
						function(err, result) {
							console.log(err, result)});