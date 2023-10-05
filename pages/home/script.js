let DASHBOARD_API = "http://localhost/wd65p-boiler/api/dashboardController.php";

window.onload = index; //useEffect()

setInterval(index, 5000);

function index() {
    $.ajax({
        "url" : DASHBOARD_API, //URL of the API
        "type" : "GET", //GET and POST 
        "data" : "index",
        "success" : function (response) { //success yung response
            let jsonResponse = JSON.parse(response);

            $("#total_no_accounts").text(jsonResponse.total_no_accounts)
            $("#total_no_employees").text(jsonResponse.total_no_employees)
            $("#total_sales").text(jsonResponse.total_sales)

        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}