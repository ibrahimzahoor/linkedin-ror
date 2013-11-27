

$(document).ready( 


function()
{

	$(".error").hide();
	$("#global-error").hide();

	$("form").submit(
			
			function(event)
			{
				if($("#firstName-coldRegistrationForm").val()=="" || $("#lastName-coldRegistrationForm").val()=="" || $("#email-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val().length<6 )
				{
					$(".error").show();
					$("#global-error").show();
					event.preventDefault();
				}

			   if($("#firstName-coldRegistrationForm").val().length==0)
			   {
			   		
			   		$("#firstName-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#firstName-coldRegistrationForm-error").hide();
			   }

			   if($("#lastName-coldRegistrationForm").val()=="")
			   {
			   		
			   		$("#lastName-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#lastName-coldRegistrationForm-error").hide();
			   }

			   if($("#email-coldRegistrationForm").val()=="")
			   {
			   		
			   		$("#email-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#email-coldRegistrationForm-error").hide();
			   }


			   if($("#password-coldRegistrationForm").val()=="")
			   {
			   		$("#password-coldRegistrationForm-error").text("Please enter a password.");
			   		$("#password-coldRegistrationForm-error").show();
			   }
			   else if( $("#password-coldRegistrationForm").val().length<6)
			   {
			   		$("#password-coldRegistrationForm-error").text("The password you provided must have at least 6 characters.");
			   		$("#password-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#password-coldRegistrationForm-error").hide();
			   }


			if(!($("#firstName-coldRegistrationForm").val()=="" || $("#lastName-coldRegistrationForm").val()=="" || $("#email-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val().length<6 ))
			{
				$(".error").hide();
				$("#global-error").hide();

			}
				
				
			}
		);


/*	$("#btn-submit").click(
		
		function()
		{

			if($("#firstName-coldRegistrationForm").val()=="" || $("#lastName-coldRegistrationForm").val()=="" || $("#email-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val().length<6 )
			{
				$(".error").show();
				$("#global-error").show();
			}

			   if($("#firstName-coldRegistrationForm").val().length==0)
			   {
			   		
			   		$("#firstName-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#firstName-coldRegistrationForm-error").hide();
			   }

			   if($("#lastName-coldRegistrationForm").val()=="")
			   {
			   		
			   		$("#lastName-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#lastName-coldRegistrationForm-error").hide();
			   }

			   if($("#email-coldRegistrationForm").val()=="")
			   {
			   		
			   		$("#email-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#email-coldRegistrationForm-error").hide();
			   }


			   if($("#password-coldRegistrationForm").val()=="")
			   {
			   		$("#password-coldRegistrationForm-error").text("Please enter a password.");
			   		$("#password-coldRegistrationForm-error").show();
			   }
			   else if( $("#password-coldRegistrationForm").val().length<6)
			   {
			   		$("#password-coldRegistrationForm-error").text("The password you provided must have at least 6 characters.");
			   		$("#password-coldRegistrationForm-error").show();
			   }
			   else
			   {
			   		$("#password-coldRegistrationForm-error").hide();
			   }


			if(!($("#firstName-coldRegistrationForm").val()=="" || $("#lastName-coldRegistrationForm").val()=="" || $("#email-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val()=="" || $("#password-coldRegistrationForm").val().length<6 ))
			{
				$(".error").hide();
				$("#global-error").hide();

			}

		});

*/
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

