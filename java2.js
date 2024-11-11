window.addEventListener("load",GetInfo);

function GetInfo()
{
    firstname = localStorage.getItem("firstname");
    lastname = localStorage.getItem("lastname");
    id = localStorage.getItem("studentid");
    gradelevel = localStorage.getItem("gradelevel");
    officialclass = localStorage.getItem("officialclass");
    counselor = localStorage.getItem("counselor");

    document.getElementById("lastn").textContent = firstname;
    document.getElementById("firstn").textContent = lastname;
    document.getElementById("studentidn").textContent = id;
    document.getElementById("gradelvl").textContent = gradelevel;
    document.getElementById("offclass").textContent = officialclass;
    document.getElementById("counselorn").textContent = counselor;
}
