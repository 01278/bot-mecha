var Osax = 10; /*osa x - přilehlá odvěsna spodnímu rameni*/
var Oxay = 10; /*osa y - protilehlá přepona spodnímu ramenu*/
var Osaz = 10; /*osa z, osa, jejíž pomocí se určuje rotace*/
var PI = 3.14159265358979323846264338327950288419716939937510;
var Krok = 1.8; /*krok motoru*/
var pA = 25.000; /*prevod*/
var rovina = 180.00000;

function windowOnload() {

}

function aritmetic() {
    /*posbírají se data z formuláře*/
    Osax = document.getElementById("osax").value;
    Osay = document.getElementById("osay").value;
    Osaz = document.getElementById("osaz").value;
    console.log(Osax);
    console.log(Osay);
    console.log(Osaz);
    /*délka prvního segmentu robota*/
    var ramenoA = 200;
    /*délka druhého segmentu robota*/
    var ramenoB = 100;
    if (Osax > ramenoA || Osax == 0) {
        document.getElementById("osaxE").innerHTML = "číslo musí větší než 0 a zároveň musí být menší než " + ramenoA;
    } else {
        console.log(PI);
        console.log(Krok);
        console.log(pA);
        console.log(rovina);
        document.getElementById("osaxE").innerHTML = "";
        /*počítá se úhel pomocí cosinuse*/
        var D = new Big(Osax);
        D = D.div(ramenoA);
        console.log(D + " tady bude číslo s bigu");
        var E = Math.acos(D);
        var F = Big(E);
        console.log(E + " zde se nachází asin");
        F = F.times(180.00000000000000000000000000000);
        F = F.div(PI);
        console.log(F + "úhel");
        F = new Big(F);
        /*otáčky ramena po převodu*/
        F = F.div(Krok);
        /*otáčky motoru*/
        F = F.times(pA);
        var steps = F / Krok * pA;
        console.log(F);
        console.log(steps);
        /*počítá se výška do které rameno bude dosahovat*/
        var v1 = Math.pow(ramenoA, 2) - Math.pow(Osax, 2);
        v1 = Math.sqrt(v1);
        console.log(v1 + "v1");
        /*odečte se od celkové požadované výšky*/
        /*dočasně přeskočeno, vrátím se k tomu později*/
        var Osaxa = new Big(Osax);
        var v2 = Osaxa.minus(10);
        var V2 = v1 - Osax;
        console.log(v2);
        console.log(V2);
    }
    if (Osay > ramenoB || Osay == 0) {
        document.getElementById("osayE").innerHTML = "číslo musí být větší než 0 a zároveň musí být menší než" + ramenoB;
    } else {
        document.getElementById("osayE").innerHTML = "";
    }

}