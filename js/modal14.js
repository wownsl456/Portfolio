
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal14").width()/2);
     var h = ($(window).height()/2)-($(".modal14").height()/2);
     
     $(".modal14").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(18)').click(function(){
         $(".modal14").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal14 a").click(function(){
        $(".modal14").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 