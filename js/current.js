$(function () {
  $.each(challenges, function (index, value) {
    var thumbAlbumId = 'thumb' + index;

    var row = '<div class="row">';
    row += '<div class="col-md-4">';
    row += '<div id="' + thumbAlbumId + '">';
    row += '</div>';
    row += '</div>';
    row += '<div class="col-md-8">';
    row += buildMetaSummary(value);
    row += '</div>';
    row += '</div>';
    $('.current').append(row);

    buildThumbGallery(thumbAlbumId, value);
  });
});

// func: buildThumbGallery
// args: the ID of the div in which the album should be placed.
//       a challenge summary object
// rval: a string of HTML to insert into a bootstrap .col
function buildThumbGallery (thumbAlbumId, challenge) {
  console.log('building packery for id ' + thumbAlbumId);
  var $album = $('#' + thumbAlbumId);

  var pckry = $album.packery({
    itemSelector: '.item',
    gutter: 2,
    // isHorizontal: true
  });

  $.each(challenge.photos, function (index, value) {
    console.log('adding to thumb album: ' + value);
    addImageToAlbum($album, value, images[value]);
  });

  $(window).load(function () {
    $album.packery('layout');
  });
}

// func: buildMetaSummary
// args: a challenge summary object
// rval: a string of HTML to insert into a bootstrap .col
function buildMetaSummary (challenge) {
  var rval = '<p><em>Name: </em> ' + challenge.name + '</p>';

  rval += '<p><em>Competitors: </em> ';
  $.each(challenge.contestants, function (index, value) {
    if (index)
      rval += ', ';
    rval += value;
  });
  rval += '</p>';

  rval += '<p><em>Time left: </em> undefined';

  rval += '<p><em>Description: </em> ' + challenge.description;

  return rval;
}