function allclearfun() {
    document.getElementById("inputBox").value = null;
}

function percentfun() {
    var myArray = (document.getElementById("inputBox").value).split(" ");
    if (myArray.length == 3) {
        continueans(myArray);
    } else {
        document.getElementById("inputBox").value =
            document.getElementById("inputBox").value + " % ";
    }
}

function clearfun() {
    document.getElementById("inputBox").value = (document.getElementById("inputBox").value).substring(0, (document.getElementById("inputBox").value).length - 1);
}

function divfun() {
    var myArray = (document.getElementById("inputBox").value).split(" ");
    if (myArray.length == 3) {
        continueans(myArray);
    } else {
        document.getElementById("inputBox").value =
            document.getElementById("inputBox").value + " / ";
    }
}

function mulfun() {
    var myArray = (document.getElementById("inputBox").value).split(" ");
    if (myArray.length == 3) {
        continueans(myArray);
    } else {
        document.getElementById("inputBox").value =
            document.getElementById("inputBox").value + " * ";
    }
}

function subfun() {
    var myArray = (document.getElementById("inputBox").value).split(" ");
    if (myArray.length == 3) {
        continueans(myArray);
    } else {
        document.getElementById("inputBox").value =
            document.getElementById("inputBox").value + " - ";
    }
}

function addfun() {
    var myArray = (document.getElementById("inputBox").value).split(" ");
    if (myArray.length == 3) {
        continueans(myArray);
    } else {
        document.getElementById("inputBox").value =
            document.getElementById("inputBox").value + " + ";
    }
}

function sevenfun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "7";
}

function eightfun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "8";
}

function ninefun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "9";
}

function fourfun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "4";
}

function fivefun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "5";
}

function sixfun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "6";
}

function onefun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "1";
}

function twofun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "2";
}

function threefun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "3";
}

function zerosfun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "00";
}

function zerofun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + "0";
}

function dotfun() {
    document.getElementById("inputBox").value =
        document.getElementById("inputBox").value + ".";
}

function ansfun() {
    var inputBox = document.getElementById("inputBox");
    var myArray = inputBox.value.split(" ");
    let firstNum = Number(myArray[0]);
    let secondNum = Number(myArray[2]);
    let answer;
    switch (myArray[1]) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case '-':
            answer = firstNum - secondNum;
            break;
        case '*':
            answer = firstNum * secondNum;
            break;
        case '/':
            answer = secondNum !== 0 ? firstNum / secondNum : "Error";
            break;
        case '%':
            answer = firstNum / 100;
            break;
        default:
            break;
    }
    answer = answer.toFixed(2);
    inputBox.value = answer;
}

function continueans(myArray) {
    var inputBox = document.getElementById("inputBox");
    let firstNum = Number(myArray[0]);
    let secondNum = Number(myArray[2]);
    let answer;
    switch (myArray[1]) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case '-':
            answer = firstNum - secondNum;
            break;
        case '*':
            answer = firstNum * secondNum;
            break;
        case '/':
            answer = secondNum !== 0 ? firstNum / secondNum : "Error";
            break;
        case '%':
            answer = firstNum / 100;
            break;
        default:
            break;
    }
    answer = answer.toFixed(2);
    inputBox.value = answer;
}