<?php 

if (isset ($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];
    $message = $_POST['message'];


    $mailTo = "Ameh.clinton@gmail.com"
    $headers = "From: ".$mailFrom;
    $txt = "You  have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}

         if ( empty($email) ) {
              echo 'You must enter your Email.';
              };

?>