const data = localStorage.getItem('cartItem');
const cartArry = JSON.parse(data);
console.log(cartArry);
const Hub = document.querySelector('.Hub');
const totalPrice = document.querySelector('.totalPrice')






function renderCart() {
let totalPrices = 0;
totalPrice.innerHTML  =''
if (cartArry.length > 0) {
 for (let i = 0; i < cartArry.length; i++) {
        totalPrices += cartArry[i].price * cartArry[i].quantity
        
        Hub.innerHTML += 
        `<div class="cart-js">
                <h1 style="margin: 20px;">${cartArry[i].brand}</h1>
                <img style="border-radius: 10px; gap:10;   margin-left: 20px;  width: 150px;
                height: 210px;" src="${cartArry[i].img}">
                <p><span class="cartChaild">Model:</span> ${cartArry[i].model}</p>
                <p><span class="cartChaild">Quantity:</span> ${cartArry[i].quantity}</p>
                <p><span class="cartChaild">Price:</span> ${cartArry[i].price}</p>
                <p><span class="cartChaild">Total Price:</span>  ${cartArry[i].totalcart = cartArry[i].price * cartArry[i].quantity} </p>     
                <button class="cartBtn" onclick="increaseQuantity(${i})">+</button>
                <span class="spanText">${cartArry[i].quantity}</span>
                <button class="cartBtn" onclick="decreaseQuantity(${i})">-</button> <br/>
                <button  class="cartBtn" id="DeletBtn" onclick="deletes(${i})">Delete</button>
        </div> `
        totalPrice.innerHTML =  `TOTAL PRICE: ${totalPrices}`
              }


        }else {
        totalPrice.innerHTML = '<h1>No item Found</h1>'
              }
        
              }


renderCart()




function increaseQuantity(index) {
    Hub.innerHTML = ''
    console.log(cartArry[index])
    cartArry[index].quantity += 1 
    renderCart()
}
function decreaseQuantity(index) {
    Hub.innerHTML = ''
    cartArry[index].quantity -= 1 
    console.log(cartArry[index])
    renderCart()

    if(cartArry[index].quantity === 1  ){
        Hub.innerHTML = ''
        cartArry.splice(index , 1)
        renderCart()
    }
}


function deletes(index){
    Hub.innerHTML = '';
    cartArry.splice(index , 1);
    renderCart()
}
 
function  backBtn() {
    window.location = 'index.html'
    localStorage.setItem('cartItem' , JSON.stringify(cartArry));
    
}

window.onbeforeunload = function() {
    localStorage.setItem('cartItem' , JSON.stringify(cartArry));
}
