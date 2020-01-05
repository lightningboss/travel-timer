$(document).ready(function() {
  $('.countdown').countdown('2020/3/1', function(event) {
     var $this = $(this).html(event.strftime('<span>%D</span> day%!d ' + '<span>%H</span> hour%!H ' + '<span>%M</span> minute%!M ' + 'and <span>%S</span> second%!S.'));
   });
});
