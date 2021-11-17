
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal17").width()/2);
     var h = ($(window).height()/2)-($(".modal17").height()/2);
     
     $(".modal17").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(21)').click(function(){
         $(".modal17").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal17 a").click(function(){
        $(".modal17").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 