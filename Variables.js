window.addEventListener("load",addListener);
var tempnum, tempop, res
tempnum = ""
function addListener()
{
	document.getElementById("txtnumdisplay").disabled = true;
	document.getElementById("btnclear").addEventListener("click",clear)
	document.getElementById("btnpi").addEventListener("click",pi)
	document.getElementById("btnsquareroot").addEventListener("click",squareroot)
	document.getElementById("btnsquare").addEventListener("click",square)
	document.getElementById("btnpercent").addEventListener("click",percent)
	document.getElementById("btnln").addEventListener("click",ln)
	document.getElementById("btnlog").addEventListener("click",log)
	document.getElementById("btnexponent").addEventListener("click",exponent)
	document.getElementById("btnflip").addEventListener("click",flip)
	document.getElementById("btndivide").addEventListener("click",divide)
	document.getElementById("btncos").addEventListener("click",cosine)
	document.getElementById("btn7").addEventListener("click",seven)
	document.getElementById("btn8").addEventListener("click",eight)
	document.getElementById("btn9").addEventListener("click",nine)
	document.getElementById("btnmultiply").addEventListener("click",multiply)
	document.getElementById("btnsin").addEventListener("click",sine)
	document.getElementById("btn4").addEventListener("click",four)
	document.getElementById("btn5").addEventListener("click",five)
	document.getElementById("btn6").addEventListener("click",six)
	document.getElementById("btnsubtract").addEventListener("click",subtract)
	document.getElementById("btntan").addEventListener("click",tangent)
	document.getElementById("btn1").addEventListener("click",one)
	document.getElementById("btn2").addEventListener("click",two)
	document.getElementById("btn3").addEventListener("click",three)
	document.getElementById("btnadd").addEventListener("click",add)
	document.getElementById("btnradians").addEventListener("click", radian);
	document.getElementById("btndegrees").addEventListener("click",degree)
	document.getElementById("btn0").addEventListener("click",zero)
	document.getElementById("btndecimal").addEventListener("click",decimal)
	document.getElementById("btnenter").addEventListener("click",enter)
}

function clear()
{
	document.getElementById("txtnumdisplay").value = null;
}

function pi()
{
	tempop = document.getElementById("txtnumdisplay").value = "π"
}
function squareroot(){ document.getElementById("txtnumdisplay").value = "√" }
function square()
{
    var input = document.getElementById("txtnumdisplay").value;
    document.getElementById("txtnumdisplay").value = Math.pow(input, 2);
}

function percent()
{
    var input = document.getElementById("txtnumdisplay").value;
    document.getElementById("txtnumdisplay").value = input / 100;
}

function ln()
{
    var input = document.getElementById("txtnumdisplay").value;
    document.getElementById("txtnumdisplay").value = Math.log(input);
}

function log()
{
    var input = document.getElementById("txtnumdisplay").value;
    document.getElementById("txtnumdisplay").value = Math.log10(input);
}

function exponent()
{
    var input = document.getElementById("txtnumdisplay").value;
    document.getElementById("txtnumdisplay").value += "e";
}

function flip()
{
    var input = document.getElementById("txtnumdisplay").value;
    document.getElementById("txtnumdisplay").value = -input;
}

function divide()
{
    tempnum = document.getElementById("txtnumdisplay").value;
    tempop = "/";
    document.getElementById("txtnumdisplay").value = "";
}

function cosine()
{
    var input = document.getElementById("txtnumdisplay").value;
    if (mode === "degrees") {
        document.getElementById("txtnumdisplay").value = Math.cos(input * Math.PI / 180);
    } else {
        document.getElementById("txtnumdisplay").value = Math.cos(input);
    }
}

function sine()
{
    var input = document.getElementById("txtnumdisplay").value;
    if (mode === "degrees") {
        document.getElementById("txtnumdisplay").value = Math.sin(input * Math.PI / 180);
    } else {
        document.getElementById("txtnumdisplay").value = Math.sin(input);
    }
}

function tangent()
{
    var input = document.getElementById("txtnumdisplay").value;
    if (mode === "degrees") {
        document.getElementById("txtnumdisplay").value = Math.tan(input * Math.PI / 180);
    } else {
        document.getElementById("txtnumdisplay").value = Math.tan(input);
    }
}

function degree()
{
    mode = "degrees";
}

function radian()
{
    mode = "radians";
}

function enter()
{
    input = document.getElementById("txtnumdisplay").value;
    switch (tempop)
	{
        case "+":
            res = parseFloat(tempnum) + parseFloat(input);
            break;
        case "-":
            res = parseFloat(tempnum) - parseFloat(input);
            break;
        case "*":
            res = parseFloat(tempnum) * parseFloat(input);
            break;
        case "/":
            res = parseFloat(tempnum) / parseFloat(input);
            break;
		case "":
			alert("Please enter something.")
			break;
        default:
            res = input;
            break;
    }
    document.getElementById("txtnumdisplay").value = res;
    tempnum = null;
    tempop = null;
}

function seven() {
    input = document.getElementById("txtnumdisplay").value += "7";
}

function eight()
{
    input = document.getElementById("txtnumdisplay").value += "8";
}

function nine() {
    input = document.getElementById("txtnumdisplay").value += "9";
}

function four() {
    input = document.getElementById("txtnumdisplay").value += "4";
}

function five() {
    input = document.getElementById("txtnumdisplay").value += "5";
}

function six() {
    input = document.getElementById("txtnumdisplay").value += "6";
}

function one()
{
    input = document.getElementById("txtnumdisplay").value += "1";
}

function two()
{
    input = document.getElementById("txtnumdisplay").value += "2";
}

function three()
{
    input = document.getElementById("txtnumdisplay").value += "3";
}

function zero()
{
    input = document.getElementById("txtnumdisplay").value += "0";
}

function multiply()
{
    tempnum = document.getElementById("txtnumdisplay").value;
    tempop = "*";
    document.getElementById("txtnumdisplay").value = "";
}

function subtract()
{
    tempnum = document.getElementById("txtnumdisplay").value;
    tempop = "-";
    document.getElementById("txtnumdisplay").value = "";
}

function add()
{
    tempnum = document.getElementById("txtnumdisplay").value;
    tempop = "+";
    document.getElementById("txtnumdisplay").value = "";
}

function btnDecimal()
{
    if (document.getElementById("txtnumdisplay").value.includes(".")) {
        document.getElementById("txtnumdisplay").value += ".";
    }
}
