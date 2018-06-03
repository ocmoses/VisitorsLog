/**
 * 
 */
var page = "settings";

$(document).ready(function(){
		//alert("settings");
		getAllRolesInit();
		getAllAccountStatus();
		getAllActivities();
		getAllMaritalStatus($("#user-marital-status-select"));
		initialRole = $("#role-location").val();
		getRoleWithId($("#role-location").val(), $("#user-role"));
		getAccountStatusWithId($("#account-status-location").val(), $("#user-account-status"));
		$("#visitor-pic").attr("src", $("#pic-location").val());		
		$("#user-sex").val(getSexFromInitial($("#sex-location").val()));
		getUserWithId($("#createdby-location").val(), $("#user-registered-by"));
		setMaritalStatusWithId($("#marital-status-location").val(), $("#user-marital-status"), $("#user-marital-status-select"));
		
		getInitialValues("user-details");
		
		$("#visitor-pic-div").hover(function(){
			$("#choose-pic").css("visibility", "visible"); 
		}, 
		function(){
			$("#choose-pic").css("visibility", "hidden");
		});
		
		//Moving on to change password (settings) form
		$("form[name=settings-change-password]").submit(function(e){
													e.preventDefault(e);												
													
													console.log($(this).serialize());
																									
													validateSettingsChangePassword();
													
													//$("form[name=visitor-register]")[0].submit();
												});
		
		
		//Moving on to change password (settings) form
		$("form[name=settings-change-security-question]").submit(function(e){
													e.preventDefault(e);												
													
													console.log($(this).serialize());
																									
													validateSettingsChangeSecurityQuestion();
													
													//$("form[name=visitor-register]")[0].submit();
												});
});