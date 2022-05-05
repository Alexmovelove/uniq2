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
let notfull;

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
	


const sql = `SELECT * FROM ${bd_name}.spisok` ;
connection.query(sql,  function(err, results) {
    if(err) console.log(err);
    const users = results;
     for(let i=0; i < users.length; i++){
                     

let z;
z = z+1;
   
   notfull = '\n|'+users[i].author+'|\n';

  
const fs = require("fs");            
fs.appendFileSync("./"+bd_name+"spisok.txt",notfull);

    }

		
});
 console.log(notfull);
connection.end();

