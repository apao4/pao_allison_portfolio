<?php 

$user = "allisonp_allison";
$pwd = "allisonportfolio1";

try {
    $conn = new PDO('mysql:host=localhost;dbname=allisonp_portfolio',$user, $pwd);
    //var_dump($conn); //check connection - instead of doing a var element, use var_dump to 
    

} catch (PDOException $exception) {
    echo 'connect error!' . $exception->getMessage();
}

?>