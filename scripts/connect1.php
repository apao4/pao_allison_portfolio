<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
    $host = 'localhost';
    $dbname = 'portfolio';
    $db_user = 'root';
    $db_pass = 'root';

    $conn = mysqli_connect($host, $db_user, $db_pass, $dbname);

if (!$conn) {
    echo "something broke";
    exit;
}

// //get one item from db
if (isset($_GET["id"])) {
    $info = $_GET["id"];

    $myQuery = "SELECT * FROM tbl_services WHERE id='$info'";

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}

?>