/**
 * Created by bshen on 14/02/15.
 */


$(document).ready(function () {


  // scroll - accueil-link
  $("#accueil-link").click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });


  // scroll - btn-up
  $(".btn-up").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  // scroll - invit-scroll
  $("#invit-scroll").click(function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#street-session").offset().top
    }, 800);
  });

  // scroll - invit-scroll
  $("#invit-scroll-blog").click(function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#blog-container").offset().top
    }, 800);
  });

  // scroll - streetLink
  $("#street-link").click(function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#street-session").offset().top
    }, 800);
  });

  // scroll - teamLink
  $("#team-link").click(function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#team").offset().top
    }, 800);
  });
});