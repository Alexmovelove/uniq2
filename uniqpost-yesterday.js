const mysql = require("mysql2");
const steem = require('steem');
const fs = require("fs");    
var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
 num_day = num_day + 1;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let url_ok = settings.url_ok;
let password_mysql = settings.password_mysql;
let user_mysql = settings.user_mysql;
let title_name = settings.title_name;
let image_list = settings.image_list;
let moderators_list = settings.moderators_list;
let wifkey = settings.wifkey;
let votey = settings.votey;

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
		
const connection = mysql.createConnection(config);

	let sql = `SELECT * FROM post_number`   ;
	connection.query(sql,  function(err, results) 
	{
		if(err) console.log(err);
		const users2 = results;

		let post_number = users2[0].number;

		var d = new Date(); // Today!
		d.setDate(d.getDate()-num_day); // Yesterday!
		d = d.toJSON().split("T")[0];
		d = d.replace(/-/gi, '');
						
		let mytable_p = 'p'+d;
		// let mytable_p = 'p20211210';

	 
		const axios = require('axios');
		const FormData = require('form-data');
		let users; 

		const sql = `SELECT * FROM ${mytable_p} ORDER BY length DESC`;
		//const sql = `SELECT * FROM p0111 ORDER BY length DESC`;
		//     console.log(sql);   

		connection.query(sql,  function(err, results) 
		{
			if(err) console.log(err);

			users = results;
			if ((users[post_number])&&(users[post_number].length>50)&&(users[post_number].percent===999))
			{
				console.log(results.length);   
				let data;
				async function makeGetRequest(qqq,aaa) 
				{

					const form_data = new FormData();
					form_data.append('url', qqq);
					console.log(aaa);
					console.log(aaa);
					console.log(aaa);
					console.log(qqq);
					console.log(qqq);
					console.log(qqq);


						var d = new Date(); // Today!

						d.setDate(d.getDate() - 1); // Yesterday!
						d = d.toJSON().split("T")[0];
			
						let permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
		
						const url = new URL(qqq);

						let test2 = url.pathname.split('/');
						test2 = test2[3];
						test2 = url_post;

					let res = await axios.post('https://content-watch.ru/public/api/?action=CHECK_URL&key=lsjhl80J7RiB4FU', form_data, 
					{ headers: form_data.getHeaders() });
					let answer2
					data = res.data;
					console.log(data);
					console.log(data.percent);
	
					if (data.error_code==400)
					{
						console.log(data.error);
						console.log(data.error_code);
						console.log(data.error_code);
						console.log(data.error_code);
						console.log(data.error_code);
						console.log(data.error_code);
						console.log(data.error_code);
	
						 const sql = `UPDATE ${mytable_p} SET percent='400' WHERE url='${users[post_number].url}' LIMIT 1000`;
						 console.log(sql)
				
						connection.query(sql,function(err, results) {
						if(err) console.log(err);
						});
						
						
						post_number++;
		
						const sql8 = `UPDATE post_number SET number='${post_number}' LIMIT 1000`;
		  
						connection.query(sql8,function(err, results) {
						if(err) console.log(err);
						console.log(results);
							connection.end();
							connection.destroy();
						});
					  // connection.end;
					process.exit(-1);
					
					}
					else
					{
						let tests = parseFloat(data.percent);
						console.log(tests);

						if (tests > 80)
						{
							 answer2 = url+`<BR>`+tests+`% <br> The uniqueness of the text is checked - everything is OK! Thanks! High level of uniqueness: `+tests+`%`;
							 
							 	console.log(answer2);
	
		steem.broadcast.comment(
						wifkey, // Your posting wif
						votey, // Parent Author
						url_ok, // Parent Permlink
						votey,
						permlink, // Your post permlink
						'', // Title
						answer2, // Body
						{ tags: ['thanks'], app: 'ganeshaway' }, // Json Metadata
						function(err, result) {
							console.log(err, result)});
				

				
						}
						else
						{
							if (users[post_number].length<500)
							{
								answer2 = url+`<BR><br>`+tests+`% <br><br>` +  users[post_number].length +`<br><br>Possible plagiarism detected from <br>`+data.matches[0].url+`<br><br>@ac-cheetah @endingplagiarism <br><br>`+moderators_list;
								
									console.log(answer2);


		steem.broadcast.comment(
						wifkey, // Your posting wif
						votey, // Parent Author
						test2, // Parent Permlink
						votey,
						permlink, // Your post permlink
						'', // Title
						answer2, // Body
						{ tags: ['thanks'], app: 'ganeshaway' }, // Json Metadata
						function(err, result) {
							console.log(err, result)});
							
							}
							else
							{
								answer2 = answer2 = url+`<BR>`+tests+`% <br> Possible plagiarism detected from<br>`+data.matches[0].url+`<br>`+`<br>@ac-cheetah @endingplagiarism <br><br>`+moderators_list;
	
	console.log(answer2);
	
	steem.broadcast.comment(
						wifkey, // Your posting wif
						votey, // Parent Author
						test2, // Parent Permlink
						votey,
						permlink, // Your post permlink
						'', // Title
						answer2, // Body
						{ tags: ['thanks'], app: 'ganeshaway' }, // Json Metadata
						function(err, result) {
							console.log(err, result)});
							}

						}
 
				



					  const sql = `UPDATE ${mytable_p} SET percent='${data.percent}' WHERE url='${users[post_number].url}' LIMIT 1000`;
						 console.log(sql)
		
						connection.query(sql,function(err, results) {
						if(err) console.log(err);
						});
				
						post_number++;
		
						const sql8 = `UPDATE post_number SET number='${post_number}' LIMIT 1000`;
		  
						connection.query(sql8,function(err, results) {
						if(err) console.log(err);
						console.log(results);
							connection.end();
							connection.destroy();
						});
					  // connection.end;
					//process.exit(-1);
					}
				}

				const url = new URL('http://www.somedomain.com/account/search?filter=a#top');
				console.log(url.pathname.split('/'));
				const params = new URLSearchParams(url.search)
				makeGetRequest('https://steemit.com'+users[post_number].url,users[post_number].author);
				

			}
			else
			{
				if (users[post_number])
				{
					console.log(post_number);   
					post_number++;
					
					const sql8 = `UPDATE post_number SET number='${post_number}' LIMIT 1000`;
					  
					connection.query(sql8,function(err, results) {
					if(err) console.log(err);
							connection.end();
							connection.destroy();
					//connection.end;
					});
				} 
				else
				{
					console.log(post_number);   
					post_number++;
					
					const sql8 = `UPDATE post_number SET number='0' LIMIT 1000`;
					  
					connection.query(sql8,function(err, results) {
					if(err) console.log(err);
							connection.end();
							connection.destroy();
					//connection.end;
					});
				} 
			}
		});
	
   });
   
					
