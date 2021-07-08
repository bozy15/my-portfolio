jQuery(document).ready(function ($) {
  // Const variables
  const navMenu = $("#nav-menu"),
    navToggle = $("#nav-toggle"),
    navClose = $("#nav-close");

  // Show the hidden nav-menu on smaller devices
  if (navToggle) {
    navToggle.click(() => {
      navMenu.addClass("show-nav-menu");
    });
  }
  


});
