var istatus = document.querySelector("h5");

var addfriend = document.querySelector("#add");

var removefriend = document.querySelector("#remove");


addfriend.addEventListener("click", function() {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
});

removefriend.addEventListener("click", function() {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
});