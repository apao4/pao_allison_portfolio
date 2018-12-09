<?php
$user = "allisonp_allison";
$pw = "allisonportfolio1"; //blank for windows users 

try {
    $conn = new PDO('mysql:host=localhost;dbname=allisonp_portfolio', $user, $pw);
    //var_dump($conn); taking out that object pdo thing

} catch (PDOException $exception) {
    echo 'connect error' . $exception->getMessage();
}

?>