<?php
session_start();

if (isset($_GET['index'])) {
    echo json_encode($_SESSION['response']); //response()->json(Accounts::all());
}


if (isset($_POST['store'])) { //function store(Request $request)
    $request = json_decode($_POST['store']);

    /**
     * Accounts::create(
     *  --insert array here
     * );
     */
    $newAccount = array(
        "id" => count($_SESSION['response']) + 1,
        "first_name" => $request->first_name,
        "last_name" => $request->last_name,
        "middle_name" => $request->middle_name
    );

    $newResponse = $_SESSION["response"];
    array_push($newResponse, $newAccount);
    $_SESSION["response"] = $newResponse;

    echo json_encode($_SESSION['response']); //response()->json(Accounts::all());

}

if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $data = json_decode($_POST['update']);

    //$account = Account:findOrFail($id);
}

if (isset($_POST['destroy'])) {
    $id = $_POST['id'];

    //$account = Accound::findOrFail($id);
    //$accound->delete();
}
?>