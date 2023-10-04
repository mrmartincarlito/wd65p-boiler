/**
 * camelCase
 * snake_case
 * PascalCase - class or object instantiation
 * UPPERCASE - final or constant
 */
function submitSampleJson() {
    let payload = {
        "username" : $("#username").val(),
        "password" : $("#password").val()
    }

    $.ajax({
        "url" : "test.php", //URL of the API
        "type" : "POST", //GET and POST 
        "data" : "payload=" + JSON.stringify(payload),
        "success" : function (response) { //success yung response
            let jsonResponse = JSON.parse(response);

            
            if (jsonResponse.status == 200) {
                $("#loggedInUser").text(jsonResponse.username)
            } else {
                $("#response").text(jsonResponse.message)
            }
        },
        "error" : function (xhr, status, error) { //error yung response
            alert("Error")
        }
    });
}

function test() {
    /**
     * [ ] -> means your data type is an array
     * { } -> means your data type is an object .
     */
    let students = [
        {"name" : "Test1", "grade" : 100, "subjects" : ["Eng", "Math", "Filipino", "Science"]}, 
        {"name" : "Test2", "grade" : 88, "subjects" : ["Eng", "Filipino", "Science"]},
        {"name" : "Test3", "grade" : 90, "subjects" : ["Eng", "Math"]}
    ]
    /**
     * $students = array(array("name" => "test"))
     */
    students.push({"name" : "Test4", "grade" : 88, "subjects" : ["Eng"]})

    let container = document.getElementById("container");

    for (let i=0; i<students.length; i++) {
        let student = document.createElement("h3");
        student.innerText = "Name : " + students[i].name;

        let grade = document.createElement("h4");
        grade.innerText = "Grade : " + students[i].grade;

        container.appendChild(student);
        container.appendChild(grade);
        
        // for (let j=0; j<students[i].subjects.length; j++) {
        //     console.log(students[i].subjects[j]);
        // }

        // for (const value in students[i].subjects) {
        //     console.log(students[i].subjects[value]);
        // }

        students[i].subjects.forEach((subject) => {
            let p = document.createElement("p");
            p.innerText = subject;
            container.appendChild(p);
        })

        let hr = document.createElement("hr");
        container.appendChild(hr);

    }
}

function createElementButton() {
    let newP = document.createElement("p");
    newP.innerHTML = "Successful";

    let container = document.getElementById("container");
    container.appendChild(newP);

}
