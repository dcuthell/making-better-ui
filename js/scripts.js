$(document).ready(function(){
    $(".home").hover(function() {
      $(this).attr("src","img/pic1.jpeg");
    },
        function() {
          $(this).attr("src","img/pic3.jpg");
    });
});
