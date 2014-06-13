var album;
var imgPopup;

$(function () {
  // load the popup code
  console.log('inserting popup code');
  $('#img-popup').load("view-popup.html");

  var $container = $('#walloffame');
  album = new Album($container);

  // hints from http://codepen.io/desandro/pen/mjcGq
  $.each(images, function (key, value) {
    album.addImage(key, value);
  });

  // Show the view popup when an image is clicked
  $('#walloffame').on ('click', '.img-popup', function (event) {

    // disable normal link function so that it doesn't refresh the page
    event.preventDefault();

    // populate popup with correct image data
    console.log(event);
    var file = $(event.currentTarget).attr('id');
    $('#img-owner').text(images[file].owner);
    $('#img-date').text(images[file].date);
    $('#img-description').append(images[file].description);
    $('.vpop-content img').attr('src', file);

    //grab the height of the page
    var docHeight = $(document).height();
    //grab the px value from the top of the page to where you're scrolling
    var scrollTop = $(window).scrollTop();
    //display your popup and set height to the page height
    $('.vpop-bg').show().css({'height' : docHeight});
    //set the content 20px from the window top
    $('.vpop-content').css({'top': scrollTop+20+'px'});
  });
});

//  layout the album after all images have been loaded.
$(window).load(function () {
  album.layout();
});