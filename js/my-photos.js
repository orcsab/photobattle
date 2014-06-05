$(function () {
  var me = 'unknown';

  $.each(images, function (key, value) {
    if (value.owner === me) {
      addPhotoRow(key, value);
    }
  });
});

//  func: addPhotoRow
//  args: the photo's name/location and its metadata.
//  rval: none
//  note: this function will append a bootstrap 'row' to the my-photos
//        container.
function addPhotoRow (loc, meta) {
  var html = '<div class="row">';
  html += '<div class="col-sm-4">';
  html += '<img src="' + loc + '" class="img-responsive" alt="' + meta.description + '">';
  html += '</div>';
  html += '<div class="col-sm-8">';
  html += '<p><em>Description:</em> ' + meta.description + '</p>';
  html += '<p><em>Date:</em> ' + meta.date + '</p>';
  html += '<div class="row">';
  html += '<div class="col-sm-4">';
  html += '<p><em>Funny:</em> ' + meta.rating.funny + '</p>';
  html += '</div>';
  html += '<div class="col-sm-4">';
  html += '<p><em>Amazing:</em> ' + meta.rating.amazing + '</p>';
  html += '</div>';
  html += '<div class="col-sm-4">';
  html += '<p><em>Creative:</em> ' + meta.rating.creative + '</p>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  $('.my-photos').append(html);
}