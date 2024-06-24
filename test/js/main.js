document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');
  const authButtons = document.querySelector('.auth-buttons');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    authButtons.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
