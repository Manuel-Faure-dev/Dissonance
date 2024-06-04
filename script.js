// Gestion de la NavBar disparaît / apparaît au mouvement / au click navbBar-link

// var prevScrollpos = scrollY
// window.onscroll = function () {
//     var currentScrollPos = scrollY
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById('nav').style.top = '0'
//     } else {
//         document.getElementById('nav').style.top = '-82px'
//     }
//     prevScrollpos = currentScrollPos
// }

// Gestion du scrollTop
// function scrollToTop() {
//     document.body.scrollTop = 0 // Pour les navigateurs Chrome, Firefox, IE et Opera
//     document.documentElement.scrollTop = 0 // Pour Safari
//     console.log('test click ')
// }

// Gestion du formulaire
const input = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')

input.forEach((el) => {
    el.addEventListener('input', () => {
        if (el.value) {
            el.style.borderColor = '#01e586'
        }
    })
})
textarea.addEventListener('input', () => {
    textarea.style.borderColor = '#01e586'
})
