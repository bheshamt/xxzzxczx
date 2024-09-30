window.addEventListener("load",addListener);
var input, tempnum, tempop, res
tempnum = ""
function addListener()
{
	document.getElementById("txtnumdisplay").disabled = true;
	document.getElementById("btnclear").addEventListener("click",clear)
	document.getElementById("btn7").addEventListener("click",seven)
	document.getElementById("btn8").addEventListener("click",eight)
	document.getElementById("btn9").addEventListener("click",nine)
	document.getElementById("btn4").addEventListener("click",four)
	document.getElementById("btn5").addEventListener("click",five)
	document.getElementById("btn6").addEventListener("click",six)
	document.getElementById("btn1").addEventListener("click",one)
	document.getElementById("btn2").addEventListener("click",two)
	document.getElementById("btn3").addEventListener("click",three)
	document.getElementById("btn0").addEventListener("click",zero)
	document.getElementById("btndecimal").addEventListener("click",decimal)
	document.getElementById("btnadd").addEventListener("click",checkadd)
	document.getElementById("btnsubtract").addEventListener("click",subtract)
	document.getElementById("btnmultiply").addEventListener("click",multiply)
	document.getElementById("btndivide").addEventListener("click",divide)
}

function add()
{
    tempop = "+";
    document.getElementById("txtnumdisplay").value = "";
	enter
}

function subtract()
{
    tempop = "-";
    document.getElementById("txtnumdisplay").value = "";
	enter
}

function multiply()
{
    tempop = "x";
    document.getElementById("txtnumdisplay").value = "";
	enter
}

function divide()
{
    tempop = "/";
    document.getElementById("txtnumdisplay").value = "";
	enter
}

function enter()
{
	switch (tempop)
	{
		case "+":
			tempnum = document.getElementById("txtnumdisplay").value;
            res = parseFloat(tempnum) + parseFloat(input);
            break;
        case "-":
			tempnum = document.getElementById("txtnumdisplay").value;
            res = parseFloat(tempnum) - parseFloat(input);
            break;
        case "x":
			tempnum = document.getElementById("txtnumdisplay").value;
            res = parseFloat(tempnum) * parseFloat(input);
            break;
        case "/":
			tempnum = document.getElementById("txtnumdisplay").value;
            res = parseFloat(tempnum) / parseFloat(input);
            break;
		case "":
			alert("Please enter something.")
			break;
	}
}

function clear()
{
	document.getElementById("txtnumdisplay").value = null;
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

function decimal()
{
    if (document.getElementById("txtnumdisplay").value.includes(".")) {
        document.getElementById("txtnumdisplay").value += ".";
    }
}
