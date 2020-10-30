function myAlert(a) {
    Window.alert(a.value);
}

function mujAlert() {
    var osax = document.getElementById("osax.value"); /*data pro pohyb po ose x*/
    var osay = document.getElementById("osay.value"); /*data pro pohyb po ose y*/
    var osaz = document.getElementById("osaz.value"); /*data pro pohyb po ose z*/
    /*naparsuje je na čisla*/
    osax = parseInt(osax);
    osay = parseInt(osay);
    osaz = parseInt(osaz);
    var a = osax;
    var b = osay;
    a = parseInt(a);
    b = parseInt(b);
    var h = Math. /*s*/ atan(a / b);
    return h;
    myAlert(h);
}


/*ty kreténe, žádná chyba tam není*/