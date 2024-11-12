window.addEventListener("load",GetInfo);

function GetInfo()
{
    firstname = localStorage.getItem("firstname");
    lastname = localStorage.getItem("lastname");
    id = localStorage.getItem("studentid");
    gradelevel = localStorage.getItem("gradelevel");
    officialclass = localStorage.getItem("officialclass");
    counselor = localStorage.getItem("counselor");
	
	firstclass = localStorage.getItem("firstclass");
	firstteacher = localStorage.getItem("firstteacher");
	secondclass = localStorage.getItem("secondclass");
	secondteacher = localStorage.getItem("secondteacher");
	thirdclass = localStorage.getItem("thirdclass");
	thirdteacher = localStorage.getItem("thirdteacher");
	fourthclass = localStorage.getItem("fourthclass");
	fourthteacher = localStorage.getItem("fourthteacher");
	fifthclass = localStorage.getItem("fifthclass");
	fifthteacher = localStorage.getItem("fifthteacher");
	sixthclass = localStorage.getItem("sixthclass");
	sixthteacher = localStorage.getItem("sixthteacher");
	seventhclass = localStorage.getItem("seventhclass");
	seventhteacher = localStorage.getItem("seventhteacher");
	eighthclass = localStorage.getItem("eighthclass");
	eighthteacher = localStorage.getItem("eighthteacher");

    document.getElementById("lastn").textContent = firstname;
    document.getElementById("firstn").textContent = lastname;
    document.getElementById("studentidn").textContent = id;
    document.getElementById("gradelvl").textContent = gradelevel;
    document.getElementById("offclass").textContent = officialclass;
    document.getElementById("counselorn").textContent = counselor;
}
