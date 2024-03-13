<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "Students";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$email = $_POST['Email'];
$subject = $_POST['subject'];


$sql = "INSERT INTO details (name, Email, Subject) VALUES ('$name', '$Email', '$Subject')";

if ($conn->query($sql) === TRUE) {
    echo "Record inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
