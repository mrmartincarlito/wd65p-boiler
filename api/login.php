<?php
session_start();
/**
 * @TODO 
 * Select * from ACCOUNTS
 * 
 * Accounts::all();
 */
$_SESSION["response"] = array(
    array(
        "id" => 1,
        "first_name" => "Eric",
        "last_name" => "Yuzon",
        "middle_name" => "Manalang"
    ),
    array(
        "id" => 2,
        "first_name" => "Joven",
        "last_name" => "Ison",
        "middle_name" => "Motul"
    ),
    array(
        "id" => 3,
        "first_name" => "Edward",
        "last_name" => "Parinas",
        "middle_name" => ""
    ),
    array(
        "id" => 4,
        "first_name" => "Jerry",
        "last_name" => "Joy",
        "middle_name" => "Ismael"
    )
);
if (isset($_POST['auth'])) {
    $data = json_decode($_POST['auth']);

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