<!DOCTYPE html>
<html>
    
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="cemedin, medicina nuclear">
    <meta name="description" content="Sitio web de cemedin y medicina nuclear">
    <meta name="author" content="Sounds Like Fun">
    <title>Clientes Cargar</title>
    <link rel="icon" href="" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="css/styles.css">    
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
    <link rel="stylesheet" href="fontawesome/css/fontawesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="themeSelection.js"></script>
</head>

<body>
<?php
    include "connection.php";
?>

<div>
    <h1 class="flex">Clientes Cargar</h1>   
    <div class="flex">
        <div class="border padding1 margin1">
            <h2 class="flex">Nuevo Cliente</h2>
            <form action="" method="post">
                <table class="flex tabla-hover padding1">
                    <tr><td>Apelidos</td><td><input type="text" name="apellidos" required></td></tr>
                    <tr><td>Nombres</td><td><input type="text" name="nombres" required></td></tr>
                    <tr><td>DNI</td><td><input type="text" name="dni_tipo" value="DNI" required></td></tr>
                    <tr><td></td><td><input type="number" name="dni" required></td>
                    </tr>
                    <tr><td>Sexo</td>
                        <td>
                            <label><input type="radio" name="sexo" value="0" required>F</label>
                            <label><input type="radio" name="sexo" value="1">M</label>
                        </td>
                    </tr>
                    <tr><td>Nacimiento</td>
                        <td><input type="date" class="twelve-ch" name="nacimiento" required></td>
                    </tr>
                    <tr><td >Whatsapp</td><td><input type="text" name="whatsapp" placeholder="país-prov-num" required></td></tr>
                    <tr><td>E-mail</td><td><input type="email" name="email" required></td></tr>
                    <tr><td>*Teléfono fijo</td><td><input title="*Cadena de texto libre" type="text"  name="telefono_fijo"></td></tr>
                    <tr style="background-color: red"><td>Provincia</td>
                        <td>
                            <select name="provincia" required onchange="setCities(this.value)">
                                <option value=""></option>
                                <?php
                                    $stmt = $conn -> query("SELECT DISTINCT PROVINCIA_NOMBRE FROM localidades ORDER BY PROVINCIA_NOMBRE");
                                    $stmt->execute();
                                    while ($row = $stmt->fetch()) {?>
                                        <option value="<?php echo $row['PROVINCIA_NOMBRE'] ?>"><?php echo $row['PROVINCIA_NOMBRE'] ?></option>
                                <?php } ?>
                            </select>
                        </td>                        
                    </tr>
                    <tr style="background-color: red"><td>Localidad</td>
                        <td>
                            <select name="localidad" id="localidadSeleccionar" required>
                                <option value=""></option>
                            </select>
                        </td>
                    </tr>
                    <tr><td>Dirección</td><td><input type="text" name="direccion" required></td></tr>
                    <tr><td>Usuario</td><td><input type="text" name="usuario" required></td></tr>
                    <tr><td>Password</td><td><input type="text" name="password" required></td></tr>
                </table>
                <div class="flex"><button type="submit" name="nuevoCliente" >Guardar</button></div>
            </form>
            <p>*(Datos no obligatorios)</p>
        </div>
    </div>
</div>

<script>
    function setCities(provincia) {
        var params = "provincia="+provincia;
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'localidadesSelector.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload=function() {
            if(this.status==200) {
                document.getElementById('localidadSeleccionar').innerHTML=this.responseText;
            } else {
                document.getElementById('localidadSeleccionar').innerHTML= "No se ha encontrado el Documento";
            }
        }
        xhr.send(params);
    }
    //setCities("CORDOBA");
</script>

</body>
</html>