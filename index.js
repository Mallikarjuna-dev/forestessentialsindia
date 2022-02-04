//ONCLICK IMAGE SLIDER
var index = 1 
show(index)

//previous button and next
function plus(n){
    show(index += n)
}


function show(n) {
    var allImg = document.querySelectorAll(".img_slider")

    var dots = document.querySelectorAll(".dot")
    if(n > allImg.length) {
        index = 1
    }
    if(n < 1){
        index = allImg.length
    }

    for(var i = 0 ; i < allImg.length ; i++){
        allImg[i].style.display = "none"
    }

    allImg[index-1].style.display = "block";
}


//AUTOMATIC IMAGE SLIDER 
var idx = 0
autoShow()

function autoShow(){
    var imgs = document.querySelectorAll(".img_slider")
    for(var i = 0 ; i < imgs.length ; i++){
        imgs[i].style.display = "none"
    }
    idx++;
    if(idx > imgs.length){
        idx = 1
    }
    imgs[idx - 1].style.display = "block"
    setTimeout(autoShow , 3000)
}