var a = 100;
var b = 100;
var c = 100;
var d = 100;

function windowOnload() {
    a = document.getElementById("osax").value;
    b = document.getElementById("osay").value;
    c = document.getElementById("osaz").value;
    console.log(a);
    console.log(b);
    console.log(c);
}

function myAlert() {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    var rameno1 = 200
    lo

    if (a != 0 && b == 0) {
        d = a / rameno1;
        d = parseFloeat(d);
        d = Math.acos(d);
    } else if (a == 0 && b != 0) {
        d = b / rameno1;
        d = parseFloat(d);
        d = Math.asin(d);
    }
    d = Math.asin(d);
    alert(d);
}