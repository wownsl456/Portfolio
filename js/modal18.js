
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal18").width()/2);
     var h = ($(window).height()/2)-($(".modal18").height()/2);
     
     $(".modal18").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(22)').click(function(){
         $(".modal18").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal18 a").click(function(){
        $(".modal18").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 