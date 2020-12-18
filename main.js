const h1 = document.querySelector('h1')
const span = h1.querySelector('span')

autoText()


function autoText() {
    const texts = span.dataset.texts.split(',')
    let currentIndex = 0

    const write = () => {
        texts[currentIndex].split('').forEach((letter, index) => {
            const timeOut = setTimeout(() => {
                span.textContent += letter
                if (texts[currentIndex].length - 1 == index) {
                    clearTimeout(timeOut)
                    const interval = setInterval(() => {
                        span.textContent = span.textContent.slice(0, -1)
                        if (span.textContent.length == 0) {
                            currentIndex++
                            if (currentIndex == texts.length) {
                                currentIndex = 0
                            }
                            clearInterval(interval)
                            write()
                        }
                    }, 1000);
                }
            }, 1000 * index)
        })
    }

    return write()

}