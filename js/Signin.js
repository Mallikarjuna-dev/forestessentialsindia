document.querySelector("#signin_form_button").addEventListener("click", login);
var registeruser=JSON.parse(localStorage.getItem("UserData"))||[];
function login(event) {
    event.preventDefault();
    var emailphn=document.querySelector("#sign_form_input_email").value;
    var password=document.querySelector("#sign_form_input_password").value;
    if(emailphn=="" || password==""){
        alert("ERROR ! fill all empty slot")
    }
    else{
        for(var i=0; i<registeruser.length; i++){
            if(registeruser[i].useremail==emailphn){
                if(registeruser[i].userpassword==password){
                    window.location.href = "../index.html";
                    return;
                }
                else{
                    alert("ERROR ! Password wrong")
                }
            }
        }
        return alert("Not registered use! Sign Up first");
    }
}

document.querySelector("#signup_form_button").addEventListener("click", function(){
    window.location.href = "Signup.html"
});


    //SHOW ON CLICK SEARCH
document.querySelector("#search").addEventListener("click" , showSearchBar)

function showSearchBar(){
    var showhidesearch = document.querySelector("#hide")
    showhidesearch.style.display = "block"

    var hidenav = document.querySelector(".navbar--2")
    hidenav.style.display = "none"
}


document.querySelector("#show").addEventListener("click" , function(){
    var showhidesearch = document.querySelector("#hide")
    showhidesearch.style.display = "none"

    var hidenav = document.querySelector(".navbar--2")
    hidenav.style.display = "block"
})



//FOR THE NOTIFICATION SLIDER
var notifyIndx = 0
notifyslider(notifyIndx)


function notifyslider(){
var n = document.querySelectorAll(".notify")
for(var i = 0 ; i < n.length ; i++){
    n[i].style.display = "none"
}
notifyIndx++;
if(notifyIndx > n.length){
    notifyIndx = 1
}
n[notifyIndx - 1].style.display = "block"
setTimeout(notifyslider , 3000)
}


//HEADER CSS CHANGE WHILE ON SCROLL
var header = document.querySelector(".navbar")
window.onscroll = function (e) {
if(window.scrollY > 80){
    console.log(header.classList)
    header.classList.add("nav_scroll")
    
}else{
    header.classList.remove("nav_scroll")

}
};