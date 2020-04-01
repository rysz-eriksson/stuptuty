import { removeProductItem, loadProducts, saveProducts } from './products';

// handling the view of the side-menu

document.querySelector('.hamburger').addEventListener('click', (item) => {
    item.target.classList.toggle('side-active')
    // accessing side-menu
    const sideMenu = item.toElement.nextElementSibling
    sideMenu.classList.toggle('side-slide')
})

// moving the side menu back out of the window once the link is clicked 

const sidemenuLinks = document.querySelectorAll('.side-menu > nav > ul > li > a')

sidemenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        document.querySelector('.side-menu').classList.toggle('side-slide')
    })
})

// handling the view of the button showing the product got added to the basket 
const addedProductVisible = () => {
    const elem = document.querySelector('.added-to-basket')
    elem.classList.add('visible')
    elem.addEventListener('animationend', () => {
        elem.classList.remove('visible')
    })
}

// event handler for manipulating labels on contact_form

const formInputs = document.querySelectorAll('.form__input')

formInputs.forEach((item) => {
    item.addEventListener('focus', (e) => {
    const labelEl = e.target.labels[0]
    labelEl.classList.add('label__active')
    })
    item.addEventListener('blur', (e) => {
        if (item.value.length === 0) {
            const labelEl = e.target.labels[0]
            labelEl.classList.remove('label__active')
        }
    })
})

// code for updating the price value of the chosen assets on the website 
let priceTag = document.querySelector('.price > h2')

// changing the value of quantity
document.querySelectorAll('.change-quantity').forEach((item) => {
    item.addEventListener('click', (e) => {
        const quantityField = document.querySelector('[name=quantity]')
        if (e.target.value === '+') {
            quantityField.value = parseInt(quantityField.value) + 1
        } else {
            if (quantityField.value > 1) {
                quantityField.value = quantityField.value -1
            }
        }
        priceTag.textContent = `${150 * quantityField.value} zł`
    })
})

// update the price value if changed by the input type number UI

if (window.location.href.includes('product.html')) {
    document.querySelector('[name=quantity]').addEventListener('change', (e) => {
        const quantity = e.target.value
        priceTag.textContent = `${150 * quantity} zł`

    })
}

const renderBasketView = () => {
    let selectedProducts = [];
    selectedProducts = loadProducts()
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

export { addedProductVisible, renderBasketView }