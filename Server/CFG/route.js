var express = require('express');  
var bodyParser = require('body-parser'); 
var app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Connect to the db

var mysql = require('mysql');

var con = mysql.createConnection({
// host: "13.229.237.24",
host: "localhost",
  user: "root",
  password: "root1234",
database: "ISAP"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

app.use(express.static('public')); 
app.use(bodyParser.json());

app.get('/index.html', function (req, res) {  
console.log("First Page");
   res.sendFile( __dirname + "/" + "index.html" );    
})  


//LOGIN STUFF 






app.get('/dashboard.html', function (req, res) {  
console.log("hello");
   res.sendFile( __dirname + "/" + "dashboard.html" );    
}) 


app.get('/getequip/:cid', function (req, res) {  
//var cid = 11; //req.query.cid;	

con.query("SELECT * FROM product where cid =" + req.params.cid, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 


app.get('/product', function (req, res) {  
con.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 


app.get('/admin', function (req, res) {  
con.query("SELECT * FROM admin", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 


app.get('/booking', function (req, res) {  
con.query("SELECT * FROM booking", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 

app.get('/center', function (req, res) {  
con.query("SELECT * FROM center", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 


app.get('/farmer/:fid', function (req, res) {  
con.query("SELECT * FROM Farmer where fid=" +req.params.fid, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 

app.get('/app/getequip', function (req, res) {  
var cid = 11; //req.query.cid;	

con.query("SELECT * FROM center", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });

}); 




});



