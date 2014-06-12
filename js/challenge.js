$(function () {
  //  challenge-album
  //  challenge-meta
  var index = $.urlParam('index');
  var album = new Album($('#chg-album'));

  $('#chg-name').append(challenges[index].name);
  $('#chg-description').append(challenges[index].description);
  for (i in challenges[index].contestants) {
    $('#chg-contestants').append(challenges[index].contestants[i]);
    if (typeof challenges[index].contestants[+i+1] != 'undefined')
      $('#chg-contestants').append(', ');
  }

  $.each(challenges[index].photos, function (index, value) {
    album.addImage(value, images[value]);
  });

  $(window).load(function () {
    album.layout();
  });

});