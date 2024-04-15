function getCookie(name) {
    try {
        const pairs = document.cookie.split('; ')
        const cookie = pairs.find(p => p.startsWith(name + '='))
        return cookie.substring(name.length + 1)
    } catch (e) {
        return null
    }

}

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value)
}

const modal = document.querySelector('.modal')
const popupClosed = getCookie('popupClosed')

if (popupClosed == null) {
    setTimeout(() => {
        modal.classList.add('modal_active')
    }, 2000)

    const modalClose = modal.querySelector('.modal__close')
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active')
        setCookie('popupClosed', 'true')
    })
}



