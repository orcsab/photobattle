$(function () {
  console.log('registering popup click handlers');
  // hide popup when user clicks on close button
  $('#img-popup').on ('click', '#vpop-close-btn', function(){
    $('.vpop-bg').hide(); // hide the overlay
  });

  // hides the popup if user clicks anywhere outside the container
  $('#img-popup').on ('click', '.vpop-bg', function(){
    $('.vpop-bg').hide();
  });

  // prevents the overlay from closing if user clicks inside the popup overlay
  $('#img-popup').on ('click', '.vpop-content', function() {
    return false;
  });
});