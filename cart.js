function raji() {
	var ans = '';
	Object.values(document.getElementsByClassName("price")[0].childNodes).filter(function(a){
		if(a.nodeType===3){ans=ans+a.nodeValue;}
	});
var obj = {
"product_category": document.getElementsByClassName("product")[0].innerText,
"product_name": document.getElementsByClassName("pb-product-title")[0].innerText,
"product_price": ans.trim()
};
console.log(obj);
}  
document.getElementById("add_to_bag").addEventListener("click", raji);