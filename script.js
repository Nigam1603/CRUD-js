var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = ReadFormData();
    if (selectedRow === null) {
        InsertNewRecord(formData)
    } else {
        updatedRecord(formData);
    }
    resetForm();
}

function ReadFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

//insert data

function InsertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

function updatedRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm("Do You Want To Delete The Record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm() {
    document.getElementById("productCode").value = "";
    document.getElementById("product").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
}