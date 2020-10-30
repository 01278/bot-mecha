function Returna() {
    let a = document.getElementById("osax").value;
    return a;
}

function Returnb() {
    let b = document.getElementById("osay").value;
    return b;
}

function Returnc() {
    let c = document.getElementById("osaz").value;
    return c;
}

function FunkceB() {
    a = Returna();
    b = Returnb();
    c = Returnc();
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let d = a / b;
    d = parseInt(d);
    let e = Math.atan(d);
    return e;
}

function myAlert() {
    alert(e.value);
}