function get_input() {
    return document.getElementById('num_expression');
}

function number(clicked_id) {
    get_input().value += clicked_id;
}

function point() {
    if (!(get_input().value.includes(".") || get_input().value === '')) {
        get_input().value += ".";
    }
}

function reset() {
    get_input().value = "0";
}