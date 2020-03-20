import { uuid } from 'uuidv4';

// array for storing chosen products
let selectedProducts = []

// loading the content of basket from local storage
const loadProducts = () => {
    let productsJSON = localStorage.getItem('selectedProducts')
    return productsJSON ? JSON.parse(productsJSON) : []
}

selectedProducts = loadProducts()

let priceTag = document.querySelector('.price > h2')

// changing the value of quantity
document.querySelectorAll('.change-quantity').forEach((item) => {
    item.addEventListener('click', (e) => {
        const quantityField = document.querySelector('[name=quantity]')
        // let x = quantityField.value
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

// basket icon logic

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

const addedProductVisible = () => {
    const elem = document.querySelector('.added-to-basket')
    elem.classList.add('visible')
    elem.addEventListener('animationend', () => {
        elem.classList.remove('visible')
    })
}

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
        console.log('bum')
        loadProducts()
        renderBasketView()
    }
})


// images slider logic

// creating an array with thumbnails objects

let images = []
for (let i=1; i < 6; i++) {
    images.push({
        index: i,
        src: `images/stuptuty-slider${i}.jpg`
    })
}

// load slider__item on clicking the thumbnail
const loadBigImage = (e) => {
    console.log(e.target.src)
    const chosenImage = images.find((item) => e.target.src.includes(item.src))
    const bigImage = document.querySelector('.slider__item > img')
    bigImage.src = chosenImage.src
    bigImage.setAttribute('data-key', `${chosenImage.index}`)
}

// populate slider__thumbNav with images from an array

images.forEach((image) => {
    const imgEl = document.createElement('img')
    imgEl.src = image.src
    imgEl.classList.add('slider__thumbItem')
    document.querySelector('.slider__thumbNav').appendChild(imgEl)
    imgEl.addEventListener('click', loadBigImage)
})
document.querySelector('.slider__item').addEventListener('click', () => {
    console.log(event)
})

// move slider__thumbNav on clicking an arrow

document.querySelector('.slider__prev').addEventListener('click', () => {
    const sliderDiv = document.querySelector('.slider__thumbNav')
    let offsetValue = sliderDiv.style.transform.length > 0 ? sliderDiv.style.transform.slice(10, -3) : 0
    let offset = offsetValue
    if (offset != 0) {
    const move = sliderDiv.animate([
        {transform: `translate(${parseInt(offset)}px)`},
        {transform: `translate(${parseInt(offset) + 205}px)`}
    ], 500)
    move.addEventListener('finish', () => {
        sliderDiv.style.transform = `translate(${parseInt(offset) + 205}px)`;
        })
    }
})
document.querySelector('.slider__next').addEventListener('click', () => {
    const sliderDiv = document.querySelector('.slider__thumbNav')
    let offsetValue = sliderDiv.style.transform.length > 0 ? sliderDiv.style.transform.slice(10, -3) : 0
    let offset = offsetValue
    if (Math.abs(offset) < (images.length - 3) * 205) {
    const move = sliderDiv.animate([
        {transform: `translate(${offset}px)`},
        {transform: `translate(${offset - 205}px)`}
    ], 500)
    move.addEventListener('finish', () => {
        sliderDiv.style.transform = `translate(${offset - 205}px)`;
        })
    }
})
