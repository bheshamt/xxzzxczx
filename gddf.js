window.addEventListener("load",addListener);

function addListener()
{
    document.getElementById("btnname").addEventListener("click",CheckName);
    document.getElementById("btnosis").addEventListener("click",CheckOSIS);
	document.getElementById("btngrade").addEventListener("click",CheckInfo);
}

function CheckName()
{
    var first, last, msg = "The first and/or last name box is empty and/or conains numbers."

    first = document.getElementById("txtfirstname").value;
    last = document.getElementById("txtlastname").value;

    if (first == "" || last == "" || first >= 0 || last >= 0)
    {
        alert(msg)
        document.getElementById("txtfirstname").value = "";
        document.getElementById("txtlastname").value = "";
        document.getElementById("txtfirstname").focus();
    }
    else
    {
        fullname = first + " " + last;
        document.getElementById("dispname").textContent = "Name: " + fullname;
    }
}

function CheckOSIS()
{
    var nums, msg = "Please enter a valid 9 digit OSIS number."

    nums = document.getElementById("txtosis").value;

    if(nums == "" || (nums >= 999999999 || nums <= 0))
    {
        alert(msg)
        document.getElementById("txtosis").value = "";
        document.getElementById("txtosis").focus();
    }
    else
    {
        document.getElementById("disposis").textContent = "OSIS Number: " + nums;
    }
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
        document.getElementById("dispgrade").textContent = "Percent Grade: " + grade + "%";
		LetterCheck(grade);
	}
}

function LetterCheck(letter)
{
	switch(true)
	{
		case letter >= 97:
			disp = "A+";
			break;
			
		case letter >= 93:
			disp = "A";
			break;
			
		case letter >= 90:
			disp = "A-";
			break;
			
		case letter >= 87:
			disp = "B+"
			break;
			
		case letter >= 83:
			disp = "B"
			break;
			
		case letter >= 80:
			disp = "B-"
			break;
			
		case letter >= 77:
			disp = "C+"
			break;
		
        case letter >= 73:
			disp = "C"
			break;

	    case letter >= 70:
			disp = "C-"
			break;
        
        case letter >= 67:
			disp = "D+"
			break;
			
        case letter >= 66:
			disp = "D"
			break;
			
        case letter <= 65:
			disp = "F"
			break;
			
		default:
			disp = "Something went wrong...";
			break;
	}
	
	document.getElementById("displetter").textContent = "Letter Grade: " + disp;
    GPACheck(disp)
}

function GPACheck(gpa)
{
    switch(gpa)
    {
        case "A+":
            disp = "4.0"
            break;
        
        case "A":
            disp = "4.0"
            break;

        case "A-":
            disp = "3.7"
            break;

        case "B+":
            disp = "3.3"
            break;

        case "B":
            disp = "3.0"
            break;
        
        case "B-":
            disp = "2.7"
            break;

        case "C+":
            disp = "2.3"
            break;

        case "C":
            disp = "2.0"
            break;

        case "C-":
            disp = "1.7"
            break;

        case "D+":
            disp = "1.3"
            break;

        case "D":
            disp = "1.0"
            break;
    
        case "F":
            disp = "0.0"
            break;


        default:
            disp = "Something went wrong..."
            break;
    }

    document.getElementById("dispgpa").textContent = "GPA: " + disp;
}
