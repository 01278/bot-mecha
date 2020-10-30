var A = 10;
var B = 10;
var C = 10;

function windowOnload() {

}

function aritmetic() {
    A = document.getElementById("osax").value;
    B = document.getElementById("osay").value;
    C = document.getElementById("osaz").value;
    console.log(A);
    console.log(B);
    console.log(C);
    A = parseFloat(A);
    B = parseFloat(B);
    C = parseFloat(C);
    var D = A / B;
    D = parseFloat(D);
    var E = Math.asin(D);
    E = parseFloat(E);
    var F = E * 180 / Math.PI;
    console.log(F);
}