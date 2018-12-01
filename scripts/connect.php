<?php
$db_dsn = array(
    'host' => 'localhost',
    'dbname' => 'db_movies',
    'charset' => 'utf8',
); //you are putting info into the right of the = but the left is what is naming it so you can call it later 

$dsn = 'mysql:'.http_build_query($db_dsn,'',';');
//$dsn = 'mysql:host=localhost;dbname=db_movies;charset=utf8'; this basically means the top one 

//Setup up connection credentials
$db_user = 'root';
$db_pass = 'root'; //this should be blank if you are on a windows computer

try{
    $pdo = new PDO($dsn,$db_user,$db_pass);
}catch(PDOException $exception){
    echo 'Found ==>' .$exception->getMessage();
    exit();
}

//$pdo = new PDO($dsn,$db_user,$db_pass); //this is the line that actually makes the datqbase connection. everything before this line is prepping the docuument e.g. what database, etc.

//var_dump($pdo);
//up until this point, we have no connected the database 
?> 