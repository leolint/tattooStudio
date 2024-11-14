function sliderAnimation() {
    const buttons = document.querySelectorAll('.slider_wrapper-buttons button')

    const imagesWrappers = document.querySelectorAll('.slider_wrapper-images')

    imagesWrappers[0].classList.add('showPhotos')

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {

            imagesWrappers.forEach(wrapper => {
                wrapper.classList.remove('showPhotos')
    
                if (wrapper.dataset.style === event.target.dataset.style) {
                    wrapper.classList.add('showPhotos')
    
                }
            })
    
        })
    })


}

sliderAnimation()