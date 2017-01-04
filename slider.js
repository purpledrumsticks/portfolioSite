$(function() {
  var count = 0;

//contains all of the images to load
  var arr = [
    './dist/photo/optimized/up.JPG',
    './dist/photo/optimized/asheville.JPG',
    './dist/photo/optimized/sarbie.JPG',
    './dist/photo/optimized/caro.JPG',
    './dist/photo/optimized/dos.JPG',
    './dist/photo/optimized/fog.JPG',
    './dist/photo/optimized/hammer.JPG',
    './dist/photo/optimized/virgin.JPG',
    './dist/photo/optimized/set.JPG',
    './dist/photo/optimized/human.JPG',
    './dist/photo/optimized/monument.JPG',
    './dist/photo/optimized/marima.JPG',
    './dist/photo/optimized/mlk.JPG',
    './dist/photo/optimized/path.JPG',
    './dist/photo/optimized/nobjob.JPG',
  ];

  //loads first background image
  $('.mastdiv').css('background-image', 'url('+arr[0]+')');

  //changes background when forward arrow is clicked
  $('.forward').click(function() {
    if(count !== arr.length - 1) {
      count++;
    } else {
      count = 0;
    }
    $('.mastdiv').fadeOut(800, function() {
        $('.mastdiv').css('background-image', 'url('+arr[count]+')').fadeIn(800);
    });
  });

  //changes background image in reverse when arrow is clicked
  $('.reverse').click(function() {
    if(count > 0) {
      count--;
    } else {
      count = arr.length - 1;
    }
    $('.mastdiv').fadeOut(800, function() {
        $('.mastdiv').css('background-image', 'url('+arr[count]+')').fadeIn(800);
      });
  });

});
