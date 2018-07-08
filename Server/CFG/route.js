var express = require('express');  
var bodyParser = require('body-parser'); 
var app = express();  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Connect to the db
var nodemailer = require('nodemailer'); 

var mysql = require('mysql');

/*
const accountSid = 'AC683dcb728d1c27780ca9cff532730ea3';
const authToken = '413053016fd2448ad74eb1a3dd383a56';
const client = require('twilio')(accountSid, authToken);
*/


var con = mysql.createConnection({
host: "13.229.237.24",
//host: "localhost",
  user: "root",
  password: "root1234",
database: "ISAP"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

app.use(express.static('public')); 
app.use(bodyParser.json());

app.get('/', function (req, res) {  
console.log("First Page");
 //  res.sendFile( __dirname + "/" + "index.html" );    
})  


//LOGIN STUFF 

app.get('/send', function (req, res) {  
console.log("sending  text ... ");
/*
client.messages
      .create({
         body: 'Lets grabch at Milliways tomorrow!',
         from: '+18325398167',
         //mediaUrl: 'http://www.example.com/cheeseburger.png',
         to: '+917022495226'
       })
      .then(message => console.log(message.sid + " "))
      .done();
*/



//var query = "SELECT date_add(CURDATE(), INTERVAL 3 DAY)"


con.query("SELECT f.fname, b.returndate FROM Farmer f, booking b where b.returndate= date_add(CURDATE(),INTERVAL 2 DAY)", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	res.send(result);

//var obj= JSON.parse(result);
//console.log(obj.fname);
//console.log(obj.date);
for( var i=0 ; i< result.length ; i++)
{

if( result != null )
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cfgtest2018@gmail.com', 
    pass: 'root1234$'
  }
});

var mailOptions = {
  from: 'cfgtest2018@gmail.com',
  to: 'cfgtest2018@gmail.com',
  subject: 'Sending Email using Node.js....',
  text: 'Hi ' +result[i].fname +'The product return date is ' +result[i].returndate
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

}

}
  });

})  


app.get('/dashboard', function (req, res) {  
console.log("hello");
   res.sendFile( __dirname + "/" + "dashboard.html" );    
}) 




app.get('/getinfo', function (req, res) {  
console.log("......");
  con.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


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
con.query("SELECT * FROM booking where fid=" +req.params.fid, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  res.send(result);
  });

}); 



//display all
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



});


app.listen(5000, () => console.log('Example app listening on port 5000!'))
