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
    offclass = document.getElementById("txtofficialclass").value;
    localStorage.setItem("officialclass",offclass);
    counselor = document.getElementById("txtcounselor").value;
    localStorage.setItem("counselor",counselor);

	document.getElementById("askinfo").style.display = "none";
	document.getElementById("askclass").style.display = "block"

    document.getElementById("btnschedule").addEventListener("click",LocalSchedule);
}

function LocalSchedule()
{
    firstclass = document.getElementById("firstclass").value;
    localStorage.setItem("firstclass",firstclass);
    firstteacher = document.getElementById("firstteacher").value;
    localStorage.setItem("firstteacher",firstteacher);

    secondclass = document.getElementById("secondclass").value;
    localStorage.setItem("secondclass",secondclass);
    secondteacher = document.getElementById("secondteacher").value;
    localStorage.setItem("secondteacher",secondteacher);

    thirdclass = document.getElementById("thirdclass").value;
    localStorage.setItem("thirdclass",thirdclass);
    thirdteacher = document.getElementById("thirdteacher").value;
    localStorage.setItem("thirdteacher",thirdteacher);

    fourthclass = document.getElementById("fourthclass").value;
    localStorage.setItem("fourthclass",fourthclass);
    fourthteacher = document.getElementById("fourthteacher").value;
    localStorage.setItem("fourthteacher",fourthteacher);

    fifthclass = document.getElementById("fifthclass").value;
    localStorage.setItem("fifthclass",fifthclass);
    fifthteacher = document.getElementById("fifthteacher").value;
    localStorage.setItem("fifthteacher",fifthteacher);

    sixthclass = document.getElementById("sixthclass").value;
    localStorage.setItem("sixthclass",sixthclass);
    sixthteacher = document.getElementById("sixthteacher").value;
    localStorage.setItem("sixthteacher",sixthteacher);

    seventhclass = document.getElementById("seventhclass").value;
    localStorage.setItem("seventhclass",seventhclass);
    seventhteacher = document.getElementById("seventhteacher").value;
    localStorage.setItem("seventhteacher",seventhteacher);

    eighthclass = document.getElementById("eighthclass").value;
    localStorage.setItem("eighthclass",eighthclass);
    eighthteacher = document.getElementById("eighthteacher").value;
    localStorage.setItem("eighthteacher",eighthteacher);

    window.location.href = "index2.html"
}
