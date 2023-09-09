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

// function clear2fun() {
//     document.getElementById("inputBox").value = (document.getElementById("inputBox").value).substring(0, (document.getElementById("inputBox").value).length - 2);
// }

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
    var myArray = (document.getElementById("inputBox").value).split(" ");
    let firstNum = Number(myArray[0]);
    let secondtNum = Number(myArray[2]);
    switch (myArray[1]) {
        case '+':
            (document.getElementById("inputBox").value) = firstNum + secondtNum;
            break;
        case '-':
            (document.getElementById("inputBox").value) = firstNum - secondtNum;
            break;
        case '*':
            (document.getElementById("inputBox").value) = firstNum * secondtNum;
            break;
        case '/':
            (document.getElementById("inputBox").value) = firstNum / secondtNum;
            break;
        case '%':
            (document.getElementById("inputBox").value) = firstNum / 100;
            break;
        default:
            break;
    }
}

function continueans(myArray) {
    var myArray = (document.getElementById("inputBox").value).split(" ");
    let firstNum = Number(myArray[0]);
    let secondtNum = Number(myArray[2]);
    switch (myArray[1]) {
        case '+':
            (document.getElementById("inputBox").value) = firstNum + secondtNum;
            break;
        case '-':
            (document.getElementById("inputBox").value) = firstNum - secondtNum;
            break;
        case '*':
            (document.getElementById("inputBox").value) = firstNum * secondtNum;
            break;
        case '/':
            (document.getElementById("inputBox").value) = firstNum / secondtNum;
            break;
        case '%':
            (document.getElementById("inputBox").value) = firstNum / 100;
            break;
        default:
            break;
    }
}