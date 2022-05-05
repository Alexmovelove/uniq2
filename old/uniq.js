
const mysql = require("mysql2");
const steem = require('steem');
const config = require('./config');

const connection = mysql.createConnection(config);




	let wifkey = '5JUERWQ7cu4RDYHMoEtmhVfu3MxCUZ9fo2AHWCigwT9LvVz1eFb';
	let votey = "alexmove";
	let num_day = 1;	


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
			if ((users[post_number])&&(users[post_number].length>50)&&(users[post_number].percent===0))
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
	
						 const sql = `UPDATE ${mytable_p} SET percent='999' WHERE url='${users[post_number].url}' LIMIT 1000`;
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

						if (tests > 85)
						{
							 answer2 = "The uniqueness of the text is checked - everything is OK! Thanks! High level of uniqueness: "+tests+"%";
						

						}
						else
						{
							if (users[post_number].length<500)
							{
								answer2 = `length: ` +  users[post_number].length +`Hi, I'm an anti-plagiarism bot. This post may require additional verification. Possible plagiarism detected from `+data.matches[0].url+`<br><br>`+data.percent+`<br><br>@ac-cheetah `;
								
		steem.broadcast.comment(
						wifkey, // Your posting wif
						aaa, // Parent Author
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
								answer2 = `Hi, I'm an anti-plagiarism bot. This post may require additional verification. Possible plagiarism detected from `+data.matches[0].url+`<br><br>`+data.percent+`<br><br>@ac-cheetah `;
	
	steem.broadcast.comment(
						wifkey, // Your posting wif
						aaa, // Parent Author
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
   
					
