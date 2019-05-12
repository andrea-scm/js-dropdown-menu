$('.menu-item').click(function() {
  $(this).children('.dropdown-menu').toggleClass('active');
});

$('.dropdown-menu-item').mouseover(function() {
  $(this).children('.dropdown-menu-extra-item').toggleClass('active');
});
