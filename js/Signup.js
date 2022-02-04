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

// MAIN SIGNUP CONTENT STARTS FROM HERE

// FUNCTION TO ADD USER INFO IN LOCAL STORAGE 
document.querySelector("#signup_button").addEventListener("click", adddata);
    var userdata=JSON.parse(localStorage.getItem("UserData"))||[];
    function adddata(event) {
        event.preventDefault();
        var title=document.querySelector("#signup_pleaseselect").value;
        var firstname=document.querySelector("#firstname").value;
        var lastname=document.querySelector("#lastname").value;
        var email=document.querySelector("#customeremail").value;
        var phone=document.querySelector("#customerphnnum").value;
        var pass=document.querySelector("#password").value;
        var confirmpass = document.querySelector("#confirmpassword").value
        
        if(title=="" || firstname=="" || lastname=="" || email=="" || phone==""  || pass=="" || confirmpass==""){
            alert("ERROR! fill all empty slot");
        }
        else if(pass !== confirmpass){
            alert("ERROR! Check password carefully");
        }
        else{
            var obj={
                usertitle: title,
                userfname: firstname,
                userlname: lastname,
                useremail: email,
                userphone: phone,
                userpassword: pass
            }
            userdata.push(obj);
            localStorage.setItem("UserData", JSON.stringify(userdata));
            alert("You have successfully SIGNED UP, Now LOG IN");
        }
    }