<?php 
    include 'welcome.php';
    if(isset($_GET['dow'])){
        $file=$_GET['dow'];
        $query="SELECT * FROM details WHERE certificate='$file'"; 
        $result=mysqli_query($con,$query);
        header('Content-Type : application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($file).'" ');
        header('Content-Length:' . filesize($file));
        readfile($file);

    }

?>