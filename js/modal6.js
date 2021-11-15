
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal6").width()/2);
     var h = ($(window).height()/2)-($(".modal6").height()/2);
     
     $(".modal6").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(10)').click(function(){
         $(".modal6").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal6 a").click(function(){
        $(".modal6").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 