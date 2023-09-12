const tiles = ["./images/Beer.png", "./images/Beer.png", "./images/Donut.png", "./images/Donut.png", "./images/Hotdog.png", "./images/Hotdog.png", "./images/Lemonade.png", "./images/Lemonade.png", "./images/Pizza.png", "./images/Pizza.png", "./images/Sushi.png", "./images/Sushi.png", "./images/Taco.png", "./images/Taco.png", "./images/Icecream.png", "./images/Icecream.png"]
let shuffledTiles = tiles.sort(() => (Math.random() > .5) ? 2 : -1)

function flipTile(element) {
    element.classList.add('boxOpen')
    console.log(element.innerHTML)
    setTimeout(function () {
        let openBoxes = document.querySelectorAll('.boxOpen')
        if (openBoxes.length > 1) {
            if (openBoxes[0].innerHTML == openBoxes[1].innerHTML) {
                openBoxes[0].classList.add('boxMatch')
                openBoxes[1].classList.add('boxMatch')
                openBoxes[1].classList.remove('boxOpen')
                openBoxes[0].classList.remove('boxOpen')
                if (document.querySelectorAll('.boxMatch').length == tiles.length) {
                    alert('you win!')
                }
            } else {
                openBoxes[1].classList.remove('boxOpen')
                openBoxes[0].classList.remove('boxOpen')
            }
        }
    }, 700)
}

for (let i = 0; i < tiles.length; i++) {
    let box = document.createElement('div')
    box.className = 'item'
    console.log(document.querySelector('.item'))
    box.onclick = function () { flipTile(this) }
    document.querySelector('.game').appendChild(box)
    let picture = document.createElement('img')
    picture.className = 'food'
    picture.src = shuffledTiles[i]
    document.querySelectorAll('.item')[i].appendChild(picture)
}