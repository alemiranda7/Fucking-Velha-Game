var button = document.querySelector('.login-button')

var loginGame = (click) => {
    event.preventDefault()
    window.location = '../pages/index.html'
}

button.addEventListener('click', loginGame)