const emojis = ["😊", "😊", "😂", "😂", "🤣", "🤣", "😁", "😁", "😒", "😒", "❤️", "❤️", "👍", "👍", "😎", "😎"]
let shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1)

function flipTile(element) {
    element.classList.add('boxOpen')
    setTimeout(function () {
        let openBoxes = document.querySelectorAll('.boxOpen')
        if (openBoxes.length > 1) {
            if (openBoxes[0].innerHTML == openBoxes[1].innerHTML) {
                openBoxes[0].classList.add('boxMatch')
                openBoxes[1].classList.add('boxMatch')
                openBoxes[1].classList.remove('boxOpen')
                openBoxes[0].classList.remove('boxOpen')
                if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                    alert('you win!')
                }
            } else {
                openBoxes[1].classList.remove('boxOpen')
                openBoxes[0].classList.remove('boxOpen')
            }
        }
    }, 700)
}

for (let i = 0; i < emojis.length; i++) {
    console.log("loop")
    let box = document.createElement('div')
    box.className = 'item'
    box.innerHTML = shuf_emojis[i]
    box.onclick = function () { flipTile(this) }
    document.querySelector('.game').appendChild(box)
}