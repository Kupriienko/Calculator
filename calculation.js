function getInput() {
    return document.getElementById("num_expression");
}

function number(clicked_id) {
    if (getInput().value === "0" && clicked_id !== "0") {
        getInput().value = clicked_id;
    } else if (!((getInput().value === "0" || getInput().value === "") && clicked_id === "0")) {
        getInput().value += clicked_id;
    }
}

function point() {
    if (!(getInput().value.includes(".") || getInput().value === "")) {
        getInput().value += ".";
    }
}

function reset() {
    getInput().value = "0";
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 48 && getInput().value === "0") {
        return false;
    } else if (getInput().value === "0" && !(charCode > 31 && (charCode < 48 || charCode > 57))) {
        getInput().value = String.fromCharCode(charCode);
        return false;
    } else if (charCode === 46 && !(getInput().value.includes(".") || getInput().value === "")) {
        return true;
    } else {
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
}