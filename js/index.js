// Activity Tests
console.log("Your index.js file is loaded correctly!");

$("#navigation").on("click", function(){
    console.log("You clicked on #navigation");
});

// Fade Hover

$( "#navigation p").hover(function() {
    $( this ).fadeOut( slow );
    $( this ).fadeIn(500);
  });

// Scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
  
  // My Skills
  $("document").ready(function(){ 
    $("#skillImg1").mouseenter(function(){       
        $(this).attr('src','images/uxhover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg1").mouseleave(function(){       
        $(this).attr('src','images/Ux Research.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg2").mouseenter(function(){       
        $(this).attr('src','images/uxdesignhover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg2").mouseleave(function(){       
        $(this).attr('src','images/Ux Design.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg3").mouseenter(function(){       
        $(this).attr('src','images/uihover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg3").mouseleave(function(){       
        $(this).attr('src','images/Ui Design.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg4").mouseenter(function(){       
        $(this).attr('src','images/analyticshover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg4").mouseleave(function(){       
        $(this).attr('src','images/Analytics.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg5").mouseenter(function(){       
        $(this).attr('src','images/devhover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg5").mouseleave(function(){       
        $(this).attr('src','images/Development.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});
