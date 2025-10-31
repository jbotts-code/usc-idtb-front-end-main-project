// ===============================
// Blade Runner 2049 Theme Script
// Dark Mode (default) + Light Mode Toggle
// Desktop Navigation Toggle with Smooth Animation
// ===============================

$(document).ready(function() {

  // ===== Theme Toggle =====
  const themeButton = $('#theme-toggle');

  // Check saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    $('body').addClass('light-mode');
  }

  // Add smooth transition for theme
  $('body').css('transition', 'background-color 0.3s, color 0.3s');

  // Function to update theme button text
  function updateThemeButtonText() {
    themeButton.text($('body').hasClass('light-mode') ? 'Dark Mode' : 'Light Mode');
  }

  // Set initial theme button text
  updateThemeButtonText();

  // Handle theme toggle click
  themeButton.on('click', function() {
    $('body').toggleClass('light-mode');
    localStorage.setItem('theme', $('body').hasClass('light-mode') ? 'light' : 'dark');
    updateThemeButtonText();
  });

  // ===== Desktop Nav Toggle =====
  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');

  // Initialize menu animation state
  menu.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
  menu.style.overflow = 'hidden';
  menu.style.maxHeight = menu.classList.contains('open') ? menu.scrollHeight + 'px' : '0';
  menu.style.opacity = menu.classList.contains('open') ? '1' : '0';

  // Handle nav toggle click
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));

    if (!isOpen) {
      menu.classList.add('open');
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.style.opacity = '1';
    } else {
      menu.style.maxHeight = '0';
      menu.style.opacity = '0';
      menu.classList.remove('open');
    }
  });

});
