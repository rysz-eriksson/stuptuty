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
    const chosenImage = images.find((item) => e.target.src.includes(item.src))
    const bigImage = document.querySelector('.slider__item > img')
    bigImage.src = chosenImage.src
    bigImage.setAttribute('data-key', `${chosenImage.index}`)
}

// populate slider__thumbNav with images from an array
if (window.location.href.includes('product.html')) {
    images.forEach((image) => {
    const imgEl = document.createElement('img')
    imgEl.src = image.src
    imgEl.classList.add('slider__thumbItem')
    document.querySelector('.slider__thumbNav').appendChild(imgEl)
    imgEl.addEventListener('click', loadBigImage)
    })
}
// document.querySelector('.slider__item').addEventListener('click', () => {
//     console.log(event)
// })


// move slider__thumbNav on clicking an arrow

if (window.location.href.includes('product.html')) {

    const sliderPrev = document.querySelector('.slider__prev')
    const sliderNext = document.querySelector('.slider__next')
    const sliderDiv = document.querySelector('.slider__thumbNav')

    

    sliderPrev.addEventListener('click', () => {
    let offsetValue = sliderDiv.style.transform.length > 0 ? sliderDiv.style.transform.slice(10, -3) : 0
    let width = sliderDiv.offsetWidth
    let itemLength = 0.2 * width
    let offset = offsetValue
    console.log(offset)
    if (offset != 0) {
    const move = sliderDiv.animate([
        {transform: `translate(${parseInt(offset)}px)`},
        {transform: `translate(${parseInt(offset) + itemLength}px)`}
    ], 500)
    move.addEventListener('finish', () => {
        sliderDiv.style.transform = `translate(${parseInt(offset) + itemLength}px)`;
        })
    }
})
    sliderNext.addEventListener('click', () => {
    let offsetValue = sliderDiv.style.transform.length > 0 ? sliderDiv.style.transform.slice(10, -3) : 0
    let width = sliderDiv.offsetWidth
    let itemLength = 0.2 * width
    let offset = offsetValue
    console.log(offset)
    if (Math.abs(offset) < (images.length - 3) * itemLength) {
    const move = sliderDiv.animate([
        {transform: `translate(${offset}px)`},
        {transform: `translate(${offset - itemLength}px)`}
    ], 500)
    move.addEventListener('finish', () => {
        sliderDiv.style.transform = `translate(${offset - itemLength}px)`;
        })
    }
})
}