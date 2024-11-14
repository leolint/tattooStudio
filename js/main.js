function openMobileMenu() {
    const button = document.querySelector('.header_wrapper-button')
    const wrapper = document.querySelector('.header_wrapper-nav ul')
    button.addEventListener('click', function () {
        wrapper.classList.toggle('openMenu')
        button.classList.toggle('buttonCloseAnimation')
    })
}

openMobileMenu()

function changeHeaderBg() {
    const header = document.querySelector('.header ')

    window.addEventListener('scroll', function () {
        if (scrollY === 0) {
            header.classList.remove('bgColor')
        } else {
            header.classList.add('bgColor')
        }
    })
}

changeHeaderBg()

function copyToClipboard() {
   
    var copyText = document.querySelector(".footer_wrapper-info__promo--title");

    navigator.clipboard.writeText(copyText.textContent)
        .then(function() {
            alert("Промокод скопійовано!");
        })
        .catch(function(err) {
            console.error('Помилка копіювання: ', err);
        });
}

