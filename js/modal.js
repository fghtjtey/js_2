// modal

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const closeModelButton = document.querySelector('.modal_close')

const openModel  = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal  = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modalTriggerButton.onclick = () => {
    openModel()
}
closeModelButton.onclick = () => {
    closeModal()
}
modal.onclick = (event) => {
    if (event.target === modal)
    closeModal()
}



// removeEventListener()  ---- изучать самостоятельно
