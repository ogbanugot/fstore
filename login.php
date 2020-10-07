<?php 

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "fasion-store";

//Create Connection 
$conn = new mysqli ($servername, $dbusername, $dbpassword, $dbname);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT email, password FROM users;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    //Output data of each row 
    while ($row = $result->fetch_assoc())
    {
        echo "Email: " . $row["email"]. " - Password: " . $row['password']. "br";
    }
} else {
    echo "0 results";
}

$conn->close();
?>