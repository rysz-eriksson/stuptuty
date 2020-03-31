import './products'
import './views'
import './images';

import { addedProductVisible, renderBasketView } from './views'
import { addProduct, saveProducts, loadProducts } from './products'

let selectedProducts = [];

selectedProducts = loadProducts()

// event handler for submitting new product to the basket
document.querySelector('#product-form').addEventListener('submit', (e) => {
    e.preventDefault()
    addProduct(e)
    saveProducts()
    renderBasketView()
    addedProductVisible()

})

// event  handler for change in the local storage coming from a different page
window.addEventListener('storage', (e) => {
    if (e.key === 'selectedProducts') {
        loadProducts()
        renderBasketView()
    }
})



