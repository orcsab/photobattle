function Album ($container) {
  // $container.css('height', '500px');
  // $container.css('width', 'auto');

  this.$packery = $container.packery({
    itemSelector: '.item',
    gutter: 5,
    // isHorizontal: true,
  });
}

// func: addImage
// args: $container: the jQuery object that is a packery container to
//       which the image should be appended.
//       file: the image file name and relative path
//       meta: the image metadata
// rval: none
Album.prototype.addImage = function (file, meta) {
  // first establish the size of the image using its rating.
  var size = '';
  if (meta.rating.overall / 3 > 2)
    size = 'w3';
  else if (meta.rating.overall / 3 > 1)
    size = 'w2';

  var items = '<div class="item '+ size + '" style="position: relative; left: 0; top: 0;">';
  items += '<img src="' + file + '" style="position: relative; top: 0; left: 0; max-width: 100%; height: auto;" >';
  items += '</div>';
  var $items = $(items);
  this.$packery.append($items).packery('appended', $items);
}

// func: layout
// args: none
// rval: none
// note: layout the contents of the album
Album.prototype.layout = function () {
  //  for posterity: this two lines are equivalent
  // this.$packery.data('packery').layout();
  this.$packery.packery('layout');

}