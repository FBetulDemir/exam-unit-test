// importera här
import { addToCart, getCartItemCount, clearCart, getItem } from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
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
				id: expect.toBe(typeof(Number)),
				amount: 1,
				item: input
      		});
		})
		test('Throws an error message if the product is invalid.', () => {
			const newProduct = {
				id: isProduct,
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

			const exampleCartObject = {
				id: 2001,
				amount: 1,
				item: input,
			}

			addToCart(exampleCartObject)
			const item = getItem(0)
			expect(item).toEqual(input)
		})
	})	


	// -------------------------------------------------- //
})


