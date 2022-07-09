const DECIMAL_DELIMITER = ".";
const NULL = "0";
const PLUS_SIGN = "+"
const MINUS_SIGN = "-"
const MULT_SIGN = "*"
const DIVISION_SIGN = "/"
const EQUAL_SIGN = "="
var allInput = [];

function getInput() {
    return document.getElementById("num_expression");
}

function isLastElementAction() {
    var lastEl = allInput[allInput.length-1];
    return ((lastEl === PLUS_SIGN || lastEl === MINUS_SIGN || lastEl === DIVISION_SIGN || lastEl === MULT_SIGN)
    && allInput[allInput.length-2] === parseFloat(getInput().value));
}

function number(clicked_id) {
    if (isLastElementAction() || getInput().value === NULL && clicked_id !== NULL) {
        getInput().value = clicked_id;
    } else if (!((getInput().value === NULL || getInput().value === "") && clicked_id === NULL)) {
        getInput().value += clicked_id;
    }
}

function calculation(allInput) {
    var total = allInput[0];
    for (var el in allInput) {
        if (allInput[el] === PLUS_SIGN){
            total += allInput[parseInt(el)+1];
        } else if (allInput[el] === MINUS_SIGN) {
            total -= allInput[parseInt(el)+1];
        } else if (allInput[el] === DIVISION_SIGN) {
            total /= allInput[parseInt(el)+1];
        } else if (allInput[el] === MULT_SIGN) {
            total *= allInput[parseInt(el)+1];
        }
    }
    return total;
}

function workWithAction(action) {
    var lastEl = allInput[allInput.length-1];
    if ((lastEl !== PLUS_SIGN && lastEl !== MINUS_SIGN && lastEl !== DIVISION_SIGN
    && lastEl !== MULT_SIGN && lastEl !== EQUAL_SIGN)
    || allInput[allInput.length-2] !== getInput().value) {
        allInput.push(parseFloat(getInput().value), action);
    }
}

function action(clicked) {
    if (getInput().value !== "") {
        workWithAction(clicked);
        if (clicked === EQUAL_SIGN) {
            getInput().value = calculation(allInput);
            allInput = [];
        }
    }
}

function point() {
    if (!(getInput().value.includes(DECIMAL_DELIMITER) || getInput().value === "")) {
        getInput().value += DECIMAL_DELIMITER;
    }
}

function reset() {
    getInput().value = NULL;
    allInput = [];
}

function isValidKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var lastEl = allInput[allInput.length-1];
    if (getInput().value !== "") {
        if (charCode === 43) {
            workWithAction(PLUS_SIGN);
            return false;
        }
        if (charCode === 47) {
            workWithAction(DIVISION_SIGN);
            return false;
        }
        if (charCode === 45) {
            workWithAction(MINUS_SIGN);
            return false;
        }
        if (charCode === 42) {
            workWithAction(MULT_SIGN);
            return false;
        }
        if (charCode === 61) {
            workWithAction(EQUAL_SIGN)
            getInput().value = calculation(allInput);
            allInput = [];
            return false;
        }
    }
    if ((getInput().value === NULL && !(charCode > 31 && (charCode < 48 || charCode > 57))) || isLastElementAction()) {
        getInput().value = String.fromCharCode(charCode);
        return false;
    } else if ((charCode === 46 && !(getInput().value.includes(DECIMAL_DELIMITER) || getInput().value === "")) ||
    !(charCode > 31 && (charCode < 48 || charCode > 57))) {
        return true;
    } else {
        return false;
    }
}