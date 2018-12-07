<?php
    include 'connect.php';
    // get one art first
    function get_single_piece($pdo, $portfolio) {
        $query = "SELECT * FROM tbl_portfolio WHERE pro_category1 = '$portfolio'"; 
        //attach the id in the thumnail to ensure you are getting the right image
        $get_port = $pdo->query($query);
        $results = array();
        while($row = $get_port->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return $results;
    }
    //get all art
    function get_all_pieces($pdo) {
        $query = "SELECT * FROM tbl_portfolio";
        
        $get_port = $pdo->query($query);
        $results = array();
        
        while($row = $get_port->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        
        return $results; 
        }
?>