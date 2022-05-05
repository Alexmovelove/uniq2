exports.wifkey = 'xxx';
exports.votey = "xxx";

exports.num_day = 0;

	var d = new Date(); // Today!
	d.setDate(d.getDate()-exports.num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
exports.bd_name = "family";
exports.password_mysql = "BogSilSavaof";
//exports.password_mysql = "root";
exports.user_mysql = "main";
//exports.user_mysql = "root";
exports.hive_name = "hive-153018";
exports.image_list = ``;
exports.title_name = "SteemFamily";



