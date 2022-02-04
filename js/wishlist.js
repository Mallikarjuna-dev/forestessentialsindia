var data = JSON.parse(localStorage.getItem("wishlist"));
cart = JSON.parse(localStorage.getItem("cart")) || [];
displayItem(data);
function displayItem(data){
    document.querySelector(".wishlistproducts").innerHTML="";
     data.map(function(elem,index){
    var maindiv = document.createElement("div");
    maindiv.setAttribute("class","maindiv");
   
    var imagediv = document.createElement("div");
    var namediv = document.createElement("div");
    var pricediv = document.createElement("div");
    var cartbuttondiv = document.createElement("div");
    var deletebuttondiv = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src",elem.imgUrl);
    image.style.width="200px";
    image.style.height="200px";
    imagediv.append(image);
    
    var name = document.createElement("p");
    name.textContent= elem.prodhead;
    name.style.fontSize="12px";
    name.style.marginTop="85px";
    name.style.letterSpacing="2px";
    namediv.append(name);
   
    var price = document.createElement("p");
    price.textContent = elem.prodprice;
    price.style.fontSize="15px";
    price.style.marginTop="90px";
    price.style.marginLeft="40px";
    pricediv.append(price);
   
    var cartbutton = document.createElement("button");
    cartbutton.textContent= "ADD TO CART";
    cartbutton.style.width="150px"
    cartbutton.style.height="50px";
    cartbutton.style.backgroundColor="white";
    cartbutton.style.border="white";
    cartbutton.style.marginTop="75px";
    cartbutton.style.cursor="pointer";
    cartbutton.addEventListener("click",addfunc);
    function addfunc(){
    addtocart(elem);
    }
    cartbuttondiv.append(cartbutton);
   
    var deletebutton = document.createElement("button");
    deletebutton.textContent="X";
    deletebutton.style.width="150px"
    deletebutton.style.height="50px";
    deletebutton.style.backgroundColor="white";
    deletebutton.style.border="white";
    deletebutton.style.marginTop="75px";
    deletebutton.style.cursor="pointer";
    deletebutton.addEventListener("click",deletetask);
    deletebuttondiv.append(deletebutton);
   var hr = document.createElement("hr");
   var hrdiv = document.createElement("div")
   hrdiv.append(hr);
maindiv.append(imagediv,namediv,pricediv,cartbuttondiv,deletebuttondiv);
   
document.querySelector(".wishlistproducts").append(maindiv,hrdiv);
})
}

function deletetask(data){
   data.map(function(elem, index){
       data.splice(index, 1);
       localStorage.setItem("wishlist", JSON.stringify(data));
       displayItem(data);
   });
}
function addtocart(elem){
cart.push(elem);
localStorage.setItem("cart",JSON.stringify(cart));
deletetask(data);
}