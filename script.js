let feet = document.getElementById("feet");
let meter = document.getElementById("meter");
let inch = document.getElementById("inches");
let cm = document.getElementById("cm");
let yard = document.getElementById("yards");
let km = document.getElementById("km");
let mile = document.getElementById("miles");

function feetToOthers(val){
    meter.value = val/3.2808;
    inch.value = val*12;
    cm.value  = val/0.032808;
    yard.value = val*0.33333;
    km.value = val/3280.8;
    mile.value = val/0.00018939;
}

function meterToOthers(val){
    feet.value = val*3.2808;
    inch.value = val*39.370;
    cm.value  = val/0.01;
    yard.value = val*1.0936;
    km.value = val/1000;
    mile.value = val/0.00062137;
}

function inchesToOthers(val){
    feet.value = val*0.083333;
    meter.value = val/39.370;
    cm.value  = val/0.039370;
    yard.value = val*0.0277778;
    km.value = val/39370;
    mile.value = val/0.000015783;
}


function cmToOthers(val){
    feet.value = val*0.032808;
    meter.value = val/100;
    inch.value  = val/0.39370;
    yard.value = val*0.010936;
    km.value = val/100000;
    mile.value = val*0.0000062137;
}

function yardToOthers(val){
    feet.value = val*3;
    inch.value = val*36;
    cm.value  = val/0.010936;
    meter.value = val/1.0936;
    km.value = val/1093.6;
    mile.value = val/0.00056818;
}

function kmToOthers(val){
    feet.value = val*3280.8;
    inch.value = val*39370;
    cm.value  = val*100000;
    yard.value = val*1093.6;
    meter.value = val*1000;
    mile.value = val*0.62137;
}

function milesToOthers(val){
    feet.value = val*5280;
    inch.value = val*63360;
    cm.value  = val/0.0000062137;
    yard.value = val*1760;
    km.value = val*0.62137;
    meter.value = val/0.00062137;
}

function convertToOthers(convertFrom,value){
    switch(convertFrom){
        case "feet" : feetToOthers(parseFloat(value));break;
        case "meter" : meterToOthers(parseFloat(value));break;
        case "inches" : inchesToOthers(parseFloat(value));break;
        case "cm" : cmToOthers(parseFloat(value));break;
        case "yards" : yardToOthers(parseFloat(value));break;
        case "km" : kmToOthers(parseFloat(value));break;
        case "miles" : milesToOthers(parseFloat(value));break;
    }
}