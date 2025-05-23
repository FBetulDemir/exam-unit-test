import { addToCart, getCartItemCount, clearCart, getItem, removeFromCart } from "../cart"


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
		
		test('Throws an error message if the product is invalid.', () => {
			const newProduct = {
				id: 'not a number, it is a string',
				name: 1234,
				price: 'hej',
			}
			expect(()=> addToCart(newProduct)).toThrow('This is an invalid product. id should be number, name should be string and price should be number.')
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
			addToCart(input)
			removeFromCart(input.id)
			const itemCountAfter = getCartItemCount();
			
		})
		test('Throws an error message if the product does not exist in the cart.', () => {
			expect(()=> removeFromCart(555555555)).toThrow('This is an invalid product id')
		})
	})

})


