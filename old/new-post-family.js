const fs = require("fs");
const steem = require('steem');
let body3R = '';


						var d = new Date(); // Today!
						d.setDate(d.getDate()); // Yesterday!
						d = d.toJSON().split("T")[0];
						d = d.replace(/-/gi, '');
					console.log(d);   
	
							
							
//let mytable = 'poststest';
let mytable = 'p'+d;
let mytable_p = mytable;

   const mysql = require("mysql2");

  const sql = `SELECT * FROM spisok`;
    //const sql = `SELECT * FROM p0111 ORDER BY length DESC`;
    //     console.log(sql);   

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "family",
  password: "root"
});


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


//https://steemit.com/hive-171319/@alexmove/the-word-game-post-2


//accounts.forEach(function (element,i,array)
len = accounts.length;
 for (yyy = 0; yyy < len; yyy++) 

{
      console.log('yyy');
      console.log(yyy);
	  
	steem.api.getDiscussionsByAuthorBeforeDate(accounts[yyy]['author'],null, new Date().toISOString().split('.')[0],3, function(err, result) {
      console.log('yyy');
      console.log(yyy);

       if (result)
	   {
        var i, len = result.length;
                    for (i = 0; i < len; i++) 
                    {
                                                    
                       var raw = result[i];
					    console.log(raw.author);
					    console.log(raw.created);

						let upvote = raw.active_votes.length-1;
                     
							let input = raw.created;
							var d = new Date(); // Today!

							d.setDate(d.getDate()); // Yesterday!
							d = d.toJSON().split("T")[0];
							
							
							let title = raw.title;

							title = title.replace(/[^a-zа-яё0-9\s]/gi, ' ');
							
									
							if ((input.indexOf(d) !== -1)&& (raw.category === 'hive-153018'))
						  // if (input.indexOf(d) !== -1)

							{
									body3R =  `| `+raw.author + `| <a href="`+raw.url+`">` + title + `</a>| `+ upvote + `| ` +  `????`  + `| ` + raw.children+`| ` + raw.body_length+ ' | \n';
								//	console.log(body3R);
									
								//	console.log(body3R);


									  //  const mysql = require("mysql2");
							 
							 const connection = mysql.createConnection({
							  host: "localhost",
							  user: "root",
							  database: "family",
							  password: "root"
							});

							//connection.on('error', function() {});

								const sql = `INSERT INTO ${mytable}(author, title, created, length, url, comments, upvotes, points,percent) VALUES('${raw.author}', '${title}', '${raw.created}', '${raw.body_length}', '${raw.url}', '${raw.children}', '${upvote}','0','0')`;
								 
									
								//	console.log(sql);

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

	}