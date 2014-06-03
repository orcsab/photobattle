$(function () {
  $.each(challenges, function (index, value) {
    var row = '<div class="row">';
    row += '<div class="col-md-4">';
    row += buildThumbGallery(value);
    row += '</div>';
    row += '<div class="col-md-8">';
    row += buildMetaSummary(value);
    row += '</div>';
    row += '</div>';
    $('.current').append(row);
  });
});

// func: buildThumbGallery
// args: a challenge summary object
// rval: a string of HTML to insert into a bootstrap .col
function buildThumbGallery (challenge) {
  return '<img src="' + challenge.photos[0] + '" class="img-responsive" alt="no meta">';
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