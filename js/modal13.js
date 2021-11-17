
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal13").width()/2);
     var h = ($(window).height()/2)-($(".modal13").height()/2);
     
     $(".modal13").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(17)').click(function(){
         $(".modal13").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal13 a").click(function(){
        $(".modal13").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 