$(function() {

  $('.cta').click(function(){
    $('.overlay').addClass('is-open');
    return false;
  });

  $('.close').click(function(){
    $('.overlay').removeClass('is-open')
  });

});
