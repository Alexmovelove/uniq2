exports.num_day = 10;

	var d = new Date(); // Today!
	d.setDate(d.getDate()-exports.num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
exports.bd_name = "family";
//exports.password_mysql = "BogSilSavaof";
exports.password_mysql = "root";
//exports.user_mysql = "main";
exports.user_mysql = "root";
exports.hive_name = "hive-153018";
exports.image_list = `![`+d+`.png](https://cdn.steemitimages.com/DQmbXSrdwm2MntCHrKSyfhAgNtQhMXNdUXK7zv8ztYAHzCV/`+d+`.png)`;
exports.title_name = "SteemFamily";
exports.url_post = `check-for-uniqueness-less-than-80-additional-verification-needed`;
exports.url_ok = ``;
exports.moderators_list = "@greatketty";


