/**
 * 
 */

//=============================================================================================================================================================================
//============================================================================Validation functions start here==================================================================
//=============================================================================================================================================================================

function isValidName(fieldValue){
	if(/^[A-Za-z-']+$/.test(fieldValue))
		return true;
	return false;
}

function isValidMiddleName(fieldValue){
	if(fieldValue == "" || /^[A-Za-z-'.]+$/.test(fieldValue))
		return true;
	return false;
}

function isValidLastName(fieldValue){
	if(/^[A-Za-z-'\s]+$/.test(fieldValue))
		return true;
	return false;
}

function isValidUsername(fieldValue){
	if(/^[A-Za-z-_\d]+$/.test(fieldValue))
		return true;
	return false;
}

function isUsernameLengthOK(fieldValue){
	if(fieldValue.length >= 2)
		return true;
	return false;
}

function isPasswordValid(fieldValue){
	if(/^[A-Za-z-_\d@#$%^&*()+=!<>?\/:;]+$/.test(fieldValue) && fieldValue.length >= 5)
		return true;
	return false;
}

function hasChosenRadio(formName, field){
	var serializedForm = $("form[name=" + formName + "]").serialize();
	if(serializedForm.indexOf(field) >= 0)
		return true;
	return false;
}

function hasSelected(field){
	if($(field).val() != 0)
		return true;
	return false;
}

function hasChosenCountry(countryField){
	if($(countryField).val() == 0)
		return false;
	return true;	
}

function isPhoneValid(phoneValue){
	if(/^[\+]?[\d]{5,}$/.test(phoneValue))
		return true;
	return false;
}

function isDateEmpty(date){
	if(date == "")
	return true;
}

function areDatesInOrder(doa, dod){
	
	if(doa == "" || dod == "")
		return true;
	else{
		var doaArray = doa.split("-");
		var dodArray = dod.split("-");
		
		for(var i = 0; i < 3; i++){
			if(parseInt(doaArray[i]) < parseInt(dodArray[i]))
				return true;		
		}
		
	}	
	return false;
}

function areDatesEqual(doa, dod){
	return doa == dod;
}

function getVisitDates(id){
	$.get("/visitorsLog/get-visit-dates?visitor_id=" + id, function(data){
																//console.log(data);
																allVisitDates = JSON.parse(data);
																console.log(allVisitDates);
															});
}

function doesDateOverlap(doa, dod, allVisitDates){
	for(var i = 0; i < allVisitDates.length; i++){
		if(doa > allVisitDates[i]["arrivalDate"] && doa < allVisitDates[i]["departureDate"])
			return "Arrival date overlaps with the visit of " + allVisitDates[i]["arrivalDate"];
		else if(dod > allVisitDates[i]["arrivalDate"] && dod < allVisitDates[i]["departureDate"])
			return "Departure date overlaps with the visit of " + allVisitDates[i]["arrivalDate"];
	}	
	return false;
}

function doesAnyVisitOverlapThis(id, doa, dod){
	$.get("/visitorsLog/get-visit-dates?visitor_id=" + id, function(data){
		//console.log(data);
		allVisitDates = JSON.parse(data);
		console.log(allVisitDates);
		for(var i = 0; i < allVisitDates.length; i++){
			if(doa > allVisitDates[i]["arrivalDate"] && doa < allVisitDates[i]["departureDate"]){
				displayErrorMessage("Arrival date overlaps with the visit of " + allVisitDates[i]["arrivalDate"]);
				return true;
			}else if(dod > allVisitDates[i]["arrivalDate"] && dod < allVisitDates[i]["departureDate"]){
				displayErrorMessage("Departure date overlaps with the visit of " + allVisitDates[i]["arrivalDate"]);
				return true;	
			}
		}	
		return false;
	});
	
}

function isAnyVisitTimeEmpty(toa, tod){
	if(toa == "" || tod == "")
		return true;
	return false;
}

function areTimesInOrder(doa, toa, dod, tod){
	if(areDatesEqual(doa, dod)){
		var toaArray = toa.split(":");
		var todArray = tod.split(":");
		
		for(var i = 0; i < 2; i++){
			if(parseInt(toaArray[i]) > parseInt(todArray[i]))
				return false;			
		}
		return true;
	}
	return true;
}

function isValidPartnerNo(partnerNo){
	if(partnerNo == ""){
		return true;
	}else if(/^[\w]{2}[\d]{6}$/.test(partnerNo))
		return true;
	return false;
}

function confirmDefaultPicture(){
	if($("#visitor-pic").attr("src") == DEFAULT_PIC_SOURCE){
		displayModal("One more thing", "The visitor's profile image is still the default one. " + 
				"Of course it doesn't matter if you want to use it, but you can change it at the left.<br />Continue?", "No, change it", "Continue",  submitRegisterVisitor);
	}else{
		submitRegisterVisitor();
	}
}



//==========================================================Validation for Registering new USER=============================================================================================
//==========================================================================================================================================================================================

function validateUserRegister(){
	
	if(isValidName($("#fname").val())){
		
		if(isValidMiddleName($("#mname").val())){
			
			if(isValidLastName($("#lname").val())){
				
				if(hasChosenRadio("user-register", "sex")){
					
					if(isValidUsername($("#username").val())){
						
						if( isUsernameLengthOK($("#username").val())){
							
							if(isPasswordValid($("#password").val())){
								
								if($("#password").val() == $("#confirm-password").val()){
									
									if(hasChosenRadio("user-register", "role")){
										
										if($("#visitor-pic").attr("src") == DEFAULT_PIC_SOURCE){
											displayModal("One more thing", "The users profile image is still the default one. " + 
													"Of course it doesn't matter if you want to use it, but you can change it at the left.<br />Continue?", "No, change it", "Continue", submitRegisterUser);
										}else{
											submitRegisterUser();
										}
										
									}else{
										displayErrorMessage("You must give the new user a role");
									}
									
								}else{
									displayErrorMessage("Passwords don't match.");
								}
								
							}else{
								displayErrorMessage("Your password is not valid. Note: passwords can't contain spaces and must be at least 5 characters (any type of characters) long.");
							}
							
						}else{
							displayErrorMessage("Your chosen username is too short");
						}
						
					}else{
						displayErrorMessage("Your username is invalid! Note: You can only use small or capital letters, dashes, underscores and digits.");
					}
						
				}else{
					displayErrorMessage("You didn't select any sex, come on?");
				}
				
			}else{
				displayErrorMessage("The last name you entered is not valid!");
			}
			
		}else{
			displayErrorMessage("The middle name you entered is not valid!");
		}
	}else{
		displayErrorMessage("The name you entered is not valid!");
	}
}


//==========================================================================================================================================================================================
//==========================================================Validation for Registering new USER ends here===================================================================================



//==========================================================Validation for Registering new VISITOR==========================================================================================
//==========================================================================================================================================================================================

function validateVisitorRegisteration(){
	
	if(isValidName($("#firstName").val())){
		
		if(isValidMiddleName($("#middleName").val())){
			
			if(isValidLastName($("#lastName").val())){
				
				if(hasChosenRadio("visitor-register", "sex")){
					
					if(hasChosenCountry($("#country"))){
						
						if(isPhoneValid($("#phone1").val())){
							
							var phone2 = $("#phone2").val();
							if(phone2 == "" || isPhoneValid(phone2)){
								
								if($("#marital-status").val() != 0){
									
									if(areDatesInOrder($("#dob").val(), $("#doa").val())){
										
										if(areDatesInOrder($("#doa").val(), $("#dod").val())){
											
											if(areDatesEqual($("#doa").val(), $("#dod").val())){
												
												if(areTimesInOrder($("#doa").val(), $("#toa").val(), $("#dod").val(), $("#tod").val())){
													
													
												}else{
													displayErrorMessage("The arrival and departure times are not in order");
													return;
												}
												
											}
												
											if(isValidPartnerNo($("#partner-number").val())){
												
												if($("#mode-of-visit").val() != "0"){
													
																									
													if($("#mode-of-visit").val() == "1" && $("#ref-no").val() == "0"){
														displayErrorMessage("Sorry, you must pick a reference number.");
														return;
													}
													
													if($("#mode-of-visit").val() == "2" && $("#screener").val() == ""){
														displayErrorMessage("Sorry, you must enter a screener :(");		
														return;
													}
													
													if($("#mode-of-visit").val() == "3" && $("#in-care-of").val() == ""){
														displayErrorMessage("Visitor is in care of who?");	
														return;
													}
													
																										
												}else{
													displayErrorMessage("I'm afraid you must pick a mode of visit.");
													return;
												}												
												
												if($("#dining").val() != "0"){
													
													confirmDefaultPicture();
													
												}else{
													displayErrorMessage("Visitor must have a dining.");
												}
												
												
											}else{
												displayErrorMessage("Partnership number is not valid, please...");
											}

												
											
											
										}else{
											displayErrorMessage("The arrival and departure dates are not in order");
										}	
										
									}else{
										displayErrorMessage("You can't come to SCOAN before you were born");
									}
								}else{
									displayErrorMessage("No marital status chosen...");
								}
								
							}else{
								displayErrorMessage("The second phone number is not valid. Phone numbers can only contain digits and/or a plus sign at the beginning");
							}
							
						}else{
							displayErrorMessage("The phone number is not valid. Phone numbers can only contain digits and/or a plus sign at the beginning");
						}
						
					}else{
						displayErrorMessage("You must select a country");
					}
					
				}else{
					displayErrorMessage("A visitor must have a gender, right?");
				}
				
			}else{
				displayErrorMessage("The last name you entered is not valid!");
			}
			
		}else{
			displayErrorMessage("The middle name you entered is not valid!");
		}
		
	}else{
		displayErrorMessage("The name you entered is not valid!");
	}
}

//==========================================================================================================================================================================================
//==========================================================Validation for Registering new VISITOR ends here================================================================================


//==========================================================Validation for Registering Adding NEW VISIT RECORD==============================================================================
//==========================================================================================================================================================================================

function validateAddVisit(){
	
	
	
	if($("#arrival-date").val() == ""){ 
		displayErrorMessage("The arrival date cannot be empty.");
		return;
	}
	
	if($("#departure-date").val() == ""){
		displayErrorMessage("The departure date cannot be empty.");
		return;
	}
	
	
	if(!areDatesInOrder($("#arrival-date").val(), $("#departure-date").val())){
		displayErrorMessage("The arrival and departure dates are not in order.");
		return;
	}
	
	if($("#mode-of-visit").val() != "0"){
		
		
		if($("#mode-of-visit").val() == "1" && $("#ref-no").val() == "0"){
			displayErrorMessage("Sorry, you must pick a reference number.");
			return;
		}
		
		if($("#mode-of-visit").val() == "2" && $("#screener").val() == ""){
			displayErrorMessage("Sorry, you must enter a screener :(");		
			return;
		}
		
		if($("#mode-of-visit").val() == "3" && $("#in-care-of").val() == ""){
			displayErrorMessage("Visitor is in care of who?");	
			return;
		}
		
															
	}else{
		displayErrorMessage("I'm afraid you must pick a mode of visit.");
		return;
	}												
	
	if($("#dining").val() == "0"){
		displayErrorMessage("Visitor must have a dining.");
		return;
	}
	
	$.get("/visitorsLog/get-visit-dates?visitor_id=" + $("#hidden-visitor-id").val(), function(data){
															//console.log(data);
															allVisitDates = JSON.parse(data);
															console.log(allVisitDates);
															var doa = $("#arrival-date").val();
															var dod = $("#departure-date").val();
															for(var i = 0; i < allVisitDates.length; i++){
																if(doa >= allVisitDates[i]["arrivalDate"] && doa <= allVisitDates[i]["departureDate"]){
																	displayErrorMessage("Arrival date overlaps with the visit of " + allVisitDates[i]["arrivalDate"]);
																	return true;
																}else if(dod >= allVisitDates[i]["arrivalDate"] && dod <= allVisitDates[i]["departureDate"]){
																	displayErrorMessage("Departure date overlaps with the visit of " + allVisitDates[i]["arrivalDate"]);
																	return true;	
																}else if(doa <= allVisitDates[i]["arrivalDate"] && dod >= allVisitDates[i]["departureDate"]){
																	displayErrorMessage("Arrival and departure dates overlap the visit of " + allVisitDates[i]["arrivalDate"]);
																	return true;
																}
															}	
															
															$.post("/visitorsLog/add-visit", $("form[name=add-visit]").serialize(), function(data){
																//alert(data);
																if(data == "success"){
																	displaySuccessMessage("New record added successfully!");
																	setTimeout(function(){
																					location.reload();
																				}, 2000);
																}else{
																	displayErrorMessage("There was a problem adding new record :(");
																}
																
															});
	});
			
	
	
}

//==========================================================================================================================================================================================
//==========================================================Validation for Registering Adding NEW VISIT ENDS HERE===========================================================================


//==========================================================Validation for CHOOSE-PASSWORD form=============================================================================================
//==========================================================================================================================================================================================

function validateChoosePassword(){
	
	if(isPasswordValid($("#new-password").val())){
		
		if($("#old-password").val() != $("#new-password").val()){
		
			if($("#new-password").val() == $("#retype-new-password").val()){
				
				if($("#user-security-question").val() != "Select"){
					
					if($("#user-security-answer").val() != ""){
						
						var query = $("form[name=choose-password-form]").serialize() + "&" + location.href.split("?")[1];
						$.post("/visitorsLog/choose-password-submit", query, function(data){
																				//alert(data);
																				if(data == "Successfully changed password..."){
																					displaySuccessMessage("Successfully changed password...");
																					setTimeout(function(){
																						//window.location = "/visitorsLog/dashboard";
																						tryLogout();
																					}, 2000);
																				}else{
																					displayErrorMessage(data);
																				}
																				
																			});
						
					}else{
						displayErrorMessage("You haven't provided an answer to your security question...");
					}
					
				}else{
					displayErrorMessage("You are advised to pick a secret security question which will help recover your password in the future should you forget it...");
				}
				
			}else{
				displayErrorMessage("Sorry, retyped password doesn't match new password...");
			}
		}else{
			displayErrorMessage("New and old passwords must not be the same...");
		}
	}else
		displayErrorMessage("Your new password is not valid. Note: passwords can't contain spaces and must be at least 5 characters (any type of characters) long.");
	
}

//===========================================================================================================================================================================================================
//==========================================================Validation for CHOOSE-PASSWORD form ENDS HERE====================================================================================================

//==========================================================Validation for CHANGE-PASSWORD form==============================================================================================================
//===========================================================================================================================================================================================================

function validateChangePassword(){
	
	if($("#username").val() != ""){
		
		if(isPasswordValid($("#new-password").val())){
			
			if($("#new-password").val() == $("#retype-new-password").val()){
				
				if($("#user-security-question").val() != "Select"){
					
					if($("#user-security-answer").val() != ""){
						
						var query = $("form[name=change-password-form]").serialize();
						//console.log(query);
						$.post("/visitorsLog/change-password-submit", query, function(data){
																				//alert(data);
																				if(data == "Successfully changed password..."){
																					displaySuccessMessage("Successfully changed password...");
																					setTimeout(function(){
																						//window.location = "/visitorsLog/login";
																						tryLogout();
																					}, 2000);
																				}else{
																					displayErrorMessage(data);
																				}
																				
																			});
						
					}else{
						displayErrorMessage("You haven't provided an answer to your security question...");
					}
					
				}else{
					displayErrorMessage("You are advised to pick a secret security question which will help recover your password in the future should you forget it...");
				}
				
			}else{
				displayErrorMessage("Sorry, retyped password doesn't match new password...");
			}
		
		}else{
			displayErrorMessage("Your new password is not valid. Note: passwords can't contain spaces and must be at least 5 characters (any type of characters) long.");
		}
	}else{
		displayErrorMessage("Username cannot be empty. You must enter your username");
	}
	
	
}

//===========================================================================================================================================================================================================
//==========================================================Validation for CHANGE-PASSWORD form ENDS HERE====================================================================================================


//==========================================================Validation for SETTINGS-CHANGE-PASSWORD form======================================================================================================
//============================================================================================================================================================================================================

function validateSettingsChangePassword(){
	
	if($("#settings-old-password").val() != ""){
		
		if(isPasswordValid($("#settings-new-password").val())){
			
			if($("#settings-old-password").val() != $("#settings-new-password")){
				
				if($("#settings-new-password").val() == $("#settings-retype-password").val()){
					
					console.log($("form[name=settings-change-password]").serialize() + "&userId=" + $("#id-location").val());
					
					$.post("/visitorsLog/settings-change-password?" + $("form[name=settings-change-password]").serialize(), 
							function (data){
								//alert(data);
								if(data == "Successfully changed password..."){
									displaySuccessMessage("Successfully changed password...");
									setTimeout(function(){
										//window.location = "/visitorsLog/login";
										tryLogout();
									}, 2000);
								}else{
									displayErrorMessage(data);
								}
							}
					);
					
					
				}else{
					displayErrorMessage("The retyped password doesn't match the new one. Please check.");
				}
				
			}else{
				displayErrorMessage("Your new password is the same as the old one?");
			}
			
		}else{
			displayErrorMessage("Your new password is not valid. Note: passwords can't contain spaces and must be at least 5 characters (any type of characters) long.");
		}
		
	}else{
		
		displayErrorMessage("Old password cannot be empty.");
		
	}
	
}

//============================================================================================================================================================================================================
//==========================================================Validation for SETTINGS-CHANGE-PASSWORD form ENDS HERE============================================================================================


//==========================================================Validation for SETTINGS-CHANGE-SECURITY-QUESTION form=============================================================================================
//============================================================================================================================================================================================================

function validateSettingsChangeSecurityQuestion(){
	
	if($("#settings-security-question").val() != "Select"){
		
		if($("#settings-security-answer").val() != ""){
			
					
					console.log($("form[name=settings-change-security-question]").serialize());
					
					$.post("/visitorsLog/settings-change-security-question?" + $("form[name=settings-change-security-question]").serialize(), 
																																function (data){
																																	//alert(data);
																																	if(data == "success"){
																																		displaySuccessMessage("Successfully changed security question and answer..");
																																	}else{
																																		displayErrorMessage("Sorry, couldn't change security question and answer..")
																																	}
																																}
																																	
					);
					
				
		}else{
			displayErrorMessage("You know you didn't provide a security answer, right?");
		}
		
	}else{
		
		displayErrorMessage("You know you didn't choose any security question, right?");
		
	}
	
}

//============================================================================================================================================================================================================
//==========================================================Validation for SETTINGS-CHANGE-SECURITY-QUESTION form ENDS HERE===================================================================================
