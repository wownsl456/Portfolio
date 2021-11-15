
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal4").width()/2);
     var h = ($(window).height()/2)-($(".modal4").height()/2);
     
     $(".modal4").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(8)').click(function(){
         $(".modal4").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal4 a").click(function(){
        $(".modal4").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 