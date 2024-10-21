window.addEventListener("load", addListener);

let totalGrades = 0;
let numGrades = 0; 
let howMany = 0;

function addListener()
{
    document.getElementById("btnsubmit").addEventListener("click", Loop);
}

function Loop()
{
    howMany = parseFloat(document.getElementById("txtinput").value);

    totalGrades = 0;
    numGrades = 0;

    ForLoop(howMany);
}

function ForLoop(howMany)
{
	document.getElementById("txtinput").textContent = null;
    for (let i = 0; i < howMany; i++)
    {
        document.getElementById("lblinput").textContent = "Enter the grade: ";
		document.getElementById("btnsubmit").addEventListener("click", Askg);

    }
}

function Askg()
{
	for (let i = 0; i < howMany; i++)
	{
		let grade = document.getElementById("txtinput").value;
		
		totalGrades += grade;
		numGrades++;
	}
	Average();
}

function Average()
{
    let avg = totalGrades / numGrades;
    gpa = convertToGPA(avg);

    document.getElementById("lbldisp").textContent = "\n Average Grade: " + avg + "\n GPA: " + gpa;
}

function convertToGPA(avg)
{
    switch(true)
    {
        case avg >= 90:
            return "4.0";
        
        case avg >= 80:
            return "3.0";
    
        case avg >= 70:
            return "2.0";

        case avg >= 60:
            return "1.0";
        
        default:
            return "0.0";
    }
}
