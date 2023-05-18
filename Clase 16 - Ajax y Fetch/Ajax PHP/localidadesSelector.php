<?php
    include "connection.php";

    if(isset($_POST['provincia'])){
        $provincia=$_POST['provincia'];
        $stmt =  $conn -> query("SELECT ID,NOMBRE FROM localidades WHERE PROVINCIA_NOMBRE='$provincia' ORDER BY NOMBRE");
        $stmt->execute();

        echo "<option value=''></option>";
        while ($row = $stmt->fetch()) {
        echo "<option value=".$row['ID'].">".$row['NOMBRE']."</option>";    
        }
    }