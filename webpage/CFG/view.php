<!DOCTYPE html>
 <html>
 <head>
 	<title>Display Page</title>
 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
 </head>

<div class="container">
 		<div class="col-lg-12">
 			<br>
 			<h2 class="text-warning text-center">Display Table Data</h2>
 			<table class="table table-striped table-hover table-bordered">
 				<tr class="bg-dark text-white text-center">
 					<th>Product Name</th>
 					<th>Borrow Date</th>
 					<th>Return Date</th>
 					<th>Farmer Name</th>
 				</tr>


 				<?php
				    include("includes/config.php");
					$id = $_GET['id'];
					//echo $id;
					$q = " SELECT t2.fname as farmerName, t1.* FROM booking t1, Farmer t2 WHERE t1.pid = '$id' AND t1.fid = t2.fid ";
					//echo $q;
					$result = mysqli_query($con,$q);
				    while($res = mysqli_fetch_array($result)){
		 		?>

	 			<tr class="text-center">
	 				<td> <?php echo $res['farmerName']; ?> </td>
	 				<td> <?php echo $res['borrowdate']; ?> </td>
	 				<td> <?php echo $res['returndate']; ?> </td>
	 				<td> <?php echo $res['pname']; ?> </td>
	 			</tr>
	 			<?php } ?>
	 				<!-- <td> 
	 					<button class="btn btn-danger text-white"> 
	 						<a href="view.php?id=<?php echo $res['pid'];?>" class="text-white">
	 							View
	 						</a>
	 					</button> 
	 				</td> -->

	 				<td> 
	 					<button class="btn btn-success text-white"> 
	 						<a href=#" class="text-white" data-toggle="modal" data-target="#form_category">
	 							Add
	 						</a>
	 					</button> 
	 				</td>
	 				<!-- <td> 
	 					<button class="btn btn-primary"> 
	 						<a href="delete.php?id=<?php $res['pid']?>" class="text-white">
	 							Delete
	 						</a>
	 					</button> 
	 				</td> -->
	 		</table>
	 	</div>
</div>








