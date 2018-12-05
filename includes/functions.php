<?php
$host = "localhost";
$user = "root";
$password = "root"; //leave this blank for windows users. should look like $password = "";
$db = "portfolio"; //this is the name of the database we made on myPHPadmin. no we are going to write a connect script and see if it works

$conn = mysqli_connect($host, $user, $password, $db); //putting in the variables in order

if (!$conn) { //this is if the connection is broken
    echo "something is broken... connection isn't working";
    exit; //this means if it is broken, stop trying. end here and wait till its okay again
}

//echo "connected!"; //commenting this out bc it was successfully connected. now writing the following query

//go and get some data from the database  //hold all the data we can parse
//$myQuery = "SELECT * FROM mainmodel";
//$result = mysqli_query($conn, $myQuery); //$conn tells it what connection to use and $myQuery tells it what query  to use
//$rows = array(); //put all the rows data in an array (arangement)

//fill the array with the result set and send it to the browser 
//while($row = mysqli_fetch_assoc($result)) {
//    $rows[] = $row;
//}

//get one item from the database (so that we aren't getting all the info. just one row's)
include 'connect.php';

if (isset($_GET["service"])) { //does it have a model number key and if it does, find me the row values that match it
    $info = $_GET["service"];

    $myQuery = "SELECT * FROM tbl_services WHERE service='$info'";

    $result = mysqli_query($conn, $myQuery); 
    $rows = array(); 

    //fill the array with the result set and send it to the browser 
    while($row = mysqli_fetch_assoc($result)) {
      $rows[] = $row;
    }


//encode the result and send it back
echo json_encode($rows);
}
?>