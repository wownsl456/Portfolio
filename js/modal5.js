
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal5").width()/2);
     var h = ($(window).height()/2)-($(".modal5").height()/2);
     
     $(".modal5").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(9)').click(function(){
         $(".modal5").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal5 a").click(function(){
        $(".modal5").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 