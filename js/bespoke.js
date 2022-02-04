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

document.querySelector("#pay_and_schedule_button").addEventListener("click", function(event){
    event.preventDefault();
    alert("Your Schedule as been booked");
})