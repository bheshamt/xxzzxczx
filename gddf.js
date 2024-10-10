window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btngrade").addEventListener("click",CheckGrade);
}

function CheckGrade()
{
	var grade, msg = "Please enter the proper grade from 0-100";
	
	grade = document.getElementById("txtgrade").value;
	
	if (grade == "" || (grade < 0 || grade > 100))
	{
		alert(msg);
		document.getElementById("txtgrade").value = "";
	}
	else
	{
		GPAGrade(checkgpa);
	}
}

function GPAGrade(gpa)
{
	switch(gpa)
	{
		case "66":
			msgdisp = "66";
			break;
			
		default:
			msgdisp = "Not a valid grade.";
			break;
	}
	
	document.getElementById("lblgrade").textContent = msgdisp;
}
