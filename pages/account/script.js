let ACCOUNTS_API = "http://localhost/wd65p-boiler/api/accountsController.php";

window.onload = index;

function index() { 
    $.ajax({
        "url" : ACCOUNTS_API, //URL of the API
        "type" : "GET", //GET and POST 
        "data" : "index",
        "success" : function (response) { //success yung response
            let jsonResponse = JSON.parse(response);

            let tbody = "";

            for (let i = 0; i<jsonResponse.length; i++) {
                tbody += "<tr>" +
                    "<td>" +jsonResponse[i].id + "</td>" +
                    "<td>" +jsonResponse[i].first_name + "</td>" +
                    "<td>" +jsonResponse[i].last_name + "</td>" +
                    "<td>" +jsonResponse[i].middle_name + "</td>" +
                "</tr>";
            }

            $("#tableBody").html(tbody);


        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}

function store() {

    let payload = {
        "first_name" : $("#first_name").val(),
        "middle_name" : $("#middle_name").val(),
        "last_name" : $("#last_name").val()
    };

    $.ajax({
        "url" : ACCOUNTS_API, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "store=" + JSON.stringify(payload),
        "success" : function (response) { //success yung response
            index();    
        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}

function update() {
    let payload = {
        "first_name" : $("#first_name").val(),
        "middle_name" : $("#middle_name").val(),
        "last_name" : $("#last_name").val()
    };

    let id = 1;

    $.ajax({
        "url" : ACCOUNTS_API, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "update=" + JSON.stringify(payload) + "&id=" + id,
        "success" : function (response) { //success yung response
            index();    
        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });

}

function destroy() {
    let id = 1;

    $.ajax({
        "url" : ACCOUNTS_API, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "destroy=" + id,
        "success" : function (response) { //success yung response
            index();    
        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}
