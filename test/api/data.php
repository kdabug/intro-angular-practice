<?php

session_start();

$user = $_SESSION['user'];


// SELECT records from userTable where username=sanitizedUserName

if ($user == 'admin'){
    echo '{
        "message": "secret message for admin eyes only",
        "success": true
    }';
} else {
    echo '{
        "message": "who u boo?",
        "success": false
    }';
}


?>