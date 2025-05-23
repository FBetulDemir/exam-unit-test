// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat

function isCartItem(maybeCartItem) {
    const hasId = typeof maybeCartItem.id === 'number';
    const hasAmount = typeof maybeCartItem.amount === 'number';
    const hasItem = isProduct(maybeCartItem.item);
    if (typeof maybeCartItem !== 'object' || maybeCartItem === null) {
        return false;
    }

    return hasId && hasAmount && hasItem;

}

function isProduct(maybeProduct) {
    const hasId = typeof maybeProduct.id === 'number';
    const hasName = typeof maybeProduct.name === 'string';
    const hasPrice = typeof maybeProduct.price === 'number';
    if (typeof maybeProduct !== 'object' || maybeProduct === null) {
        return false;
    }

    return hasId && hasName && hasPrice;
}


export { isCartItem, isProduct }
