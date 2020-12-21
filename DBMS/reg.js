<button class="btn">Submit</button>

$db=mysqli_select_db($con,'internship_management'); 
if(!$db){
    die(mysqli_connect_error());
}



$r= mysqli_query($con,$query);
if(!$r){
 echo "Error: $con->error";
}
}

if(mysqli_num_rows($r)){
echo "<script>location.replace('welcome.php')</script>";
}



        $UID= $_POST['UID'];
        $name= $_POST['name'];
        $Cname= $_POST['Cname'];
        $area= $_POST['area'];
        $title= $_POST['title'];
        $IGname= $_POST['IGname'];
        $LGname=$_POST['LGname'];
        $Fdate=$_POST['Fdate'];
        $Tdate=$_POST['Tdate'];
        $key=$_POST['key'];
        $certificate=$_POST['certificate'];

        if($UID==''){
            echo "<script>alert('Enter your name')</script>";
        }
        if ($name==''){
            echo "<script>alert('Enter your UID')</script>";
        }
        if ($Cname==''){
            echo "<script>alert('Enter your dept')</script>";
        }
        if ($area==''){
            echo "<script>alert('Enter your div')</script>";
        }
        if ($title==''){
            echo "<script>alert('Enter your email')</script>";
        }
        if ($IGname==''){
            echo "<script>alert('Enter your phone')</script>";
        }
        if ($LGname==''){
            echo "<script>alert('Enter your phone')</script>";
        }
        if ($Fdate==''){
            echo "<script>alert('Enter your phone')</script>";
        }
        if ($Tdate==''){
            echo "<script>alert('Enter your phone')</script>";
        }
        if ($key==''){
            echo "<script>alert('Enter your phone')</script>";
        }
        if ($certificate==''){
            echo "<script>alert('Enter your phone')</script>";
        }

        else{
            $query= "insert into details(UID,student_name,company_name,area,title,guide_industry,guide_local,from_date,to_date,key_words,certificate) values ('$UID','$name','$Cname','$area','$title','$IGname','$LGname','$Fdate','$Tdate','$key','$certificate')";
        }

        if(mysqli_query($con,$query)){
            echo "<script>alert('Registered Successfully')</script>";
        }
        else{
            echo "Error: $con->error";
        }
        
    
        $con->close();
    }


    .btn{
        color: rgb(0, 0, 0);
        background-color: #75f17c;
        padding: 5px;
        border-radius: 8px;
        border: 2px solid black;
        cursor: pointer;
        font-size: 18px;
    }