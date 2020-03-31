import { uuid } from 'uuidv4';

// array for storing chosen products
let selectedProducts = []

// loading the content of basket from local storage
const loadProducts = () => {
    let productsJSON = localStorage.getItem('selectedProducts')
    return productsJSON ? JSON.parse(productsJSON) : []
}

selectedProducts = loadProducts()

// adding product to the basket
const addProduct = (e) => {
    const sizeArray = [...e.target.elements.size]
    const sizeEl = sizeArray.find((item) => item.checked)
    const patternArray = [...e.target.elements.pattern]
    const patternEl = patternArray.find((item) => item.checked)
    const patternImg = patternEl.nextElementSibling.src
    const quantityEl = e.target.elements.quantity.value
    selectedProducts.push({
        id: uuid(),
        size: sizeEl.id,
        pattern: patternEl.id,
        img: patternImg,
        quantity: quantityEl,
        prize: 150 * quantityEl
    })
}

// saving chosen products to LS
const saveProducts = () => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
    const event = document.createEvent("Event");
        event.initEvent("storage", true, true);
        window.dispatchEvent(event);
}

// remove item from the basket
const removeProductItem = (id) => {
    const productIndex = selectedProducts.findIndex((item) => item.id === id)

    if (productIndex > -1) {
        selectedProducts.splice(productIndex, 1)
    }
}

export { addProduct, removeProductItem, loadProducts, saveProducts }