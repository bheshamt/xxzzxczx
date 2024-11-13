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
	document.getElementById("class1d1").textContent = firstclass + "\n" + firstteacher;
	document.getElementById("class1d2").textContent = firstclass + "\n" + firstteacher;
	document.getElementById("class1d3").textContent = firstclass + "\n" + firstteacher;
	document.getElementById("class1d4").textContent = firstclass + "\n" + firstteacher;
	document.getElementById("class1d5").textContent = firstclass + "\n" + firstteacher;
	document.getElementById("class2d1").textContent = secondclass + "\n" + secondteacher;
	document.getElementById("class2d2").textContent = secondclass + "\n" + secondteacher;
	document.getElementById("class2d3").textContent = secondclass + "\n" + secondteacher;
	document.getElementById("class2d4").textContent = secondclass + "\n" + secondteacher;
	document.getElementById("class2d5").textContent = secondclass + "\n" + secondteacher;
	document.getElementById("class3d1").textContent = thirdclass + "\n" + thirdteacher;
	document.getElementById("class3d2").textContent = thirdclass + "\n" + thirdteacher;
	document.getElementById("class3d3").textContent = thirdclass + "\n" + thirdteacher;
	document.getElementById("class3d4").textContent = thirdclass + "\n" + thirdteacher;
	document.getElementById("class3d5").textContent = thirdclass + "\n" + thirdteacher;
	document.getElementById("class4d1").textContent = fourthclass + "\n" + fourthteacher;
	document.getElementById("class4d2").textContent = fourthclass + "\n" + fourthteacher;
	document.getElementById("class4d3").textContent = fourthclass + "\n" + fourthteacher;
	document.getElementById("class4d4").textContent = fourthclass + "\n" + fourthteacher;
	document.getElementById("class4d5").textContent = fourthclass + "\n" + fourthteacher;
	document.getElementById("class5d1").textContent = fifthclass + "\n" + fifthteacher;
	document.getElementById("class5d2").textContent = fifthclass + "\n" + fifthteacher;
	document.getElementById("class5d3").textContent = fifthclass + "\n" + fifthteacher;
	document.getElementById("class5d4").textContent = fifthclass + "\n" + fifthteacher;
	document.getElementById("class5d5").textContent = fifthclass + "\n" + fifthteacher;
	document.getElementById("class6d1").textContent = sixthclass + "\n" + sixthteacher;
	document.getElementById("class6d2").textContent = sixthclass + "\n" + sixthteacher;
	document.getElementById("class6d3").textContent = sixthclass + "\n" + sixthteacher;
	document.getElementById("class6d4").textContent = sixthclass + "\n" + sixthteacher;
	document.getElementById("class6d5").textContent = sixthclass + "\n" + sixthteacher;
	document.getElementById("class7d1").textContent = seventhclass + "\n" + seventhteacher;
	document.getElementById("class7d2").textContent = seventhclass + "\n" + seventhteacher;
	document.getElementById("class7d3").textContent = seventhclass + "\n" + seventhteacher;
	document.getElementById("class7d4").textContent = seventhclass + "\n" + seventhteacher;
	document.getElementById("class7d5").textContent = seventhclass + "\n" + seventhteacher;
	document.getElementById("class8d1").textContent = eighthclass + "\n" + eighthteacher;
	document.getElementById("class8d2").textContent = eighthclass + "\n" + eighthteacher;
	document.getElementById("class8d3").textContent = eighthclass + "\n" + eighthteacher;
	document.getElementById("class8d4").textContent = eighthclass + "\n" + eighthteacher;
	document.getElementById("class8d5").textContent = eighthclass + "\n" + eighthteacher;
	
}
