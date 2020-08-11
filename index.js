// Features section functionality

const featuresNav = document.getElementsByName('feature');
const featuresContent = Array.from(
  document.getElementsByClassName('component')
);

featuresNav.forEach((nav) => {
  nav.addEventListener('click', () => {
    if ((nav.checked = true)) {
      featuresContent.forEach((content) => {
        content.id.includes(nav.id)
          ? content.classList.remove('hidden')
          : content.classList.add('hidden');
      });
    }
  });
});

// FAQ section functionality

const questions = Array.from(
  document.getElementsByClassName('questions__label')
);
questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.nextElementSibling.toggleAttribute('hidden');
  });
});

// Mobile Navigation

const hamburguer = document.querySelector('.hamburguer');
const hamburguerBars = Array.from(
  document.querySelectorAll('.hamburguer > div')
);
const mobileNav = document.querySelector('.mobile-nav');

function toggleNav() {
  mobileNav.toggleAttribute('hidden');
  hamburguer.classList.toggle('change');
  // hamburguerBars.map((bar) => {
  //   bar.classList.contains('change')
  //     ? bar.classList.remove('change')
  //     : bar.classList.add('change');
  // });
}

hamburguer.addEventListener('click', toggleNav);
