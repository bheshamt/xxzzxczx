window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btngrade").addEventListener("click",CheckInfo);
}

function CheckInfo()
{
	var grade, msg = "Please enter a valid grade from 0-100";
	
	grade = document.getElementById("txtgrade").value;
	
	if (grade == "" || (grade < 0 || grade > 100))
	{
		alert(msg);
		document.getElementById("txtgrade").value = "";
		document.getElementById("txtgrade").focus();
	}
	else
	{
		LetterCheck(grade);
	}
}

function LetterCheck(gpa)
{
	switch(gpa)
	{
		case 97-100:
			msgdisp = "A+";
			break;
			
		case 93-96:
			msgdisp = "A";
			break;
			
		case 92-90:
			msgdisp = "A-";
			break;
			
		case 89-87:
			mspdisp = "B+"
			break;
			
		case 83-86:
			msgdisp = "B"
			break;
			
		case 82-80:
			msgdisp = "B-"
			break;
			
		case 79-77:
			msgdisp = "C+"
			break;
			
		default:
			msgdisp = "Something went wrong...";
			break;
	}
	
	document.getElementById("dispgrade").textContent = "Letter Grade: " + msgdisp;
}
