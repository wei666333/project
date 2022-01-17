
function display( imgfile )
{
   var bigImage = document.getElementById( "imgbig" );
   //bigImage.setAttribute( "style", "width: 0px; height: 0px;" );
   bigImage.setAttribute( "src", imgfile );
   document.getElementById( "imgbig" ).addEventListener(
    "click", function() { gogo(  imgfile ); }, false );
//   bigImage="<a href='#'><img src="+imgfile+" ></a>"
//    document.addEventListener("imgbig").inner=bigImage;

   //bigImage.setAttribute( "alt", "Large version of " + imgfile );
   count = 0; // start the image at size 0
  // interval = window.setInterval( "run()", 10 ); // animate
} // end function display

// register event handlers
function start()
{
    document.getElementById( "pic1" ).addEventListener(
        "click", function() { display( "tr1.png" ); }, false );
    document.getElementById( "pic2" ).addEventListener(
        "click", function() { display( "tr2.png" ); }, false );
    document.getElementById( "pic3" ).addEventListener(
        "click", function() { display( "tr3.png" ); }, false );
    document.getElementById( "pic4" ).addEventListener(
        "click", function() { display( "tr4.png" ); }, false );
    document.getElementById( "pic5" ).addEventListener(
        "click", function() { display( "tr5.png" ); }, false );
    document.getElementById( "pic6" ).addEventListener(
        "click", function() { display( "tr6.png" ); }, false );
    document.getElementById( "pic7" ).addEventListener(
        "click", function() { display( "tr7.png" ); }, false );
    document.getElementById( "pic8" ).addEventListener(
        "click", function() { display( "tr8.png" ); }, false );
    document.getElementById( "pic9" ).addEventListener(
        "click", function() { display( "tr9.png" ); }, false );
    document.getElementById( "pic10" ).addEventListener(
        "click", function() { display( "tr10.png" ); }, false );
    document.getElementById( "pic11" ).addEventListener(
        "click", function() { display( "tr11.png" ); }, false );
    document.getElementById( "pic12" ).addEventListener(
        "click", function() { display( "tr12.png" ); }, false );
    document.getElementById( "pic13" ).addEventListener(
        "click", function() { display( "tr13.png" ); }, false );
    
} // end function start
$(document).ready(function(){
    $("#page1-1").click(function(){
        $("#page1").css("display", "none");
        $("#teacher1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-2").click(function(){
        $("#page1").css("display", "none");
        $("#teacher2").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-3").click(function(){
        $("#page1").css("display", "none");
        $("#teacher3").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-4").click(function(){
        $("#page1").css("display", "none");
        $("#teacher4").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-5").click(function(){
        $("#page1").css("display", "none");
        $("#teacher5").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-6").click(function(){
        $("#page1").css("display", "none");
        $("#teacher6").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-7").click(function(){
        $("#page1").css("display", "none");
        $("#teacher7").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-8").click(function(){
        $("#page1").css("display", "none");
        $("#teacher8").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-9").click(function(){
        $("#page1").css("display", "none");
        $("#teacher9").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-10").click(function(){
        $("#page1").css("display", "none");
        $("#teacher10").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-11").click(function(){
        $("#page1").css("display", "none");
        $("#teacher11").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-12").click(function(){
        $("#page1").css("display", "none");
        $("#teacher12").css("display", "block");
    });
});
$(document).ready(function(){
    $("#page1-13").click(function(){
        $("#page1").css("display", "none");
        $("#teacher13").css("display", "block");
    });
});
/****************************************** */
$(document).ready(function(){
    $("#back1").click(function(){
        $("#teacher1").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back2").click(function(){
        $("#teacher2").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back3").click(function(){
        $("#teacher3").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back4").click(function(){
        $("#teacher4").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back5").click(function(){
        $("#teacher5").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back6").click(function(){
        $("#teacher6").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back7").click(function(){
        $("#teacher7").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back8").click(function(){
        $("#teacher8").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back9").click(function(){
        $("#teacher9").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back10").click(function(){
        $("#teacher10").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back11").click(function(){
        $("#teacher11").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back12").click(function(){
        $("#teacher12").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back13").click(function(){
        $("#teacher13").css("display", "none");
        $("#page1").css("display", "block");
    });
});
$(document).ready(function(){
    $("#back14").click(function(){
        $("#page2").css("display", "none");
        $("#page1").css("display", "block");
    });
});

/************************************************ */
$(document).ready(function(){
    $("#startt").click(function(){
        $("#page1").css("display", "block");
        $("#page0").css("display", "none");
    });
});

$(document).ready(function(){
    $("#backstart").click(function(){
        $("#page0").css("display", "block");
        $("#page1").css("display", "none");
    });
});
$(document).ready(function(){
    $("#comment").click(function(){
        // $("#page2").css("display", "block");
        // $("#page1").css("display", "none");
        // location.href = "https://wang-final-project.herokuapp.com/";
    window.open('https://wang-final-project.herokuapp.com/');

    });
});

/****************************************** */















window.addEventListener( "load", start, false );
