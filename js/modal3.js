
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal3").width()/2);
     var h = ($(window).height()/2)-($(".modal3").height()/2);
     
     $(".modal3").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(7)').click(function(){
         $(".modal3").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal3 a").click(function(){
        $(".modal3").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 