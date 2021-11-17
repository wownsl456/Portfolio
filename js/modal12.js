
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal12").width()/2);
     var h = ($(window).height()/2)-($(".modal12").height()/2);
     
     $(".modal12").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(16)').click(function(){
         $(".modal12").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal12 a").click(function(){
        $(".modal12").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 