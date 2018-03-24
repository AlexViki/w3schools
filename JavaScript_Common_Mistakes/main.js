// Expecting Loose Comparison
var btn1 = document.getElementById('btn1');
var	btn2 = document.getElementById('btn2');
var bl2 = document.getElementById('bl2');
var p = document.createElement('p');
var num1 = 100;
var num2 = "100";

p.setAttribute("class", "style-result");
//console.log(p);
btn1.onclick = runRegularComp;
btn2.onclick = runStrictComp;

function runRegularComp () {
    var textOut = "In regular comparison, data type does not matter. This if statement returns true.";
    p.innerHTML = textOut + " Result: " + "<b>" + (num1 == num2) + "</b>";
    bl2.appendChild(p);
}
function runStrictComp() {
    "use strict";
    var textOut = "In strict comparison, data type does matter. This if statement returns false.";
    p.innerHTML = textOut + " Result: " + "<b>" + (num1 === num2) + "</b>";
    bl2.appendChild(p);
}

// Misunderstanding Floats
var btn3 = document.getElementById("btn3");
var bl3 = document.getElementById("bl3");
var p3 = document.createElement("p");
var val1 = 0.1;
var val2 = 0.2;
var res, res2;

res = val1 + val2;
res2 = (val1 * 10 + val2 * 10) / 10;
p3.setAttribute("class", "style-result");

btn3.onclick = runCalcFloats;
function runCalcFloats() {
    var textOut = "Result: ";
    var textOut3 = "To solve the problem above, it helps to multiply and divide";
    p3.innerHTML = textOut + val1 + " + " + val2 +
        " = " + res + "<br>" + textOut3 + "<br>" + textOut + res2;
    bl3.appendChild(p3);
}

// Breaking a JavaScript String
runCheckBreaking();
function runCheckBreaking () {
    var bl4 = document.getElementById('bl4');
    var exm1 = document.createElement("p");
    var exm2 = document.createElement("p");
    var exm3 = document.createElement("p");
    var textOutExm1 =
        "JavaScript will allow you to break a statement into two lines" +
        "<br>" + "var x = <br>'Hi Alex';";
    var textOutExm2 =
        "But, breaking a statement in the middle of a string will not work" + "<br>" + "var x ='Hi <br> Alex';";
    var textOutExm3 =
        "You must use a 'backslash' if you must break a statement in a string" + "<br>" + "var x = 'Hi \\<br> Alex';";
    var atrCls = "class";
    var atrValue = "style-result";
    var atrId = "id";
    var len = bl4.getElementsByTagName("p");

    innerFun (exm1, textOutExm1, bl4);
    innerFun (exm2, textOutExm2, bl4);
    innerFun (exm3, textOutExm3, bl4);
    
    function innerFun (ar1, ar2, ar3) {
        ar1.setAttribute(atrCls, atrValue);
        ar1.innerHTML = ar2;
        ar3.appendChild(ar1);
        console.log();
    }

}