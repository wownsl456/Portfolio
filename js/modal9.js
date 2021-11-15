
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal9").width()/2);
     var h = ($(window).height()/2)-($(".modal9").height()/2);
     
     $(".modal9").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(13)').click(function(){
         $(".modal9").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal9 a").click(function(){
        $(".modal9").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 