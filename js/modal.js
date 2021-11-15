$(document).ready(function(){
   var w = ($(window).width()/2)-($(".modal").width()/2);
    var h = ($(window).height()/2)-($(".modal").height()/2);
    
    $(".modal").css({
        left:w,top:h
    });
    
    $(".work__projects").children('a:eq(4)').click(function(){
        $(".modal").fadeIn();
        $(".modalBg").fadeIn();
    });
    
    $(".modal a").click(function(){
       $(".modal").fadeOut();
        $(".modalBg").fadeOut();
    });

});
