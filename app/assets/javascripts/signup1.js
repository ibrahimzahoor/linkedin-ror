$(document).ready(function(){
    

    	$(".error").hide();
	    $("#global-error").hide();
	    $("#global").text("There were one or more errors in your submission. Please correct the marked fields below.");
	    flag = false;

	    $("#job1, #self, #company1, #employedProfileForm_industry, #company2, #job2, #daterange1, #education, #daterange2, #age").keypress(function(event) {
	        if (event.which == 13) {
	            event.preventDefault();
	            $("#employed-btn-submit").click();
	        }
	    });

    	if ($('input[name=status-chooser]:checked').val() == "employed" )
        {
        	$("#job1, #self, #company1").show();
  			$("#employedProfileForm_industry, #company2, #job2, #daterange1, #education, #daterange2, #age").hide();
        }
        
        if($('#ageOverEighteen-studentAgeBirthday-studentProfileForm').is(':checked'))
   		{
    		$(".dob-chooser").hide();
    	}

        $('.selfself').click(function(){
        	
        	if($('input[name=status-chooser]:checked').val() == "employed"  && $('.selfself').is(':checked'))
   			{
    			$("#company1").hide();
    			$("#employedProfileForm_industry").show();
   			}
   			else if($('input[name=status-chooser]:checked').val() == "employed")
   			{
    			$("#company1").show();
    			$("#employedProfileForm_industry").hide();
   			}
   			else if($('input[name=status-chooser]:checked').val() == "looking"  && $('.selfself').is(':checked'))
   			{
    			$("#company2").hide();
    			$("#employedProfileForm_industry").show();
   			}
   			else
   			{
   				$("#company2").show();
    			$("#employedProfileForm_industry").hide();	
   			}

   		});

        $('#ageOverEighteen-studentAgeBirthday-studentProfileForm').click(function(){
        	
        	if($('input[name=status-chooser]:checked').val() == "student"  && $('#ageOverEighteen-studentAgeBirthday-studentProfileForm').is(':checked'))
   			{
    			$(".dob-chooser").hide();
    		}
    		else
    		{
    			$(".dob-chooser").show();
    			
    		}

        });
        
        $(".status").click(function(){
        
        if ($('input[name=status-chooser]:checked').val() == "employed" )
        {
        	$("#job1, #self, #company1").show();
  			$("#employedProfileForm_industry,#company2, #job2, #daterange1, #education, #daterange2, #age").hide();
        }
        
        else if ($('input[name=status-chooser]:checked').val() == "looking" ) {
            
            $("#job2,#company2, #self, #daterange1").show();
            $("#job1, #company1, #employedProfileForm_industry, #education, #daterange2, #age").hide();
        }
        
        else if ($('input[name=status-chooser]:checked').val() == "student" ) {
            $("#education, #daterange2, #age").show();
            $("#job1, #job2, #self, #company1,#company2, #employedProfileForm_industry, #daterange1").hide();
        }
     });

        $("#employed-btn-submit").click( 
        
        function()
        { 

            if($("#workCompanyTitle-employedProfileForm").val()=="")
            {
                $("#workCompanyTitle-employedProfileForm-error").text("Please enter your title.");
                $("#workCompanyTitle-employedProfileForm-error").show();
                flag=true;
            }
            else
            {
            	$("#workCompanyTitle-employedProfileForm-error").hide();
            	flag=false;
            }

            if($("#companyName-companyInfo-employeeCompany-employedProfileForm").val()=="")
            {
                $("#companyName-companyInfo-employeeCompany-employedProfileForm-error").text("Please enter a company.");
                $("#companyName-companyInfo-employeeCompany-employedProfileForm-error").show();
                flag=true;
            }
            else
            {
            	$("#companyName-companyInfo-employeeCompany-employedProfileForm-error").hide();
            	flag=false;
            }

            if($("#industryChooser-employeeCompany-employedProfileForm").val()=="")
            {
                $("#industryChooser-employeeCompany-employedProfileForm-error").text("Please select an industry..");
                $("#industryChooser-employeeCompany-employedProfileForm-error").show();
                flag=true;
            }
            else
            {
			    $("#industryChooser-employeeCompany-employedProfileForm-error").hide();
                flag=false;
            }

            if($("#startYear-previousStartEnd-lookingProfileForm").val()=="")
            {
                $("#startYear-previousStartEnd-lookingProfileForm-error").text("Please enter your start year.");
                $("#startYear-previousStartEnd-lookingProfileForm-error").show();
                flag=true;
            }
            else
            {
			    $("#startYear-previousStartEnd-lookingProfileForm-error").hide();
                flag=false;
            }

            if($("#endYear-previousStartEnd-lookingProfileForm").val()=="")
            {
                $("#endYear-previousStartEnd-lookingProfileForm-error").text("Please enter your end year.");
                $("#endYear-previousStartEnd-lookingProfileForm-error").show();
                flag=true;
            }
            else
            {
			    $("#endYear-previousStartEnd-lookingProfileForm-error").hide();
                flag=false;
            }

            if($("#schoolText-school-education-studentProfileForm").val()=="")
            {
                $("#schoolText-school-education-studentProfileForm-error").text("Please enter your college or university.");
                $("#schoolText-school-education-studentProfileForm-error").show();
                flag=true;
            }
            else
            {
			    $("#schoolText-school-education-studentProfileForm-error").hide();
                flag=false;
            }


            if($("#startYear-startEndYear-education-studentProfileForm").val()=="")
            {
                $("#startYear-startEndYear-education-studentProfileForm-error").text("Please enter your start year.");
                $("#startYear-startEndYear-education-studentProfileForm-error").show();
                flag=true;
            }
            else
            {
			    $("#startYear-startEndYear-education-studentProfileForm-error").hide();
                flag=false;
            }

            if($("#endYear-startEndYear-education-studentProfileForm").val()=="")
            {
                $("#endYear-startEndYear-education-studentProfileForm-error").text("Please enter your graduation year.");
                $("#endYear-startEndYear-education-studentProfileForm-error").show();
                flag=true;
            }
            else
            {
			    $("#endYear-startEndYear-education-studentProfileForm-error").hide();
                flag=false;
            }
            
            if(flag)
            	$("#global-error").show();
            else
            	$("#global-error").hide();
        });

});