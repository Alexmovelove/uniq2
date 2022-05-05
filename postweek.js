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

let wifkey = '5JUERWQ7cu4RDYHMoEtmhVfu3MxCUZ9fo2AHWCigwT9LvVz1eFb';
let votey = "alexmove";
	//for (var yyy = 0; yyy < 2; yyy++)
    
	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
let name_file = "./"+bd_name+"week.txt";

let accounts = fs.readFileSync(name_file).toString();
	console.log(accounts);

		var currentPath = process.cwd();
console.log(currentPath);
// Prints: /Users/mjr
//console.log(path.dirname(__filename));
// Prints: /Users/mjr

//let accounts = fs.readFileSync('report20211225.txt').toString();

let full1 = image_list;

full = `\n
Подробности о проверках тут:
Details about checks are here:

https://steemit.com/hive-153018/@alexmove/uniqueness-check-update-run-a-real-time-scan-obnovlenie-proverki-unikalnosti
https://steemit.com/hive-171319/@alexmove/development-of-automation-for-checking-uniqueness-in-steemit-part-5-mysql-connection

Have a nice day!`;

accounts = accounts.replace(/\n\n/gi, '\n');
accounts = full1 + accounts + full;
							
console.log(accounts);

let permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

console.log(permlink);
let title = "Weekly Report. "+title_name + " Checking The Uniqueness "+d;




steem.broadcast.comment(
	wifkey, // Your posting wif
	'', // Parent Author
	hive_name, // Parent Permlink
	votey,
	permlink, // Your post permlink
	title, // Title
	accounts, // Body 	
		{ tags: ['steem','club5050','steemit','ukraine','js','games'], app: 'ganeshaway' }, // Json Metadata
		function(err, result) {
			console.log(err, result)});

fs.unlink(name_file, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Файл удалён");
    }
});