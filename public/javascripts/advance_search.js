$(document).ready(function(){

	$('#account_nav').hide();
	$('#inbox').hide();
	$('#profile_sub_nav').hide();
	$('#networks_sub_nav').hide();
	$('#interests_sub_nav').hide();
	$('#services_sub_nav').hide();
	
	

	$('#messages').mouseenter(function(){
		$('#invitations_count').hide();
		$('#not_a').css("padding-bottom", "42px");
	});

	$('#messages').mouseleave(function(){
		var not_count = $('#invitations_count').text();
		if(not_count == '0')
		{
			$('#invitations_count').hide();
		}
		else
		{
			$('#invitations_count').show();
			$('#not_a').css("padding-bottom", "23px");
		}
	});



	$('#profile_pic').mouseenter(function(){
		$('#account_nav').show();
		$('#business_nav').hide();
	});

	$('#profile_actions').mouseleave(function(){
		$('#account_nav').hide();
		$('#business_nav').show();
	});



	$('#messages').mouseenter(function(){
		$('#inbox').show();
		$('#business_nav').hide();
	});

	$('#messages').mouseleave(function(){
		$('#inbox').hide();
		$('#business_nav').show();
	});



	$('#profile_nav').mouseenter(function(){
		$('#profile_sub_nav').fadeIn("fast");
	});

	$('#profile_nav').mouseleave(function(){
		$('#profile_sub_nav').hide();
	});



	$('#networks_nav').mouseenter(function(){
		$('#networks_sub_nav').fadeIn("fast");
	});

	$('#networks_nav').mouseleave(function(){
		$('#networks_sub_nav').hide();
	});



	$('#interests_nav').mouseenter(function(){
		$('#interests_sub_nav').fadeIn("fast");
	});

	$('#interests_nav').mouseleave(function(){
		$('#interests_sub_nav').hide();
	});



	$('#services_nav').mouseenter(function(){
		$('#services_sub_nav').fadeIn("fast");
	});

	$('#services_nav').mouseleave(function(){
		$('#services_sub_nav').hide();
	});



	var not_count = $('#invitations_count').text();
	if(not_count == '0')
	{
		$('#invitations_count').hide();
	}


});