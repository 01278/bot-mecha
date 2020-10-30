var A = 10; /*osa x - přilehlá odvěsna spodnímu rameni*/
var B = 10; /*osa y - protilehlá přepona spodnímu ramenu*/
var C = 10; /*osa z, osa, jejíž pomocí se určuje rotace*/
var PI = 3.14159265358979323846264338327950288419716939937510;
var Krok = 1.8; /*krok motoru*/
var pA = 25.000 /*prevod*/

function windowOnload() {

}

function aritmetic() {
    /*posbírají se data z formuláře*/
    A = document.getElementById("osax").value;
    B = document.getElementById("osay").value;
    C = document.getElementById("osaz").value;
    console.log(A);
    console.log(B);
    console.log(C);
    /*délka prvního segmentu robota*/
    var ramenoA = 200;
    /*délka druhého segmentu robota*/
    var ramenoB = 100;
    if (A > ramenoA || A == 0) {
        document.getElementById("osaxE").innerHTML = "číslo musí větší než 0 a zároveň musí být menší než " + ramenoA;
    } else {
        document.getElementById("osaxE").innerHTML = "";
        /*počítá se úhel pomocí cosinuse*/
        var D = new Big(A);
        D = D.div(ramenoA);
        console.log(D + " tady bude číslo s bigu");
        var E = Math.acos(D);
        var F = Big(E);
        console.log(E + " zde se nachází asin");
        F = F.times(180.00000000000000000000000000000);
        F = F.div(PI);
        console.log(F + "úhel");
        var G = new Big(F);
        /*otáčky ramena po převodu*/
        G = G.div(Krok);
        /*otáčky motoru*/
        G = G.times(pA);
        console.log(G);
        /*počítá se výška do které rameno bude dosahovat*/
        var v1 = Math.pow(ramenoA, 2) - Math.pow(A, 2);
        v1 = Math.sqrt(v1);
        console.log(v1 + "v1");
        /*odečte se od celkové požadované výšky*/
        /*dočasně přeskočeno, vrátím se k tomu později*/
    }
    if (B > ramenoB || B == 0) {
        document.getElementById("osayE").innerHTML = "číslo musí být větší než 0 a zároveň musí být menší než" + ramenoB;
    } else {
        document.getElementById("osayE").innerHTML = "";
    }

}