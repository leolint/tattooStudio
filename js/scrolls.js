

function scrollToSection() {
    const navButtons = document.querySelector('.header_wrapper-nav')
    const introButton = document.querySelector('.intro_wrapper-button')
    const form = document.querySelector('.form')
    const services = document.querySelector('.services')

    function scroll(section) {
        section.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }

    introButton.addEventListener('click', function () {
        scroll(form)
    })

    navButtons.addEventListener('click', function (event) {
        const target = event.target.dataset.link;
        switch (target) {
            case 'tattoo':
                scroll(form)
                break;
            case 'services':
                scroll(services)
                break;
            default:
                break;
        }
    })

}

scrollToSection()

const num = 3

var countSheep = function (num) {

    let str = '';

    if (num === 0) {
        return ''
    } else {
        for (let i = 1; i <= num; i++) {
            str += `${i} sheep...`
        }
    }
    return str
}

countSheep(num)