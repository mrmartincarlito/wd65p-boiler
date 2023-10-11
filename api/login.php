<?php
include "config.php";

if (isset($_POST['auth'])) {
    $data = json_decode($_POST['auth']);

  $username = $data->username;
  $password = $data->password;

  $response = array();
  
  $sqlAccountsQuery = "SELECT * FROM `tbl_accounts` where username = '$username'";
  $result = $conn->query($sqlAccountsQuery);

  $message = "";

  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      if ($row["password"] === $password) {
        $message = "you are now logged in $username";
        $response = array(
          "status" => 200,
          "title" => "Successfull",
          "message" => $message,
          "username" => $username
        );
      } else {
        $message = "Invalid Password";
        $response = array(
          "status" => 500,
          "title" => "Error",
          "message" => $message,
          "username" => $username
        );
      }
    } 

  } else {
      $message = "username not found in our database";
      $response = array(
        "status" => 500,
        "title" => "Successfull",
        "message" => $message,
        "username" => ""
      );
  }

  echo json_encode($response);
}