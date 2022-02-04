var data = [
    { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/5/15332-perfumed_bath_ritual_box_nargis_front.png",
    prodhead:"PERFUMED BATH RITUAL BOX",
    
        prodprice:"2000",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/5/15331-luxurious_trial_sized_skin_hair_care_selection_box_front.png",
    prodhead:"LUXUARY TRIAL SIZED BOX",
        quantity:"25g",
        prodprice:"2080",
    },
    { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/r/a/rasa_tejal_box_front.png",
    prodhead:"HYDRATING FACIAL GIFT BOX",
        quantity:"150g",
        prodprice:"3000",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/k/sku-_1077_copy.png",
    prodhead:"SKIN AND HAIR CARE BOX",
        quantity:"30g",
        prodprice:"2900",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/l/e/lek_box_2.png",
    prodhead:"FACIAL CARE SELECTION BOX",
        quantity:"15g",
        prodprice:"3400",
    },{ imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/f/a/facial_care_box_3_x_50ml.png",
    prodhead:"FACIAL ESSENTIALS",
        quantity:"15g",
        prodprice:"5690",
    },{ imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/8/7/8739-min_1.png",
    prodhead:"GENTLEMEN'S BOX",
        quantity:"15g",
        prodprice:"3500",
    },{ imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/4/14933-min.png",
        prodhead:"PERFUMED BATH INDIAN ROSE",
        quantity:"15g",
        prodprice:"5000",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/l/e/lek_box_2.png",
    prodhead:"FACIAL CARE SELECTION BOX",
        quantity:"15g",
        prodprice:"3490",
    },{ imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/f/a/facial_care_box_3_x_50ml.png",
    prodhead:"FACIAL ESSENTIALS",
        quantity:"15g",
        prodprice:"5790",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/5/15332-perfumed_bath_ritual_box_nargis_front.png",
    prodhead:"PERFUMED BATH RITUAL BOX",
    
        prodprice:"1000",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/5/15331-luxurious_trial_sized_skin_hair_care_selection_box_front.png",
    prodhead:"LUXUARY TRIAL SIZED BOX",
        quantity:"25g",
        prodprice:"2180",
    },
    { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/r/a/rasa_tejal_box_front.png",
    prodhead:"HYDRATING FACIAL GIFT BOX",
        quantity:"150g",
        prodprice:"1500",
    } ,           { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/r/a/rasa_tejal_box_front.png",
    prodhead:"HYDRATING FACIAL GIFT BOX",
        quantity:"150g",
        prodprice:"5000",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/k/sku-_1077_copy.png",
    prodhead:"SKIN AND HAIR CARE BOX",
        quantity:"30g",
        prodprice:"3900",
    }, { imgUrl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/l/e/lek_box_2.png",
    prodhead:"FACIAL CARE SELECTION BOX",
        quantity:"15g",
        prodprice:"1400",
    },
 ]
 var cart = JSON.parse(localStorage.getItem("cart"))|| [];
 var wishlist = JSON.parse(localStorage.getItem("wishlist"))|| [];
 displayItem(data);
 function pricesort(){
    var selected= document.querySelector(".sortbutton").value;
if(selected=="high"){
    data.sort(function(a,b){
        return Number(b.prodprice) - Number(a.prodprice);
    })
}
if(selected=="low"){
    data.sort(function(a,b){
        return Number(a.prodprice) - Number(b.prodprice);
    })
}
displayItem(data);
 }
 
 function displayItem(data){
    document.querySelector(".giftingproducts").textContent="";
data.map(function(elem){
    var maindiv = document.createElement("div");
    maindiv.setAttribute("class","productdiv")
   var div1 = document.createElement("span");
    //var img0 = document.createElement("img");
    //img0.setAttribute("src","https://cdn-icons.flaticon.com/png/512/3870/premium/3870922.png?token=exp=1639563142~hmac=c211f716b578985c0a5f05b4429e170e");
    //img0.setAttribute("class","wishlistimg");
    //img0.addEventListener("click",addwishlist);
    function addwishlist(){
        addtowishlist(elem);
    }
    div1.innerHTML = "<i class='fa fa-heart-o'></i>";
    div1.setAttribute("class","icon-wishlist");
    var img = document.createElement("img");
    img.setAttribute("src",elem.imgUrl);
    img.style.cursor = "pointer"
    img.addEventListener("click", function(){
        showProductDetails(elem,data);
    })
    div1.append(img);
    var name = document.createElement("p");
    name.textContent = elem.prodhead;
    
    var price =document.createElement("P");
    price.textContent = elem.prodprice;
    var productbutton = document.createElement("button");
    productbutton.textContent="ADD TO CART";
    productbutton.style.cursor = "pointer"
    productbutton.setAttribute("class","productbutton")
    productbutton.addEventListener("click",addfunc);
    function addfunc(){
    addtocart(elem);
    }
    var smalldiv = document.createElement("div");
    smalldiv.setAttribute("class","smalldiv");
    smalldiv.append(name,price,productbutton);
    maindiv.append(div1,smalldiv);
    document.querySelector(".giftingproducts").append(maindiv);
});
}
function addtocart(ele){
    cart.push(ele);
    localStorage.setItem("cart",JSON.stringify(cart));
    document.querySelector("#cart__Count").textContent = cart.length
}
function addtowishlist(elem){
    wishlist.push(elem);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
}