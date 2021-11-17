
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal16").width()/2);
     var h = ($(window).height()/2)-($(".modal16").height()/2);
     
     $(".modal16").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(20)').click(function(){
         $(".modal16").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal16 a").click(function(){
        $(".modal16").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 