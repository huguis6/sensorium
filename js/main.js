$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#f0f0f0 !important');
       } else {
          $('.navbar-default').css('background-color', 'transparent ');
       }
   });
    }
});

tailwind.config = {
   theme: {
     extend: {
      backgroundImage: {
        'hero-img': "url('https://picsum.photos/1920/1920/?random')",
        'body-img': "url('https://picsum.photos/1600/1600/?random')",
      }
    }
   }
 }

