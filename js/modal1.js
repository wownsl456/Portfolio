
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal1").width()/2);
     var h = ($(window).height()/2)-($(".modal1").height()/2);
     
     $(".modal1").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(5)').click(function(){
         $(".modal1").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal1 a").click(function(){
        $(".modal1").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 