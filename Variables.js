window.addEventListener("load",addListener);
var firstname, lastname, fullname;
function addListener()
{
	document.getElementByID("btnsubmit").addEventListener("click",fullname);
}

function fullname()
{
	firstname = document.getElementById("txtfirstname").value;
	lastname = document.getElementById("txtlastname").value;
	if (firstname == "" || lastname == "")
	{
		alert("Either the first or last name is missing!")
		CheckFocus();
	}
	else
	{
		fullname = firstname + " " + lastname;
		document.getElementById(lblmessage).textContent = "Hello " + fullname;
	}
}

export function CheckFocus()
{
	if (firstname == "")
	{
		document.GetElementByID("txtfirstname").focus();
	}
	else
	{
		document.GetElementById("txtlastname").focus();
	}
}
