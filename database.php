
<?php 
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "fasion-store";

 $conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

    if(!$conn){
       die( "Failed to connect to mysqli: " . mysqli_connect_error());
    }
   
$sql = "CREATE TABLE IF NOT EXISTS  users(name VARCHAR(32),
    email VARCHAR(20),
    password VARCHAR(15),
    confirmPassword VARCHAR (15),
    message VARCHAR(45),

    PRIMARY KEY (email)

    )";

    $sql = "CREATE TABLE IF NOT EXISTS product-sales(name VARCHAR(32), number VARCHAR(15), quantity INT())"

    $result = mysqliquery($conn, $sql) or die("Bad Create: $sql");
    $resultCheck = mysqli_num_rows($result);    
?>

