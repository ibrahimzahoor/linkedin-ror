$(document).ready( 

function()
{

    $(".error").hide();
    $("#global-error").hide();
    $("#global").text("There were one or more errors in your submission. Please correct the marked fields below.");
    flag = false;

    $("#email").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#request").click();
        }
    });


    
    
    $("form").submit( 
        
        function(event)
        { 

            //$( ".progress-indicator" ).addClass("progress-indicator-after", 2000);



            if($("#email").val()=="")
            {
                $("#email-error").text("Please enter a value.");
                $("#email-error").show();
                flag=true;
            }
            else if($("#email").val().length<3)
            {
                $("#email-error").text("The text you provided is too short (the minimum length is 3 characters, your text contains "+ $("#email-signin").val().length +" characters).");
                $("#email-error").show(); 
                flag=true;   
            }
            else if($("#email").val().length>=3 && $("#email").val().length<=128)
            {
                var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                
                if (filter.test($('#email').val()))
                {
                    $("#email-error").hide();
                    flag=false;
                    return;    
                }
                
                $("#email-error").text("Please enter a valid email address.");                    
                $("#email-error").show();
                flag=true;
               
            }

            else if($("#email-signin").val().length>128)
            {
                $("#email-error").text("The text you provided is too long (the maximum length is 128 characters, your text contains "+ $("#email-signin").val().length +" characters).");
                $("#email-error").show();
                flag=true;   
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