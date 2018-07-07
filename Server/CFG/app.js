var express = require('express');  
var bodyParser = require('body-parser'); 
var app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Connect to the db

var mysql = require('mysql');

var con = mysql.createConnection({
//host: "13.229.237.24",
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
console.log("jsn");
con.query("SELECT * FROM product where cid =" + req.params.cid, function (err, result, fields) {
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
 
app.get('/booking/:fid', function (req, res) {  
con.query("SELECT * FROM booking where bid=" +req.params.fid, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  res.send(result);
  });

}); 

var server = app.listen(5001, function () {  
  var host = server.address().address  
    var port = server.address().port  
  console.log("Example app listening at %s %s", host, port)  
}) 


});


