
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal7").width()/2);
     var h = ($(window).height()/2)-($(".modal7").height()/2);
     
     $(".modal7").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(11)').click(function(){
         $(".modal7").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal7 a").click(function(){
        $(".modal7").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 