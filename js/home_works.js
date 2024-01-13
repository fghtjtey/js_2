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

const animatedBlock = document.getElementById('animated_block')

let currentPosition = 0
let currentPosition_2 = 0

const maxWidthParentBlock = 445 //449
const minWidthParentBlock = 0

function moveBlock() {
    // animatedBlock.style.left = currentPosition + 'px'
    // animatedBlock.style.top = currentPosition_2 + 'px'

    if (currentPosition <= maxWidthParentBlock && currentPosition_2 === 0) {
        currentPosition++
        animatedBlock.style.left = `${currentPosition}px`
        // requestAnimationFrame(moveBlock)


    }else if(currentPosition >= maxWidthParentBlock && currentPosition_2 <= maxWidthParentBlock){
        currentPosition_2++
        animatedBlock.style.top = `${currentPosition_2}px`
        // requestAnimationFrame(moveBlock)


    }else if(currentPosition >= minWidthParentBlock && currentPosition_2 >= maxWidthParentBlock){
        currentPosition--
        animatedBlock.style.left = `${currentPosition}px`
        // requestAnimationFrame(moveBlock)


    }else if(currentPosition <= minWidthParentBlock && currentPosition_2 >= minWidthParentBlock){
        currentPosition_2--
        animatedBlock.style.top = `${currentPosition_2}px`
        // requestAnimationFrame(moveBlock)
    }
    requestAnimationFrame(moveBlock)
}
moveBlock()



// HOME WORK 2

const counterElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let counterValue = 0;
let intervalId;


function updateCounter() {
    counterElement.textContent = counterValue;
}


function startCounter() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            counterValue++;
            updateCounter();
        }, 1000);
    }
}


function stopCounter() {
    clearInterval(intervalId);
    intervalId = null;
}


function resetCounter() {
    stopCounter();
    counterValue = 0;
    updateCounter();
}

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);