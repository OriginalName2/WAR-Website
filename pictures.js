
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

$("#slideshowone > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowone > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowone');
}, 3000);

$("#slideshowtwo > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowtwo > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowtwo');
}, 3000);

$("#slideshowthree > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowthree > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowthree');
}, 3000);

$("#slideshowfour > div:gt(0)").hide();

setInterval(function() {
  $('#slideshowfour > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshowfour');
}, 3000);
