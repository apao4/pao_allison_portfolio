<?php  
include 'connect.php';

    //get one video
    function get_single_video($pdo, $vid) {
        $query = "SELECT * FROM tbl_portfolio WHERE id = '$vid'";

        $get_video = $pdo->query($query);
        $results = array();

        while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }

    //get all videos
    function get_all_videos($pdo) {
        $query = "SELECT * FROM tbl_portfolio";

        $get_video = $pdo->query($query);
        $results = array();

        while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
            $results[] = $row;
        }

        return $results;
    }
?>