$(document).ready( 

function()
{



    $(".error").hide();
    $("#global-error").hide();
    $("#global").text("There were one or more errors in your submission. Please correct the marked fields below.");
    flag = false;

    $("#email-signin, #password-signin").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#btn-signin").click();
        }
    });



    
    
    $("form").submit( 
        
        function(event)
        { 


            
            //$( ".progress-indicator" ).addClass("progress-indicator-after", 2000);



            if($("#email-signin").val()=="")
            {
                $("#email-signin-error").text("Please enter a value.");
                $("#email-signin-error").show();
                $('#email-signin').addClass('input-after');
                flag=true;
                    
            }
            else if($("#email-signin").val().length<3)
            {
                $("#email-signin-error").text("The text you provided is too short (the minimum length is 3 characters, your text contains "+ $("#email-signin").val().length +" characters).");
                $("#email-signin-error").show(); 
                $('#email-signin').addClass('input-after');
                flag=true;   
            }
            else if($("#email-signin").val().length>=3 && $("#email-signin").val().length<=128)
            {
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                
                if (filter.test($('#email-signin').val()))
                {
                    $("#email-signin-error").hide();
                    $('#email-signin').removeClass('input-after');
                    flag=false;
                    return;    
                }
                
                $("#email-signin-error").text("Please enter a valid email address.");                    
                $("#email-signin-error").show();
                $('#email-signin').addClass('input-after');    
                flag=true;
               
            }

            else if($("#email-signin").val().length>128)
            {
                $("#email-signin-error").text("The text you provided is too long (the maximum length is 128 characters, your text contains "+ $("#email-signin").val().length +" characters).");
                $("#email-signin-error").show();
                $('#email-signin').addClass('input-after');    
                flag=true;   
            }
            

            if($("#password-signin").val()=="")
            {
                $("#password-signin-error").text("Please enter a password.");
                $("#password-signin-error").show();
                $('#password-signin').addClass('input-after');
                flag=true;
            }
            else if( $("#password-signin").val().length<6)
            {
                $("#password-signin-error").text("The password you provided must have at least 6 characters.");
                $("#password-signin-error").show();
                $('#password-signin').addClass('input-after');
                flag=true;
            }
            else if( $("#password-signin").val().length>250)
            {
                $("#password-signin-error").text("The password you provided must have at most 250 characters.");
                $("#password-signin-error").show();
                $('#password-signin').addClass('input-after');
                flag=true;
            }
            else
            {
                $("#password-signin-error").hide();
                $('#password-signin').removeClass('input-after');
            }

            if(flag)
            {
                $("#global-error").show();
                event.preventDefault();
            }
            else
            {
                $("#global-error").hide();
                
            }
        });

}


);