
$(document).ready(function(){
    var w = ($(window).width()/2)-($(".modal15").width()/2);
     var h = ($(window).height()/2)-($(".modal15").height()/2);
     
     $(".modal15").css({
         left:w,top:h
     });
     
     $(".work__projects").children('a:eq(19)').click(function(){
         $(".modal15").fadeIn();
         $(".modalBg").fadeIn();
     });
     
     $(".modal15 a").click(function(){
        $(".modal15").fadeOut();
         $(".modalBg").fadeOut();
     });
 
 });
 