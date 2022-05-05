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

const connection = mysql.createConnection(config);

var d = new Date(); // Today!
d.setDate(d.getDate()-num_day); // Yesterday!
d = d.toJSON().split("T")[0];
d = d.replace(/-/gi, '');
	

let mytable = 'p'+d;


	let full = image_list +


`|N|acc|title|comm|length|uniq|
------------|-------------|------------|-------------|----|-----|`;

let week = `

<h2>`+d+`</h2>


|N|acc|title|comm|length|uniq|
------------|-------------|------------|-------------|----|-----|`;


fs.appendFileSync("./"+bd_name+d+".txt",full);
fs.appendFileSync("./"+bd_name+"week.txt",week);




const sql = `SELECT * FROM ${mytable} ORDER BY length DESC` ;
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
     for(let i=0; i < users.length; i++){
                     
let notfull;
		var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
					 
                   if (users[i].count>0) {
                        formula = (users.length - i)/10;
                    //  console.log(users[i].count);

                   } else { formula = 0;
                 //  console.log('sdfsdfs');
                   }

            title = users[i].title.replace(/[^a-zа-яё0-9\s]/gi, ' ');

		console.log('|',i+1,'|',users[i].author,'|','<a href="'+ users[i].url+'">' + title + '</a>','|', users[i].comments,'|', users[i].length,'|',users[i].percent,'|');
   let z = Number(i + 1);
   notfull = '\n|'+z+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|'+ users[i].percent+'|\n';
   notweek = '\n|'+z+'|'+users[i].author+'|'+'<a href="'+ users[i].url+'">' + title + '</a>'+'|'+ users[i].comments+'|'+ users[i].length+'|'+ users[i].percent+'|\n';
  
const fs = require("fs");            
fs.appendFileSync("./"+bd_name+d+".txt",notfull);
fs.appendFileSync("./"+bd_name+"week.txt",notweek);

    }

	

full = `\n
Подробности о проверках тут:
Details about checks are here:

https://steemit.com/hive-171319/@alexmove/development-of-automation-for-checking-uniqueness-in-steemit-part-5-mysql-connection

Have a nice day!



`


	
	  fs.appendFileSync("./"+bd_name+d+".txt",full);
		
		
});
 
connection.end();

