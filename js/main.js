/**
 * Created by bshen on 14/02/15.
 */

function isInBlog() {
  var reg = /blog/;
  return reg.test(document.location.pathname);
}

$(document).ready(function () {

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

    if (!isInBlog()) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $("#street-session").offset().top
      }, 800);
    }


  });

  // scroll - teamLink
  $("#team-link").click(function (e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $("#team").offset().top
    }, 800);
  });
});