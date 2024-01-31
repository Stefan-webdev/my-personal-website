window.addEventListener('load', function () {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    function PageTransitions() {
        // Button click active class
        for (let i = 0; i < sectBtn.length; i++) {
            sectBtn[i].addEventListener('click', function () {
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].classList.remove('active-btn');
                this.classList.add('active-btn');
            });
        }

        // Sections Active class
        allSections.addEventListener('click', function (e) {
            console.log(e.target);
        });
    }

    PageTransitions();
});
