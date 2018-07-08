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
//  if (err) throw err;
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
  //  if (err) throw err;
    console.log(result);
  res.send(result);
  });

});


app.get('/farmer/:fid', function (req, res) {
con.query("SELECT * FROM Farmer where fid=" +req.params.fid, function (err, result, fields) {
  //  if (err) throw err;
    console.log(result);
  res.send(result);
  });

});

app.get('/booking/:fid', function (req, res) {
con.query("SELECT * FROM booking where fid=" +req.params.fid, function (err, result, fields) {
    //if (err) throw err;
    console.log(result);
  res.send(result);
  });

});

app.post('/inserting_booking/:pid/:pname/:qty/:bdate/:rdate/:fid',function(req,res){
  console.log(req.body)
  var total;
console.log("insert into booking (pid,pname,quantity,borrowdate,returndate,fid)values('"+req.params.pid+"','"+req.params.pname+"','"+req.params.qty+"','"+req.params.bdate+"','"+req.params.rdate+"','"+req.params.fid+"')")
con.query("insert into booking (pid,pname,quantity,borrowdate,returndate,fid)values('"+req.params.pid+"','"+req.params.pname+"','"+req.params.qty+"','"+req.params.bdate+"','"+req.params.rdate+"','"+req.params.fid+"')",function (err, result, fields) {
//if (err) throw err;
    console.log(result);
  res.send(result);
  });
  console.log("select total from product WHERE pid="+req.params.pid)
  con.query("select available from product WHERE pid="+req.params.pid,function (err, result, fields){

    console.log(result[0].available);
    total=result[0].available-req.params.qty;

    console.log("UPDATE product SET available=" +total+ "  WHERE pid="+req.params.pid)
    con.query("UPDATE product SET available=" +total+ "  WHERE pid="+req.params.pid,function (err, result, fields){
    //  console.log(result)
    res.end(result)
  });


})



});




var server = app.listen(5001, function () {
  var host = server.address().address
    var port = server.address().port
  console.log("Example app listening at %s %s", host, port)
})


});
