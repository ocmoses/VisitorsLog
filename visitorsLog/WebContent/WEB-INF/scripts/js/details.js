/**
 * 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//These are the global
//variables for getting INITIAL values of the detail pages
//details for user and details for visitors

var initialFirstName;
var initialMiddleName;
var initialLastName;

var initialDob;
var initialSex;
var initialMaritalStatus;
var initialPicLocation;

var initialRole;
var initialAccountStatus;

var initialCountry;
var initialPhone1;
var initialEmail;
var initialWebsite;
var initialOccupation;
var initialMinistry;
var initialIsPartner;
var initialPartnershipNo;
var initialBlacklisted;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//These are the global
//variables for getting FINAL values of the detail pages
//details for user and details for visitors

var finalFirstName;
var finalMiddleName;
var finalLastName;

var finalDob;
var finalSex;
var finalMaritalStatus;
var finalPicLocation;

var finalRole;
var finalAccountStatus;
var LastLogin

var finalCountry;
var finalPhone1;
var finalEmail;
var finalWebsite;
var finalOccupation;
var finalMinistry;
var finalIsPartner;
var finalPartnershipNo;
var finalBlacklisted;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// THE ARRAY THAT HOLDS THE CHANGED VALUES ///////////////////////////////////////////////////////////

var changedValuesArray = new Array();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//==========================================================================================================================================================================================================
//==================================================== METHODS TO EDIT VISITOR / USER DETAILS ==============================================================================================================
//==========================================================================================================================================================================================================

function editDetailsEntry(ev){
	//console.log(ev.target);
		
	switch($(ev.target).attr("id")){
	
		case "visitor-name-edit":toggleVisitorName(ev, $("#visitor-name-inputs")); break;
		case "visitor-name-cancel": resetEditedValue("visitor-name-cancel", "visitor-first-name", initialFirstName, "visitor-name-inputs"); 
								 	resetEditedValue("visitor-name-cancel", "visitor-middle-name", initialMiddleName, "visitor-name-inputs");
								 	resetEditedValue("visitor-name-cancel", "visitor-last-name", initialLastName, "visitor-name-inputs");
								 	break;
		
		case "visitor-dob-edit": toggleEditablePicker(ev, "visitor-dob"); break;
		case "visitor-dob-cancel": resetEditedValue("visitor-dob-cancel", "visitor-dob", initialDob, "visitor-dob-picker"); break;
		
		case "visitor-sex-edit": toggleEditableCheck(ev, "visitor-sex"); break;
		case "visitor-sex-cancel": resetEditedValue("visitor-sex-cancel", "visitor-sex", initialSex, "visitor-sex-check"); break;
		
		case "visitor-marital-status-edit": toggleEditableSelect(ev, "visitor-marital-status"); break;
		case "visitor-marital-status-cancel": resetEditedValue("visitor-marital-status-cancel", "visitor-marital-status", initialMaritalStatus, "visitor-marital-status-select"); break;
		
		case "visitor-country-edit": toggleEditableSelect(ev, "visitor-country"); break;
		case "visitor-country-cancel": resetEditedValue("visitor-country-cancel", "visitor-country", initialCountry, "visitor-country-select"); break;
		
		case "visitor-phone-edit": toggleEditable(ev, "visitor-phone"); break;
		case "visitor-phone-cancel": resetEditedValue("visitor-phone-cancel", "visitor-phone", initialPhone1, "visitor-phone-select"); break;
		
		case "visitor-email-edit": toggleEditable(ev, "visitor-email"); break;
		case "visitor-email-cancel": resetEditedValue("visitor-email-cancel", "visitor-email", initialEmail, "visitor-email-select"); break;
		
		case "visitor-website-edit": toggleEditable(ev, "visitor-website"); break;
		case "visitor-website-cancel": resetEditedValue("visitor-website-cancel", "visitor-website", initialWebsite, "visitor-website-select"); break;
		
		case "visitor-occupation-edit": toggleEditableSelect(ev, "visitor-occupation"); break;
		case "visitor-occupation-cancel": resetEditedValue("visitor-occupation-cancel", "visitor-occupation", initialOccupation, "visitor-occupation-select"); break;
		
		case "visitor-ministry-edit": toggleEditable(ev, "visitor-ministry"); break;
		case "visitor-ministry-cancel": resetEditedValue("visitor-ministry-cancel", "visitor-ministry", initialMinistry, "visitor-ministry-select"); break;
		
		case "visitor-partner-edit": toggleEditableCheck(ev, "visitor-partner"); break;
		case "visitor-partner-cancel": resetEditedValue("visitor-partner-cancel", "visitor-partner", initialIsPartner, "visitor-partner-check"); break;
		
		case "visitor-partnership-no-edit": toggleEditable(ev, "visitor-partnership-no"); break;
		case "visitor-partnership-no-cancel": resetEditedValue("visitor-partnership-no-cancel", "visitor-partnership-no", initialPartnershipNo, "visitor-partnership-no-select"); break;
		
		case "visitor-blacklist-edit": toggleEditableCheck(ev, "visitor-blacklist"); break;
		case "visitor-blacklist-cancel": resetEditedValue("visitor-blacklist-cancel", "visitor-blacklist", initialBlacklisted, "visitor-blacklist-check"); break;
		
		/*
		*The manage user page=============================================================================================================================================================
		*/
		
		case "user-name-edit": toggleUserName(ev, $("#user-name-inputs")); break;
		case "user-name-cancel": resetEditedValue("user-name-cancel", "user-first-name", initialFirstName, "user-name-inputs"); 
								 resetEditedValue("user-name-cancel", "user-middle-name", initialMiddleName, "user-name-inputs");
								 resetEditedValue("user-name-cancel", "user-last-name", initialLastName, "user-name-inputs");
								 break;
		
		case "user-name-edit": toggleUserName(ev, $("#user-name-inputs")); break;
		
		
		case "user-dob-edit": toggleEditablePicker(ev, "user-dob"); break;
		case "user-dob-cancel": resetEditedValue("user-dob-cancel", "user-dob", initialDob, "user-dob-picker"); break;
		
		case "user-sex-edit": toggleEditableCheck(ev, "user-sex"); break;
		case "user-sex-cancel": resetEditedValue("user-sex-cancel", "user-sex", initialSex, "user-sex-check"); break;
		
		case "user-marital-status-edit": toggleEditableSelect(ev, "user-marital-status"); break;
		case "user-marital-status-cancel": resetEditedValue("user-marital-status-cancel", "user-marital-status", initialMaritalStatus, "user-marital-status-select"); break;
		
		case "user-role-edit": toggleEditableCheck(ev, "user-role"); break;
		case "user-role-cancel": resetEditedValue("user-role-cancel", "user-role", initialRole, "user-role-check"); break;
		
		case "user-account-status-edit": toggleEditableCheck(ev, "user-account-status"); break;
		case "user-account-status-cancel": resetEditedValue("user-account-status-cancel", "user-account-status", initialAccountStatus, "user-account-status-check"); break;
		
	}
	
	return false;
}

function toggleVisitorName(ev, accompInput){
	if($(ev.target).text() == "edit"){
		$("#visitor-name").addClass("invisible");
		$(accompInput).removeClass("invisible");
		$(accompInput).focus();
		$(ev.target).text("save");
		$("#visitor-name-cancel").removeClass("invisible");
	}else if($(ev.target).text() == "save"){
		
		$("#visitor-name-cancel").addClass("invisible");
		$("#visitor-name").removeClass("invisible");
		$(accompInput).addClass("invisible");	
				
		var firstName = $("#visitor-first-name").val();
		var middleName = $("#visitor-middle-name").val();
		var lastName = $("#visitor-last-name").val();
		
		$("#visitor-name").val( firstName + " " + middleName + " " + lastName);
		
		$(ev.target).text("edit");
		
		initialFirstName = (initialFirstName == undefined )? "" : initialFirstName;
		finalFirstName = (firstName == undefined) ? "" : firstName;
		
		initialMiddleName = (initialMiddleName == undefined) ? "" : initialMiddleName;
		finalMiddleName = (middleName == undefined) ? "" : middleName;
		
		initialLastName = (initialLastName == undefined) ? "" : initialLastName;
		finalLastName = (lastName == undefined) ? "" : lastName;
		
		//alert("firstname: " + firstName + ", middlename: " + middleName + ", lastname: " + lastName);
		
		//then we register this change in the database.....................
		var visitorId = $("#id-location").val();
		$.post("/visitorsLog/update-name", {"table" : "visitors", "id" : visitorId, "initialFirstName" : initialFirstName, "finalFirstName" : finalFirstName, 
				"initialMiddleName" : initialMiddleName, "finalMiddleName" : finalMiddleName, "initialLastName" : initialLastName, 
				"finalLastName" : finalLastName }, function(data){
														alert(data);
													}
		);
		
	}
}

function toggleUserName(ev, accompInput){
	if($(ev.target).text() == "edit"){
		$("#user-name").addClass("invisible");
		$(accompInput).removeClass("invisible");
		$(accompInput).focus();
		$(ev.target).text("save");
		$("#user-name-cancel").removeClass("invisible");
	}else if($(ev.target).text() == "save"){
		$("#user-name-cancel").addClass("invisible");
		$("#user-name").removeClass("invisible");
		$(accompInput).addClass("invisible");		
		
		var firstName = $("#user-first-name").val();
		var middleName = $("#user-middle-name").val();
		var lastName = $("#user-last-name").val();
		
		$("#user-name").val( firstName + " " + middleName + " " + lastName);
		
		$(ev.target).text("edit");
		
		initialFirstName = (initialFirstName == undefined )? "" : initialFirstName;
		finalFirstName = (firstName == undefined) ? "" : firstName;
		
		initialMiddleName = (initialMiddleName == undefined) ? "" : initialMiddleName;
		finalMiddleName = (middleName == undefined) ? "" : middleName;
		
		initialLastName = (initialLastName == undefined) ? "" : initialLastName;
		finalLastName = (lastName == undefined) ? "" : lastName;
		
		//alert("firstname: " + firstName + ", middlename: " + middleName + ", lastname: " + lastName);
		
		//then we register this change in the database.....................
		var userId = $("#id-location").val();
		$.post("/visitorsLog/update-name", {"table" : "users_tb", "id" : userId, "initialFirstName" : initialFirstName, "finalFirstName" : finalFirstName, 
				"initialMiddleName" : initialMiddleName, "finalMiddleName" : finalMiddleName, "initialLastName" : initialLastName, 
				"finalLastName" : finalLastName }, function(data){
															alert(data);
														}
		);
		
		
	}
}

function toggleEditable(ev, accompInput){
	console.log(accompInput);
	var cancel = accompInput + "-cancel";
	var edit = accompInput + "-edit";
	if($(ev.target).text() == "edit"){
		$("#" + accompInput).attr("readonly", false);
		$("#" + accompInput).removeClass("form-control-plaintext").addClass("form-control").removeClass("transparent");
		$("#" + cancel).removeClass("invisible");
		$("#" + accompInput).focus();
		$(ev.target).text("save");
	}else if($(ev.target).text() == "save"){
		$("#" + accompInput).attr("readonly", true);
		$("#" + accompInput).addClass("transparent").removeClass("form-control").addClass("form-control-plaintext");
		$("#" + cancel).addClass("invisible");
		$(ev.target).text("edit");
		
		var visitorId = $("#id-location").val();
		
		//then we save the result....
		if(accompInput == "visitor-phone"){
			
//			console.log("/visitorsLog/update-phone?id=" +  visitorId + "&initialPhone=" + initialPhone1 + 
//					"&finalPhone=" + $("#visitor-phone").val());
			$.post("/visitorsLog/update-phone?id=" +  visitorId + "&initialPhone=" + initialPhone1 + 
					"&finalPhone=" + $("#visitor-phone").val(), function(data){
																alert(data);
															 }
			);
		}else if(accompInput == "visitor-email"){
//			console.log("/visitorsLog/update-email?id=" +  visitorId + "&initialEmail=" + initialEmail + 
//					"&finalEmail=" + $("#visitor-email").val());
			$.post("/visitorsLog/update-email?id=" +  visitorId + "&initialEmail=" + initialEmail + 
					"&finalEmail=" + $("#visitor-email").val(), function(data){
																alert(data);
															 }
			);
		}else if(accompInput == "visitor-website"){
//			console.log("/visitorsLog/update-website?id=" +  visitorId + "&initialWebsite=" + initialWebsite + 
//					"&finalWebsite=" + $("#visitor-website").val());
			$.post("/visitorsLog/update-website?id=" +  visitorId + "&initialWebsite=" + initialWebsite + 
					"&finalWebsite=" + $("#visitor-website").val(), function(data){
																alert(data);
															 }
			);
		}else if(accompInput == "visitor-ministry"){
//			console.log("/visitorsLog/update-ministry?id=" +  visitorId + "&initialMinistry=" + initialMinistry + 
//					"&finalMinistry=" + $("#visitor-ministry").val());
			$.post("/visitorsLog/update-ministry?id=" +  visitorId + "&initialMinistry=" + initialMinistry + 
					"&finalMinistry=" + $("#visitor-ministry").val(), function(data){
																alert(data);
															 }
			);
		}else if(accompInput == "visitor-partnership-no"){
			$.post("/visitorsLog/update-partnership-no?id=" +  visitorId + "&initialPartnershipNo=" + initialPartnershipNo + 
					"&finalPartnershipNo=" + $("#visitor-partnership-no").val(), function(data){
																alert(data);
															 }
			);
		}
		
		
		
	}		
	
}

function toggleEditableSelect(ev, accompInput){
	var select = accompInput + "-select";
	var cancel = accompInput + "-cancel";
	var edit = accompInput + "-edit";
	//console.log(select);
	if($(ev.target).text() == "edit"){
		
		console.log("The value after clicking edit: " + $("#" + accompInput).val());
		
		$("#" + accompInput).addClass("invisible");
		$("#" + cancel).removeClass("invisible");
		$("#" + select).removeClass("invisible");
		$("#" + select).focus();
		$(ev.target).text("save");
	}else if($(ev.target).text() == "save"){
		$("#" + accompInput).removeClass("invisible");
		$("#" + cancel).addClass("invisible");
		$("#" + select).addClass("invisible");
		$(ev.target).text("edit");
		
		console.log($("#" + select).val());
		
		//$("#" + accompInput).val(getMaritalStatusWithId($("#" + select).val()));
				
		if($("#" + select).val() != 0){
			if(select.indexOf("marital") != -1){
				$("#" + accompInput).val(getMaritalStatusWithId($("#" + select).val()));
								
				if(accompInput.indexOf("user") != -1){
					var table = "users_tb";
					var userId = $("#id-location").val();
					$.post("/visitorsLog/update-marital-status?table=" + table + "&id=" +  userId + "&initialMaritalStatus=" + getMaritalStatusIdWithName(initialMaritalStatus) + 
							"&finalMaritalStatus=" + getMaritalStatusIdWithName($("#" + accompInput).val()), function(data){
																												alert(data);
																											}
					);
					
				}else if(accompInput.indexOf("visitor") != -1){
					var table = "visitors";
					var visitorId = $("#id-location").val();
					$.post("/visitorsLog/update-marital-status?table=" + table + "&id=" +  visitorId + "&initialMaritalStatus=" + getMaritalStatusIdWithName(initialMaritalStatus) + 
							"&finalMaritalStatus=" + getMaritalStatusIdWithName($("#" + accompInput).val()), function(data){
																												alert(data);
																											}
					);
					
				}
				
			}else if(select.indexOf("country") != -1){
				$("#" + accompInput).val(getCountryWithId($("#" + select).val()));
			
				var table = "visitors";
				var visitorId = $("#id-location").val();
				console.log("/visitorsLog/update-country?table=visitors&id=" +  visitorId + "&initialCountry=" + $("#country-location").val() + 
						"&finalCountry=" + $("#" + select).val());
				$.post("/visitorsLog/update-country?table=visitors&id=" +  visitorId + "&initialCountry=" + $("#country-location").val() + 
						"&finalCountry=" + $("#" + select).val(), function(data){
																	alert(data);
																 }
				);
			
			}else if(select.indexOf("occupation") != -1){
				$("#" + accompInput).val(allOccupations[($("#" + select).val()) - 1].occupation); //Need to figure out what's going on here.....................................
				
				var table = "visitors";
				var visitorId = $("#id-location").val();
//				console.log("/visitorsLog/update-occupation?table=visitors&id=" +  visitorId + "&initialOccupation=" + $("#occupation-location").val() + 
//						"&finalOccupation=" + $("#" + select).val());
				$.post("/visitorsLog/update-occupation?table=visitors&id=" +  visitorId + "&initialOccupation=" + $("#occupation-location").val() + 
						"&finalOccupation=" + $("#" + select).val(), function(data){
																		alert(data);
																	 }
				);
			}
			
			//console.log($("#" + accompInput));
		}
		
		
	}
	
}

function toggleEditableCheck(ev, accompInput){
	var check = accompInput + "-check";
	var cancel = accompInput + "-cancel";
	var edit = accompInput + "-edit";
	console.log(check);
	if($(ev.target).text() == "edit"){
		$("#" + cancel).removeClass("invisible");
		$("#" + check).removeClass("invisible");
		$("#" + check).focus();
		$(ev.target).text("save");
	}else if($(ev.target).text() == "save"){
		$("#" + cancel).addClass("invisible");
		$("#" + check).addClass("invisible");
		$(ev.target).text("edit");
		
		var selected = $("input[type=radio][name=" + accompInput + "-value]:checked");	
		//console.log($(selected).val());
		if($(selected).val() != (undefined || null))
			$("#" + accompInput).val($(selected).val());
		
		console.log("The value that was selected: " + $(selected).val());
		console.log("The value that was set on accompInput: " + $("#" + accompInput).val());
		
		
		//Then we save the new sex....
		if(accompInput.indexOf("sex") != -1){
			
			var table = "";
			var userId = $("#id-location").val();
			
			if(accompInput.indexOf("user") != -1){
				table = "users_tb";
			}else if(accompInput.indexOf("visitor") != -1){
				table = "visitors";
			}
			if(initialSex != finalSex){	
				$.post("/visitorsLog/update-sex?table=" + table + "&id=" +  userId + "&initialSex=" + getInitialFromSex(initialSex) + 
						"&finalSex=" + getInitialFromSex($("#" + accompInput).val()), function(data){
																						alert(data);
																					}
				);
			}
		}else if(accompInput.indexOf("role") != -1){
			var userId = $("#id-location").val();
			if(initialRole != finalRole){	
//				console.log("/visitorsLog/update-user-role?table=users_tb&id=" +  userId + "&initialRole=" + $("#role-location").val() + 
//						"&finalRole=" + getIdFromRole($("#" + accompInput).val()));
				$.post("/visitorsLog/update-user-role?table=users_tb&id=" +  userId + "&initialRole=" + $("#role-location").val() + 
						"&finalRole=" + getIdFromRole($("#" + accompInput).val()), function(data){
																					alert(data);
																				  }
				); 
			}
		}else if(accompInput.indexOf("account-status") != -1){
			var userId = $("#id-location").val();
			if(initialAccountStatus != finalAccountStatus){	
//				console.log("/visitorsLog/update-user-account-status?table=users_tb&id=" +  userId + "&initialAccountStatus=" + $("#account-status-location").val() + 
//						"&finalAccountStatus=" + getIdFromAccountStatus($("#" + accompInput).val()));
				$.post("/visitorsLog/update-user-account-status?table=users_tb&id=" +  userId + "&initialAccountStatus=" + $("#account-status-location").val() + 
						"&finalAccountStatus=" + getIdFromAccountStatus($("#" + accompInput).val()), function(data){
																					alert(data);
																				  }
				); 
			}
		}else if(accompInput.indexOf("partner") != -1){
			var userId = $("#id-location").val();
			if(initialIsPartner != finalIsPartner){	
//				console.log("/visitorsLog/update-partner?table=users_tb&id=" +  userId + "&initialPartner=" + $("#partner-location").val() + 
//						"&finalPartner=" + getInitialYesOrNo($("#" + accompInput).val()));
				$.post("/visitorsLog/update-partner?table=visitors&id=" +  userId + "&initialPartner=" + $("#partner-location").val() + 
						"&finalPartner=" + getInitialYesOrNo($("#" + accompInput).val()), function(data){
																					alert(data);
																				  }
				); 
			}
		}else if(accompInput.indexOf("blacklist") != -1){
			var userId = $("#id-location").val();
			if(initialBlacklisted != finalBlacklisted){	
//				console.log("/visitorsLog/update-blacklisted?table=users_tb&id=" +  userId + "&initialBlacklisted=" + $("#blacklisted-location").val() + 
//						"&finalBlacklisted=" + getInitialYesOrNo($("#" + accompInput).val()));
				$.post("/visitorsLog/update-blacklisted?table=visitors&id=" +  userId + "&initialBlacklisted=" + $("#blacklisted-location").val() + 
						"&finalBlacklisted=" + getInitialYesOrNo($("#" + accompInput).val()), function(data){
																					alert(data);
																				  }
				); 
			}
		}
		
		
	}
	
}

function toggleEditablePicker(ev, accompInput){
	var picker = accompInput + "-picker";
	var cancel = accompInput + "-cancel";
	var edit = accompInput + "-edit";
	console.log(picker);
	if($(ev.target).text() == "edit"){
		$("#" + cancel).removeClass("invisible");
		$("#" + picker).removeClass("invisible");
		$("#" + picker).focus();
		$("#" + edit).text("save");
	}else if($(ev.target).text() == "save"){
		//$("#" + picker).attr("readonly", true);
		$("#" + cancel).addClass("invisible");
		$("#" + picker).addClass("invisible");
		$(ev.target).text("edit");
		
		if($("#" + picker).val() != "")
			$("#" + accompInput).val($("#" + picker).val());
		
		
		//then we save the new value, right?
		var table = "";
		var userId = $("#id-location").val();
		
		if(accompInput.indexOf("user") != -1){
			table = "users_tb";
		}else if(accompInput.indexOf("visitor") != -1){
			table = "visitors";
		}
		$.post("/visitorsLog/update-dob?table=" + table + "&id=" +  userId + "&initialDob=" + initialDob + 
				"&finalDob=" + $("#" + accompInput).val(), function(data){
																alert(data);
															}
		);
		
		
	}
	
}


function resetEditedValue(source, accompInput, initialValue, container){
	
	//$("#" + accompInput).val(initialValue);
	
	console.log("The value after cancel: " + $("#" + accompInput).val());
	
	var edit = accompInput + "-edit";
	var cancel = accompInput + "-cancel";
	
	$("#" + edit).text("edit");
	$("#" + cancel).addClass("invisible");
	$("#" + source).addClass("invisible");
	
	//In case we miss this==============================================================================================
	$("#user-name-edit").text("edit");
	$("#visitor-name-edit").text("edit");
	//==================================================================================================================
	
	if(!$("#" + container).hasClass("invisible"))
		$("#" + container).addClass("invisible");
	
	$("#" + accompInput).removeClass("invisible");
	
	$("#user-name").removeClass("invisible");
	$("#visitor-name").removeClass("invisible");
	
	if(source.indexOf("country")){
		
	}
	
	if(source.indexOf("phone") != -1 || source.indexOf("email") != -1 || source.indexOf("website") != -1 || source.indexOf("ministry") != -1 || source.indexOf("partnership-no") != -1)
		$("#" + accompInput).removeClass("form-control").addClass("form-control-plaintext");
	
	//$("#" + source).addClass("invisible");
}



//==========================================================================================================================================================================================================
//==================================================== METHODS TO EDIT VISITOR / USER DETAILS END HERE =====================================================================================================
//==========================================================================================================================================================================================================


//================

//==================

function getInitialValues(page){
	
	
	if(page == "visitor-details"){
		initialFirstName = $("#visitor-first-name").val();
		initialMiddleName = $("#visitor-middle-name").val();
		initialListName = $("#visitor-last-name").val();
		
		initialDob = $("#visitor-dob").val();
		initialSex = $("#visitor-sex").val();		
		initialMaritalStatus = $("#marital-status-location").val();
				
		initialCountry = $("#country-location").val();
		initialPhone1 = $("#visitor-phone").val();
		initialEmail = $("#visitor-email").val();
		initialWebsite = $("#visitor-website").val();
		initialOccupation = $("#occupation-location").val();
		initialMinistry = $("#visitor-ministry").val();
		initialIsPartner = $("#partner-location").val();
		initialPartnershipNo = $("#visitor-partnership-no").val();
		initialBlacklisted = $("#blacklisted-location").val();
		
		initialPicLocation = $("#visitor-pic").attr("src");		
				
		
	}else if(page == "user-details" || page == "settings"){
		initialFirstName = $("#user-first-name").val();
		initialMiddleName = $("#user-middle-name").val();
		initialLastName = $("#user-last-name").val();
		
		initialDob = $("#user-dob").val();
		initialSex = $("#user-sex").val();		
		initialMaritalStatus = $("#user-marital-status").val();
		
		initialRole = $("#role-location").val();
		initialAccountStatus = $("#account-status-location").val();
		
		initialPicLocation = $("#visitor-pic").attr("src");		
				
	}
}

function getFinalValues(page){
	
	
	if(page == ("visitor-details")){
		finalFirstName = $("#visitor-first-name").val();
		finalMiddleName = $("#visitor-middle-name").val();
		finalLastName = $("#visitor-last-name").val();
		
		finalDob = $("#visitor-dob").val();
		finalSex = $("#visitor-sex").val();		
		finalMaritalStatus = $("#visitor-marital-status").val();
				
		finalCountry = $("#visitor-country").val();
		finalPhone1 = $("#visitor-phone").val();
		finalEmail = $("#visitor-email").val();
		finalWebsite = $("#visitor-website").val();
		finalOccupation = $("#visitor-occupation").val();
		finalMinistry = $("#visitor-ministry").val();
		finalIsPartner = $("#visitor-partner").val();
		finalPartnershipNo = $("#visitor-partnership-no").val();
		finalBlacklisted = $("#visitor-blacklist").val();
		finalLastVisit = $("#visitor-last-visit").val();
		finalRegisteredBy = $("#visitor-registered-by").val();
		finalRegisterDate = $("#visitor-register-date").val();
				
		finalPicLocation = $("#visitor-pic").attr("src");		
		
		
		
	}else if(page == ("visitor-details-readonly")){
		finalFirstName = $("#visitor-first-name").val();
		finalMiddleName = $("#visitor-middle-name").val();
		finalLastName = $("#visitor-last-name").val();
		
		finalDob = $("#visitor-dob").val();
		finalSex = $("#visitor-sex").val();		
		finalMaritalStatus = $("#visitor-marital-status").val();
				
		finalCountry = $("#visitor-country").val();
		finalPhone1 = $("#visitor-phone").val();
		finalEmail = $("#visitor-email").val();
		finalWebsite = $("#visitor-website").val();
		finalOccupation = $("#visitor-occupation").val();
		finalMinistry = $("#visitor-ministry").val();
		finalIsPartner = $("#visitor-partner").val();
		finalBlacklisted = $("#visitor-blacklist").val();
		finalLastVisit = $("#visitor-last-visit").val();
		finalRegisteredBy = $("#visitor-registered-by").val();
		finalRegisterDate = $("#visitor-register-date").val();
				
		finalPicLocation = $("#visitor-pic").attr("src");		
		
		
		
	}else if(page == "user-details" || page == "settings"){
		finalFirstName = $("#user-first-name").val();
		finalMiddleName = $("#user-middle-name").val();
		finalLastName = $("#user-last-name").val();
		
		finalDob = $("#user-dob").val();
		finalSex = $("#user-sex").val();		
		finalMaritalStatus = $("#user-marital-status").val();
				
		finalRole = $("#user-role").val();
		finalAccountStatus = $("#user-account-status").val();
		finalRegisteredBy = $("#user-registered-by").val();
		finalRegisterDate = $("#user-register-date").val();
		
		var LastLoginArray = ($("#last-login-location").val()).split(" ");
		
		LastLogin = LastLoginArray[0] + " " + interpretTime(LastLoginArray[1]); 
		
		finalPicLocation = $("#visitor-pic").attr("src");	
	}
}

//======================================

//=========================================

function populateVisitsTable(id){
	$.get("/visitorsLog/get-visits?id=" + id, function(data){
												
		 											console.log(data);
													
													var allVisits = JSON.parse(data);
																										
													var tableBody = $(".visits-container").find("tbody");
													$(tableBody).html("");
													var row;
													var count = 1;
													
													var arrivalTime;
													var departureTime;
													var takingMeds;
													var hasMedReport;
													var recordedBy;
													
													visitsArray = new Array();
													visitsArray.push(new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""));
													
													allVisits.forEach(function(visit){
																	
																	if(visit["arrivalTime"] == null || visit["arrivalTime"] == "00:00:00"){
																		arrivalTime = "";
																	}else{
																		arrivalTime = visit["arrivalTime"];
																	}
																	
																	if(visit["departureTime"] == null || visit["departureTime"] == "00:00:00"){
																		departureTime = "";
																	}else{
																		departureTime = visit["departureTime"];
																	}
																	
																	takingMeds = getYesOrNo(visit["onMedOnArrival"]);
																	hasMedReport = getYesOrNo(visit["hasMedReport"]);
																	recordedBy = getUserById(visit["recordedBy"]);
																	
																	row = $('<tr><td>'	 + count + '</td>' + 
																				'<td>' + visit["arrivalDate"] + '</td>'+
																				'<td>' + arrivalTime + '</td>'+
																				'<td>' + visit["reasonOfVisit"] + '</td>'+
																				'<td>' + takingMeds + '</td>'+
																				'<td>' + hasMedReport + '</td>'+
																				'<td>' + visit["departureDate"] + '</td>'+
																				'<td>' + departureTime + '</td>'+
																				'<td>' + visit["comment"] + '</td>'+
																				'<td>' + recordedBy + '</td>'+																				
																		  '</tr>');
																	
																	
																	//The ten astericks are used to conserve the consistency of the array. 
																	//They replace commas so that when this array is passed to the server, the length of it's elements is not misconstrued
																	//On the server, they are converted back to commas
																	visitsArray.push(new Array(count, visit["arrivalDate"], arrivalTime, visit["reasonOfVisit"].replace(/,/g, "**********"), takingMeds, 
																			hasMedReport, getModeOfVisitWithId(visit["modeOfVisit"]), (visit["referenceNo"] == 0) ? "" : visit["referenceNo"], visit["screener"], visit["inCareOf"], 
																			visit["coordinator"], getDiningWithId(visit["dining"]), visit["departureDate"], departureTime, visit["comment"].replace(/,/g, "**********"), 
																			recordedBy));
																	
																	$(tableBody).append(row);																	
																	count++;
																	});
											  }
	);
}