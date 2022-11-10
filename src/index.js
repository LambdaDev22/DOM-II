import './less/index.less'

// Your code goes here!

//event one
window.onload = function (evt) {
    console.log(`event ${evt.type} fired, ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = "READY TO GO"

    //copy event
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    //3 on click
    // document.body.addEventListener('click', evt => {
    //     evt.target.classList.toggle('mirror')
    // })

    //dbl click
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

    //5 key down
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66<h1>'
        }
    })

    //6 mouse move
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    //7 mouseenter


    //8 mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }
}

