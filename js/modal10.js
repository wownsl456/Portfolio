
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal10").width()/2);
     var h = ($(window).height()/2)-($(".modal10").height()/2);
     
     $(".modal10").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(14)').click(function(){
         $(".modal10").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal10 a").click(function(){
        $(".modal10").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 