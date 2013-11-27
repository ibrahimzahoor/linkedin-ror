$(document).ready( 

function()
{

    $(".error").hide();
    $("#global-error").hide();
    $("#global").text("There were one or more errors in your submission. Please correct the marked fields below.");
    flag = false;

    $("#password,#email, #firstName, #lastName").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#btn-submit").click();
        }
    });


    
    
    $("#btn-submit").click( 
        
        function()
        { 
            //progressindigator code here

            //$( ".progress-indicator" ).addClass("progress-indicator-after", 2000);


            if($("#firstName").val()=="")
            {
                $("#firstName-error").text("Please enter a first name.");
                $("#firstName-error").show();
                flag=true;
            }
            else
            {
            	$("#firstName-error").hide();
            	flag=false;
            }

            if($("#lastName").val()=="")
            {
                $("#lastName-error").text("Please enter a last name.");
                $("#lastName-error").show();
                flag=true;
            }
            else
            {
            	$("#lastName-error").hide();
            	flag=false;
            }

            if($("#email").val()=="")
            {
                $("#email-error").text("Please enter a valid email address.");
                $("#email-error").show();
                flag=true;
            }
            else if($("#email").val().length<3)
            {
                $("#email-error").text("The text you provided is too short (the minimum length is 3 characters, your text contains "+ $("#email").val().length +" characters).");
                $("#email-error").show(); 
                flag=true;   
            }
            else if($("#email").val().length>=3 && $("#email").val().length<=128)
            {
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                
                if (filter.test($('#email').val()))
                {
                    //check email in database
                    $("#email-error").hide();
                    flag=false;
                    return;    
                }
                
                $("#email-error").text("Please enter a valid email address.");                    
                $("#email-error").show();
                flag=true;
            }

            else if($("#email").val().length>128)
            {
                $("#email-error").text("The text you provided is too long (the maximum length is 128 characters, your text contains "+ $("#email-signin").val().length +" characters).");
                $("#email-error").show();
                flag=true;   
            }
            

            if($("#password").val()=="")
            {
                $("#password-error").text("Please enter a password.");
                $("#password-error").show();
                flag=true;
            }
            else if( $("#password").val().length<6)
            {
                $("#password-error").text("The password you provided must have at least 6 characters.");
                $("#password-error").show();
                flag=true;
            }
            else if( $("#password").val().length>250)
            {
                $("#password-error").text("The password you provided must have at most 250 characters.");
                $("#password-error").show();
                flag=true;
            }
            else
            {
                //check password in database
                $("#password-error").hide();
            }

            if(flag)
            	$("#global-error").show();
            else
            	$("#global-error").hide();
        });

		$("#search-btn").click(
		
		function()
		{
			if( (  $("#search-by-lastName").val().length ==0  )  &&  (  $("#search-by-firstName").val().length==0  ) )
			{
				
				$(".error").show();
				$("#global-error").show();
				

				$("#firstName-coldRegistrationForm-error").hide();
				$("#lastName-coldRegistrationForm-error").hide();
				$("#email-coldRegistrationForm-error").hide();
				$("#password-coldRegistrationForm-error").hide();

			}
			else
			{

				$(".error").hide();
				$("#global-error").hide();
			}	
		});

});

