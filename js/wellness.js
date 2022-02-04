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

// PRODUCT PAGE CONTENT STARTS FROM HERE 

    // DATA OF PRODUCTS 
    var data = [
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/i/sita_incense_sticks_front.png",
        prodhead: "Sita Incense Sticks",
        prodweight: "70 g",
        prodprice: 375.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/a/saraswati_incense_sticks_front.png",
        prodhead: "Saraswati Incense Sticks",
        prodweight: "70 g",
        prodprice: 375.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/p/a/parvati_incense_sticks_front.png",
        prodhead: " Parvati Incense Sticks ",
        prodweight: "70 g",
        prodprice: 375.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/l/a/lakshmi_incense_sticks_front.png",
        prodhead: "Laxmi Incense Sticks",
        prodweight: "70 g",
        prodprice: 375.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/d/u/durga_incense_sticks_front.png",
        prodhead: " Durga Incense Sticks",
        prodweight: "100 g",
        prodprice: 1275.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/8/9839_sweet_orange_grapefruit_ginger_100ml_front.png",
        prodhead: "Room Surround Spray Sweet Orange, Grapefruit & Ginger",
        prodweight: "100 ml",
        prodprice: 1495.00
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/8/9838_room_spray_sandalwood_loban_camphor_100ml_front.png",
        prodhead: "Room Surround Spray Sandalwood, Loban & Camphor",
        prodweight: "130 ml",
        prodprice: 1495.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/8/9837_room_spray_rose_patchouli_clove_100ml_front.png",
        prodhead: "Room Surround Spray Rose, Patchouli & Clove",
        prodweight: "100 ml",
        prodprice: 1495.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/8/9836_room_surround_spray_tubrose_tabacco_100ml_front.png",
        prodhead: "Room Surround Spray Sandalwood",
        prodweight: "130 ml",
        prodprice: 1275.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9760_nidra_10ml_front.png",
        prodhead: "Nidra - Tranquil Sleep Calming for a Restful Sleep",
        prodweight: "200ml",
        prodprice: 975.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9759_shanti_10ml_front.png",
        prodhead: "Shanti - Stress Relief for De Stressing and Relaxing",
        prodweight: "10 ml",
        prodprice:  975.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9753_diffuser_oil_madurai_jasmine_15ml_front.png",
        prodhead: "Blended Diffuser Oil Madurai Jasmine",
        prodweight: "200 ml",
        prodprice:  545.00
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9734_hair_cleanser_amla_honey_mulethi_200ml_front5.png",
        prodhead: "Blended Diffuser Oil Kannauj Rose",
        prodweight: "150 ml",
        prodprice:  1295.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9752_diffuser_oil_kannauj_rose_15ml_front.png",
        prodhead: "Decadent Spa Collection",
        prodweight: "200 ml",
        prodprice: 195.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9729_hair_vitalizer_bhringraj_130ml_front.png",
        prodhead: "Blended Diffuser Oil Kannauj Rose",
        prodweight: "130 ml",
        prodprice: 1295.00,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9761_de_stress_therapy_2_x_10ml_front.png",
        prodhead: "Decadent Spa Collection",
        prodweight: "200 ml",
        prodprice:  1295.00,
        },
        {
        imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/g/r/group_mockup.png",
        prodhead: "Nidra - Tranquil Sleep Calming for a Restful Sleep",
        prodweight: "50 ml",
        prodprice: 295.00,
        },
    ];
    showData(data);

// SORT BY PRICE FUNCTION 
    function sortprice(){
        var selected = document.querySelector("#sorted").value
        if(selected == "low"){
            data.sort(function(a, b){
                return Number(a.prodprice)-Number(b.prodprice);
            });
        }
        if(selected == "high"){
            data.sort(function(a, b){
                return Number(b.prodprice)-Number(a.prodprice);
            });
        }
        showData(data);
    };

// DISPLAY PRODUCT TO MAIN SCREEN 
    function showData(data){
        var body=document.querySelector("#hair_container");
        body.innerHTML="";
        data.map(function prodecData(elem){
            var div = document.createElement("div");

            var image = document.createElement("img");
                image.setAttribute("src", elem.imgUrl);
                image.setAttribute("id", "prodimg");
                image.addEventListener("click", function(){
                    showProductDetails(elem, data);
                })

            var h4 = document.createElement("h4");
                h4.textContent = elem.prodhead;
                h4.style.marginLeft = "10px";
                h4.style.marginTop = "4px";
                h4.style.cursor= "pointer";

            var p = document.createElement("p");
                p.textContent = elem.prodweight;
                p.style.marginLeft = "10px";
            
            var smalldiv = document.createElement("div");
                smalldiv.setAttribute("class", "priceWishSmallDiv");
        
            var p2 = document.createElement("p");
                p2.textContent = "₹"+elem.prodprice+".00";
            
            var icon = document.createElement("span");
                icon.setAttribute("class", "material-icons")
                icon.textContent = "favorite_border";
                icon.addEventListener("click", function(){
                    addtowishlist(elem);
                })
            
            var addcart = document.createElement("button");
                addcart.textContent = "ADD TO BAG";
                addcart.setAttribute("class", "addCartButton");
                addcart.addEventListener("click", function(){
                    addtocart(elem);    
                });


            smalldiv.append(p2, icon);
            div.append(image, h4, p, smalldiv, addcart);
            body.append(div);
        });
    };

// ADDING TO PRODUCT DETAILS PAGE
    var productDetail = JSON.parse(localStorage.getItem("productDetails"));
    var relatedProduct = JSON.parse(localStorage.getItem("related_products"));
var details =  []
function showProductDetails(elem , data){
	details.push(elem)	
	localStorage.setItem("productDetails" , JSON.stringify(details))
	localStorage.setItem("related_products" , JSON.stringify(data))
	
	window.location.href = "../pages/productDetails.html";

}


// ADDING ITEM TO CART
    var cart=JSON.parse(localStorage.getItem("cart")) || [];
    function addtocart(elem){
        cart.push(elem);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

// ADDING ITEM TO WHISHLIST
    var wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];
    function addtowishlist(elem){
        wishlist.push(elem);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
