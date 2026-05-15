let url = "https://jsonplaceholder.typicode.com/users";

window.onload = function () {
    getEmployees();
};

async function getEmployees() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        displayEmployees(data);

    } catch (err) {
        console.log("Error fetching data", err);
    }
}

function displayEmployees(data) {

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    // show only first 5 records
    let list = data.slice(0, 5);

    list.map(function (emp) {

        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.company ? emp.company.name : "N/A"}</td>
            <td>
                <button class="btn btn-warning btn-sm"
                    onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.email}')">
                    Edit
                </button>

                <button class="btn btn-danger btn-sm"
                    onclick="deleteEmployee(${emp.id})">
                    Delete
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

async function saveEmployee() {

    let id = document.getElementById("empId").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please enter all fields");
        return;
    }

    let empData = {
        name: name,
        email: email
    };

    try {

        if (id) {
            // UPDATE
            await fetch(url + "/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(empData)
            });

            alert("Employee updated");

        } else {
            // ADD
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(empData)
            });

            alert("Employee added");
        }

        clearForm();
        getEmployees();

    } catch (err) {
        console.log("Error saving data", err);
    }
}

function editEmployee(id, name, email) {

    document.getElementById("empId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
}

async function deleteEmployee(id) {

    let confirmDelete = confirm("Are you sure to delete?");

    if (!confirmDelete) return;

    try {
        await fetch(url + "/" + id, {
            method: "DELETE"
        });

        alert("Employee deleted");

        getEmployees();

    } catch (err) {
        console.log("Error deleting", err);
    }
}

function clearForm() {
    document.getElementById("empId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}