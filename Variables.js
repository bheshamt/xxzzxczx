window.addEventListener("load",addListener);
var ans = ""
function addListener()
{
	document.getElementById("txtres").disabled = true;
	document.getElementById("btnadd").addEventListener("click",Addition);
	document.getElementById("btnsub").addEventListener("click",Subtraction);
}

function Addition()
{
	var numone = document.getElementById("txtnum1").value;
	var numtwo = document.getElementById("txtnum2").value;
	ans = parseInt(numone) + parseInt(numtwo);
	document.getElementById("txtres").textContent = ans;
}

function Subtraction()
{
	var numone = document.getElementById("txtnum1").value;
		var numtwo = document.getElementById("txtnum2").value;
		ans = parseInt(numone) - parseInt(numtwo);
		document.getElementById("txtres").textContent = ans;
}
