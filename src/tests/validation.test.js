import { clearCart } from "../cart.js"
import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
// const exampleProduct = {
// 	id: 1001,
// 	name: 'Badanka',
// 	price: 500
// }

// const exampleCartObject = {
// 	id: 2001,
// 	amount: 1,
// 	item: exampleProduct
// }

describe('isProduct', () => {
	test('it returns true for a valid product', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		const expected = isProduct(product)

		expect(expected).toBe(true)
	})

	test('isProduct returns false for invalid product', () => {
		const notProduct = {
			id: 'text',
			name: 5,
			price: null
		}
		expect(isProduct(notProduct)).toBe(false);
	});
})

describe('isCartItem', () => {
	test('it returns true for a valid cart item', () => {
		const exampleProduct = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}
		const exampleCartObject = {
			id: 2001,
			amount: 1,
			item: exampleProduct
		}

		const expected = isCartItem(exampleCartObject)

		expect(expected).toBe(true)
	})

	test('isCartItem returns false for invalid cart object', () => {
		const notProduct = {
			id: 'text',
			name: 5,
			price: null
		}
		const notCartObject = {
			id: 'text',
			amount: 'another text',
			item: notProduct
		}
		expect(isCartItem(notCartObject)).toBe(false);
	});	

})