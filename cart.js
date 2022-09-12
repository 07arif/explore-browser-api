const getInputValueId = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueId('product-name-field');
    const quantity= getInputValueId('product-quantity-field');
    console.log(product,quantity);
// display Product on UI
addProductToDisplay(product,quantity);

// set to local storage
// simple way
// localStorage.setItem(product,quantity)
saveItemTOLocalStorage(product,quantity);
}

const getShoppingCartFromLocalStorage = ()=> {
    let SavedCart = localStorage.getItem('cart');
        let cart = {};
        if(SavedCart){
        cart = JSON.parse(SavedCart)
    }
        return cart;
}
const saveItemTOLocalStorage = (product,quantity) =>{
     const cart = getShoppingCartFromLocalStorage();
//add product to the object to the property
    cart[product]= quantity;
    const cartStrigified = JSON.stringify(cart);
// SAVE TO LOCAL STORAGE
localStorage.setItem('cart',cartStrigified);
}

const addProductToDisplay = (product,quantity)=>{
    const productContainer =document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productContainer.appendChild(li)
}

const displayStoredProducts =() =>{
 const cart = getShoppingCartFromLocalStorage();
    for (const product in cart){
    const quantity = cart[product];
    console.log(product,quantity);
    addProductToDisplay(product,quantity)
    }
}
 displayStoredProducts()