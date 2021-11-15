
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal2").width()/2);
     var h = ($(window).height()/2)-($(".modal2").height()/2);
     
     $(".modal2").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(6)').click(function(){
         $(".modal2").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal2 a").click(function(){
        $(".modal2").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 