$(function(){
  $('#mochiPicker').datepicker();
  $('#news-carousel').carousel({
    interval: 4000
  })
    .on('slid.bs.carousel', function(){

      var index = +$('.list-group li.active').attr('data-slide-to');
      var listItems = $('.list-group li');
      listItems.removeClass('active');

      if(index >= listItems.size()-1){
        index = 0;
      }
      else{
        index++;
      }

      $('.list-group li[data-slide-to="' + index + '"]').addClass('active');
    });

  $('.list-group li').click(function(){
    $('.list-group li').removeClass('active');
    $(this).addClass('active');

  });
});