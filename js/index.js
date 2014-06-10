$(function () {
  console.log('instantiating packery');
  var $container = $('#walloffame');
  var album = new Album($container);

  // hints from http://codepen.io/desandro/pen/mjcGq
  console.log('adding images to container');
  $.each(images, function (key, value) {
    album.addImage(key, value);
  });

  $(window).load(function () {
    console.log("window loaded");
    $container.packery('layout');
  });
});