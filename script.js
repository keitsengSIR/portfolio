const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition) {
            element.classList.add('show');
        }

    });

});