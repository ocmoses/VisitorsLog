/**
 * 
 */
$(document).ready(function(){
	
//	if(window.referer != null)
//		window.location = "/visitorsLog/dashboard";
	
	$("#login-username").on("focus", hideErrorMessage);
	$("#login-password").on("focus", hideErrorMessage);
	$("#login-submit").on("click", function(e){e.preventDefault(e); tryLogin()});
});

