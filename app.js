window.addEventListener('load', function () {
  const sectBtns = document.querySelectorAll('.controls .control');
  const sections = document.querySelectorAll('.section');

  function handleButtonClick(clickedBtn) {
    let currentBtn = document.querySelector('.controls .active-btn');
    if (currentBtn) {
      currentBtn.classList.remove('active-btn');
    }
    clickedBtn.classList.add('active-btn');
  }

  function handleSectionClick(clickedSection) {
    const id = clickedSection.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
      });

      clickedSection.classList.add('active');

      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const targetSection = document.getElementById(id);
      targetSection.classList.add('active');
    }
  }

  // Button click active class
  sectBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      console.log('Button clicked:', this);
      handleButtonClick(this);
      handleSectionClick(document.getElementById(this.dataset.id));
    });
  });

  // Sections Active class
  sections.forEach((section) => {
    section.addEventListener('click', function () {
      handleSectionClick(this);
      handleButtonClick(document.querySelector(`.controls [data-id="${this.id}"]`));
    });

    // Triggering a reflow for the initial animation
    void section.offsetWidth;
  });

  // Initial setup on 'load' event
  const initialSectionId = sectBtns[0].dataset.id;
  handleSectionClick(document.getElementById(initialSectionId));
  handleButtonClick(sectBtns[0]);
});
