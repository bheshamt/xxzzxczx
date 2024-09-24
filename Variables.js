window.addEventListener("load",addListener);
var sum = "";
function addListener()
{
	document.getElementById("btnone").addEventListener("click",ButtonOne);
}

function ButtonOne()
{
	var numone = document.getElementById("txtnumone").value;
	sum = numone + numone;
	document.getElementById("lblanswer").textContent = sum;
}
