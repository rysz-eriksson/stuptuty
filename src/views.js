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

export { addedProductVisible }