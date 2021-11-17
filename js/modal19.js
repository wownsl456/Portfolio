
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal19").width()/2);
     var h = ($(window).height()/2)-($(".modal19").height()/2);
     
     $(".modal19").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(23)').click(function(){
         $(".modal19").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal19 a").click(function(){
        $(".modal19").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 