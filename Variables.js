window.addEventListener("load",addListener);
var num1, num2, res;
res = ""
function addListener()
{
	document.getElementById("txtres").disabled = true;
	document.getElementById("btnadd").addEventListener("click",Addition);
	document.getElementById("btnsub").addEventListener("click",Subtraction);
	document.getElementById("btnmult").addEventListener("click",Multiplication);
	document.getElementById("btndiv").addEventListener("click",Division);
	document.getElementById("btnclear").addEventListener("click",Clear);
}

function Addition()
{
	var num1 = document.getElementById("txtnum1").value
	var num2 = document.getElemntById("txtnum2").value
	res = parseInt(num1) + parseint(num2);
	document.getElementById("txtres").textContent = res;
}
