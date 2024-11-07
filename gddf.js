window.addEventListener("load",addListener);
window.addEventListener("load",Init);

function Init()
{
	document.getElementById("askclass").style.display = "none"
}

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",Local);
}

function Local()
{
	localStorage.clear();
	fname = document.getElementById("txtfirstname").value;
	localStorage.setItem("firstname",fname);
	lname = document.getElementById("txtlastname").value;
	localStorage.setItem("lastname",lname);
	id = document.getElementById("txtid").value;
	localStorage.setItem("studentid",id);
	glevel = document.getElementById("txtgradelvl").value;
	localStorage.setItem("gradelevel",glevel);
	
	document.getElementById("askinfo").style.display = "none";
	document.getElementById("askclass").style.display = "block"
}
