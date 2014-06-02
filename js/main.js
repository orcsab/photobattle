$(function () {
  $('#header').load("header.html");
  $('#footer').load("footer.html");

  console.log('instantiating packery');
  var $container = $('#walloffame');
  var pckry = $container.packery({
    itemSelector: '.item',
    gutter: 5,
    // isHorizontal: true
  });

  // hints from http://codepen.io/desandro/pen/mjcGq
  console.log('adding images to container');
  $.each(images, function (index, value) {
    // first establish the size of the image using its rating.
    console.log('adding ' + value.loc);
    var size = '';
    if (value.rating / 3 > 2)
      size = 'w3';
    else if (value.rating / 3 > 1)
      size = 'w2';

    var items = '<div class="item '+ size + '" style="position: relative; left: 0; top: 0;">';
    items += '<img src="' + value.loc + '" style="position: relative; top: 0; left: 0; max-width: 100%; height: auto;" >';
    items += '</div>';
    var $items = $(items);
    $container.append($items).packery('appended', $items);
  });

  $(window).load(function () {
    console.log("window loaded");
    $container.packery('layout');
  });
});