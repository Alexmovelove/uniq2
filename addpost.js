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

var d = new Date(); // Today!
d.setDate(d.getDate()-num_day); // Yesterday!
d = d.toJSON().split("T")[0];
d = d.replace(/-/gi, '');
console.log(d);   
						
//let mytable = 'poststest';
let mytable = 'p'+d;
let mytable_p = mytable;

const sql = `SELECT * FROM spisok`;
 

const connection = mysql.createConnection(config);


  connection.query(sql,  function(err, results) {
        if(err) console.log(err);
             console.log(results[2]['author']);   

	users = results;
	accounts = users;
	console.log(accounts);

let sql = `create table if not exists ${mytable_p}( id int primary key auto_increment, author varchar(255) not null, title varchar(255) not null, created varchar(255) not null, length int not null, url varchar(255) UNIQUE KEY, comments int not null, upvotes int not null, points float not null, percent float not null)`;

 connection.query(sql, function(err, results) {
 if(err) console.log(err);
  console.log(results);
			});     
 connection.end();

len = accounts.length;
 for (yyy = 0; yyy < len; yyy++) 

{
	  
	steem.api.getDiscussionsByAuthorBeforeDate(accounts[yyy]['author'],null, new Date().toISOString().split('.')[0],3, function(err, result) {

       if (result)
	   {
        var i, len = result.length;
                    for (i = 0; i < len; i++) 
                    {
                                                    
                       var raw = result[i];

						let upvote = raw.active_votes.length-1;
                     
						let input = raw.created;
						var d = new Date(); // Today!
						d.setDate(d.getDate()-num_day); 
						d = d.toJSON().split("T")[0];
						
						let title = raw.title;

						title = title.replace(/[^a-zа-яё0-9\s]/gi, ' ');
							
									
						if ((input.indexOf(d) !== -1)&& (raw.category === hive_name))

							{
									body3R =  `| `+raw.author + `| <a href="`+raw.url+`">` + title + `</a>| `+ upvote + `| ` +  `????`  + `| ` + raw.children+`| ` + raw.body_length+ ' | \n';

							 const connection = mysql.createConnection(config);

								const sql = `INSERT INTO ${mytable}(author, title, created, length, url, comments, upvotes, points,percent) VALUES('${raw.author}', '${title}', '${raw.created}', '${raw.body_length}', '${raw.url}', '${raw.children}', '${upvote}','0','999')`;
								 
							
								 connection.query(sql, function(err, results) {
								 if(err) console.log(err);
								  console.log(results);
											});     
								 connection.end();


						}
			}


	}
		});
}

	});