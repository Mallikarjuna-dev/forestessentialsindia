var details =  []
function showProductDetails(ele , data){
	details.push(ele)	
	localStorage.setItem("productDetails" , JSON.stringify(details))
	localStorage.setItem("related_products" , JSON.stringify(data))
	
	window.location.href = "../pages/productDetails.html"

}

