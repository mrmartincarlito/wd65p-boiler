<?php
include "config.php";
/**
 * index -> show all - GET
 * show(id) -> show only 1 value - GET
 * store / create -> saving of values - POST
 * update -> updating of values - PUT / POST
 * destroy -> deleting of values - DELETE /POST
 */

 //routes
 if (isset($_GET['index'])) {

   $response["total_no_accounts"] = 0;
   $response["total_no_employees"] = 0;
   $response["total_sales"] = 0;

   $sqlCountAccountsQuery = "SELECT COUNT(id) as 'total_accounts' FROM tbl_accounts where role is not null";
   $sqlCountEmployersQuery = "SELECT COUNT(id) as 'total_employers' FROM tbl_employers where country = 'PH'";

   $resultSetForAccounts = $conn->query($sqlCountAccountsQuery);
   $resultSetForEmployers = $conn->query($sqlCountEmployersQuery);

   while ($row = $resultSetForAccounts->fetch_assoc()) {
      $response["total_no_accounts"] = $row["total_accounts"];
   }

   while ($row = $resultSetForEmployers->fetch_assoc()) {
      $response["total_no_employees"] = $row["total_employers"];
   }
   

    echo json_encode($response);
 }
?>