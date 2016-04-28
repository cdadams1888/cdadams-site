// slow scroll

$("li").children().on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1200, function(){
   
      window.location.hash = hash;
    });
  });






    // Main Nav Dropdown Menu!

    $("#menu_button").click(function() { 

        var $t = $("#menu");


        if ($t.is(':visible')) {
            $t.slideToggle(500);
            $t.css("display", "hidden");
            $("#menu_button").text("menu");
        }
             
        else {
            $t.slideToggle(500);
            $t.css("display", "block");
            $("#menu_button").text("close");
        }
    });

		
	//My dropdown for student section
	$("#student_toggle_bar").click(function() { 

    	var $t = $("#hide_student_paragraph");


    	if ($t.is(':visible')) {
    		$t.slideToggle(500);
        	$("#hide_student_paragraph").css("height", 0);
        	$("#hide_student_paragraph").css("display", "hidden");

        	$("#style_student_arrow").html("&#8679");
		}
        	 
    	else {
        	$t.slideToggle(500);
        	$("#hide_student_paragraph").css("height", "100%");
        	$("#hide_student_paragraph").css("display", "block");

        	$("#style_student_arrow").html("&#8681");
        }
	});



	//My dropdown for web dev section
	$("#web_dev_toggle_bar").click(function() { 

    	var $t = $("#hide_web_dev_paragraph");


    	if ($t.is(':visible')) {
    		$t.slideToggle(500);
        	$("#hide_web_dev_paragraph").css("height", 0);
        	$("#hide_web_dev_paragraph").css("display", "hidden");

        	$("#style_web_dev_arrow").html("&#8679");
		}
        	 
    	else {
        	$t.slideToggle(500);
        	$("#hide_web_dev_paragraph").css("height", "100%");
        	$("#hide_web_dev_paragraph").css("display", "block");

        	$("#style_web_dev_arrow").html("&#8681");
        }
	});

	//My dropdown for projects section
	$("#projects_toggle_bar").click(function() { 

    	var $t = $("#hide_projects_paragraph");


    	if ($t.is(':visible')) {
    		$t.slideToggle(500);
        	$("#hide_projects_paragraph").css("height", 0);
        	$("#hide_projects_paragraph").css("display", "hidden");

        	$("#style_projects_arrow").html("&#8679");
		}
        	 
    	else {
        	$t.slideToggle(500);
        	$("#hide_projects_paragraph").css("height", "100%");
        	$("#hide_projects_paragraph").css("display", "block");

        	$("#style_projects_arrow").html("&#8681");
        }
	});

	//My dropdown for services section
	$("#services_toggle_bar").click(function() { 

    	var $t = $("#hide_services_paragraph");


    	if ($t.is(':visible')) {
    		$t.slideToggle(500);
        	$("#hide_services_paragraph").css("height", 0);
        	$("#hide_services_paragraph").css("display", "hidden");

        	$("#style_services_arrow").html("&#8679");
		}
        	 
    	else {
        	$t.slideToggle(500);
        	$("#hide_services_paragraph").css("height", "100%");
        	$("#hide_services_paragraph").css("display", "block");

        	$("#style_services_arrow").html("&#8681");
        }
	});

	//My dropdown for contact section
	$("#contact_toggle_bar").click(function() { 

    	var $t = $("#hide_contact_paragraph");


    	if ($t.is(':visible')) {
    		$t.slideToggle(500);
        	$("#hide_contact_paragraph").css("height", 0);
        	$("#hide_contact_paragraph").css("display", "hidden");

        	$("#style_contact_arrow").html("&#8679");
		}
        	 
    	else {
        	$t.slideToggle(500);
        	$("#hide_contact_paragraph").css("height", "100%");
        	$("#hide_contact_paragraph").css("display", "block");

        	$("#style_contact_arrow").html("&#8681");
        }
	});









