function blogOpenPostTex() {
    const items = document.querySelectorAll('.blog_wrapper-item')

    items.forEach(item => {
        item.addEventListener('click', function () {
            const text = item.childNodes[3]
            text.classList.toggle('openText')
        })
    })
}

blogOpenPostTex()