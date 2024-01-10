// HOME_WORK 1 (PART 1)
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp =/^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Not ok'
        gmailResult.style.color = 'red'
    }
}

// HOME_WORK 1 (PART 2)

const animatedBlock = document.getElementById('animated_block');
let currentPosition = 0
const step = 3

function moveBlock() {
    currentPosition += step
    animatedBlock.style.left = currentPosition + 'px'

    if (currentPosition < 445) {
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()