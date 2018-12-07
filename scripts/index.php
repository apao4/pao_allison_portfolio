<?php
    include 'functions.php';
    
    //single art route
    if (isset($_GET["port"])){
        $data = get_single_piece($conn, $_GET["port"]);
        echo json_encode($data);
    } else {
        $data = get_all_pieces($conn);
        echo json_encode($data);
        //can use this for portfolio pieces too - does not only apply to media
    }
?>