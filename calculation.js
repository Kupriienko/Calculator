function get_input() {
    return document.getElementById('num_expression');
}

function number(clicked_id) {
    get_input().value += clicked_id;
}

function fraction() {
    if (!(get_input().value.includes(".") || get_input().value.length == 0)) {
        get_input().value += ".";
    }
}

function reset() {
    get_input().value = "0";
}