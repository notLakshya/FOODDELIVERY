var cart = document.querySelectorAll(".add-cart");

for(var i = 0; i < cart.length; i++){
    cart[i].addEventListener("click", function(){
        cartNumber();
    })
}
function cartNumber(){
    let productNumber = localStorage.getItem('cartNumbers');

    productNumber = parseInt(productNumber);

    if(productNumber){
      localStorage.setItem('cartNumber', productNumber + 1);
    }else{
        localStorage.setItem('cartNumber', 1);
    }
}