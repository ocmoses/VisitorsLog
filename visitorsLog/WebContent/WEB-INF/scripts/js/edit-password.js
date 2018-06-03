/**
 * 
 */
$(document).ready(function(){
	
	var referrerPage = document.referrer;
		
	if(referrerPage == "" || referrerPage == undefined){
		window.location = "/visitorsLog/login";
	}else if(referrerPage.indexOf("login") == -1){
			
		window.location = referrerPage;
			
	}	
	
	//Moving on to choose password form
	$("form[name=choose-password-form]").submit(function(e){
												e.preventDefault(e);												
												
												console.log($(this).serialize());
																								
												validateChoosePassword();
												
												//$("form[name=visitor-register]")[0].submit();
											});
	
	//Moving on to change password form
	$("form[name=change-password-form]").submit(function(e){
												e.preventDefault(e);												
												
												console.log($(this).serialize());
																								
												validateChangePassword();
												
												//$("form[name=visitor-register]")[0].submit();
											});
	
	
	
});