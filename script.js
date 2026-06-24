let assignments = [];

function addAssignment() {

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;

    if(title === "" || subject === "" || dueDate === ""){
        alert("Please fill all fields");
        return;
    }

    assignments.push({
        title,
        subject,
        dueDate,
        status
    });

    displayAssignments(assignments);
    updateDashboard();

    document.getElementById("title").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("dueDate").value = "";
}

function displayAssignments(data){

    const table = document.getElementById("assignmentTable");
    table.innerHTML = "";

    data.forEach(item => {

        let className = "";

        if(item.status === "Submitted"){
            className = "submitted";
        }
        else if(item.status === "Pending"){
            className = "pending";
        }
        else{
            className = "late";
        }

        table.innerHTML += `
        <tr>
            <td>${item.title}</td>
            <td>${item.subject}</td>
            <td>${item.dueDate}</td>
            <td class="${className}">
                ${item.status}
            </td>
        </tr>
        `;
    });
}

function updateDashboard(){

    document.getElementById("total").innerText =
        assignments.length;

    document.getElementById("submitted").innerText =
        assignments.filter(a => a.status === "Submitted").length;

    document.getElementById("pending").innerText =
        assignments.filter(a => a.status === "Pending").length;

    document.getElementById("late").innerText =
        assignments.filter(a => a.status === "Late").length;
}

function filterAssignments(){

    const subject =
    document.getElementById("filterSubject")
    .value
    .toLowerCase();

    const filtered =
    assignments.filter(a =>
    a.subject.toLowerCase().includes(subject));

    displayAssignments(filtered);
}

function showAll(){
    displayAssignments(assignments);
}
