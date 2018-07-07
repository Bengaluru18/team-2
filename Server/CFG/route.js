var express = require('express');  
var bodyParser = require('body-parser'); 
var app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Connect to the db

var mysql = require('mysql');

var con = mysql.createConnection({
//  host: "13.229.237.24",
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
console.log("hello");
   res.sendFile( __dirname + "/" + "index.html" );    
})  


app.get('/getequip/:cid', function (req, res) {  
//var cid = 11; //req.query.cid;	

con.query("SELECT * FROM product where cid =" + req.params.cid, function (err, result, fields) {
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


app.get('/dashboard.html', function (req, res) {  
console.log("hello");
   res.sendFile( __dirname + "/" + "dashboard.html" );    
}) 

var server = app.listen(5000, function () {  
	var host = server.address().address  
  	var port = server.address().port  
	console.log("Example app listening at %s %s", host, port)  
}) 


});



