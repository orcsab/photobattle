// func: addImageToAlbum
// args: $container: the jQuery object that is a packery container to
//       which the image should be appended.
//       loc: the image location
//       meta: the image metadata
// rval: none
function addImageToAlbum ($container, loc, meta) {
  // first establish the size of the image using its rating.
  var size = '';
  if (meta.rating.overall / 3 > 2)
    size = 'w3';
  else if (meta.rating.overall / 3 > 1)
    size = 'w2';

  var items = '<div class="item '+ size + '" style="position: relative; left: 0; top: 0;">';
  items += '<img src="' + loc + '" style="position: relative; top: 0; left: 0; max-width: 100%; height: auto;" >';
  items += '</div>';
  var $items = $(items);
  $container.append($items).packery('appended', $items);
}