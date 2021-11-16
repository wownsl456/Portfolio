
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal11").width()/2);
     var h = ($(window).height()/2)-($(".modal11").height()/2);
     
     $(".modal11").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(15)').click(function(){
         $(".modal11").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal11 a").click(function(){
        $(".modal11").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 