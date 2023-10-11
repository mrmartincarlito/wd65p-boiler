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
                    "<td>" +jsonResponse[i].username + "</td>" +
                    "<td>" +jsonResponse[i].password + "</td>" +
                    "<td>" +jsonResponse[i].role + "</td>" +
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
        "username" : $("#username").val(),
        "password" : $("#password").val(),
        "role" : $("#role").val()
    };

    $.ajax({
        "url" : ACCOUNTS_API, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "store=" + JSON.stringify(payload),
        "success" : function (response) { //success yung response
            let jsonResponse = JSON.parse(response);

            alert(jsonResponse.message)

            if (jsonResponse.status == 200) {
                index();
            }
            
        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}

function update() {
    let payload = {
        "username" : $("#username").val(),
        "password" : $("#password").val(),
        "role" : $("#role").val()
    };

    let id = $("#username").val();

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


    if (!confirm("Are you sure you want to delete?")) {
        return;
    }


    let id = $("#username").val();

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
