document.addEventListener('DOMContentLoaded', function () {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const body = document.querySelector('body');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function () {
      body.classList.toggle('mobile-nav-active');
      mobileNavToggle.classList.toggle('bi-x'); // Change icon to 'x' when menu is open
    });
  }
});
