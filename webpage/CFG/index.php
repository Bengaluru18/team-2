
<?php

session_start();
$_SESSION['cid'] = (isset($_POST['submit']) ? $_POST['subl'] : '');
//echo $_SESSION['cid'];

if(isset($_POST['submit'])){
	$_SESSION['cid'] = $_POST['subl'];
	header("Location:dashboard.php");
}



?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Homepage</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	
	<!-- <?php include_once('./templates/header.php'); ?> -->

	<div class="container ">
		<br>
		<div class="card mx-auto" style="width: 18rem;">
  <img class="card-img-top" src="./assets/images/login.png" style="width:60%;" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">
    	<form method="POST" action="index.php">

		  <div class="form-group" >
		    <label for="exampleInputEmail1">Email address</label>
		    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
		  </div>

		  <div class="form-group">
		    <label for="exampleInputPassword1">Password</label>
		    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		  </div>

		  <?php 
		  	include_once("includes/config.php");
		  	$q = "SELECT cname,cid FROM center";
		  	$query = mysqli_query($con,$q);

		  	echo "<select name='subl'>";
		  	while($row = mysqli_fetch_array($query)){
		  	echo "<option value='". $row['cid']. "'>". $row['cname']."</option> ";
		  }
		  echo "</select>";
		  ?>
		  <br>
		  <br>
		  <p>
		  	<button type="submit" name="submit" class="btn btn-primary"><i class="fa fa-lock"></i> Login</button>
		  </p>
		  
		</form>
    </p>
  </div>

</div>
		
	</div>
	

</body>
</html>