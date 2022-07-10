const DECIMAL_DELIMITER = ".";
const NULL = "0";
const PLUS_SIGN = "+";
const MINUS_SIGN = "-";
const MULT_SIGN = "*";
const DIVISION_SIGN = "/";
const EQUAL_SIGN = "=";
let components = [];

function getInput() {
    return document.getElementById("num_expression");
}

function isLastElementAction() {
    var lastEl = components[components.length - 1];
    return (([PLUS_SIGN, MINUS_SIGN, DIVISION_SIGN, MULT_SIGN].includes(lastEl))
    && components[components.length - 2] === parseFloat(getInput().value));
}

function number(clicked_id) {
    if (isLastElementAction() || getInput().value === NULL && clicked_id !== NULL) {
        getInput().value = clicked_id;
    } else if (!((getInput().value === NULL || getInput().value === "") && clicked_id === NULL)) {
        getInput().value += clicked_id;
    }
}

function inputWithoutDivAndMult(components){
    let simplifiedComponents = [];
    for (let el in components) {
        const previous = components[parseInt(el) - 1];
        const next = components[parseInt(el) + 1];
        const present = components[el];
        if (present === DIVISION_SIGN) {
            simplifiedComponents.push(previous/next);
        } else if (present === MULT_SIGN) {
            simplifiedComponents.push(previous*next);
        } else if (![MULT_SIGN, DIVISION_SIGN].includes(next) && ![MULT_SIGN, DIVISION_SIGN].includes(previous)) {
            simplifiedComponents.push(components[parseInt(el)]);
        }
    }
    return simplifiedComponents;
}

function calculation(components) {
    simplComponents = inputWithoutDivAndMult(components);
    let total = simplComponents[0];
    for (var el in simplComponents) {
        const present = simplComponents[el];
        const next = simplComponents[parseInt(el) + 1];
        if (present === PLUS_SIGN){
            total += next;
        } else if (present === MINUS_SIGN) {
            total -= next;
        }
    }
    return total;
}

function workWithAction(action) {
    let lastEl = components[components.length - 1];
    if ([PLUS_SIGN, MINUS_SIGN, DIVISION_SIGN, MULT_SIGN, EQUAL_SIGN].includes(lastEl)
    || components[components.length-2] !== getInput().value) {
        components.push(parseFloat(getInput().value), action);
    }
}

function action(clicked) {
    if (getInput().value !== "") {
        workWithAction(clicked);
        if (clicked === EQUAL_SIGN) {
            getInput().value = calculation(components);
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
    components = [];
}

function isValidKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    let lastEl = components[components.length - 1];
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
            getInput().value = calculation(components);
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