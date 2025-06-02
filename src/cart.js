/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/



import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002


// function getCartItemCount()
function getCartItemCount() {
  return cart.reduce((count, item) => count + item.amount, 0);
}

// function getItem(index)
function getItem(index){
	if (typeof index !== 'number' || index < 0 || index >= cart.length) {
		throw new Error('Index does not exist.');
	}
	return cart[index]
}

// function addToCart(newItem)
function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		throw new Error('This is an invalid product. id should be number, name should be string and price should be number.')
	}

	// const cartItem = { id: idCounter++, amount: 1, item: newItem }
	// cart.push(cartItem)
	// return cartItem

	const index = cart.findIndex(ci => ci.item.id === newItem.id);
	if (index === -1) {
		const cartItem = { id: idCounter++, amount: 1, item: newItem }
		cart.push(cartItem)
		return cartItem
	} else {
		cart[index].amount++
		return cart[index]
	}


}


// function removeFromCart(itemId)
function removeFromCart(itemId){
	if ( cart.length === 0){
		throw new Error('You have no items in your cart')
	}
	// if (!isCartItem(item)){
	// 	throw new Error('This item is not in your cart')
	// }

	const exists = cart.some(cartItem => cartItem.id === itemId);

	if (!exists) {
		throw new Error('Item not found in cart.');
	}

	cart = cart.filter(cartItem => cartItem.id !== itemId);
}





// function clearCart()
function clearCart(){
	cart.length = 0
	idCounter = 2002
}


// function editCart(itemId, newValues)
// function editCart(itemId, newValues){
// 	const exists = cart.some(cartItem => cartItem.id === itemId);
// 	const index = cart.findIndex(cartItem => cartItem.id === itemId);

// 	if (!exists) {
// 		throw new Error('Item not found in cart.');
// 	}

// 	const newItem = {
// 		id: newValues.id || cart[index].id,
// 		amount: newValues.amount || cart[index].amount,
// 		item: {
// 			id: newValues.id || cart[index].item.id,
// 			name: newValues.name || cart[index].item.name,
// 			price: newValues.price || cart[index].item.price
// 		}
// 	};

// 	cart[index] = newItem;
// }

function editCart(itemId, newValues) {
	const index = cart.findIndex(cartItem => cartItem.id === itemId);

	if (index === -1) {
		throw new Error('Item not found in cart.');
	}

	cart[index] = {
		...cart[index],
		...newValues,
		item: {
			...cart[index].item,
			...(newValues.item || {})
		}
	};
}



// function getTotalCartValue()
function getTotalCartValue() {
	let total = 0;

	for (let i = 0; i < cart.length; i++) {
		const cartItem = cart[i];
		total += cartItem.amount * cartItem.item.price;
	}

	return total;
}




export { getCartItemCount, addToCart, clearCart, getItem, removeFromCart, editCart, getTotalCartValue }
