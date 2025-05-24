/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount()
// function getItem(index)
// function getTotalCartValue()
// function addToCart(newItem)
// function removeFromCart(itemId)
// function editCart(itemId, newValues)
// function clearCart()
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med

function getCartItemCount() {
	return cart.length
}

function getItem(index){
	if (typeof index !== 'number' || index < 0 || index >= cart.length) {
		throw new Error('Index does not exist.');
	}
	return cart[index]
}


function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		throw new Error('This is not a valid product.')
	}

	const cartItem = { id: idCounter++, amount: 1, item: newItem }
	cart.push(cartItem)
	return cartItem
}



function removeFromCart(itemId){
	if ( cart.length === 0){
		throw new Error('You have no items in your cart')
	}

	const index = cart.findIndex(cartItem => cartItem.id === itemId)
	if (index === -1) {
		throw new Error('Item not found in cart')
	}
	cart.splice(index, 1)
}

function clearCart(){
	cart.length = 0
	idCounter = 2002
}



export { getCartItemCount, addToCart, clearCart, getItem }
