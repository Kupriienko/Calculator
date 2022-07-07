var allInput = ''

function getInput() {
    return document.getElementById("num_expression");
}

function IsLastElementAction() {
    var lastEl = allInput[allInput.length-1];
    return (lastEl === "+" || lastEl === "-" || lastEl === "/" || lastEl === "*")
}

function number(clicked_id) {
    if (IsLastElementAction()) {
        getInput().value = clicked_id;
        allInput += clicked_id;
    } else if (getInput().value === "0" && clicked_id !== "0") {
        getInput().value = clicked_id;
        allInput = clicked_id;
    } else if (!((getInput().value === "0" || getInput().value === "") && clicked_id === "0")) {
        allInput += clicked_id;
        getInput().value += clicked_id;
    }
    console.log(allInput)
}

function workWithAction(action) {
    var lastEl = allInput[allInput.length-1]
    if (lastEl !== "+" && lastEl !== "-" && lastEl !== "/" && lastEl !== "*") {
        allInput += action;
    }
}

function action(clicked_id) {
    if (getInput().value !== "") {
        if (clicked_id === "add") {
            workWithAction("+")
        }
        if (clicked_id === "div") {
            workWithAction("/")
        }
        if (clicked_id === "sub") {
            workWithAction("-")
        }
        if (clicked_id === "mult") {
            workWithAction("*")
        }
        if (clicked_id === "sum") {
        getInput().value = math.evaluate(allInput);
        allInput = getInput().value;
        }
    }
}

function point() {
    if (!(getInput().value.includes(".") || getInput().value === "")) {
        getInput().value += ".";
        allInput += ".";
    }
}

function reset() {
    getInput().value = "0";
    allInput = "";
}

function isValidKey(evt) {
    console.log(allInput)
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var lastEl = allInput[allInput.length-1];
    if ((charCode === 45 || charCode === 43 || charCode === 42 || charCode === 47 || charCode === 61)
        && getInput().value !== "") {
        if (getInput().value !== "") {
            if (charCode === 43) {
                workWithAction("+");
                return false;
            }
            if (charCode === 47) {
                workWithAction("/");
                return false;
            }
            if (charCode === 45) {
                workWithAction("-");
                return false;
            }
            if (charCode === 42) {
                workWithAction("*");
                return false;
            }
            if (charCode === 61) {
                getInput().value = math.evaluate(allInput);
                allInput = getInput().value;
                return false;
            }
        }
    } else if (IsLastElementAction()) {
        getInput().value = String.fromCharCode(charCode);
        allInput += String.fromCharCode(charCode);
        console.log("A")
        return false;
    } else if (getInput().value === "0" && !(charCode > 31 && (charCode < 48 || charCode > 57))) {
        console.log("C")
        allInput = String.fromCharCode(charCode);
        getInput().value = String.fromCharCode(charCode);
        return false;
    } else if (charCode === 46 && !(getInput().value.includes(".") || getInput().value === "")) {
        console.log("D")
        allInput += ".";
        return true;
    } else if (!(charCode > 31 && (charCode < 48 || charCode > 57))){
        console.log("E")
        allInput += String.fromCharCode(charCode);
        return true;
    } else {
        console.log("G")
        return false;
    }
}