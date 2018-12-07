<?php
$user = "root";
$pw = "root"; //blank for windows users 

try {
    $conn = new PDO('mysql:host=localhost;dbname=portfolio', $user, $pw);
    //var_dump($conn); taking out that object pdo thing

} catch (PDOException $exception) {
    echo 'connect error' . $exception->getMessage();
}

?>