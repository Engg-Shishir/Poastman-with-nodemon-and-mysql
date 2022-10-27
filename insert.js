var mysql = require('mysql');
var conn = mysql.createConnection({
 host     : 'localhost',
 user     : 'root',
 password : '',
 database : 'react-php-1'
});

conn.connect(function(err){
  if (err) throw err;
  console.log('connected');

  var sql ="INSERT INTO `users`(`name`, `location`) VALUES ('Insaallah','Narsingdi')";

  conn.query(sql, function(err,result){
     if (err) throw err;
     console.log('Data Inserted Alhamdulillah');
  });

});

