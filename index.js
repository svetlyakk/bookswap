const heroDecoration = document.querySelector('#hero-decoration')

let isDragged = false

heroDecoration.addEventListener('mousedown', (event) => {
    isDragged = true
    console.log(event);
})

window.addEventListener('mouseup', (event) => {
    isDragged = false
})

window.addEventListener('mousemove', (event) => {
    if (!isDragged) {
        return
    }

    const bottomPercent = heroDecoration.style.bottom

    console.log(bottomPercent);

    heroDecoration.setAttribute('style', '')
})