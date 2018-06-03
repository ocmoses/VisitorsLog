/**
 * 
 */

$(document).ready(function(){
	startImageSlide();  //Anywhere the slide appears, start animation...............................................
	
	
	
});

function tryLogin(){
	$.post("/visitorsLog/login-submit",  $("form[name=login-form]").serialize(), function(data){
																					//alert(data);
																					if(data == "success") {
																						
																						window.location = "/visitorsLog/dashboard"; 
																						
																					}else if(data.indexOf("choose-password") != -1){
																						
																						window.location = "/visitorsLog/choose-password?username=" + data.split(":::")[0];
																							
																					}else{
																						//alert(data);
																						$(".error-login").text(data);
																						$(".error-login").css("display", "block");
																						
																					} 
																						
																				});
}

function tryLogout(){
	$.get("/visitorsLog/logout-submit", function(data){
											if(data == "success") {
												window.location = "/visitorsLog/login"; 
											}else {
												alert("Couldn't log you out :(");
											}
										}
);}

function getSimilarRecords(firstName, middleName, lastName){
	console.log("add new visitor is active");
	console.log("firstName=" + firstName + "&middleName=" + middleName + "&lastName=" + lastName);
	$.get("/visitorsLog/get-similar-records?" + 
				  "firstName=" + firstName + "&middleName=" + middleName + "&lastName=" + lastName, 
				  function(data){
						//console.log(data)
						$(".similar-container").html("");
						var similarRecords = JSON.parse(data);
						
						var similarDiv;
						var similarImage;
						var similarDetailDiv;
						var similarName;
						var similarCountry;
						var similarLastVisit;
						var similarLink;
						
						
						if(similarRecords.length > 0){
							var count;
							similarRecords.forEach(function(record){
								count++;
								similarDiv = $('<div class="similar" ></div>');
								$(".similar-container").append(similarDiv);
								
								similarImage = $('<img class="img-thumbnail" src="' + record["picLocation"] + '" />');
								similarDiv.append(similarImage);
								
								similarDetailDiv = $('<div style="display: inline; width: 70%; float: right; margin: 0px; padding: 0px; padding-left: 15px;"></div>');
								similarDiv.append(similarDetailDiv);
								
								similarName = $('<h4 style="margin: 0px;">' + record["firstName"] + " " + record["middleName"] + " " + record["lastName"] + '</h4>');
								similarDetailDiv.append(similarName);
								
								similarCountry = $('<p style="margin: 0px;"><b>Country:</b> ' + getCountryWithId(record["country"]) + '</p>');
								similarDetailDiv.append(similarCountry);
								
								similarLastVisit = $('<p style="margin: 0px;"><b>Last visit:</b> ' + record["lastVisit"] + '</p>');
								similarDetailDiv.append(similarLastVisit);
								
								similarLink = $('<a href="/visitorsLog/visitor-details?id=' +record["id"] + '" >View more...</a>');// We'll figure this out later
								similarDetailDiv.append(similarLink);
								
								similarDiv.append($('<hr />'));
								
							});
							
						}						
						
				});
	 
}



function startImageSlide(){
	var imageArray = $("#visitor-image-slide").find("img");
	console.log(imageArray);
	
	$("#visitor-image-slide").html("");
			
	$("#visitor-image-slide").css("visibility", "visible");
	
	var index = Math.floor(Math.random() * 30) + 1;
	var image;
		
	setTimeout(setInterval(function(){
							$(image).fadeOut("slow");
							$("#visitor-image-slide").html("");
							image = $(imageArray[index])
							$("#visitor-image-slide").append(image);
							$(image).fadeIn("slow");
							index = Math.floor(Math.random() * 30) + 1 ;
							
						}, 10000), 5);
		
}

function hideErrorMessage(){
	if($(".error-login").css("display") == "block"){
		$(".error-login").css("display", "none");
	}	
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////GET STUFF FROM DATABASE

function getAllMaritalStatus(theElement){
	if(allMaritalStatus.length == 0){
		$.get("/visitorsLog/get-maritals", function(data){
												var maritals = JSON.parse(data);
												
												allMaritalStatus = new Array();
												
												var aMaritalStatus;
												maritals.forEach(function(marital){ 
													aMaritalStatus = new MaritalStatus();
													aMaritalStatus.id =  marital["id"];
													aMaritalStatus.maritalStatus =  marital["maritalStatus"];
													allMaritalStatus.push(aMaritalStatus);
											});
												
											fillMaritalStatus(theElement);
		});
	}else{
		fillMaritalStatus(theElement);
	}
	
}


function fillMaritalStatus(theElement){
	
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Select--</option>');
	allMaritalStatus.forEach(function(marital){ 
		option = $('<option value="' + marital["id"] + '" >' + marital["maritalStatus"] + '</option>')
		$(theElement).append(option);
	});
											
}

function getMaritalStatusIdWithName(maritalStatus){
				
	for(var i = 0; i < allMaritalStatus.length; i++){
		if(allMaritalStatus[i]["maritalStatus"] == maritalStatus)
			return allMaritalStatus[i]["id"];
	}

}

//This method designed to set both the hidden select field and the visible ineditable one 
function setMaritalStatusWithId(id, txElement, selectElement){
	if(allMaritalStatus.length == 0){
		$.get("/visitorsLog/get-maritals", function(data){
													var maritals = JSON.parse(data);
													maritals.forEach(function(marital){
														if(marital["id"] == id){
															$(txElement).val(marital["maritalStatus"]);
															$(selectElement).val(marital["id"]);
															initialMaritalStatus = marital["maritalStatus"];
															return;
														}
													});
												});
		
	}else{
		allMaritalStatus.forEach(function(marital){
			if(marital["id"] == id){
				$(txElement).val(marital["maritalStatus"]);
				$(selectElement).val(marital["maritalStatus"]);
				initialMaritalStatus = marital["maritalStatus"];
				return;
			}
		});
	}
	
}

function getAllCountries(theElement){
	if(allCountries.length == 0){
		$.get("/visitorsLog/get-countries", function(data){
												//console.log(data);
												var countries = JSON.parse(data);
												allCountries = new Array();
												
												var aCountry;
												countries.forEach(function(country){ 
													aCountry = new Country();
													aCountry.id = country["id"];
													aCountry.name = country["niceName"];
													
													allCountries.push(aCountry);
												});
												
												fillCountries(theElement);
												
											}
		);
	}else{
		fillCountries(theElement);
	}
	
}

function fillCountries(theElement){
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Select--</option>');
	
	var option;
	allCountries.forEach(function(country){ 
		option = $('<option value="' + country["id"] + '" >' + country["name"] + '</option>')
		$(theElement).append(option);		
	});
}

function getAllOccupations(theElement){
	if(allOccupations.length == 0){
		$.get("/visitorsLog/get-occupations", function(data){
													var occupations = JSON.parse(data);
													var string = "";
													
													//console.log("All occupations: " + occupations);
													
													allOccupations = new Array();
													
													var anOccupation;
													occupations.forEach(function(occupatione){ 
														anOccupation = new Occupation();
														anOccupation.id = occupatione["id"];
														anOccupation.occupation = occupatione["occupation"];
														
														allOccupations.push(anOccupation);
													});
													if(theElement != null)
														fillOccupations(theElement);
													
											});
	}else{
		if(theElement != null)
			fillOccupations(theElement);
	}
	
}

function fillOccupations(theElement){
	
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Select--</option>');
	
	var option;
	allOccupations.forEach(function(occupatione){ 
		option = $('<option value="' + occupatione["id"] + '" >' + occupatione["occupation"] + '</option>')
		$(theElement).append(option);
	});
}

function getAndFillAllOccupations(){
	$.get("/visitorsLog/get-occupations", function(data){
		var occupations = JSON.parse(data);
		var string = "";
		
		//console.log("All occupations: " + occupations);
		
		allOccupations = new Array();
		
		var anOccupation;
		occupations.forEach(function(occupatione){ 
			anOccupation = new Occupation();
			anOccupation.id = occupatione["id"];
			anOccupation.occupation = occupatione["occupation"];
			
			allOccupations.push(anOccupation);
		});
		
		console.log(allOccupations.length);
	});
}

function getAllRolesInit(){
	$.get("/visitorsLog/get-roles", function(data){													
		//alert(data);	
		
		var roles = JSON.parse(data);
		allRoles = new Array();
		var aRole;
		roles.forEach(function(role){
			aRole = new Role();
			aRole.id = role.id;
			aRole.role = role.role;
			allRoles.push(aRole);
		});
		
	});
}



function getAllRoles(element){

	$.get("/visitorsLog/get-roles", function(data){
											//alert(data);
											var theRoles = JSON.parse(data);
											var aRole = null;
											allRoles = new Array();
											theRoles.forEach(function(uniqueRole){
																aRole = new Role();
																aRole.id = uniqueRole["id"];
																aRole.role = uniqueRole["role"];
																allRoles.push(aRole);
															 });
											//console.log("All roles :" + allRoles);
											
											var allRolesElements = $(element).find("*");
											
											allRoles.forEach(function(role){
												for(var i = 0; i < allRolesElements.length; i++){
													
													if(role.role == $(allRolesElements[i]).attr("id")){
														$(allRolesElements[i]).val(role.id);
														//console.log($(allRolesElements[i]).attr("id"));
													}													
												}
												
											});											
											
									});
}

function getRoleByUserId(id){
	var userRole;
	for(var i = 0; i < allUsers.length; i++){
		if(allUsers[i]["id"] == id){
			userRole = allUsers[i]["role"];
			break;
		}
			
	}
	
	return getRoleById(userRole);
}


function getRoleWithId(id, theElement){
	$.get("/visitorsLog/get-role?id=" + id, function(data){													
												//alert(data);	
												var role = data.split(":::")[0];
												initialRole = role;
												$(theElement).val(role);
											});
}



function getRoleById(id){
	if(allRoles.length == 0){
		
		$.get("/visitorsLog/get-roles", function(data){													
			//alert(data);	
			
			var roles = JSON.parse(data);
			allRoles = new Array();
			var aRole;
			roles.forEach(function(role){
				aRole = new Role();
				aRole.id = role.id;
				aRole.role = role.role;
				allRoles.push(aRole);
			});
			
			for(var i = 0; i < allRoles.length; i++){
				if(allRoles[i]["id"] == id)
					return allRoles[i]["role"];
			}
		});
		
		
	}else{
		for(var i = 0; i < allRoles.length; i++){
			if(allRoles[i]["id"] == id)
				return allRoles[i]["role"];
		}
	}
	
	
}

function getIdFromRole(checkRole){
	if(allRoles.length == 0){
		console.log("allRoles is zero");
		$.get("/visitorsLog/get-roles", function(data){													
											//alert(data);	
											allRoles = JSON.parse(data);
											for(var i = 0; i < allRoles.length; i++){
												if(allRoles[i]["role"] == checkRole)
													return allRoles[i]["id"];
											}
		});
	}else{
		console.log("allRoles is not zero");
		for(var i = 0; i < allRoles.length; i++){
			if(allRoles[i]["role"] == checkRole)
				return allRoles[i]["id"];
		}
	}	
	
}


function getAccountStatusWithId(id, theElement){
	$.get("/visitorsLog/get-account-status?id=" + id,  function(data){													
														 //alert(data);		
														 $(theElement).val(data);
													  });
}

function getAccountStatusByUserId(id){
	for(var i = 0 ; i < allUsers.length; i++){
		if(allUsers[i]["id"] == id){
			for(var j = 0; j < allAccountStatus.length; j++){
				if(allUsers[i]["status"] == allAccountStatus[j]["id"])
					return allAccountStatus[j]["status"];
			}
		}
	}
}

function getAccountStatusWithAccountStatusId(id){
	for(var i = 0 ; i < allAccountStatus.length; i++){
		if(allAccountStatus[i]["id"] == id){
			return allAccountStatus[i]["status"];
		}
	}
}

function getAllAccountStatus(){
	
		$.get("/visitorsLog/get-all-account-status", function(data){
														allAccountStatus = JSON.parse(data);														
													 }
		);
	
	
}

function getIdFromAccountStatus(accountStatus){
	if(allAccountStatus.length == 0){
		$.get("/visitorsLog/get-all-account-status", function(data){
														allAccountStatus = JSON.parse(data);			
														for(var i = 0; i < allAccountStatus.length; i++){
															if(allAccountStatus[i]["status"] == accountStatus)
																return allAccountStatus[i]["id"];
														}
													 }
		);
	}else{
		for(var i = 0; i < allAccountStatus.length; i++){
			if(allAccountStatus[i]["status"] == accountStatus)
				return allAccountStatus[i]["id"];
		}
	}
	
}

function getAllAccountStatus(theElement){
	if(allAccountStatus.length == 0){
		$.get("/visitorsLog/get-all-account-status", function(data){
														//alert(data);
														var allStatus = JSON.parse(data);
														var aStatus = null;
														allAccountStatus = new Array();
														allStatus.forEach(function(uniqueStatus){
															aStatus = new AccountStatus();
															aStatus.id = uniqueStatus["id"];
															aStatus.status = uniqueStatus["status"];
															allAccountStatus.push(uniqueStatus);
														});
														
														fillAccountStatus(theElement);
		});
	}else{
		fillAccountStatus(theElement);
	}
	
}

function fillAccountStatus(theElement){
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Select--</option>');
	
	var option;
	allAccountStatus.forEach(function(accountStatus){ 
		option = $('<option value="' + accountStatus["id"] + '" >' + accountStatus["status"] + '</option>')
		$(theElement).append(option);
	});
}

function getCountryWithId(id){
	if(allCountries.length == 0){
		$.get("/visitorsLog/get-countries", function(data){	
												var countries = JSON.parse(data);
												countries.forEach(function(country){
													if(country["id"] == id)
														return country["niceName"];
												});
		});
	}else{
		allCountries.forEach(function(country){
			if(country["id"] == id)
				return country["niceName"];
		});
	}
}

function getIdFromCountry(countryName){
	allCountries.forEach(function(country){
		if(country["niceName"] == countryName)
			return country["id"];
	});
}

//This method designed to set both the hidden select field and the visible ineditable one 
function setCountryWithId(id, txElement, selectElement){
	if(allCountries.length == 0){
		$.get("/visitorsLog/get-countries", function(data){
													var countries = JSON.parse(data);
													countries.forEach(function(country){
														if(country["id"] == id){
															$(txElement).val(country["niceName"]);
															$(selectElement).val(country["id"]);
															return;
														}
													});
												});
		
	}else{
		allCountries.forEach(function(country){
			if(country["id"] == id){
				$(txElement).val(country["niceName"]);
				$(selectElement).val(country["niceName"]);
				return;
			}
		});
	}
	
}

function getOccupationWithId(id){
	//console.log("All occupations length: " + allOccupations.length);
	
	if(allOccupations.length == 0){
		
		var string = "";
		
		$.ajax({
					url: '/visitorsLog/get-occupations',
					method: "GET",
					success: function(data){
								var occupations = JSON.parse(data);
								
								//console.log(occupations);
								
								allOccupations = new Array();
								
								var anOccupation;
								occupations.forEach(function(occupatione){ 
									anOccupation = new Occupation();
									anOccupation.id = occupatione["id"];
									anOccupation.occupation = occupatione["occupation"];
									
									allOccupations.push(anOccupation);
								});
								
								//console.log("All occupations length now: " + allOccupations.length);								
								
							},
					async: false
				});
				
		
		for(var i = 0; i < allOccupations.length; i++){
			if(allOccupations[i]["id"] == id){
				return allOccupations[i]["occupation"];
			}
		}
		
	}else{
		//console.log("All occupations length: else " + allOccupations.length);

		for(var i = 0; i < allOccupations.length; i++){
			if(allOccupations[i]["id"] == id){
				return allOccupations[i]["occupation"];
			}
		}
		
	}
	
}

function getIdFromOccupation(occupationName){
	allOccupations.forEach(function(occupation){
		if(occupation["occupation"] == occupationName)
			return occupation["id"];
	});
}

//This method designed to set both the hidden select field and the visible ineditable one 
function setOccupationWithId(id, txElement, selectElement){
	if(allCountries.length == 0){
		$.get("/visitorsLog/get-occupations", function(data){
													var occupations = JSON.parse(data);
													occupations.forEach(function(occpation){
														if(occpation["id"] == id){
															$(txElement).val(occpation["occupation"]);
															$(selectElement).val(occpation["id"]);
															return;
														}
													});
												});
		
	}else{
		allOccupations.forEach(function(occupation){
			if(occupation["id"] == id){
				$(txElement).val(occupation["occupation"]);
				$(selectElement).val(occupation["occupation"]);
				return;
			}
		});
	}
	
}


function getActivityWithId(id){
	if(allUserActivities.length == 0){
		$.get("/visitorsLog/get-all-activities", function(data){
													//console.log(data);
													allUserActivities = JSON.parse(data);
													//console.log(allUserActivities);
													for(var i = 0; i < allUserActivities.length; i++){
														if(allUserActivities[i]["id"] == id)
															return allUserActivities[i]["activity"];
													}
																										
												});
	}else{
		for(var i = 0; i < allUserActivities.length; i++){
			if(allUserActivities[i]["id"] == id)
				return allUserActivities[i]["activity"];
		}
		
	}
}


function populateActivitiesTable(id){
	//console.log("The user id: " + id);
	$.get("/visitorsLog/get-user-activities?id=" + id, function(data){
													
													//console.log(data);
													
													var allActivities = JSON.parse(data);
													
													//console.log(allActivities);
																										
													var tableBody = $(".activities-container").find("tbody");
													$(tableBody).html("");
													var row;
													
													var type;
													var columnId;
													var changedFrom;
													var changedTo;
													var columnName;
													var tableName;
													
													var count = 1;
													
													activitiesArray = new Array();
													activitiesArray.push(new Array("", "","","","","","","","")); 
													
													//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////I have to make sure every relevant data is pulled from the table before continuing
													
													
													
													allActivities.forEach(function(activity){
																	tableName = ""																	
																	
																	//columnId = activity["columnId"];
																	if(activity["tableName"] == "users_tb"){
																		tableName = "Users";
																		columnId = getUserById(activity["columnId"]);
																		
																		//console.log("get user by id: " + columnId);
																																				
																		if(activity["columnName"] == "marital_status"){
																			columnName = "Marital status";
																			changedFrom = getMaritalStatusWithId(activity["changedFrom"]);
																			changedTo = getMaritalStatusWithId(activity["changedTo"]);
																		}else if(activity["columnName"] == "sex"){
																			columnName = "Sex";
																			changedFrom = getSexFromInitial(activity["changedFrom"]);
																			changedTo = getSexFromInitial(activity["changedTo"]);
																		}else if(activity["columnName"] == "fname"){
																			columnName = "First name";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "mname"){
																			columnName = "Middle name";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "lname"){
																			columnName = "Last name";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "dob"){
																			columnName = "Date of Birth";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "password"){
																			columnName = "Password";
																			changedFrom = "";
																			changedTo = "";
																		}else if(activity["columnName"] == "security_question"){
																			columnName = "Security Question";
																			changedFrom = "";
																			changedTo = "";
																		}else if(activity["columnName"] == "security_answer"){
																			columnName = "Security Answer";
																			changedFrom = "";
																			changedTo = "";
																		}else if(activity["columnName"] == "role"){
																			columnName = "Role";
																			changedFrom = getRoleById(activity["changedFrom"]);
																			changedTo = getRoleById(activity["changedTo"]);
																		}else if(activity["columnName"] == "account_status"){
																			columnName = "Account status";
																			changedFrom = getAccountStatusWithAccountStatusId(activity["changedFrom"]);
																			changedTo = getAccountStatusWithAccountStatusId(activity["changedTo"]);
																		}else if(activity["columnName"] == "picture_uri"){
																			columnName = "Picture";
																			changedFrom = "";//activity["changedFrom"];
																			changedTo = "";//activity["changedTo"];
																		}else{
																			columnName = "";
																			changedFrom = "";
																			changedTo = "";
																		}
																																																					
																																			
																	}else if(activity["tableName"] == "visitors"){
																		tableName = "Visitors";
																		columnId = getVisitorById(activity["columnId"]);
																		
																		//console.log("get visitor by id: " + columnId);
																		
																		if(activity["columnName"] == "marital_status"){
																			columnName = "Marital status";
																			changedFrom = getMaritalStatusWithId(activity["changedFrom"]);
																			changedTo = getMaritalStatusWithId(activity["changedTo"]);
																		}else if(activity["columnName"] == "sex"){
																			columnName = "Sex";
																			changedFrom = getSexFromInitial(activity["changedFrom"]);
																			changedTo = getSexFromInitial(activity["changedTo"]);
																		}else if(activity["columnName"] == "fname"){
																			columnName = "First name";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "mname"){
																			columnName = "Middle name";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "lname"){
																			columnName = "Last name";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "dob"){
																			columnName = "Date of Birth";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "country_id"){
																			columnName = "Country";
																			changedFrom = getCountryWithId(activity["changedFrom"]);
																			changedTo = getCountryWithId(activity["changedTo"]);
																		}else if(activity["columnName"] == "address"){
																			columnName = "Address";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "phone1"){
																			columnName = "Phone";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "email"){
																			columnName = "Email";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "website"){
																			columnName = "Website";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "occupation_id"){
																			columnName = "Occupation";
																			changedFrom = getOccupationWithId(activity["changedFrom"]);
																			changedTo = getOccupationWithId(activity["changedTo"]);
																		}else if(activity["columnName"] == "ministry"){
																			columnName = "Ministry";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "has_passport"){
																			columnName = "Has passport";
																			changedFrom = getInitialYesOrNo(activity["changedFrom"]);
																			changedTo = getInitialYesOrNo(activity["changedTo"]);
																		}else if(activity["columnName"] == "is_partner"){
																			columnName = "Partner";
																			changedFrom = getYesOrNo(activity["changedFrom"]);
																			changedTo = getYesOrNo(activity["changedTo"]);
																		}else if(activity["columnName"] == "partnership_no"){
																			columnName = "Partner No";
																			changedFrom = activity["changedFrom"];
																			changedTo = activity["changedTo"];
																		}else if(activity["columnName"] == "picture_uri"){
																			columnName = "Picture";
																			changedFrom = "";//activity["changedFrom"];
																			changedTo = "";//activity["changedTo"];
																		}else if(activity["columnName"] == "blacklisted"){
																			columnName = "Blacklisted";
																			changedFrom = getYesOrNo(activity["changedFrom"]);
																			changedTo = getYesOrNo(activity["changedTo"]);
																		}else{
																			columnName = "";
																			changedFrom = "";
																			changedTo = "";
																		}
																																				
																	
																	}else if(activity["tableName"] == "visits"){
																		tableName = "Visits";
																		columnId = getVisitorById(activity["columnId"]);
																		columnName = "";
																		changedFrom = "";
																		changedTo = "";
																		
																		row = $('<tr><td>'	 + count + '</td>' + 
																				'<td>' + activity["time"].split(" ")[0] + '</td>' +
																				'<td>' + interpretTime(activity["time"].split(" ")[1]) + '</td>' +
																				'<td>' + type + '</td>' +
																				'<td>' + tableName + '</td>' +
																				'<td>' + columnName + '</td>' +
																				'<td class="class-visitor-' + activity["columnId"] + '">' + columnId + '</td>' +
																				'<td>' + changedFrom + '</td>' +
																				'<td>' + changedTo + '</td>' +																			
																		  '</tr>'); 
																	
																	}else{
																		tableName = "";
																		columnName = "";
																		changedFrom = "";
																		changedTo = "";
																		columnId = "";
																		
																	}
																	
																																		
																	if(getActivityWithId(activity["activityId"]) == undefined){
																		type = "";
																	}else{
																		type = getActivityWithId(activity["activityId"]);
																	}
																	
																	if(tableName == 'Users'){
																		row = $('<tr><td>'	 + count + '</td>' + 
																				'<td>' + activity["time"].split(" ")[0] + '</td>' +
																				'<td>' + interpretTime(activity["time"].split(" ")[1]) + '</td>' +
																				'<td>' + type + '</td>' +
																				'<td>' + tableName + '</td>' +
																				'<td>' + columnName + '</td>' +
																				'<td class="class-user-' + activity["columnId"] + '">' + columnId + '</td>' +
																				'<td>' + changedFrom + '</td>' +
																				'<td>' + changedTo + '</td>' +																			
																		  '</tr>'); 
																	}else if(tableName == 'Visitors'){
																			row = $('<tr><td>'	 + count + '</td>' + 
																					'<td>' + activity["time"].split(" ")[0] + '</td>' +
																					'<td>' + interpretTime(activity["time"].split(" ")[1]) + '</td>' +
																					'<td>' + type + '</td>' +
																					'<td>' + tableName + '</td>' +
																					'<td>' + columnName + '</td>' +
																					'<td class="class-visitor-' + activity["columnId"] + '">' + columnId + '</td>' +
																					'<td>' + changedFrom + '</td>' +
																					'<td>' + changedTo + '</td>' +																			
																			  '</tr>'); 
																	}else if(tableName == 'Visits'){
																		row = $('<tr><td>'	 + count + '</td>' + 
																				'<td>' + activity["time"].split(" ")[0] + '</td>' +
																				'<td>' + interpretTime(activity["time"].split(" ")[1]) + '</td>' +
																				'<td>' + type + '</td>' +
																				'<td>' + tableName + '</td>' +
																				'<td>' + columnName + '</td>' +
																				'<td class="class-visitor-' + activity["columnId"] + '">' + columnId + '</td>' +
																				'<td>' + changedFrom + '</td>' +
																				'<td>' + changedTo + '</td>' +																			
																		  '</tr>'); 
																	}else{
																		row = $('<tr><td>'	 + count + '</td>' + 
																				'<td>' + activity["time"].split(" ")[0] + '</td>' +
																				'<td>' + interpretTime(activity["time"].split(" ")[1]) + '</td>' +
																				'<td>' + type + '</td>' +
																				'<td>' + tableName + '</td>' +
																				'<td>' + columnName + '</td>' +
																				'<td>' + columnId + '</td>' +
																				'<td>' + changedFrom + '</td>' +
																				'<td>' + changedTo + '</td>' +																			
																		  '</tr>'); 
																	}
																	
																	
																	activitiesArray.push(new Array(count, activity["time"].split(" ")[0], activity["time"].split(" ")[1], 
																							getActivityWithId(activity["activityId"]), tableName, columnName, columnId,
																							changedFrom, changedTo));
																	
																	$(tableBody).append(row);																	
																		count++;
																});
													
													//console.log(activitiesArray);
											  });

}

function getAllActivities(){
	$.get("/visitorsLog/get-all-activities", function(data){
												//console.log(data);
												allUserActivities = JSON.parse(data);
												//console.log(allUserActivities);
												
											}
	);
}

function getAllUserActivities(target){
	if(allUsers.length == 0){
		$.get("/visitorsLog/user-actions?all=all", function(data){
												//console.log(data);
											
												allUsers = JSON.parse(data); 		
												$.get("/visitorsLog/get-all-user-activities", function(data2){
													console.log("All user activities: " + data2);
													allActivities = JSON.parse(data2);
													var table = $(target).find("tbody");
													
													
														for(var i = 0; i < allActivities.length; i++){
															if(allActivities[i]["userId"] != $("#id-location").val() && allActivities[i]["userId"] != 4){     //display all users except the current user
																$(table).append('<tr onclick="goToUser(' + allActivities[i]["userId"] + ')" class="table-row-item">' + 
																		'<td ><img class="img-circle" style="width: 30px;" src="' + getPicWithId(allActivities[i]["userId"]) + '" /></td>' +
																		'<td>' + getNameWithId(allActivities[i]["userId"]) + '</td>' +
																		'<td>' + getRoleByUserId(allActivities[i]["userId"]) + '</td>' +													
																		'<td>' + interpretDate(allActivities[i]["time"]) + '</td>' +
																		+ '</tr>');
															}
															
														}
											
															
												});
										
											
										}
								);
		
		
	}else{
		$.get("/visitorsLog/get-all-user-activities", function(data2){
			console.log(data2);
			allActivities = JSON.parse(data2);
			console.log("All user activities: " + data2);
			var table = $(target).find("tbody");
			
			
				for(var i = 0; i < allActivities.length; i++){
					$(table).append('<tr onclick="goToUser(' + allActivities[i]["userId"] + ')" class="table-row-item">' + 
							'<td ><img class="img-circle" style="width: 30px;" src="' + getPicWithId(allActivities[i]["userId"]) + '" /></td>' + 
							'<td>' + getNameWithId(allActivities[i]["userId"]) + '</td>' + 
							'<td>' + getActivityWithId(allActivities[i]["activityId"]) + '</td>' +													
							'<td>' + interpretDate(allActivities[i]["time"]) + '</td>' +
							+ '</tr>');
				}
				
			
			
			
					
		});
	}
	
}

function getPicWithId(id){
	for(var i = 0; i < allUsers.length; i++){
		if(allUsers[i]["id"] == id)
			return allUsers[i]["picLocation"];
	}
}

function getNameWithId(id){
	for(var i = 0; i < allUsers.length; i++){
		if(allUsers[i]["id"] == id)
			return allUsers[i]["firstName"] + " " + allUsers[i]["middleName"] + " " + allUsers[i]["lastName"];
	}
}

function getAllUsers(){
	$.get("/visitorsLog/user-actions?all=all", function(data){
													//console.log(data);
													allUsers = JSON.parse(data);		
												}
	);
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function getTodaysDate(){
	var todaysDate = new Date();
	var year = todaysDate.getFullYear();
	var month = todaysDate.getMonth() + 1;//months are also indexed from zero... dumb
	var day = todaysDate.getDate();
	return year + "-" + ((month < 10) ? "0" + month : month) + "-" + ((day < 10) ? "0" + day : day);
}

function setCurrentUserRole(id){
	for(var i = 0; i < allRoles.length; i++){
		if(allRoles[i]["id"] == id){
			$(this).html(allRoles[i]["role"]);
		}
	}
}

function getCountryWithId(id){
	for(var i = 0; i < allCountries.length; i++){
		if(allCountries[i]["id"] == id){
			return allCountries[i]["name"];
		}
	}
}

function getMaritalStatusWithId(id){
	for(var i = 0; i < allMaritalStatus.length; i++){
		if(allMaritalStatus[i]["id"] == id){
			return allMaritalStatus[i]["maritalStatus"];
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////NEW ONES ADDED////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getAllDinings(theElement){
	if(allCountries.length == 0){
		$.get("/visitorsLog/get-dinings", function(data){
												//console.log(data);
												var dinings = JSON.parse(data);
												allDinings = new Array();
												
												var aDining;
												dinings.forEach(function(dining){ 
													aDining = new Dining();
													aDining.id = dining["id"];
													aDining.dining = dining["dining"];
													
													allDinings.push(aDining);
												});
												
												fillDinings(theElement);
												
											}
		);
	}else{
		fillDinings(theElement);
	}
}

function fillDinings(theElement){
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Select Dining--</option>');
	
	var option;
	allDinings.forEach(function(dining){ 
		option = $('<option value="' + dining["id"] + '" >' + dining["dining"] + '</option>')
		$(theElement).append(option);		
	});
}


function getDiningWithId(id){
	if(allDinings.length != 0){
		if(id <= 0)
			return "";
		else{
			for(var i = 0; i < allDinings.length; i++){
				if(allDinings[i]["id"] == id)
					return allDinings[i]["dining"];
			}
		}
	}else{
		$.get("/visitorsLog/get-dinings", function(data){
			//console.log(data);
			var dinings = JSON.parse(data);
			allDinings = new Array();
			
			var aDining;
			dinings.forEach(function(dining){ 
				aDining = new Dining();
				aDining.id = dining["id"];
				aDining.dining = dining["dining"];
				
				allDinings.push(aDining);
			});
			
			if(id <= 0)
				return "";
			else{
				for(var i = 0; i < allDinings.length; i++){
					if(allDinings[i]["id"] == id)
						return allDinings[i]["dining"];
				}
			}
			
		}
);
	}
}


function getAllReferenceNos(theElement){
	if(allReferenceNos.length == 0){
		$.get("/visitorsLog/get-reference-no", function(data){
												//console.log("All references:" +  data);
												var referenceNos = JSON.parse(data);
												allReferenceNos = new Array();
												
												var aReferenceNo;
												referenceNos.forEach(function(referenceNo){ 
													aReferenceNo = new ReferenceNo();
													aReferenceNo.referenceNo = referenceNo["referenceNo"];
													aReferenceNo.referenceName = referenceNo["referenceName"];
													
													allReferenceNos.push(aReferenceNo);
												});
												
												fillReferenceNos(theElement);
												
											}
		);
	}else{
		fillReferenceNos(theElement);
	}
}

function fillReferenceNos(theElement){
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Reference no--</option>');
	
	var option;
	allReferenceNos.forEach(function(referenceNo){ 
		option = $('<option value="' + referenceNo["referenceNo"] + '" >' + referenceNo["referenceNo"] + '</option>') //Peculiar case where the value and the display are botyh like the id
		$(theElement).append(option);		
	});
}

function getAllModesOfVisit(theElement){
	if(allModesOfVisit.length == 0){
		$.get("/visitorsLog/get-modes-of-visit", function(data){
												//console.log("All modes of visits:" +  data);
												var modesOfVisit = JSON.parse(data);
												allModesOfVisit = new Array();
												
												var aModeOfVisit;
												modesOfVisit.forEach(function(modeOfVisit){ 
													aModeOfVisit = new ModeOfVisit();
													aModeOfVisit.id = modeOfVisit["id"];
													aModeOfVisit.modeOfVisit = modeOfVisit["modeOfVisit"];
													
													allModesOfVisit.push(aModeOfVisit);
												});
												
												fillModesOfVisit(theElement);
												
											}
		);
	}else{
		fillModesOfVisit(theElement);
	}
}

function fillModesOfVisit(theElement){
	$(theElement).html("");
	$(theElement).append('<option value="0" selected>--Mode of visit--</option>');
	
	var option;
	allModesOfVisit.forEach(function(modeOfVisit){ 
		option = $('<option value="' + modeOfVisit["id"] + '" >' + modeOfVisit["modeOfVisit"] + '</option>');
		$(theElement).append(option);		
	});
}

function getModeOfVisitWithId(id){
	if(allModesOfVisit.length != 0){
		if(id <= 0)
			return "";
		else{
			for(var i = 0; i < allModesOfVisit.length; i++){
				if(allModesOfVisit[i]["id"] == id)
					return allModesOfVisit[i]["modeOfVisit"];
			}
		}
	}else{
		$.get("/visitorsLog/get-modes-of-visit", function(data){
			//console.log(data);
			var modesOfVisit = JSON.parse(data);
			allModesOfVisit = new Array();
			
			var aModeOfVisit;
			modesOfVisit.forEach(function(modeOfvisit){ 
				aModeOfVisit = new ModeOfVisit();
				aModeOfVisit.id = modeOfvisit["id"];
				aModeOfVisit.modeOfVisit = modeOfvisit["modeOfVisit"];
				
				allModesOfVisit.push(aModeOfVisit);
			});
			
			if(id <= 0)
				return "";
			else{
				for(var i = 0; i < allModesOfVisit.length; i++){
					if(allModesOfVisit[i]["id"] == id)
						return allModesOfVisit[i]["modeOfvisit"];
				}
			}
			
		}
);
	}
}




////////////////////////////////////////////////////////////////////////////////////NEW ONES ADDED ENDS HERE////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function interpretDate(rawDateTime){
	  var lastLoginDay;
	  var lastLoginTime;
	  	  
	  if(rawDateTime != "" && rawDateTime != null){
		  var rawDateTimeArray = rawDateTime.split(" ");
		  //console.log("date is: " + rawDateTimeArray[0]);
		  //console.log("time is: " + rawDateTimeArray[1]);
		  var rawDateArray = rawDateTimeArray[0].split("-");
		  var rawTimeArray = rawDateTimeArray[1].split(":");
		  
		  var todaysDate = getTodaysDate();
		  //console.log("Today's Date: " + todaysDate);
		  //console.log("current day: " + currentDay);
		  //console.log("current month: " + currentMonth);
		  
		  if(rawDateTimeArray[0] == todaysDate){
			  lastLoginDay = "Today "; 
		  }else{
			  var monthDifference = (currentMonth - rawDateArray[1] >= 0) ? currentMonth - rawDateArray[1] : currentMonth - rawDateArray[1] + 12;
			  if(monthDifference == 0){
				  if(rawDateArray[0] == currentYear && rawDateArray[1] == currentMonth && rawDateArray[2] == (currentDay - 1)){
					  lastLoginDay = "Yesterday ";
				  }else if(currentDay - rawDateArray[2] > 1){
					  lastLoginDay = (currentDay - rawDateArray[2]) + " days ago ";
				  }
			  }else if(monthDifference == 1){
				  var daysDifference;
				  if(currentMonth == 1){
					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(12);
					  if(daysDifference == 1)
						  lastLoginDay = "Yesterday ";
					  else
						  lastLoginDay = daysDifference + " days ago ";
				  }else{
					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(currentMonth - 1);
					  if(daysDifference == 1)
						  lastLoginDay = "Yesterday ";
					  else
						  lastLoginDay = daysDifference + " days ago ";
				  }
			  }else if(monthDifference > 1){
				  var monthsAgo = monthDifference - 1;
				  if(currentMonth == 1){
					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(12);
					  lastLoginDay = monthsAgo + ((monthsAgo == 1) ? " month, " : " months, ") + daysDifference + ((daysDifference == 1) ? " day ago " : " days ago ");
				  }else{
					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(currentMonth - 1);
					  lastLoginDay = monthsAgo + ((monthsAgo == 1) ? " month, " : " months, ") + daysDifference + ((daysDifference == 1) ? " day ago " : " days ago ");
				  }
			  }
			  
		  }
		  
		  lastLoginTime = rawTimeArray[0] + ":" + rawTimeArray[1];
		  
		  return lastLoginDay + lastLoginTime;
	  }else 
		  return "";
	
}

function interpretTime(rawTime){
	  	  	  
	  if(rawTime != ("" || null)){
		  var rawTimeArray = rawTime.split(":");
		  		  
		  return rawTimeArray[0] + ":" + rawTimeArray[1];
	  }else 
		  return "";
	
}

function getTotalMonthDays(month){
	switch(month){
	case 1: return 31; break;
	case 2: if(currentYear % 4 == 0){ return 29 }else{return 28}; break;
	case 3: return 31; break;
	case 4: return 30; break;
	case 5: return 31; break;
	case 6: return 30; break;
	case 7: return 31; break;
	case 8: return 31; break;
	case 9: return 30; break;
	case 10: return 31; break;
	case 11: return 30; break;
	case 12: return 31; 
	}
}

function getUserById(id){
	if(allUsers.length == 0){
		
	}else{
		for(var i = 0; i < allUsers.length; i++){
			if(allUsers[i]["id"] == id)
				return allUsers[i]["firstName"] + ((allUsers[i]["middleName"] == "") ? "" : " " + allUsers[i]["middleName"]) + " " + allUsers[i]["lastName"];
		}
	}
	
}

function getVisitorById(id){
	$.get("/visitorsLog/get-visitor?id=" + id, function(data){
													//return data;
													$(".class-visitor-" + id).text(data);
												});
	
}

function tableRowItemClick(ev){
	
	var id = $(ev.target).closest("tr").attr("id");	
	window.location = "/visitorsLog/visitor-details?id=" + id;
	
}

function goToUser(id){
	window.location = "/visitorsLog/user-details?id=" + id;
}

function getSexFromInitial(initial){
	switch(initial){
	case "M": return "Male"; break;
	case "F": return "Female"; break;
	case "O": return "Other";
	
	}
}

function getInitialFromSex(sex){
	switch(sex){
	case "Male": return "M"; break;
	case "Female": return "F"; break;
	case "Other": return "O";
	
	}
}

function getInitialYesOrNo(yesOrNo){
	switch(yesOrNo){
	case "Yes": return "Y"; break;
	case "No": return "N"; 
	
	}
}

function getYesOrNo(yesOrNoInitial){
	switch(yesOrNoInitial){
	case "Y": return "Yes"; break;
	case "N": return "No"; 
	
	}
}

function getIsPartnerWithInitial(initial){
	if(initial == "Y")
		return "Yes";
	else
		return "No";
}

function getIsBlacklistedWithInitial(initial){
	if(initial == "Y")
		return "Yes";
	else
		return "No";
}

function getUserWithId(id, element){
	$.get("/visitorsLog/get-user?id=" + id, function(data){
												console.log(data);
												$(element).val(data);
											});
}

function getLastLogin(userId){
	$.get("/visitorsLog/get-lastlogin?id=" + userId, function(data){
													console.log(data);
													//alert(data);
												});
}

function getCheckedRadio(radios){
	
	for(var i = 0; i < radios.length; i++){
		if($(radios[i]).is(":checked"))
			return $(radios[i]).val();
	}
		
	return null;
}

function showSubmitChangesButton(){
	if($("#save-button-container").css("display", "none"))
		$("#save-button-container").css("display", "block");
}

function prepareCheckboxes(){
	$("#have-passport").is(":checked") ? $("#have-passport").val("Y") : $("#have-passport").val("N"); 
	$("#have-med").is(":checked") ? $("#have-med").val("Y") : $("#have-med").val("N");
	$("#is-partner").is(":checked") ? $("#is-partner").val("Y") : $("#is-partner").val("N");
	$("#taking-meds").is(":checked") ? $("#taking-meds").val("Y") : $("#taking-meds").val("N");
	$("#visited-before").is(":checked") ? $("#visited-before").val("Y") : $("#visited-before").val("N");
}

//Here we submit the user details with ajax
submitRegisterUser = function() {
	if($(".modal").hasClass("in"))
		$(".modal .close").click();
	$("input[name=picLocation]").val($('#visitor-pic').attr("src"));
	//$("form[name=user-register]")[0].submit();
		
	$.post("/visitorsLog/submit-user", $("form[name=user-register]").serialize(), function(data){
																					//alert(data);
																					if(data == "success"){
																						displaySuccessMessage("User registered successfully!");
																					}else if(data == "failure"){
																						displayErrorMessage("There was a problem registering user :(");
																					}else{
																						displayErrorMessage(data);
																					}
																					
																				});
	
}

//Here we submit the visitor details with ajax
submitRegisterVisitor = function() {
	dismissTheModal();
	$("input[name=picLocation]").val($('#visitor-pic').attr("src"));
	//$("form[name=user-register]")[0].submit();
	prepareCheckboxes();
	
	console.log("The visitor we are saving: " + $("form[name=visitor-register]").serialize());
	
	$.post("/visitorsLog/submit-visitor", $("form[name=visitor-register]").serialize(), function(data){
																					if(data == "success"){
																						displaySuccessMessage("Visitor registered successfully!");
																					}else{
																						displayErrorMessage("There was a problem registering the visitor :(");
																					}
																					
																				});
	
}

function dismissTheModal(){
	if($(".modal").hasClass("in"))
		$(".modal .close").click();
}

//=================Logic to update certain fields based on user choices=================================================================================================
//======================================================================================================================================================================

$("#is-partner").on("click", function(){
								if(this.checked){
									$("#partner-number-div").css("visibility", "visible");
								}else{
									$("#partner-number").val("");
									$("#partner-number-div").css("visibility", "hidden");
								}
							});

$("#mode-of-visit").on("change", function(){
									hideAllModeOfVisitRelated();
									if($("#mode-of-visit").val() == "1"){
										$("#ref-no-div").css("display", "block");
									}else if($("#mode-of-visit").val() == "2"){
										$("#screener-div").css("display", "block");
									}else if($("#mode-of-visit").val() == "3"){
										$("#in-care-of-div").css("display", "block");
									}
								});


	

//=================Logic to update certain fields based on user choices ENDS HERE=================================================================================================
//======================================================================================================================================================================

function hideAllModeOfVisitRelated(){
	if($("#ref-no-div").css("display") == "block"){
		$("#ref-no-div").css("display", "none");
		$("#ref-no").val("0")
	}
	
	if($("#screener-div").css("display") == "block"){
		$("#screener-div").css("display", "none");
		$("#screener").val("");
	}
	
	if($("#in-care-of-div").css("display") == "block"){
		$("#in-care-of-div").css("display", "none");
		$("#in-care-of").val("");
	}
}


