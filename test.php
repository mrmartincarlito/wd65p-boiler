<?php

if (isset($_POST['payload'])) {
  $data = json_decode($_POST['payload']);

  $username = $data->username;
  $password = $data->password;

  $accounts = array(
    array(
      "username" => "royce",
      "password" => "royce123"
    ),
    array(
      "username" => "angelo",
      "password" => "angelo123"
    ),
    array(
      "username" => "joven",
      "password" => "joven123"
    ),
  );

  $response = array();
  
  $message = "";
  foreach ($accounts as $account) {
    if ($account["username"] === $username) {
      if ($account["password"] === $password) {
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
          "status" => 400,
          "title" => "Error",
          "message" => $message,
          "username" => ""
        );
      }
      break;
    } else {
      $message = "username not found in our database";
      $response = array(
        "status" => 500,
        "title" => "Successfull",
        "message" => $message,
        "username" => ""
      );
    }
  }
  


  echo json_encode($response);
}


?>