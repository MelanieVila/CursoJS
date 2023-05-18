<?php    
    $host = "localhost";
    $dbname = "autoscrm";
    $user = "root";
    $pass = "";
    $char = 'utf8mb4';

    // Set DSN
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname . ';port=3307;charset=' . $char;
    
    try {
        $conn = new PDO($dsn, $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->exec("SET CHARACTER SET utf8");
    } catch (PDOException $e) {
        print "Connection failed: " . $e->getMessage();
    }
?>