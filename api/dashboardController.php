<?php

/**
 * index -> show all - GET
 * show(id) -> show only 1 value - GET
 * store / create -> saving of values - POST
 * update -> updating of values - PUT / POST
 * destroy -> deleting of values - DELETE /POST
 */

 //routes
 if (isset($_GET['index'])) {
    /**
     * @TODO Change this to database query
     */
    $response["total_no_accounts"] = 100;
    $response["total_no_employees"] = 250;
    $response["total_sales"] = 50000;

    echo json_encode($response);
 }
?>