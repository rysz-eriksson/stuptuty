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