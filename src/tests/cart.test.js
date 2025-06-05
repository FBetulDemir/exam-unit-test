import { addToCart, getCartItemCount, clearCart, getItem, removeFromCart, editCart, getTotalCartValue } from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	describe('addToCart', () =>{
		test('addToCart adds new product to the cart.', () => {
			const itemCountBefore = getCartItemCount()
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			}

			const cartItem = addToCart(input);
			const itemCountAfter = getCartItemCount();

			expect(itemCountAfter).toBe(itemCountBefore + 1)
			expect(cartItem).toMatchObject({
				id: expect.any(Number),
				amount: 1,
				item: input
      		});
		})
		
		test('Throws an error message if the product id is invalid.', () => {
			const newProduct = {
				id: 'not a number, it is a string',
				name: "Barn pool",
				price: 20,
			}
			expect(()=> addToCart(newProduct)).toThrow('This is an invalid product. id should be number.')
		})

		test('Throws an error message if the product name is invalid.', () => {
			const newProductTwo = {
				id: 2015,
				name: 1234,
				price: 20,
			}
			expect(()=> addToCart(newProductTwo)).toThrow('This is an invalid product. Name should be string.')
		})

		test('Throws an error message if the product price is invalid.', () => {
			const newProductThree = {
				id: 2015,
				name: "Barn pool",
				price: "another string",
			}
			expect(()=> addToCart(newProductThree)).toThrow('This is an invalid product. price should be number.')
		})
	})



	describe('getItem', () => {
		test('getItem returns a cart  item', () => {
			const itemCountBefore = getCartItemCount()
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			}

			// const cartObject = {
			// 	id: 2001,
			// 	amount: 1,
			// 	item: input,
			// }

			addToCart(input)
			const cartObject = getItem(0)
			expect(cartObject.item).toEqual(input)
		})
	})	
	describe('removeFromCart', () => {
		test('removeFromCart removes an item from the cart', () => {
			const itemCountBefore = getCartItemCount()
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			}
			const inputAdded = addToCart(input)
			removeFromCart(inputAdded.id)
			const itemCountAfter = getCartItemCount();

			expect(itemCountAfter).toBe(itemCountBefore)
			
		})
		test('Throws an error message if the product does not exist in the cart.', () => {
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			}
			const inputAdded = addToCart(input)
			expect(()=> removeFromCart(55555555555)).toThrow('Item not found in cart.')
		})

		test('throws error if the cart is empty', () => {
			clearCart();
			expect(() => removeFromCart(2001)).toThrow('You have no items in your cart');
		});
	})

	describe('editCart', ()=> {
		test('updates the item in the cart', ()=>{
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			}
			const inputAdded = addToCart(input)
			
			editCart(inputAdded.id, {amount: 2, item: {price: 100, name: "Barn pool", }})
			const updatedInput = getItem(0)

			expect(updatedInput.amount).toBe(2)
			expect(updatedInput.item.price).toBe(100)
			expect(updatedInput.item.name).toBe('Barn pool')
		})

		test('throws error if the cart is empty', () => {
			clearCart();
			expect(() => editCart(55555555)).toThrow('Item not found in cart.');
		});


		test('throws an error if item is not found', () => {
			clearCart();
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			};
			addToCart(input);
			expect(() => editCart(9999, { amount: 2 })).toThrow('Item not found in cart.');
		});
	})


	describe('getTotalCartValue', ()=>{
		test('calculates the total price of the items in the cart', ()=>{
			clearCart();
			const input = { 
				id: 1002, 
				name: 'Vattenpistol', 
				price: 40 
			};
			addToCart(input);
			expect(getTotalCartValue()).toBe(40);
		})
	})

})


