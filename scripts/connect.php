<?php 
//portfolio connect
$user = "allisonp_allison";
$pwd = "allisonportfolio1";
try {
    $conn = new PDO('mysql:host=localhost;dbname=allisonp_portfolio',$user, $pwd);
    //this is the same thing as going $host = "localhost" etc but just in one line
    //var_dump($conn); //check connection - instead of doing a var element, use var_dump to 
                    //show because it is an object
    
} catch (PDOException $exception) {
    echo 'connect error!' . $exception->getMessage();
}



ini_set('display_errors', 1);
error_reporting(E_ALL);
    $host = 'localhost';
    $dbname = 'allisonp_portfolio';
    $db_user = 'allisonp_allison';
    $db_pass = 'allisonportfolio1';

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