$(document).ready(function(){
	// My dropdown menu for nav
	$('#expand_links_button').click(function() { 

    	var $t = $('#position_student_link, #position_web_developer_link, #position_projects_link, #position_services_link, #position_contact_link');


    	if ($t.is(':visible')) {
    		$t.slideToggle(500);
        	$("#nav_box").css("height", 125);

        	$("#position_student_link").css("display", "hidden");
        	$("#position_web_developer_link").css("display", "hidden");
        	$("#position_projects_link").css("display", "hidden");
        	$("#position_services_link").css("display", "hidden");
        	$("#position_contact_link").css("display", "hidden");

        	$('#expand_links_button').css("color", "black");
		} 
    
    	else {
        	$t.slideToggle(500);
        	$("#nav_box").css("height", 550);

        	$("#position_student_link").css("display", "block");
        	$("#position_web_developer_link").css("display", "block");
        	$("#position_projects_link").css("display", "block");
        	$("#position_services_link").css("display", "block");
        	$("#position_contact_link").css("display", "block");

        	$('#expand_links_button').css("color", "white");

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
});

	//form processing
	function check_form() {
		var textbox = document.sendemail.name.value;

		if (texbox == "") {
			alert("Please provide your name!");
		}
	}