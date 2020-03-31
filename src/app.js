import { uuid } from 'uuidv4';
import './products'
import './views'
import './images';

import { addedProductVisible } from './views'

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

    console.log(patternArray[0].nextElementSibling.src)
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

// basket view logic

const renderBasketView = () => {
    const basketContent = document.querySelector('.basket-content > p:nth-child(1)')
    const basketAmount = document.querySelector('.basket-icon > p')
    const basketPrize = document.querySelector('.basket-content > p:nth-child(2)')
    const tooltip = document.querySelector('.tooltip')
    const checkoutButton = document.querySelector('.to-checkout')
    tooltip.innerHTML = ''
    if (selectedProducts.length === 0) {
        basketContent.classList.add('no-show')
        basketAmount.classList.add('no-show')
        basketPrize.classList.add('no-show')
        if (checkoutButton) {
            checkoutButton.classList.add('no-show')
        }
        tooltip.classList.remove('borders-on')
    } else {
        basketContent.classList.remove('no-show')
        basketAmount.classList.remove('no-show')
        basketPrize.classList.remove('no-show')
        if (checkoutButton) {
            checkoutButton.classList.remove('no-show')
        }
        tooltip.classList.add('borders-on')
        let totalPrize = 0
        selectedProducts.forEach(element => {
            totalPrize = totalPrize + element.prize
            // adding item to the basket tooltip
            const productItem = document.createElement('div')
            productItem.classList.add('tooltip-product-item')
            productItem.innerHTML = `
            <img src="${element.img}" width="40px" height="40px">
            <div>
              <p>Rozmiar: ${element.size}</p>
              <p>Ilość: ${element.quantity}</p>
            </div>
              <p class="basket-price">Cena: ${element.prize} zł</p>
            `
            const removeButton = document.createElement('button')
            removeButton.textContent = 'Usuń'
            productItem.appendChild(removeButton)
            removeButton.addEventListener('click', () => {
                event.preventDefault()
                removeProductItem(element.id)
                saveProducts()
                renderBasketView()
            })
            tooltip.appendChild(productItem)

        });
        basketPrize.textContent = `${totalPrize} zł`
        basketAmount.textContent = selectedProducts.length
        const tooltipSummary = document.createElement('div')
        tooltipSummary.classList.add('tooltip-summary')
        tooltipSummary.innerHTML = `
        <button class="button" id="tooltip-to-checkout" onclick="window.location.href = 'checkout.html';">do kasy</button>
        <p>Razem: ${totalPrize} zł</p>
        `
        tooltip.appendChild(tooltipSummary)
    }
}

renderBasketView()



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



