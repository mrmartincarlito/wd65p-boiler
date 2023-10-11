<?php
include "env.php";
session_start();

$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);

if (!$conn) {
    echo "Cannot connect to database please contact your administrator";
    return;
}