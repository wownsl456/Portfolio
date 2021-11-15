
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal8").width()/2);
     var h = ($(window).height()/2)-($(".modal8").height()/2);
     
     $(".modal8").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(12)').click(function(){
         $(".modal8").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal8 a").click(function(){
        $(".modal8").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 