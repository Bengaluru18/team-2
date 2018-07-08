<?php 
session_start();
//echo $_SESSION['cid'];

?>
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
 <body>

 	<div class="container">
 		<div class="col-lg-12">
 			<br>
 			<h2 class="text-warning text-center">Display Table Data</h2>
 			<table class="table table-striped table-hover table-bordered">
 				<tr class="bg-dark text-white text-center">
 					<th>Equipment Name</th>
 					<th>Total Quantity</th>
 					<th>Quantity Used</th>
 					<th>Remaining Quantity</th>
 					<th>Cost</th>
 					<th>Center ID</th>
 					<th>Product ID</th>
 				</tr>


 				<?php
				    include("includes/config.php");
				    $cid = $_SESSION['cid'];
				    $q = "select * from product WHERE cid = $cid ";
				    $query = mysqli_query($con,$q);

				    while($res = mysqli_fetch_array($query)){
		 		?>

	 			<tr class="text-center">
	 				<td> <?php echo $res['pname']; ?> </td>
	 				<td> <?php echo $res['total']; ?> </td>
	 				<td> <?php echo $res['available']; ?> </td>
	 				<td> <?php echo ($res['total']-$res['available']); ?> </td>
	 				<td> <?php echo $res['price']; ?> </td>
	 				<td> <?php echo $res['cid']; ?> </td>
	 				<td> <?php echo $res['pid']; ?> </td>

	 				<td> 
	 					<button class="btn btn-danger text-white"> 
	 						<a href="view.php?id=<?php echo $res['pid'];?>" class="text-white">
	 							View
	 						</a>
	 					</button> 
	 				</td>

	 				<td> 
	 					<button class="btn btn-primary"> 
	 						<a href="delete.php?id=<?php $res['pid']?>" class="text-white">
	 							Delete
	 						</a>
	 					</button> 
	 				</td>

	 			</tr>
	 			<?php } ?>

	 				<td> 
	 					<button class="btn btn-success text-white"> 
	 						<a href=#" class="text-white" data-toggle="modal" data-target="#form_category">
	 							Add
	 						</a>
	 					</button> 
	 				</td>

	 				<?php

	 					//$id = 6;
	 				//echo 'test';
	 					if(isset($_POST['submit'])){
	 						//echo 'test';
	 						$eqName = $_POST['equipmentName'];
	 						$eqQuan = $_POST['quantityReq'];
	 						$eqPrice = $_POST['price'];

	 						//echo 'test';

	 						//echo $eqPrice."\n";
	 						//echo $eqQuan."\n";
	 						$cid = $_SESSION['cid'];
	 						//echo $cid."\n";
	 						include("includes/config.php");

	 						$q = "SELECT * FROM product WHERE pname = '$eqName' AND cid=$cid ";
	 						echo $q."\n";
	 						$query = mysqli_query($con,$q);
	 						echo mysqli_num_rows($query);
	 						if(mysqli_num_rows($query) == 1 ){
	 							//echo "already present";
	 							$cid = $_SESSION['cid'];
	 							$updateQuery = "UPDATE product SET total = (total + $eqQuan) WHERE pname = '$eqName' AND cid= $cid ";
	 							$uQuery = mysqli_query($con,$updateQuery) or die("query failed");
	 							//header("Location:total_display.php");
	 						}
	 						else{
	 							//$id = $id+1;
	 							//echo "insertion to be done";
	 							$cid = $_SESSION['cid'];
	 							$insertQuery = "INSERT INTO product(pname, total, available, cid, price) VALUES ('$eqName',$eqQuan,$eqQuan,$cid,$eqPrice) ";
	 							//echo $insertQuery;
	 							$iQuery = mysqli_query($con,$insertQuery) or die("query failed");
	 							//header("Location:total_display.php");
	 						}


	 						

	 					}
	 				?>
	 		</table>
	 	</div>
	 </div>


	 			<!-- <tr class="text-center">
	 				<td> Tractor </td>
	 				<td> 20 </td>
	 				<td> 15 </td>
	 				<td> 5 </td>
	 				<td> 500/mo </td>
	 				
	 				<td> 
	 					<button class="btn btn-danger text-white"> 
	 						<a href=#" class="text-white">
	 							View
	 						</a>
	 					</button> 
	 				</td>

	 				<td> 
	 					<button class="btn btn-success text-white"> 
	 						<a href=#" class="text-white" data-toggle="modal" data-target="#form_category">
	 							Add
	 						</a>
	 					</button> 
	 				</td>

	 				<td> 
	 					<button class="btn btn-primary"> 
	 						<a href="#" class="text-white">
	 							Delete
	 						</a>
	 					</button> 
	 				</td>
	 			</tr>

	 			<tr class="text-center">
	 				<td> Irrigation Pump </td>
	 				<td> 50 </td>
	 				<td> 35 </td>
	 				<td> 15 </td>
	 				<td> 1500/mo </td>
	 				
	 				<td> 
	 					<button class="btn btn-danger text-white"> 
	 						<a href=#" class="text-white">
	 							View
	 						</a>
	 					</button> 
	 				</td>

	 				<td> 
	 					<button class="btn btn-success text-white"> 
	 						<a href=#" class="text-white" data-toggle="modal" data-target="#form_category">
	 							Add
	 						</a>
	 					</button> 
	 				</td>
	 				<td> 
	 					<button class="btn btn-primary"> 
	 						<a href="#" class="text-white">
	 							Delete
	 						</a>
	 					</button> 
	 				</td>
	 			</tr>
 		</table>
 		</div>
 	</div> -->

 	<div class="modal fade" id="form_category" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <form method="POST" action="">
          <div class="form-group">
            <label for="exampleInputEmail1">Equipment Name</label>
            <input type="text" class="form-control" name="equipmentName" id="categoryName" aria-describedby="emailHelp" placeholder="Enter Category Name">
            <small id="cat_erro" class="form-text text-muted"></small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Quantity Required</label>
            <input type="text" class="form-control" name="quantityReq" id="categoryName" aria-describedby="emailHelp" placeholder="Enter Category Name">
            <small id="cat_erro" class="form-text text-muted"></small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Price</label>
            <input type="text" class="form-control" name="price" id="categoryName" aria-describedby="emailHelp" placeholder="Price">
            <small id="cat_erro" class="form-text text-muted"></small>
          </div>

          <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 </body>
 </html>