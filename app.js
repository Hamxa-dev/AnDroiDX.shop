const divs = document.querySelector(".divs");
const div = document.querySelector("#justify");

const phones = [
  {
    brand: "Samsung",
    img: "asset/samsung-galaxy.jpg",
    model: "model: S20",
    ram: "  8GB",
    rom: " 256GB",
    camera: "20: megapixel",
    price: 80000,
  },
  {
    brand: "Tecno",
    img: "asset/Tecno.webp",
    model: "model: spark 10",
    ram: " 12GB",
    rom: " 512GB",
    camera: "25: megapixel",
    price: 40000,
  },
  {
    brand: "Apple",
    img: "asset/iphon 13 pro.jfif",
    model: "model:13 pro",
    ram: " 8GB",
    rom: " 256GB",
    camera: "20 megapixel",
    price: 115000,
  },
  {
    brand: "Xiomi",
    img: "asset/Xiomi.jfif",
    model: "model: note 10",
    ram: " 4GB",
    rom: " 64GB",
    camera: "10: megapixel",
    price: 53000,
  },
  {
    brand: "Infinix",
    img: "asset/redmi.webp",
    model: "model: z10",
    ram: " 2GB",
    rom: " 16GB",
    camera: "5: megapixel",
    price: 29000,
  },
  {
    brand: "Nokia",
    img: "asset/nokia.jfif",
    model: "model:y20",
    ram: " 4GB",
    rom: " 64GB",
    camera: "8: megapixel",
    price: 45000,
  },
  {
    brand: " Oppo",
    img: "./asset/oppo.jpg",
    model: "model: F11",
    ram: " 4GB",
    rom: " 256GB",
    camera: "20: megapixel",
    price: 60000,
  },
  {
    brand: "Vivo",
    img: "./asset/vivo.jpg",
    model: "model: y20",
    ram: " 4GB",
    rom: " 64GB",
    camera: "8: megapixel",
    price: 45000,
  },
];

for (let i = 0; i < phones.length; i++) {
  divs.innerHTML += `<div class="cart">
  <h1 style="margin: 20px;">${phones[i].brand}</h1>

  <img style="border-radius: 10px; gap:10;   margin-left: 70px;  width: 150px;
  height: 210px;" src="${phones[i].img}" >
  
  <P style="margin: 20px;">
  model:${phones[i].model}<br>
  ram: ${phones[i].ram}<br>
  rom: ${phones[i].rom}<br>
  camera: ${phones[i].camera}<br>
  price: ${phones[i].price}<br>
  <button style="margin-top: 20px;" id="add-button" onclick="cartAdd(${i})">Add to Cart</button>
  </div>`;
}


const shopingCartData = localStorage.getItem('cartItem');
const Data = JSON.parse(shopingCartData);


var cartArry;
if(Array.isArray(Data)){
    cartArry = [...Data]

}else{
    cartArry = []
}



function cartAdd(index) {

  if(cartArry == phones[index]){
  // if (cartArry.includes(phones[index]) === true) 
    for (let i = 0; i < cartArry.length; i++) {
      if (cartArry[i] === phones[index]) {
        cartArry[i].quantity += 1;
        alert("New Select you phone");
      }
      console.log("pehla", cartArry);
    }
  } else {
    phones[index].quantity = 1;
    cartArry.push(phones[index]);
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Item add successfully",
      showConfirmButton: false,
      timer: 700,
    });
  }
  console.log("dosra", cartArry);
}


function goToHome(){
  const cart = JSON.stringify(cartArry);
  localStorage.setItem('cartItem' , cart);
  //console.log('cart zindabad');
  window.location = 'cart.html';
}