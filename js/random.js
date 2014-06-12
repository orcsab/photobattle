$(function () {
  var keys = [];
  for (var k in images)
    keys.push(k);
  console.log('keys = ' + keys);
  console.log('keys length = ' + keys.length);
  var i = Math.floor (Math.random() * keys.length);
  console.log('selecting key ' + i);
  var key = keys[i];

  console.log('selected key = ' + key);
  $('#img-src').attr('src', key);
  $('#img-src').attr('alt', images[key].description);
  $('#rtg-funny').text(images[key].rating.funny);
  $('#rtg-creative').text(images[key].rating.creative);
  $('#rtg-amazing').text(images[key].rating.amazing);
  $('#rtg-overall').text(images[key].rating.overall);
  $('#img-owner').text(images[key].owner);
  $('#img-date').text(images[key].date);
  $('#img-location').text('undefined');
  $('#img-description').text(images[key].description);
});