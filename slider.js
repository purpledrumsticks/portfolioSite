$(function() {
  var count = 0;

//contains all of the images to load
  var arr = [
    'img/bike.jpg',
    'img/b.jpg',
    'img/birds.jpg',
    'img/deep.jpg',
    'img/deezrows.jpg',
    'img/farm.jpg',
    'img/field.jpg',
    'img/heads.jpg',
    'img/joey.jpg',
    'img/lettice.jpg',
    'img/moarradish.jpg'
  ];

  //loads first background image
  $('.slider').css('background-image', 'url('+arr[0]+')');

  //changes background when forward arrow is clicked
  $('.forward').click(function() {
    if(count !== arr.length - 1) {
      count++;
    } else {
      count = 0;
    }
    $('.slider').fadeOut(800, function() {
        $('.slider').css('background-image', 'url('+arr[count]+')').fadeIn(800);
    });
  });

  //changes background image in reverse when arrow is clicked
  $('.reverse').click(function() {
    if(count > 0) {
      count--;
    } else {
      count = arr.length - 1;
    }
    $('.slider').fadeOut(800, function() {
        $('.slider').css('background-image', 'url('+arr[count]+')').fadeIn(800);
      });
  });

});
