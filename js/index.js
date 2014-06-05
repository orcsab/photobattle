$(function () {
  console.log('instantiating packery');
  var $container = $('#walloffame');
  var pckry = $container.packery({
    itemSelector: '.item',
    gutter: 5,
    // isHorizontal: true
  });

  // hints from http://codepen.io/desandro/pen/mjcGq
  console.log('adding images to container');
  $.each(images, function (key, value) {
    addImageToAlbum($container, key, value);
  });

  $(window).load(function () {
    console.log("window loaded");
    $container.packery('layout');
  });
});