const mysql = require("mysql2");
const steem = require('steem');
const fs = require("fs");    
var settings = require('./config.js');

 console.log('hello, is this working')
  var counter = 1;
  const BASEURL = 'https://steemit.com/'
  const ACCOUNT_NAME = 'alexmove'
  steem.api.setOptions({ url: 'https://api.steemit.com' });


config = {
  host: "localhost",
  user: "root",
  database: "family",
  password: "root"
}

steem.api.setOptions({ url: 'https://api.steemit.com' });
steem.api.getBlogAuthors("hive-111293", function(err, data) {
	console.log(err, data);
});
	
//});

/*
steem.api.getBlogAuthors("username", function(err, data) {
	console.log(err, data);
});

https://github.com/steemit/steem-js/blob/master/doc/README.md

https://www.codementor.io/@gokulnk/build-matrix-like-steem-stream-with-steemjs-iexzzwj6n

*/