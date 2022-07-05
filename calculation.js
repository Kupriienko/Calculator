function get_input() {
    return document.getElementById("num_expression");
}

function number(clicked_id) {
    if (get_input().value === "0" && clicked_id !== "0") {
        get_input().value = clicked_id;
    } else if (!((get_input().value === "0" || get_input().value === "") && clicked_id === "0")) {
        get_input().value += clicked_id;
    }
}

function point() {
    if (!(get_input().value.includes(".") || get_input().value === "")) {
        get_input().value += ".";
    }
}

function reset() {
    get_input().value = "0";
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode === 48 && get_input().value === "0") {
        return false;
    } else if (get_input().value === "0" && !(charCode > 31 && (charCode < 48 || charCode > 57))) {
        get_input().value = String.fromCharCode(charCode)
        return false
    } else if (charCode === 46 && !(get_input().value.includes(".") || get_input().value === "")) {
        return true;
    } else {
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
}