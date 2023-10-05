let LOGIN_API = "http://localhost/wd65p-boiler/api/login.php";

function login() {
    let payload = {
        "username" : $("#username").val(),
        "password" : $("#password").val()
    }

    $.ajax({
        "url" : LOGIN_API, //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "auth=" + JSON.stringify(payload),
        "success" : function (response) { //success yung response
            let jsonResponse = JSON.parse(response);

            
            if (jsonResponse.status == 200) {
                window.location.href = "pages/home";
            } else {
                $("#response").text(jsonResponse.message)
            }
        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}