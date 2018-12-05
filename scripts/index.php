<?php
include 'functions.php';
    
    if (isset($_GET["variable"])){
        $data = get_single_art($conn, $_GET["variable"]);
        echo json_encode($data);
    } else {
        $data = get_all_art($conn);
        echo json_encode($data);
        //can use this for portfolio pieces too - does not only apply to media
    }


?>