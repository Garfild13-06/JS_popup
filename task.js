const modal = document.querySelector('.modal')

const popupClosed = localStorage.getItem('popupClosed')
if (popupClosed == null) {
    setTimeout(() => {
        modal.classList.add('modal_active')
    }, 5000)

    const modalClose = modal.querySelector('.modal__close')
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active')
        localStorage.setItem('popupClosed', 'true')
    })
}

