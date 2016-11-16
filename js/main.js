$(document).ready(function() {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('.fa-chevron-circle-left').toggleClass("fa-rotate-180");
    });
    window.changeText = function(text, heading, caption) {
		document.getElementById('pText').innerHTML=text;
        document.getElementById('headingDes').innerHTML=heading;
        document.getElementById('captionDes').innerHTML=caption;
    }

    tiles = ""

    $("#programmingbtn").click(function() {
    	$("html, body").animate({ scrollTop: 0 }, "fast");
    	$(".programming").addClass("visible");
    	// $(".about").removeClass("visible");
        $(".about").addClass("invisible");
    	$(".excel").removeClass("visible");
    	tiles = $(".moreProgramming").fadeTo(0, 0);
    });


    $("#excelbtn").click(function() {
    	$("html, body").animate({ scrollTop: 0 }, "fast");
    	$(".excel").addClass("visible");
        $(".about").addClass("invisible");
    	$(".programming").removeClass("visible");
    	tiles = $(".moreExcel").fadeTo(0, 0);
    });


    $("#aboutbtn").click(function() {
    	$("html, body").animate({ scrollTop: 0 }, "fast");
    	$(".about").removeClass("invisible");
    	$(".excel").removeClass("visible");
    	$(".programming").removeClass("visible");
    	tiles = $(".moreAbout").fadeTo(0, 0);
    });

    $("#load1").click(function() {
      $("#example1").attr('src', "https://onedrive.live.com/embed?cid=5D63B7F924961A93&resid=5D63B7F924961A93%211240&authkey=ACwBtny6QvxMeBA&em=2&AllowTyping=True&ActiveCell='Example1-AdtechForecast'!B19");
    });

    $("#load2").click(function() {
      $("#example2").attr('src', "https://onedrive.live.com/embed?cid=5D63B7F924961A93&resid=5D63B7F924961A93%211234&authkey=AJSm42hWYdEKzrk&em=2&AllowTyping=True&wdHideGridlines=True");
    });

    $("#load3").click(function() {
      $("#example3").attr('src', "https://onedrive.live.com/embed?cid=5D63B7F924961A93&resid=5D63B7F924961A93%211236&authkey=ADyUh4qFogn49U8&em=2&AllowTyping=True&ActiveCell='Dashboard'!A3&wdHideGridlines=True");
    });

    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab

	$(window).scroll(function() {
	    tiles.each(function() {
	        a = $(this).offset().top + $(this).height();
	        b = $(window).scrollTop() + $(window).height();
	        if (a < b) {
	            $(this).fadeTo(500,1);
	        }
	    });
	});

});