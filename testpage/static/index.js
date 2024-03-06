const addedDataArray = [];

const getData = () => {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const ic = document.getElementById("ic").value;
    const cellphone = document.getElementById("cellphone").value;

    const newUser = {
        "name": name,
        "lastName": lastName,
        "ic": ic,
        "cellphone": cellphone,
    }
    addData(newUser);
}

const addData = (newUser) => {
    const table = document.getElementById("dataTable");
    const tableBody = table.children[1];
    tableBody.appendChild(document.createElement("tr"));

    for (const key in newUser) {
        const newCell = document.createElement("td");
        newCell.textContent = newUser[key];

        const rows = tableBody.children.length
        tableBody.children[rows - 1].appendChild(newCell);
    }
    addedDataArray.push(newUser)
}

const loaded = () => {
    const button = document.getElementById("sButton");
    button.addEventListener("click", getData);
}

document.addEventListener("DOMContentLoaded", loaded);