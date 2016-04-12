$(document).ready(function() {
  $('.bars').click(function() {
    $('#bar0, #channel, #signal').fadeOut('fast', 0);
    $('#tvsucks').css('display', 'block');
    $('body').css('overflow', 'scroll');

  });

});
