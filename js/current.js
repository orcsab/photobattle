$(function () {
  var thumbAlbums = [];
  $.each(challenges, function (index, value) {
    // console.log('challenge: ' + value.name);
    var thumbAlbumId = 'thumb' + index;
    var challengeId = 'challenge' + index;

    var row = '';
    row += '<hr>';
    row += '<div class="row" id="' + challengeId + '">';
    row += '<div class="col-md-4">';
    row += '<div id="' + thumbAlbumId + '">';
    row += '</div>';
    row += '</div>';
    row += '<div class="col-md-8">';
    row += buildMetaSummary(value);
    row += '</div>';
    row += '</div>';
    $('.current').append(row);

    thumbAlbums.push(new Album($('#' + thumbAlbumId)));

    buildThumbGallery(thumbAlbums[index], value);
    registerMouseActivities(index, challengeId);
  });
  $('.current').append('<hr>');
});

// func: buildThumbGallery
// args: The album object in which thumbnails should be placed.
//       a challenge summary object
// rval: a string of HTML to insert into a bootstrap .col
function buildThumbGallery (album, challenge) {
  console.log('building packery for challenge ' + challenge.name);

  $.each(challenge.photos, function (index, value) {
    console.log('adding to thumb album: ' + value);
    album.addImage(value, images[value]);
  });

  $(window).load(function () {
    album.layout();
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

//  func: registerMouseActivities
//  args: index: the integer ID of the challenge
//        id: the tag ID of the <div> that contains the challenge summary
//  desc: register click, hover for a challenge
function registerMouseActivities(index, id) {
  console.log('registering mouse for ' + id);
  $('#' + id).on('click', function() {
    console.log('captured click on ' + id);
  });

  $('#' + id).on('mouseenter', function() {
    console.log('captured mouseenter on ' + id);
    $('#' + id).addClass('current-highlight');
  });

  $('#' + id).on('mouseleave', function() {
    console.log('captured mouseenter on ' + id);
    $('#' + id).removeClass('current-highlight');
  });
}