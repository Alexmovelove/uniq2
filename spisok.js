const mysql = require("mysql2");
const steem = require('steem');
const fs = require("fs");    
var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let password_mysql = settings.password_mysql;
let user_mysql = settings.user_mysql;
let title_name = settings.title_name;
let image_list = settings.image_list;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}

//https://steemit.com/hive-171319/@alexmove/the-word-game-post-2

	var query = { limit : 100, tag : hive_name };

//accounts.forEach(function (element,i,array){

steem.api.getDiscussionsByTrending(query, function(err, result) {

		
  const mysql = require("mysql2");
  const connection = mysql.createConnection(config);



      console.log(result.length);
       
       if (result)
	   {
        var i, len = result.length;
			for (i = 0; i < len; i++) 
			{
				var raw = result[i];
				console.log(raw.author);

				if (raw.author==hive_name)
					{ 
					 console.log('hive');
					 console.log(hive_name);
					 console.log(hive_name);
					 console.log(hive_name);
					 console.log(hive_name);
					 console.log(hive_name);


					}
					else
					{
					   const sql = `INSERT INTO spisok(author) VALUES('${raw.author}')`;
				 
						connection.query(sql, function(err, results) 
						{
							if(err) console.log(err);
							console.log(results);
						}); 
					}
			}
	   }
         connection.end();

		});
//});

