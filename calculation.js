function number(clicked_id) {
    document.getElementById('num_expression').value += clicked_id;
}

function fraction() {
    if (!(document.getElementById('num_expression').value.includes("."))) {
        document.getElementById('num_expression').value += ".";
    }
}

function reset() {
    document.getElementById('num_expression').value = "";
    document.getElementById('num_expression').placeholder = "0";
}