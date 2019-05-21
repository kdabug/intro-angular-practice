<?php

session_start();

if(empty($_SESSION['user'])){
    echo `{"status":true}`;
}else{
    echo `{"status":false}`;
}

?>