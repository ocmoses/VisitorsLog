/**
 * 
 */

//todaysDate = new Date();
//currentYear = todaysDate.getFullYear();
//currentMonth= todaysDate.getMonth() + 1;
//currentDay = todaysDate.getDate();
//
//currentUserRole = "";
//
//function Role(){
//	var id;
//	var role;
//}
//
//
//function AccountStatus(){
//	var id;
//	var status;
//}
//
//function MaritalStatus(){
//	var id;
//	var maritalStatus;
//}
//
//function Occupation(){
//	var id;
//	var occupation;
//}
//
//function Country(){
//	var id;
//	var name;
//}
//
//function UserActivity(){
//	var id;
//	var activity;
//}
//
//allRoles = new Array();
//allAccountStatus = new Array();
//allCountries = new Array();
//allOccupations = new Array();
//allMaritalStatus = new Array();
//allUserActivities = new Array();
//allUsers = new Array();
//
//DEFAULT_PIC_SOURCE = "/visitorsLog/images/profile.png";
//today = new Date().get;
//
//MAX_QUERY_TOTAL = 20;
//
//visitsArray = new Array();
//activitiesArray = new Array();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////These are the global
////variables for getting INITIAL values of the detail pages
////details for user and details for visitors
//
//var initialFirstName;
//var initialMiddleName;
//var initialLastName;
//
//var initialDob;
//var initialSex;
//var initialMaritalStatus;
//var initialPicLocation;
//
//var initialRole;
//var initialAccountStatus;
//
//var initialCountry;
//var initialPhone1;
//var initialEmail;
//var initialWebsite;
//var initialOccupation;
//var initialMinistry;
//var initialIsPartner;
//var initialBlacklisted;
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////These are the global
////variables for getting FINAL values of the detail pages
////details for user and details for visitors
//
//var finalFirstName;
//var finalMiddleName;
//var finalLastName;
//
//var finalDob;
//var finalSex;
//var finalMaritalStatus;
//var finalPicLocation;
//
//var finalRole;
//var finalAccountStatus;
//var LastLogin
//
//var finalCountry;
//var finalPhone1;
//var finalEmail;
//var finalWebsite;
//var finalOccupation;
//var finalMinistry;
//var finalIsPartner;
//var finalBlacklisted;
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////// THE ARRAY THAT HOLDS THE CHANGED VALUES ///////////////////////////////////////////////////////////
//
//var changedValuesArray = new Array();
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function(){
	
	var currentLocation = window.location.href;
	var page;
	if(currentLocation.indexOf("?") != -1){
		page = currentLocation.substring(currentLocation.lastIndexOf("/") + 1, currentLocation.indexOf("?"));
	}else{
		page = currentLocation.substring(currentLocation.lastIndexOf("/") + 1);
	}
	
	//console.log(page);
	$("li[id='" + page + "']").addClass("active");	
	$("li[id='" + page + "']").css("color", "white");
	
	if(page == "login"){
//		$.get("/visitorsLog/is-logged-in", function(data){
//	  		if(data == "false")
//	  			window.location = "/visitorsLog/login";
//	  		else{
//	  			$.get("footer", function(data){$("body").append(data);});
//	  		}
//	    });
		
	}else if(page == "change-password"){		
	}else if(page == "choose-password"){
	}else{
		$.get("footer", function(data){$("body").append(data);});
	}
		
	
	if(page != "login" && page != "choose-password" && page != "change-password"){
		var userId = $("#user-id-value").val();
		$.get("/visitorsLog/get-role?id=" + userId, function(data){
														  //alert(data);
														  var dataArray = data.split(":::");
														  currentUserRole = dataArray[0];	
														  $("#display-role").text(" (" + currentUserRole + ")");
														  
														  $("aside").html(dataArray[1]);
														  
														  $("li[id='" + page + "']").addClass("active");	
														  $("li[id='" + page + "']").css("color", "white");
														 														  
													   });
		
	}
	
//	if(page == "search-visitors"){
//		
//		getAllUsers();
//		getAllMaritalStatus();
//		
//		$("#start-search").on("click", function(){buildFilterQuery();});
//		$("#clear-search").on("click", function(){location.reload();});
//		
//		getAllCountries($("#filter-country-select"));
//		getAllOccupations($("#filter-occupation-select"))
//		$.get("/visitorsLog/visitor-actions", function(data){
//												setTimeout(displayVisitors($("#all-visitors"), data), 1000);
//												preparePagination("allVisitors", MAX_QUERY_TOTAL, "pagination");
//											  });
//	}
	
//	setInterval(function(){
//		if(page == "manage-visitors" && $("#srch-term").is(":focus")){
//			displayVisitorMatches($("#srch-term").val(), $("#manage-visitor-div"));
//			preparePagination("searchVisitors", MAX_QUERY_TOTAL, "pagination", $("#srch-term").val());
//					
//		}else if(page == "manage-users" && $("#srch-term").is(":focus")){
//			displayUserMatches($("#srch-term").val(), $("#manage-user-div"))
//			preparePagination("searchUsers", MAX_QUERY_TOTAL, "pagination");
//		}
//	}, 3000);	
	
//	setInterval(function(){
//		if(page == "search-visitors" && $("#search-term").is(":focus")){
//				displayVisitorMatches($("#search-term").val(), $("#all-visitors"));
//				preparePagination("searchVisitors", MAX_QUERY_TOTAL, "pagination", $("#srch-term").val());	
//		}
//	}, 3000);		
		
	
	
//	setInterval(function(){
//					if(page == "manage-visitors" && ($("#firstName").is(":focus") || $("#middleName").is(":focus") || $("#lastName").is(":focus"))){
//						getSimilarRecords($("#firstName").val(), $("#middleName").val(), $("#lastName").val());
//						preparePagination("similarVisitors", MAX_QUERY_TOTAL, "pagination");
//					}
//				}, 3000);	
	
	
	
//	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//		  var target = $(e.target).attr("href") 
//		  $.get("/visitorsLog/" + target.slice(1), function(data){
//													  //alert(data);													  
//													  if(target == "#user-actions"){
//														  $("#visitor-pic-div").css("visibility", "hidden");
//														  displayUsers(target, data);
//														  preparePagination("allUsers", MAX_QUERY_TOTAL, "pagination");
//														  
//													  }else if(target == "#add-new-user"){
//														  $("#visitor-pic-div").css("visibility", "visible");
//														  
//													  }else if(target == "#visitor-actions"){
//														  $("#visitor-pic-div").css("visibility", "hidden");
//														  $(".sidebar").css("visibility", "hidden");
//														  
//														  //console.log(data);
//														  displayVisitors(target, data);
//														  preparePagination("allVisitors", MAX_QUERY_TOTAL, "pagination");
//														  
//														  //$("#visitor-actions-all").css("display", "none");  ///This is only for development now..............
//														  
//													  }else if( target == "#add-new-visitor"){
//														  $("#visitor-pic-div").css("visibility", "visible");
//														  $(".sidebar").css("visibility", "visible");
//													  }
//												  });
//		});
	
	//hide warning once user starts interaction
//	document.onclick = function(){
//		if($(".alert-error").css("display") != "none"){
//			$(".alert-error").css("display", "none");
////			if(page == "manage-users"){
////				location.reload();
////			}	
////			if(page == "manage-visitors"){
////				location.reload();
////			}	
//		}
//			
//		
//		if($(".alert-submited").css("display") != "none"){
//			$(".alert-submited").css("display", "none");
//			
//			if(page == "manage-users"){
//				try{
//					$("form[name=user-register]").trigger("reset");
//					$('#visitor-pic').attr('src', DEFAULT_PIC_SOURCE);
//					location.reload(); 													//Should have done this all along=========================================
//				}catch(ex){
//					console.log("clicked but nothing happened on manage users tab")
//				}
//			}else if(page == "manage-visitors"){
//				try{
//					$("form[name=visitor-register]").trigger("reset");
//					if(page == "manage-visitors"){
//						location.reload();
//					}
//				}catch(ex){
//					console.log("clicked but nothing happened on manage visitors tab");				
//				}
//				$('#visitor-pic').attr('src', DEFAULT_PIC_SOURCE);
//			}
//			
//			
//		}
//			
//	}
	
//	$("#logout").click(function(){
//							displayModal("One Sec!", "Do you really want to logout? Any unsaved job will be deleted. Are you sure you want to continue?", "No, cancel", "Yes!", tryLogout);
//					  });
	
//	$("#login-username").on("focus", hideErrorMessage);
//	$("#login-password").on("focus", hideErrorMessage);
//	$("#login-submit").on("click", function(e){e.preventDefault(e); tryLogin()});
	
//	$(".filter-p").click(function(e){
//		var next = $(e.target).next();
//		if(next.css("display") == "none"){
//			next.css("display", "inline-block");
//			next.css("width", "100%");
//		}else{
//			next.css("display", "none");
//			
//		}
//		
//	});
	
//	$(".help-p").click(function(e){
//		var next = $(e.target).next();
//		if(next.css("display") == "none"){
//			next.css("display", "inline-block");
//			next.css("width", "100%");
//		}else{
//			next.css("display", "none");
//			
//		}
//		
//	});
	
		
	
//	//Moving on to manage users	
//	$("form[name=user-register]").submit(function(e){
//											e.preventDefault(e); 
//											console.log($(this).serialize());
//											console.log($("#visitor-pic").attr("src"));
//											
//											validateUserRegister();					
//																						
//											
//										});
	
	
//	//Moving on to manage visitors
//	$("form[name=visitor-register]").submit(function(e){
//												e.preventDefault(e);												
//												prepareCheckboxes();
//												console.log($(this).serialize());
//																								
//												validateVisitorRegisteration();
//												
//												//$("form[name=visitor-register]")[0].submit();
//											});
	
//	//Moving on to manage visitors
//	$("form[name=add-visit]").submit(function(e){
//												e.preventDefault(e);												
//												
//												console.log($(this).serialize());
//																								
//												validateAddVisit();
//												
//												//$("form[name=visitor-register]")[0].submit();
//											});
	
//	//Moving on to choose password form
//	$("form[name=choose-password-form]").submit(function(e){
//												e.preventDefault(e);												
//												
//												console.log($(this).serialize());
//																								
//												validateChoosePassword();
//												
//												//$("form[name=visitor-register]")[0].submit();
//											});
//	
//	//Moving on to change password form
//	$("form[name=change-password-form]").submit(function(e){
//												e.preventDefault(e);												
//												
//												console.log($(this).serialize());
//																								
//												validateChangePassword();
//												
//												//$("form[name=visitor-register]")[0].submit();
//											});
	
//	//Moving on to change password (settings) form
//	$("form[name=settings-change-password]").submit(function(e){
//												e.preventDefault(e);												
//												
//												console.log($(this).serialize());
//																								
//												validateSettingsChangePassword();
//												
//												//$("form[name=visitor-register]")[0].submit();
//											});
//	
//	
//	//Moving on to change password (settings) form
//	$("form[name=settings-change-security-question]").submit(function(e){
//												e.preventDefault(e);												
//												
//												console.log($(this).serialize());
//																								
//												validateSettingsChangeSecurityQuestion();
//												
//												//$("form[name=visitor-register]")[0].submit();
//											});
	
	
	
	//=============================================================================================================================================================================
	//===========================================These operations fetch select options from the database before hand===========================================================
	//=============================================================================================================================================================================
	
//	startImageSlide();  //Anywhere the slide appears, start animation...............................................
	
//	if(page == "dashboard"){
//		getAllUsers();
//		getAllRoles();
//		getAllCountries();
//		getAllAccountStatus();
//		getAllMaritalStatus();
//		getAllOccupations(null);
//		
//		getAllActivities();
//		getAllUserActivities($(".notification-container")); //notification container is actually the container holding all the other users
//		
//		populateActivitiesTable($("#id-location").val());
//	}
	
	
//	if(page == ("manage-visitors")){
//		getAllMaritalStatus($("#marital-status"));
//		getAllCountries($("#country"));		
//		getAllOccupations($("#occupation"))
//		$(".sidebar").css("visibility", "hidden");
//		
//		$.get("/visitorsLog/visitor-actions", function(data){			  
//												$("#visitor-pic-div").css("visibility", "hidden");
//												displayVisitors($("#visitor-actions"), data);
//												preparePagination("allVisitors", MAX_QUERY_TOTAL, "pagination", $("#srch-term").val());
//										  }
//		);
//		
//		$("#group-action").on("change", function(){ 
//			var checked = $("#manage-visitor-table").find($("input[type=checkbox]:checked"));
//			if(checked.length == 0){
//				
//				displayDialogModal("OK oh...", "I hear you. But no visitor was checked. Seriously?...", "OK");												
//				
//			}else{
//				 
//				var selectedIdsArray = new Array();
//				var selectedVisitorsArray = new Array();
//				
//				for(var i = 0; i < checked.length; i++){
//					//console.log("The checked: " + $(checked[i]).attr("id"));
//					selectedIdsArray.push($(checked[i]).attr("id").split("-")[1]);
//					selectedVisitorsArray.push(" " + $("#name-" + $(checked[i]).attr("id").split("-")[1]).text());
//				}
//										
//				 
//				switch($(this).val()){
//				
////					case "Report": displayDialogModal("One moment", "Are you sure you want to suspend the following user(s): " + selectedVisitorsArray + 
////						"?", "OK", "Yes, sure", viewVisitorReport, selectedIdsArray); break;
//					
//					case "Report": displayDialogModal("One moment", "Are you sure you want to generate report(s) for the following visitor(s): " + selectedVisitorsArray + 
//							"?", "OK"); break;
//					case "Unblacklist": displayModal("One moment", "Are you sure you want to remove the following visitor(s) from the blacklist: " + selectedVisitorsArray + "?", 
//							"No, cancel", "Yes, sure", removeVisitorsFromBlacklist, selectedIdsArray); break;
//					case "Blacklist": displayModal("One moment", "Are you sure you want to blacklist the following visitor(s): " + selectedVisitorsArray + "?", 
//							"No, cancel", "Yes, sure", blacklistVisitors, selectedIdsArray); break;
//					case "Remove": displayModal("Please confirm", "Removing will delete the following visitor(s) and all their records completely: " + selectedVisitorsArray + 
//							". Are you sure you wish to continue?", "No, cancel", "Yes, continue", deleteVisitors, selectedIdsArray); 
//				}
//			}
//			
//		});
//		
//		$("#visitor-pic-div").hover(function(){
//			$("#choose-pic").css("visibility", "visible"); 
//		}, 
//		function(){
//			$("#choose-pic").css("visibility", "hidden");
//		});
//				
//	}
	
//	if(page == "visitor-details"){
//		
//		getAllUsers();
//		getAllCountries($("#visitor-country-select"));
//		getAllOccupations($("#visitor-occupation-select"));
//		getAllMaritalStatus($("#visitor-marital-status-select"));
//		
//		$("#visitor-pic").attr("src", $("#pic-location").val());		
//		$("#visitor-sex").val(getSexFromInitial($("#sex-location").val()));
//		setMaritalStatusWithId($("#marital-status-location").val(), $("#visitor-marital-status"), $("#visitor-marital-status-select"));
//		setCountryWithId($("#country-location").val(), $("#visitor-country"), $("#visitor-country-select"));
//		setOccupationWithId($("#occupation-location").val(), $("#visitor-occupation"), $("#visitor-occupation-select"));
//		$("#visitor-partner").val(getIsPartnerWithInitial($("#partner-location").val()));
//		$("#visitor-blacklist").val(getIsBlacklistedWithInitial($("#blacklisted-location").val()));
//		getUserWithId($("#createdby-location").val(), $("#visitor-registered-by"));
//		
//		getInitialValues(page);
//			
//		populateVisitsTable($("#id-location").val());
//		
//		//the generate button
//		$("#generate-visitor-report").click(function(){
//			
//			getFinalValues("visitor-details");
//			getFinalValues("visitor-details-readonly");
//			console.log("User who recorded this: " + getUserById($("#hidden-user-id").val()));
//			
//			
//			
//			$.post("/visitorsLog/generate-visitor-report", {"finalFirstName" : finalFirstName, "finalMiddleName" : finalMiddleName, "finalLastName" : finalLastName, 
//															"finalDob" : finalDob, "finalSex" : finalSex, "finalMaritalStatus" : finalMaritalStatus, "finalCountry" : finalCountry, 
//															"finalPhone1" : finalPhone1, "finalEmail" : finalEmail, "finalWebsite" : finalWebsite, "finalOccupation" : finalOccupation, 
//															"finalMinistry" : finalMinistry, "finalIsPartner" : finalIsPartner, "finalBlacklisted" : finalBlacklisted, 
//															"finalLastVisit" : finalLastVisit, "finalRegisteredBy" : finalRegisteredBy, "finalRegisterDate" : finalRegisterDate,
//															"finalPicLocation": finalPicLocation, "visitsArray[]" : visitsArray, "currentUser" : getUserById($("#hidden-user-id").val())}, 
//															
//															function(data){
//																//alert(data);																
//																//window.location = "file://" + data;
//																var newWindow = window.open("visitor-report?file-location=" + data);
//																//alert(data);
//																
//
//															}
//			);
//			
//			
//											}
//		);	
//		
//		$("#visitor-pic-div").hover(function(){
//			$("#choose-pic").css("visibility", "visible"); 
//		}, 
//		function(){
//			$("#choose-pic").css("visibility", "hidden");
//		});
//		
//	}
	
	if(page == "visitor-report"){
		var picLocation = window.location.href.split("?")[1].split("=")[1];
//		$("body").append('<div><object data="' + data + '" type="application/pdf" width="300" height="200">' +
//		'alt : <a href="test.pdf">test.pdf</a></object></div>');
		console.log(page);
	}
	
	
//	if(page == ("visitor-details-readonly")){
//		getAllUsers();
//		getAllCountries($("#visitor-country-select"));
//		getAllOccupations($("#visitor-occupation-select"));
//		getAllMaritalStatus($("#visitor-marital-status-select"));
//		
//		$("#visitor-pic").attr("src", $("#pic-location").val());		
//		$("#visitor-sex").val(getSexFromInitial($("#sex-location").val()));
//		setMaritalStatusWithId($("#marital-status-location").val(), $("#visitor-marital-status"), $("#visitor-marital-status-select"));
//		setCountryWithId($("#country-location").val(), $("#visitor-country"), $("#visitor-country-select"));
//		setOccupationWithId($("#occupation-location").val(), $("#visitor-occupation"), $("#visitor-occupation-select"));
//		$("#visitor-partner").val(getIsPartnerWithInitial($("#partner-location").val()));
//		$("#visitor-blacklist").val(getIsBlacklistedWithInitial($("#blacklisted-location").val()));
//		getUserWithId($("#createdby-location").val(), $("#visitor-registered-by"));
//		
//		getInitialValues(page);
//			
//		populateVisitsTable($("#id-location").val());
//		
//		//the generate button
//		$("#generate-visitor-report").click(function(){
//			
//			getFinalValues("visitor-details");
//			getFinalValues("visitor-details-readonly");
//			console.log(visitsArray);
//			
//			
//			$.post("/visitorsLog/generate-visitor-report", {"finalFirstName" : finalFirstName, "finalMiddleName" : finalMiddleName, "finalLastName" : finalLastName, 
//															"finalDob" : finalDob, "finalSex" : finalSex, "finalMaritalStatus" : finalMaritalStatus, "finalCountry" : finalCountry, 
//															"finalPhone1" : finalPhone1, "finalEmail" : finalEmail, "finalWebsite" : finalWebsite, "finalOccupation" : finalOccupation, 
//															"finalMinistry" : finalMinistry, "finalIsPartner" : finalIsPartner, "finalBlacklisted" : finalBlacklisted, 
//															"finalLastVisit" : finalLastVisit, "finalRegisteredBy" : finalRegisteredBy, "finalRegisterDate" : finalRegisterDate,
//															"finalPicLocation": finalPicLocation, "visitsArray[]" : visitsArray, "currentUser" : getUserById($("#hidden-user-id").val())}, function(data){
//																																	alert(data);
//																																}
//			);
//			
//			
//											}
//		);	
//		
//		
//	}
	
	
	
	
	
	
//	if(page == ("user-details")){
//		getAllUsers();
//		getAllRoles();
//		getAllAccountStatus();
//		getAllActivities();
//		getAllMaritalStatus($("#user-marital-status-select"));
//		initialRole = $("#role-location").val();
//		getRoleWithId($("#role-location").val(), $("#user-role"));
//		getAccountStatusWithId($("#account-status-location").val(), $("#user-account-status"));
//		$("#visitor-pic").attr("src", $("#pic-location").val());		
//		$("#user-sex").val(getSexFromInitial($("#sex-location").val()));
//		getUserWithId($("#createdby-location").val(), $("#user-registered-by"));
//		setMaritalStatusWithId($("#marital-status-location").val(), $("#user-marital-status"), $("#user-marital-status-select"));
//		
//		getInitialValues(page);
//		
//		//console.log($("#id-location").val());
//		populateActivitiesTable($("#id-location").val());
//		
//		//the generate button
//		$("#generate-user-report").click(function(){
//			
//			getFinalValues("user-details");
//			console.log(activitiesArray);
//			
//						
//			//
//			$.post("/visitorsLog/generate-user-report", {"finalFirstName" : finalFirstName, "finalMiddleName" : finalMiddleName, "finalLastName" : finalLastName, 
//															"finalDob" : finalDob, "finalRole" : finalRole, "finalSex" : finalSex, "finalMaritalStatus" : finalMaritalStatus,  
//															"finalLastLogin" : LastLogin, "finalRegisteredBy" : finalRegisteredBy, "finalRegisterDate" : finalRegisterDate,
//															"finalPicLocation": finalPicLocation, "activitiesArray[]" : activitiesArray, 
//															"currentUser" : getUserById($("#hidden-user-id").val())}, 
//															function(data){
//																//alert(data);																
//																var newWindow = window.open("user-report?file-location=" + data);
//																
//															}
//			);
//			
//			
//										}
//		);	
//		
//		$("#visitor-pic-div").hover(function(){
//			$("#choose-pic").css("visibility", "visible"); 
//		}, 
//		function(){
//			$("#choose-pic").css("visibility", "hidden");
//		});
//	}
	
//	if(page == "settings"){
//		//alert("settings");
//		getAllRoles();
//		getAllAccountStatus();
//		getAllActivities();
//		getAllMaritalStatus($("#user-marital-status-select"));
//		initialRole = $("#role-location").val();
//		getRoleWithId($("#role-location").val(), $("#user-role"));
//		getAccountStatusWithId($("#account-status-location").val(), $("#user-account-status"));
//		$("#visitor-pic").attr("src", $("#pic-location").val());		
//		$("#user-sex").val(getSexFromInitial($("#sex-location").val()));
//		getUserWithId($("#createdby-location").val(), $("#user-registered-by"));
//		setMaritalStatusWithId($("#marital-status-location").val(), $("#user-marital-status"), $("#user-marital-status-select"));
//		
//		getInitialValues(page);
//		
//		$("#visitor-pic-div").hover(function(){
//			$("#choose-pic").css("visibility", "visible"); 
//		}, 
//		function(){
//			$("#choose-pic").css("visibility", "hidden");
//		});
//	}
	
		
//	if(page == "manage-users"){
//		getAllRoles();
//		getAllUsers();
//		getAllMaritalStatus($("#marital-status"));
//		getAllRoles($("#roles"));
//		getAllAccountStatus();
//		
//				
//		$("#group-action").on("change", function(){ 
//											var checked = $("#manage-users-table").find($("input[type=checkbox]:checked"));
//											if(checked.length == 0){
//												
//												displayDialogModal("OK oh...", "I hear you. But no user was checked. Seriously?...", "OK");												
//												
//											}else{
//												 
//												var selectedIdsArray = new Array();
//												var selectedUsersArray = new Array();
//												
//												for(var i = 0; i < checked.length; i++){
//													selectedIdsArray.push($(checked[i]).attr("id").split("-")[1]);
//													selectedUsersArray.push(" " + getUserById($(checked[i]).attr("id").split("-")[1]));
//												}
//																		
//												 
//												switch($(this).val()){
//													
//													case "Report": displayDialogModal("One moment", "Are you sure you want to generate report(s) for the following user(s): " + selectedUsersArray + 
//														"?", "OK"); break;
//													case "Suspend": displayModal("One moment", "Are you sure you want to suspend the following user(s): " + selectedUsersArray + 
//															"?", "No, cancel", "Yes, sure", supendUsers, selectedIdsArray); break;
//													case "Active": displayModal("One moment", "Are you sure you want to make the following user(s) active: " + selectedUsersArray + "?", 
//															"No, cancel", "Yes, sure", makeUsersActive, selectedIdsArray); break;
//													case "Probation": displayModal("One moment", "Are you sure you want to put the following user(s) on probation: " + selectedUsersArray + "?", 
//															"No, cancel", "Yes, sure", putUsersOnProbation, selectedIdsArray); break;
//													case "Remove": displayModal("Please confirm", "Removing will delete the following user(s) and all their records completely: " + selectedUsersArray + 
//															". Are you sure you wish to continue?", 
//															"No, cancel", "Yes, continue", deleteUsers, selectedIdsArray);
//												}
//											}
//											
//										});
//		$.get("/visitorsLog/user-actions", function(data){			  
//												$("#visitor-pic-div").css("visibility", "hidden");
//												displayUsers($("#user-actions"), data);
//												preparePagination("allUsers", MAX_QUERY_TOTAL, "pagination");
//										  }
//		);
//		
//		$("#visitor-pic-div").hover(function(){
//			$("#choose-pic").css("visibility", "visible"); 
//		}, 
//		function(){
//			$("#choose-pic").css("visibility", "hidden");
//		});
//	}
	
//	$("#user-actions").click(function(){
//		$("#visitor-pic-div").css("visibility", "hidden");
//	});
//		
//	$("#add-new-user").click(function(){
//		$("#visitor-pic-div").css("visibility", "visible");
//	});
	
	//=============================================================================================================================================================================
	//===========================================Operations that fetch select options from the database ends here==================================================================
	//=============================================================================================================================================================================
	
	
//	$("#choose-pic").on("click", function(){
//		$("#pic-input").click();
//	});
//	
//	
//	$("#pic-input").change(function(){
//								$("form[name=upload]").submit();
//							});
//	
//	$("form[name=upload]").submit(function(e){
//		e.preventDefault(e);												
//		var formData = new FormData();
//		formData.append('file', $('#pic-input')[0].files[0]);
//		formData.append('page', page);
//
//		$.ajax({
//		       url : '/visitorsLog/upload-pic',
//		       type : 'POST',
//		       data : formData,
//		       processData: false,  
//		       contentType: false,  
//		       success : function(data) {
//		           console.log(data);
//		           
//		           var dataArray = data.split("/");
//		           if(!(dataArray.length > 1))  //In case it is comming from windows...........................................
//		        	   	dataArray = data.split("\\");
//		           
//		           $('#visitor-pic').attr('src', "/visitorsLog/get-uploaded-image?image=" + dataArray[dataArray.length - 1] + "&page=" + page);
//		           
//		           console.log("After upload, src of image is: " +  $('#visitor-pic').attr('src'));
//		           
//		           if(page == "user-details" || page == "settings"){
//		        	   		
//		        	   		//console.log("/visitorsLog/update-user-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + "&finalPic=" + $('#visitor-pic').attr('src'));
//		        	   		$.post("/visitorsLog/update-user-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + 
//		        	   				"&finalPic=" + $('#visitor-pic').attr('src'), function(data){
//		        	   																	alert(data);
//		        	   																});
//		        	   
//		           }else if(page == "visitor-details"){
//		        	   		
//		        	   		//console.log("/visitorsLog/update-visitor-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + "&finalPic=" + $('#visitor-pic').attr('src'));
//		        	   		$.post("/visitorsLog/update-visitor-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + 
//		        	   				"&finalPic=" + $('#visitor-pic').attr('src'), function(data){
//		        	   																	alert(data);
//		        	   																});
//		        	   
//		           }
//		           
//		       }
//		});
//		
//	});
		
	
//	if(page == "choose-password" || page == "change-password"){
//		
//		var referrerPage = document.referrer;
//		
//		if(referrerPage == "" || referrerPage == undefined){
//			window.location = "/visitorsLog/login";
//		}else if(referrerPage.indexOf("login") == -1){
//				
//			window.location = referrerPage;
//				
//		}		
//		
//	}
		
});



//=============================================================================== OTHER FUNCTIONS START HERE ===================================================================================



//================================================================================================================================================================================================================
//=================================================================== METHODS TO GET COLLECTIONS FROM THE DATABASE ===============================================================================================
//================================================================================================================================================================================================================

//function getAllMaritalStatus(theElement){
//	if(allMaritalStatus.length == 0){
//		$.get("/visitorsLog/get-maritals", function(data){
//												var maritals = JSON.parse(data);
//												
//												allMaritalStatus = new Array();
//												
//												var aMaritalStatus;
//												maritals.forEach(function(marital){ 
//													aMaritalStatus = new MaritalStatus();
//													aMaritalStatus.id =  marital["id"];
//													aMaritalStatus.maritalStatus =  marital["maritalStatus"];
//													allMaritalStatus.push(aMaritalStatus);
//											});
//												
//											fillMaritalStatus(theElement);
//		});
//	}else{
//		fillMaritalStatus(theElement);
//	}
//	
//}
//
//
//function fillMaritalStatus(theElement){
//	
//	$(theElement).html("");
//	$(theElement).append('<option value="0" selected>--Select--</option>');
//	allMaritalStatus.forEach(function(marital){ 
//		option = $('<option value="' + marital["id"] + '" >' + marital["maritalStatus"] + '</option>')
//		$(theElement).append(option);
//	});
//											
//}
//
//function getMaritalStatusIdWithName(maritalStatus){
//				
//	for(var i = 0; i < allMaritalStatus.length; i++){
//		if(allMaritalStatus[i]["maritalStatus"] == maritalStatus)
//			return allMaritalStatus[i]["id"];
//	}
//
//}
//
////This method designed to set both the hidden select field and the visible ineditable one 
//function setMaritalStatusWithId(id, txElement, selectElement){
//	if(allMaritalStatus.length == 0){
//		$.get("/visitorsLog/get-maritals", function(data){
//													var maritals = JSON.parse(data);
//													maritals.forEach(function(marital){
//														if(marital["id"] == id){
//															$(txElement).val(marital["maritalStatus"]);
//															$(selectElement).val(marital["id"]);
//															initialMaritalStatus = marital["maritalStatus"];
//															return;
//														}
//													});
//												});
//		
//	}else{
//		allMaritalStatus.forEach(function(marital){
//			if(marital["id"] == id){
//				$(txElement).val(marital["maritalStatus"]);
//				$(selectElement).val(marital["maritalStatus"]);
//				initialMaritalStatus = marital["maritalStatus"];
//				return;
//			}
//		});
//	}
//	
//}
//
//function getAllCountries(theElement){
//	if(allCountries.length == 0){
//		$.get("/visitorsLog/get-countries", function(data){
//												//console.log(data);
//												var countries = JSON.parse(data);
//												allCountries = new Array();
//												
//												var aCountry;
//												countries.forEach(function(country){ 
//													aCountry = new Country();
//													aCountry.id = country["id"];
//													aCountry.name = country["niceName"];
//													
//													allCountries.push(aCountry);
//												});
//												
//												fillCountries(theElement);
//												
//											}
//		);
//	}else{
//		fillCountries(theElement);
//	}
//	
//}
//
//function fillCountries(theElement){
//	$(theElement).html("");
//	$(theElement).append('<option value="0" selected>--Select--</option>');
//	
//	var option;
//	allCountries.forEach(function(country){ 
//		option = $('<option value="' + country["id"] + '" >' + country["name"] + '</option>')
//		$(theElement).append(option);		
//	});
//}
//
//function getAllOccupations(theElement){
//	if(allOccupations.length == 0){
//		$.get("/visitorsLog/get-occupations", function(data){
//													var occupations = JSON.parse(data);
//													var string = "";
//													
//													//console.log("All occupations: " + occupations);
//													
//													allOccupations = new Array();
//													
//													var anOccupation;
//													occupations.forEach(function(occupatione){ 
//														anOccupation = new Occupation();
//														anOccupation.id = occupatione["id"];
//														anOccupation.occupation = occupatione["occupation"];
//														
//														allOccupations.push(anOccupation);
//													});
//													if(theElement != null)
//														fillOccupations(theElement);
//													
//											});
//	}else{
//		if(theElement != null)
//			fillOccupations(theElement);
//	}
//	
//}
//
//function fillOccupations(theElement){
//	
//	$(theElement).html("");
//	$(theElement).append('<option value="0" selected>--Select--</option>');
//	
//	var option;
//	allOccupations.forEach(function(occupatione){ 
//		option = $('<option value="' + occupatione["id"] + '" >' + occupatione["occupation"] + '</option>')
//		$(theElement).append(option);
//	});
//}
//
//function getAllRoles(){
//	$.get("/visitorsLog/get-roles", function(data){													
//		//alert(data);	
//		allRoles = JSON.parse(data);
//		
//	});
//}
//
//
//function getAllRoles(element){
//
//	$.get("/visitorsLog/get-roles", function(data){
//											//alert(data);
//											var theRoles = JSON.parse(data);
//											var aRole = null;
//											allRoles = new Array();
//											theRoles.forEach(function(uniqueRole){
//																aRole = new Role();
//																aRole.id = uniqueRole["id"];
//																aRole.role = uniqueRole["role"];
//																allRoles.push(aRole);
//															 });
//											//console.log("All roles :" + allRoles);
//											
//											var allRolesElements = $(element).find("*");
//											
//											allRoles.forEach(function(role){
//												for(var i = 0; i < allRolesElements.length; i++){
//													
//													if(role.role == $(allRolesElements[i]).attr("id")){
//														$(allRolesElements[i]).val(role.id);
//														//console.log($(allRolesElements[i]).attr("id"));
//													}													
//												}
//												
//											});											
//											
//									});
//}
//
//function getRoleByUserId(id){
//	var userRole;
//	for(var i = 0; i < allUsers.length; i++){
//		if(allUsers[i]["id"] == id){
//			userRole = allUsers[i]["role"];
//			break;
//		}
//			
//	}
//	
//	return getRoleById(userRole);
//}
//
//
//function getRoleWithId(id, theElement){
//	$.get("/visitorsLog/get-role?id=" + id, function(data){													
//												//alert(data);	
//												var role = data.split(":::")[0];
//												initialRole = role;
//												$(theElement).val(role);
//											});
//}
//
//function getRoleById(id){
//	if(allRoles.length == 0){
//		$.get("/visitorsLog/get-roles", function(data){													
//					//alert(data);	
//					allRoles = JSON.parse(data);
//					for(var i = 0; i < allRoles.length; i++){
//						if(allRoles[i]["id"] == id)
//							return allRoles[i]["role"];
//					}
//					
//				}
//		);
//	}else{
//		for(var i = 0; i < allRoles.length; i++){
//			if(allRoles[i]["id"] == id)
//				return allRoles[i]["role"];
//		}
//	}
//	
//	
//}
//
//function getIdFromRole(checkRole){
//	if(allRoles.length == 0){
//		console.log("allRoles is zero");
//		$.get("/visitorsLog/get-roles", function(data){													
//											//alert(data);	
//											allRoles = JSON.parse(data);
//											for(var i = 0; i < allRoles.length; i++){
//												if(allRoles[i]["role"] == checkRole)
//													return allRoles[i]["id"];
//											}
//		});
//	}else{
//		console.log("allRoles is not zero");
//		for(var i = 0; i < allRoles.length; i++){
//			if(allRoles[i]["role"] == checkRole)
//				return allRoles[i]["id"];
//		}
//	}	
//	
//}
//
//
//function getAccountStatusWithId(id, theElement){
//	$.get("/visitorsLog/get-account-status?id=" + id,  function(data){													
//														 //alert(data);		
//														 $(theElement).val(data);
//													  });
//}
//
//function getAccountStatusByUserId(id){
//	for(var i = 0 ; i < allUsers.length; i++){
//		if(allUsers[i]["id"] == id){
//			for(var j = 0; j < allAccountStatus.length; j++){
//				if(allUsers[i]["status"] == allAccountStatus[j]["id"])
//					return allAccountStatus[j]["status"];
//			}
//		}
//	}
//}
//
//function getAccountStatusWithAccountStatusId(id){
//	for(var i = 0 ; i < allAccountStatus.length; i++){
//		if(allAccountStatus[i]["id"] == id){
//			return allAccountStatus[i]["status"];
//		}
//	}
//}
//
//function getAllAccountStatus(){
//	
//		$.get("/visitorsLog/get-all-account-status", function(data){
//														allAccountStatus = JSON.parse(data);														
//													 }
//		);
//	
//	
//}
//
//function getIdFromAccountStatus(accountStatus){
//	if(allAccountStatus.length == 0){
//		$.get("/visitorsLog/get-all-account-status", function(data){
//														allAccountStatus = JSON.parse(data);			
//														for(var i = 0; i < allAccountStatus.length; i++){
//															if(allAccountStatus[i]["status"] == accountStatus)
//																return allAccountStatus[i]["id"];
//														}
//													 }
//		);
//	}else{
//		for(var i = 0; i < allAccountStatus.length; i++){
//			if(allAccountStatus[i]["status"] == accountStatus)
//				return allAccountStatus[i]["id"];
//		}
//	}
//	
//}
//
//function getAllAccountStatus(theElement){
//	if(allAccountStatus.length == 0){
//		$.get("/visitorsLog/get-all-account-status", function(data){
//														//alert(data);
//														var allStatus = JSON.parse(data);
//														var aStatus = null;
//														allAccountStatus = new Array();
//														allStatus.forEach(function(uniqueStatus){
//															aStatus = new AccountStatus();
//															aStatus.id = uniqueStatus["id"];
//															aStatus.status = uniqueStatus["status"];
//															allAccountStatus.push(uniqueStatus);
//														});
//														
//														fillAccountStatus(theElement);
//		});
//	}else{
//		fillAccountStatus(theElement);
//	}
//	
//}
//
//function fillAccountStatus(theElement){
//	$(theElement).html("");
//	$(theElement).append('<option value="0" selected>--Select--</option>');
//	
//	var option;
//	allAccountStatus.forEach(function(accountStatus){ 
//		option = $('<option value="' + accountStatus["id"] + '" >' + accountStatus["status"] + '</option>')
//		$(theElement).append(option);
//	});
//}
//
//function getCountryWithId(id){
//	if(allCountries.length == 0){
//		$.get("/visitorsLog/get-countries", function(data){	
//												var countries = JSON.parse(data);
//												countries.forEach(function(country){
//													if(country["id"] == id)
//														return country["niceName"];
//												});
//		});
//	}else{
//		allCountries.forEach(function(country){
//			if(country["id"] == id)
//				return country["niceName"];
//		});
//	}
//}
//
//function getIdFromCountry(countryName){
//	allCountries.forEach(function(country){
//		if(country["niceName"] == countryName)
//			return country["id"];
//	});
//}
//
////This method designed to set both the hidden select field and the visible ineditable one 
//function setCountryWithId(id, txElement, selectElement){
//	if(allCountries.length == 0){
//		$.get("/visitorsLog/get-countries", function(data){
//													var countries = JSON.parse(data);
//													countries.forEach(function(country){
//														if(country["id"] == id){
//															$(txElement).val(country["niceName"]);
//															$(selectElement).val(country["id"]);
//															return;
//														}
//													});
//												});
//		
//	}else{
//		allCountries.forEach(function(country){
//			if(country["id"] == id){
//				$(txElement).val(country["niceName"]);
//				$(selectElement).val(country["niceName"]);
//				return;
//			}
//		});
//	}
//	
//}
//
//function getOccupationWithId(id){
//	console.log("All occupations length: " + allOccupations.length);
//	
//	if(allOccupations.length == 0){
//		$.get("/visitorsLog/get-occupations", function(data){	
//												var occupations = JSON.parse(data);
////												occupations.forEach(function(occupation){
////													if(occupation["id"] == id)
////														return occupation["occupation"];
////												});
//												for(var i = 0; i < allOccupations.length; i++){
//													if(allOccupations[i]["id"] == id){
//														return allOccupations[i]["occupation"];
//													}
//												}
//		});
//	}else{
//		console.log("All occupations length: else " + allOccupations.length);
////		allOccupations.forEach(function(occupation){
////			if(occupation["id"] == id)
////				return occupation["occupation"];
////		});
//		for(var i = 0; i < allOccupations.length; i++){
//			if(allOccupations[i]["id"] == id){
//				return allOccupations[i]["occupation"];
//			}
//		}
//		
//	}
//	
//}
//
//function getIdFromOccupation(occupationName){
//	allOccupations.forEach(function(occupation){
//		if(occupation["occupation"] == occupationName)
//			return occupation["id"];
//	});
//}
//
////This method designed to set both the hidden select field and the visible ineditable one 
//function setOccupationWithId(id, txElement, selectElement){
//	if(allCountries.length == 0){
//		$.get("/visitorsLog/get-occupations", function(data){
//													var occupations = JSON.parse(data);
//													occupations.forEach(function(occpation){
//														if(occpation["id"] == id){
//															$(txElement).val(occpation["occupation"]);
//															$(selectElement).val(occpation["id"]);
//															return;
//														}
//													});
//												});
//		
//	}else{
//		allOccupations.forEach(function(occupation){
//			if(occupation["id"] == id){
//				$(txElement).val(occupation["occupation"]);
//				$(selectElement).val(occupation["occupation"]);
//				return;
//			}
//		});
//	}
//	
//}
//
//
//function getActivityWithId(id){
//	if(allUserActivities.length == 0){
//		$.get("/visitorsLog/get-all-activities", function(data){
//													//console.log(data);
//													allUserActivities = JSON.parse(data);
//													//console.log(allUserActivities);
//													for(var i = 0; i < allUserActivities.length; i++){
//														if(allUserActivities[i]["id"] == id)
//															return allUserActivities[i]["activity"];
//													}
//																										
//												});
//	}else{
//		for(var i = 0; i < allUserActivities.length; i++){
//			if(allUserActivities[i]["id"] == id)
//				return allUserActivities[i]["activity"];
//		}
//		
//	}
//}

//function getAllActivities(){
//	$.get("/visitorsLog/get-all-activities", function(data){
//												//console.log(data);
//												allUserActivities = JSON.parse(data);
//												//console.log(allUserActivities);
//												
//											}
//	);
//}
//
//function getAllUserActivities(target){
//	if(allUsers.length == 0){
//		$.get("/visitorsLog/user-actions?all=all", function(data){
//											//console.log(data);
//											
//												allUsers = JSON.parse(data); 		
//												$.get("/visitorsLog/get-all-user-activities", function(data2){
//													console.log("All user activities: " + data2);
//													allActivities = JSON.parse(data2);
//													var table = $(target).find("tbody");
//													
//													
//														for(var i = 0; i < allActivities.length; i++){
//															if(allActivities[i]["userId"] != $("#id-location").val() && allActivities[i]["userId"] != 4){     //display all users except the current user
//																$(table).append('<tr onclick="goToUser(' + allActivities[i]["userId"] + ')" class="table-row-item">' + 
//																		'<td ><img class="img-circle" style="width: 30px;" src="' + getPicWithId(allActivities[i]["userId"]) + '" /></td>' +
//																		'<td>' + getNameWithId(allActivities[i]["userId"]) + '</td>' +
//																		'<td>' + getRoleByUserId(allActivities[i]["userId"]) + '</td>' +													
//																		'<td>' + interpretDate(allActivities[i]["time"]) + '</td>' +
//																		+ '</tr>');
//															}
//															
//														}
//											
//															
//												});
//										
//											
//										}
//								);
//		
//		
//	}else{
//		$.get("/visitorsLog/get-all-user-activities", function(data2){
//			console.log(data2);
//			allActivities = JSON.parse(data2);
//			console.log("All user activities: " + data2);
//			var table = $(target).find("tbody");
//			
//			
//				for(var i = 0; i < allActivities.length; i++){
//					$(table).append('<tr onclick="goToUser(' + allActivities[i]["userId"] + ')" class="table-row-item">' + 
//							'<td ><img class="img-circle" style="width: 30px;" src="' + getPicWithId(allActivities[i]["userId"]) + '" /></td>' + 
//							'<td>' + getNameWithId(allActivities[i]["userId"]) + '</td>' + 
//							'<td>' + getActivityWithId(allActivities[i]["activityId"]) + '</td>' +													
//							'<td>' + interpretDate(allActivities[i]["time"]) + '</td>' +
//							+ '</tr>');
//				}
//				
//			
//			
//			
//					
//		});
//	}
//	
//}

//function getPicWithId(id){
//	for(var i = 0; i < allUsers.length; i++){
//		if(allUsers[i]["id"] == id)
//			return allUsers[i]["picLocation"];
//	}
//}
//
//function getNameWithId(id){
//	for(var i = 0; i < allUsers.length; i++){
//		if(allUsers[i]["id"] == id)
//			return allUsers[i]["firstName"] + " " + allUsers[i]["middleName"] + " " + allUsers[i]["lastName"];
//	}
//}
//
//function getAllUsers(){
//	$.get("/visitorsLog/user-actions?all=all", function(data){
//													//console.log(data);
//													allUsers = JSON.parse(data);		
//												}
//	);
//}

//================================================================================================================================================================================================================
//=================================================================== METHODS TO GET COLLECTIONS FROM THE DATABASE ENDS HERE =====================================================================================
//================================================================================================================================================================================================================


//function prepareCheckboxes(){
//	$("#have-passport").is(":checked") ? $("#have-passport").val("Y") : $("#have-passport").val("N"); 
//	$("#have-med").is(":checked") ? $("#have-med").val("Y") : $("#have-med").val("N");
//	$("#is-partner").is(":checked") ? $("#is-partner").val("Y") : $("#is-partner").val("N");
//	$("#taking-meds").is(":checked") ? $("#taking-meds").val("Y") : $("#taking-meds").val("N");
//	$("#visited-before").is(":checked") ? $("#visited-before").val("Y") : $("#visited-before").val("N");
//}
//
////Here we submit the user details with ajax
//submitRegisterUser = function() {
//	if($(".modal").hasClass("in"))
//		$(".modal .close").click();
//	$("input[name=picLocation]").val($('#visitor-pic').attr("src"));
//	//$("form[name=user-register]")[0].submit();
//		
//	$.post("/visitorsLog/submit-user", $("form[name=user-register]").serialize(), function(data){
//																					//alert(data);
//																					if(data == "success"){
//																						displaySuccessMessage("User registered successfully!");
//																					}else if(data == "failure"){
//																						displayErrorMessage("There was a problem registering user :(");
//																					}else{
//																						displayErrorMessage(data);
//																					}
//																					
//																				});
//	
//}
//
////Here we submit the visitor details with ajax
//submitRegisterVisitor = function() {
//	dismissTheModal();
//	$("input[name=picLocation]").val($('#visitor-pic').attr("src"));
//	//$("form[name=user-register]")[0].submit();
//	prepareCheckboxes();
//	
//	console.log("The visitor we are saving: " + $("form[name=visitor-register]").serialize());
//	
//	$.post("/visitorsLog/submit-visitor", $("form[name=visitor-register]").serialize(), function(data){
//																					if(data == "success"){
//																						displaySuccessMessage("Visitor registered successfully!");
//																					}else{
//																						displayErrorMessage("There was a problem registering the visitor :(");
//																					}
//																					
//																				});
//	
//}
//
//function dismissTheModal(){
//	if($(".modal").hasClass("in"))
//		$(".modal .close").click();
//}
//
//function uploadPicture(){
//	$("form[name=upload]").submit(function(e){
//		e.preventDefault(e);												
//		var formData = new FormData();
//		formData.append('file', $('#pic-input')[0].files[0]);
//
//		$.ajax({
//		       url : '/visitorsLog/upload-pic',
//		       type : 'POST',
//		       data : formData,
//		       processData: false,  
//		       contentType: false,  
//		       success : function(data) {
//		           console.log(data);
//		           var dataArray = data.split("/");
//		           $('#visitor-pic').attr('src', "/visitorsLog/get-uploaded-image?image=" + dataArray[dataArray.length - 1]);
//		       }
//		});
//		
//	});
//}




////==========================================================Display of errors or messages/feedback============================================================================================================
////============================================================================================================================================================================================================
//
//
//function displayErrorMessage(message){
//	$(".alert-span").text(message);
//	$(".alert-error").css("display", "block");
//	$("html, body").animate({ scrollTop: 0 }, "slow");
//}
//
//function displaySuccessMessage(message){
//	$(".alert-span2").text(message);
//	$(".alert-submited").css("display", "block");
//	$("html, body").animate({ scrollTop: 0 }, "slow");
//}
//
//function displayModal(title, body, noButton, yesButton, submitFunction, anArray){
//	
//	var modal = $('<div id="myModal" class="modal fade" role="dialog"></div>');
//	var modalDialog = $('<div class="modal-dialog modal-sm"></div>');
//	
//	modal.append(modalDialog);
//	  
//	var modalContent = $('<div class="modal-content"></div>');
//	modalDialog.append(modalContent);
//	
//	var modalHeader = $('<div class="modal-header"></div>');
//	modalContent.append(modalHeader);
//	
//	var closeButton = '<button type="button" class="close" data-dismiss="modal">&times;</button>'
//	var headerH4 = '<h4 class="modal-title">' + title + '</h4>';
//	modalHeader.append(closeButton);
//	modalHeader.append(headerH4);
//	
//	var modalBody = $('<div class="modal-body"></div>');
//	var bodyP = $('<p>'+ body + '</p>');
//	
//	modalBody.append(bodyP);
//	modalContent.append(modalBody);
//	
//	var modalFooter = $('<div class="modal-footer"></div>');
//	var noButton = $('<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">' + noButton + '</button>');
//	var continueButton = $('<button type="button" class="btn btn-primary btn-sm" id="yes-button" >' + yesButton + '</button>');
//	modalFooter.append(noButton);
//	modalFooter.append(continueButton);
//	
//	modalContent.append(modalFooter);
//	
//	$(modal).modal();
//	
//	if(anArray == undefined){
//		$(modalContent).find("#yes-button").on("click", submitFunction);
//	}else{
//		$(modalContent).find("#yes-button").on("click", function(){submitFunction(anArray);});
//	}
//	
//	   
//	
//}
//
//function displayDialogModal(title, body, dismissButton){
//	
//	var modal = $('<div id="myModal" class="modal fade" role="dialog"></div>');
//	var modalDialog = $('<div class="modal-dialog modal-sm"></div>');
//	
//	modal.append(modalDialog);
//	  
//	var modalContent = $('<div class="modal-content"></div>');
//	modalDialog.append(modalContent);
//	
//	var modalHeader = $('<div class="modal-header"></div>');
//	modalContent.append(modalHeader);
//	
//	var closeButton = '<button type="button" class="close" data-dismiss="modal">&times;</button>'
//	var headerH4 = '<h4 class="modal-title">' + title + '</h4>';
//	modalHeader.append(closeButton);
//	modalHeader.append(headerH4);
//	
//	var modalBody = $('<div class="modal-body"></div>');
//	var bodyP = $('<p>'+ body + '</p>');
//	
//	modalBody.append(bodyP);
//	modalContent.append(modalBody);
//	
//	var modalFooter = $('<div class="modal-footer"></div>');
//	var okButton = $('<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">' + dismissButton + '</button>');
//	modalFooter.append(okButton);
//	
//	modalContent.append(modalFooter);
//	
//	$(modal).modal();
//		
//}
//
////==========================================================Display of errors or messages/feedback ends here==================================================================================
////============================================================================================================================================================================================


//function getSimilarRecords(firstName, middleName, lastName){
//	console.log("add new visitor is active");
//	console.log("firstName=" + firstName + "&middleName=" + middleName + "&lastName=" + lastName);
//	$.get("/visitorsLog/get-similar-records?" + 
//				  "firstName=" + firstName + "&middleName=" + middleName + "&lastName=" + lastName, 
//				  function(data){
//						//console.log(data)
//						$(".similar-container").html("");
//						var similarRecords = JSON.parse(data);
//						
//						var similarDiv;
//						var similarImage;
//						var similarDetailDiv;
//						var similarName;
//						var similarCountry;
//						var similarLastVisit;
//						var similarLink;
//						
//						
//						if(similarRecords.length > 0){
//							var count;
//							similarRecords.forEach(function(record){
//								count++;
//								similarDiv = $('<div class="similar" ></div>');
//								$(".similar-container").append(similarDiv);
//								
//								similarImage = $('<img class="img-thumbnail" src="' + record["picLocation"] + '" />');
//								similarDiv.append(similarImage);
//								
//								similarDetailDiv = $('<div style="display: inline; width: 70%; float: right; margin: 0px; padding: 0px; padding-left: 15px;"></div>');
//								similarDiv.append(similarDetailDiv);
//								
//								similarName = $('<h4 style="margin: 0px;">' + record["firstName"] + " " + record["middleName"] + " " + record["lastName"] + '</h4>');
//								similarDetailDiv.append(similarName);
//								
//								similarCountry = $('<p style="margin: 0px;"><b>Country:</b> ' + getCountryWithId(record["country"]) + '</p>');
//								similarDetailDiv.append(similarCountry);
//								
//								similarLastVisit = $('<p style="margin: 0px;"><b>Last visit:</b> ' + record["lastVisit"] + '</p>');
//								similarDetailDiv.append(similarLastVisit);
//								
//								similarLink = $('<a href="/visitorsLog/visitor-details?id=' +record["id"] + '" >View more...</a>');// We'll figure this out later
//								similarDetailDiv.append(similarLink);
//								
//								similarDiv.append($('<hr />'));
//								
//							});
//							
//						}
//						
//						
//					});
//	 
//}

//function displayUsers(target, data){
//	
//	var table = $(target).find(".table");
//	  table.html("");
//	  table.append(`<thead>
//			  			<tr>					 			
//			 				<th>
//			 					Select
//			 				</th><th>
//			 					Picture
//			 				</th><th>
//			 					Name
//			 				</th><th>
//			 					Sex
//			 				</th><th>
//			 					Role
//			 				</th><th>
//			 					Last login
//			 				</th><th>
//			 					Status
//			 				</th>
//			 			</tr>
//			 		</thead>`);
//	  var allUsers = JSON.parse(data);
//	  
//	  var tableBody = $("<tbody></tbody>");
//	  table.append(tableBody);
//	  var tableRow;
//	  var tableData;
//	  var userRole;
//	  var lastLogin;
//	  	  
//	  allUsers.forEach(function(user){
//		  if(user["id"] != $("#id-location").val() && user["id"] != 4){  //If it is not the curent user, display in table
//			  tableRow = $('<tr class="table-row-item"></tr>');															  
//			  tableBody.append(tableRow);
//			  
//			  tableData = $('<td> <input id="id-' + user["id"] + '" type="checkbox" /></td>');
//			  tableRow.append(tableData);
//			  
//			  tableData = $('<td><img onclick="goToUser(' + user["id"] + ');" src="' + user["picLocation"] + '" style="width: 30px;"/></td>');
//			  tableRow.append(tableData);
//			  
//			  tableData = $('<td onclick="goToUser(' + user["id"] + ');" >' + user["firstName"] + (($.trim(user["middleName"]) == "") ? " " : " " + user["middleName"] + " ")  + user["lastName"] + '</td>');
//			  tableRow.append(tableData);
//			  
//			  tableData = $('<td onclick="goToUser(' + user["id"] + ')">' + user["sex"] + '</td>');
//			  tableRow.append(tableData);
//			  
//			  userRole = function(){
//				  			for(var i = 0; i < allRoles.length; i++){
//				  				if(allRoles[i]["id"] == user["role"])
//				  					return allRoles[i]["role"];
//				  			}
//			  			 };
//			  tableData = $('<td id="role-' + user["id"] + '" onclick="goToUser(' + user["id"] + ')">' + userRole() + '</td>');
//			  tableRow.append(tableData);
//			  
//			  if(userRole() == "Admin"){
//				  $(".list-group-item #manage-users").css("display", "block");
//				  $(".list-group-item #manage-visitors").css("display", "block");
//			  }else if(userRole() == "Editor"){
//				  $(".list-group-item #manage-visitors").css("display", "block");
//			  }else if(userRole() == "Reporter"){
//				  
//			  }
//			  
//			  lastLogin = function(){
//				  var lastLoginDay;
//				  var lastLoginTime;
//				  var rawDateTime = user["lastLogin"];
//				  
//				  console.log("The raw date time returned: " + rawDateTime);
//				  
//				  //interpretDate(rawDateTime);
//				  
//				  if(rawDateTime != "" && rawDateTime != null){
//					  return interpretDate(rawDateTime);
//					  
//				  }else 
//					  return "";
//				  
//			  }
//			  
//			  tableData = $('<td onclick="goToUser(' + user["id"] + ')">' + lastLogin() + '</td>');
//			  tableRow.append(tableData);
//			  
//			  accountStatus = getAccountStatusByUserId(user["id"]);
//														  
//			  tableData = $('<td id="account-' + user["id"] + '" onclick="goToUser(' + user["id"] + ')">' + accountStatus + '</td>');
//			  tableRow.append(tableData);
//		  }
//		  
//				 				
//	  });
//	  
//}
//
//function preparePagination(range, divisor, paginatorId, search){
//	if(range == "allUsers"){
//		$.get("/visitorsLog/user-actions-total", function(data){
//													if(data < MAX_QUERY_TOTAL * 20){														
//														var totalPages = Math.ceil(data / MAX_QUERY_TOTAL);
//														//alert("Total results: " + data + ", total pages: " + Math.ceil(totalPages));
//														console.log("Data we got: " + data);
//														if(totalPages > 1){
//															var paginator = $("#" + paginatorId).html("");
//															for(var i = 0; i < totalPages; i++){
//																paginator.append('<li onclick="getUsersPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
//															}
//															$(paginator).css("visibility", "visible");
//															
//																													
//														}
//													}
//														
//												});
//	}else if(range == "searchUsers"){
//		$.get("/visitorsLog/get-user-matches-total?search=" + $("#srch-term").val(), function(data){
//																		if(data < MAX_QUERY_TOTAL * 20){														
//																			var totalPages = Math.ceil(data / MAX_QUERY_TOTAL);
//																			//alert("Total results: " + data + ", total pages: " + totalPages);
//																			console.log("Data we got: " + data);
//																			var paginator = $("#" + paginatorId);
//																			$(paginator).html("");
//																			$(paginator).css("visibility", "hidden");
//																			if(totalPages > 1){
//																				
//																				for(var i = 0; i < totalPages; i++){
//																					paginator.append('<li onclick="getUserMatchesPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
//																				}
//																				$(paginator).css("visibility", "visible");
//																				
//																																		
//																			}
//																		  }
//																	  }
//		);
//		
//	}else if(range == "allVisitors"){
//		$.get("/visitorsLog/visitor-actions-total", function(data){
//														if(data < MAX_QUERY_TOTAL * 20){														
//															var totalPages = data / MAX_QUERY_TOTAL;
//															//alert("Total results: " + data + ", total pages: " + Math.ceil(totalPages));
//															
//															if(totalPages > 1){
//																
//																var paginator = $("#" + paginatorId);
//																$(paginator).html("");
//																
//																for(var i = 0; i < totalPages; i++){
//																	paginator.append('<li onclick="getVisitorsPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
//																}
//																$(paginator).css("visibility", "visible");
//																//$(paginator).children(":first").addClass("active");
//															}
//														}
//												});
//	}else if(range == "searchVisitors"){
//		var search = ($("#srch-term").val() == undefined) ? $("#search-term").val() : $("#srch-term").val();
//		$.get("/visitorsLog/get-visitor-matches-total?search=" + search, function(data){
//			
//															console.log("Data we got: " + data);
//															
//															if(data < MAX_QUERY_TOTAL * 20){														
//																var totalPages = Math.ceil(data / MAX_QUERY_TOTAL);
//																//alert("Total results: " + data + ", total pages: " + totalPages);
//																var paginator = $("#" + paginatorId);
//																$(paginator).html("");
//																$(paginator).css("visibility", "hidden");
//																if(totalPages > 1){
//																	
//																	for(var i = 0; i < totalPages; i++){
//																		paginator.append('<li onclick="getVisitorMatchesPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
//																	}
//																	$(paginator).css("visibility", "visible");
//																	//$(paginator).children(":first").addClass("active");
//																}
//															}
//		});
//		
//	}else if(range == "similarVisitors"){
//		$.get("/visitorsLog/get-similar-records", function(data){
//														if(data < MAX_QUERY_TOTAL * 20){														
//															var totalPages = data / MAX_QUERY_TOTAL;
//															//alert("Total results: " + data + ", total pages: " + Math.ceil(totalPages));
//															
//															if(totalPages > 1){
//																var paginator = $("#" + paginatorId).html("");
//																for(var i = 0; i < totalPages; i++){
//																	paginator.append('<li onclick="getVisitorMatchesPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
//																}
//																$(paginator).css("visibility", "visible");
//																//$(paginator).children(":first").addClass("active");
//															}
//														}
//		});
//		
//	}
//	
//	
//}
//
//function getUsersPaginated(divisor, offset, paginatorId, event){
//	$.get("/visitorsLog/user-actions?total=" + divisor + "&offset=" + offset, function(data){
//																				//displayUsers("#user-actions", data);
//																				displayUsers("#manage-user-div", data);
//																				
//																			}
//	);
//	
//}
//
//function getUserMatchesPaginated(divisor, offset, paginatorId, event){
//	$.get("/visitorsLog/get-user-matches?total=" + divisor + "&offset=" + offset  + "&search=" + $("#srch-term").val(), function(data){
//																				//displayUsers("#user-actions", data);
//																				displayUsers("#manage-user-div", data);
//																				
//																			}
//	);
//	
//}
//
//function getVisitorsPaginated(divisor, offset, paginatorId, event){
//	$.get("/visitorsLog/visitor-actions?total=" + divisor + "&offset=" + offset, function(data){
//																				displayVisitors("#visitor-actions", data);
//																				displayVisitors("#all-visitors", data);
//																				
//																			}
//	);
//	
//}
//
//function getVisitorMatchesPaginated(divisor, offset, paginatorId, event){
//	var search = ($("#srch-term").val() == undefined) ? $("#search-term").val() : $("#srch-term").val();
//	$.get("/visitorsLog/get-visitor-matches?total=" + divisor + "&offset=" + offset + "&search=" + search, function(data){
//																				displayVisitors("#visitor-actions", data);
//																				displayVisitors("#all-visitors", data);
//																				
//																			}
//	);
//	
//}


//function interpretDate(rawDateTime){
//	  var lastLoginDay;
//	  var lastLoginTime;
//	  	  
//	  if(rawDateTime != "" && rawDateTime != null){
//		  var rawDateTimeArray = rawDateTime.split(" ");
//		  //console.log("date is: " + rawDateTimeArray[0]);
//		  //console.log("time is: " + rawDateTimeArray[1]);
//		  var rawDateArray = rawDateTimeArray[0].split("-");
//		  var rawTimeArray = rawDateTimeArray[1].split(":");
//		  
//		  var todaysDate = getTodaysDate();
//		  //console.log("Today's Date: " + todaysDate);
//		  //console.log("current day: " + currentDay);
//		  //console.log("current month: " + currentMonth);
//		  
//		  if(rawDateTimeArray[0] == todaysDate){
//			  lastLoginDay = "Today "; 
//		  }else{
//			  var monthDifference = (currentMonth - rawDateArray[1] >= 0) ? currentMonth - rawDateArray[1] : currentMonth - rawDateArray[1] + 12;
//			  if(monthDifference == 0){
//				  if(rawDateArray[0] == currentYear && rawDateArray[1] == currentMonth && rawDateArray[2] == (currentDay - 1)){
//					  lastLoginDay = "Yesterday ";
//				  }else if(currentDay - rawDateArray[2] > 1){
//					  lastLoginDay = (currentDay - rawDateArray[2]) + " days ago ";
//				  }
//			  }else if(monthDifference == 1){
//				  var daysDifference;
//				  if(currentMonth == 1){
//					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(12);
//					  if(daysDifference == 1)
//						  lastLoginDay = "Yesterday ";
//					  else
//						  lastLoginDay = daysDifference + " days ago ";
//				  }else{
//					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(currentMonth - 1);
//					  if(daysDifference == 1)
//						  lastLoginDay = "Yesterday ";
//					  else
//						  lastLoginDay = daysDifference + " days ago ";
//				  }
//			  }else if(monthDifference > 1){
//				  var monthsAgo = monthDifference - 1;
//				  if(currentMonth == 1){
//					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(12);
//					  lastLoginDay = monthsAgo + ((monthsAgo == 1) ? " month, " : " months, ") + daysDifference + ((daysDifference == 1) ? " day ago " : " days ago ");
//				  }else{
//					  daysDifference = currentDay - rawDateArray[2] + getTotalMonthDays(currentMonth - 1);
//					  lastLoginDay = monthsAgo + ((monthsAgo == 1) ? " month, " : " months, ") + daysDifference + ((daysDifference == 1) ? " day ago " : " days ago ");
//				  }
//			  }
//			  
//		  }
//		  
//		  lastLoginTime = rawTimeArray[0] + ":" + rawTimeArray[1];
//		  
//		  return lastLoginDay + lastLoginTime;
//	  }else 
//		  return "";
//	
//}
//
//function interpretTime(rawTime){
//	  	  	  
//	  if(rawTime != ("" || null)){
//		  var rawTimeArray = rawTime.split(":");
//		  		  
//		  return rawTimeArray[0] + ":" + rawTimeArray[1];
//	  }else 
//		  return "";
//	
//}
//
//function getTotalMonthDays(month){
//	switch(month){
//	case 1: return 31; break;
//	case 2: if(currentYear % 4 == 0){ return 29 }else{return 28}; break;
//	case 3: return 31; break;
//	case 4: return 30; break;
//	case 5: return 31; break;
//	case 6: return 30; break;
//	case 7: return 31; break;
//	case 8: return 31; break;
//	case 9: return 30; break;
//	case 10: return 31; break;
//	case 11: return 30; break;
//	case 12: return 31; 
//	}
//}


//function displayVisitors(target, data){
//	
//	var table = $(target).find(".table");
//	  table.html("");
//	  table.append(`<thead>
//	  			<tr>					 			
//	 				<th>
//	 					Select
//	 				</th><th>
//	 					Picture
//	 				</th><th>
//	 					Name
//	 				</th><th>
//	 					Sex
//	 				</th><th>
//	 					Phone
//	 				</th><th style="word-wrap: break-word ;max-width: 100px;">
//	 					Email
//	 				</th><th>
//	 					Country
//	 				</th><th>
//	 					Last Visit
//	 				</th><th>
//	 					Blacklist
//	 				</th>
//	 			</tr>
//	 		</thead>`);
//	  var allVisitors = JSON.parse(data);
//	  //console.log(allVisitors);
//	  var tableBody = $("<tbody></tbody>");
//	  table.append(tableBody);
//	  
//	  var tableRow;
//	  var tableData;
//	  var visitorCountry
//	  var lastVisit;
//	  
//	 
//	  allVisitors.forEach(function(visitor){
//		  		  
//		  tableRow = $('<tr id="' + visitor["id"] + '" class="table-row-item"></tr>');															  
//		  tableBody.append(tableRow);
//		  
//		  tableData = $('<td ><input id="id-' + visitor["id"] + '" type="checkbox" /></td>');
//		  tableRow.append(tableData);
//		  
//		  tableData = $('<td><img onclick = "tableRowItemClick(event);" src="' + visitor["picLocation"] + '" style="width: 30px;"/></td>');
//		  tableRow.append(tableData);
//		  
//		  tableData = $('<td id="name-' + visitor["id"] + '" onclick = "tableRowItemClick(event);" >' + visitor["firstName"] + (($.trim(visitor["middleName"]) == "") ? " " : " " + visitor["middleName"] + " ")  + visitor["lastName"] + '</td>');
//		  tableRow.append(tableData);
//		  
//		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitor["sex"] + '</td>');
//		  tableRow.append(tableData);
//		  
//		  //tableData = $('<td>' + visitor["phone1"] + (($.trim(visitor["phone2"]) == "0") ? "" : ", " + visitor["phone2"] ) + '</td>');
//		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitor["phone1"] + '</td>');
//		  tableRow.append(tableData);
//		  
//		  tableData = $('<td onclick = "tableRowItemClick(event);" style="word-wrap: break-word ;max-width: 100px;">' + visitor["email"] + '</td>');
//		  tableRow.append(tableData);
//		  
//		  visitorCountry = function(){
//	  			for(var i = 0; i < allCountries.length; i++){
//	  				if(allCountries[i]["id"] == visitor["country"])
//	  					return allCountries[i]["name"];
//	  			}
//		  };
//		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitorCountry() + '</td>');
//		  tableRow.append(tableData);
//		  
//		  
//		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitor["lastVisit"] + '</td>');
//		  tableRow.append(tableData);
//		  
//		  
//		  tableData = $('<td id="blacklist-' + visitor["id"] + '" onclick = "tableRowItemClick(event);">' + getYesOrNo(visitor["blacklisted"]) + '</td>');
//		  tableRow.append(tableData);
//		  
//		  
//	  });
//	  
//}
//
//
//function displayUserMatches(search, tableContainer){
//	if(search != ""){
//		$.get("/visitorsLog/get-user-matches?search=" + search, function(data){
//			//console.log(data);
//			displayUsers(tableContainer, data);			
//			preparePagination("searchUsers", MAX_QUERY_TOTAL, "pagination");
//		  });
//	}else{
//		$.get("/visitorsLog/user-actions", function(data){
//			displayUsers(tableContainer, data);
//			preparePagination("allUsers", MAX_QUERY_TOTAL, "pagination");
//		  });
//	}
//	
//	
//}
//
//
//function displayVisitorMatches(search, tableContainer){
//	if(search != ""){
//		$.get("/visitorsLog/get-visitor-matches?search=" + search, function(data){
//			//console.log(data);
//			displayVisitors(tableContainer, data);
//		  });
//	}else{
//		$.get("/visitorsLog/visitor-actions", function(data){
//			displayVisitors(tableContainer, data);
//		  });
//	}
//		
//}


/*
* Method to build the filter query
*
**/
//function buildFilterQuery(){
//	
//	var queryArray = new Array();
//	
//	var filterArrivalFrom = $("#filter-arrival-from").val();
//	var filterArrivalTo = $("#filter-arrival-to").val();
//	
//	var filterDepartureFrom = $("#filter-departure-from").val();
//	var filterDepartureTo = $("#filter-departure-to").val();
//	
//	var filterMale = $("#filter-male");
//	var filterFemale = $("#filter-female");
//	var filterOther = $("#filter-other");
//	
//	var filterSingle = $("#filter-single");
//	var filterMarried = $("#filter-married");
//	var filterDivorced = $("#filter-divorced");
//	var filterWidowed = $("#filter-widowed");
//	var filterSeparated = $("#filter-separated");
//	var filterEngaged = $("#filter-engaged");
//	
//	var filterAgeFrom = $("#filter-age-from").val();
//	var filterAgeTo = $("#filter-age-to").val();
//	
//	var filterCountrySelect = $("#filter-country-select").val();
//	var filterOccupationSelect = $("#filter-occupation-select").val();
//	
//	var filterMinistryInput = $("#filter-ministry-input").val();	
//	var filterPhoneNo = $("#filter-phone-no").val();
//	
//	var filterEmail = $("#filter-email").val();	
//	var filterWebsite = $("#filter-website").val();
//	
//	var filterVisitsFrom = $("#filter-visits-from").val();
//	var filterVisitsTo = $("#filter-visits-to").val();
//	
//	var filterPassportYes = $("#filter-passport-yes");
//	var filterPassportNo = $("#filter-passport-no");
//	
//	var filterMedReportYes = $("#filter-med-report-yes");
//	var filterMedReportNo = $("#filter-med-report-no");
//	
//	var filterTakingMedsYes = $("#filter-taking-meds-yes");
//	var filterTakingMedsNo = $("#filter-taking-meds-no");
//	
//	var filterIsPartnerYes = $("#filter-is-partner-yes");
//	var filterIsPartnerNo = $("#filter-is-partner-no");
//	
//	var filterBlacklistedYes = $("#filter-blacklisted-yes");
//	var filterBlacklistedNo = $("#filter-blacklisted-no");
//	
//	//We begin building string here
//	
//	if(filterArrivalFrom != "" && filterArrivalTo != ""){
//		queryArray.push(" v.arrival_date BETWEEN '" + filterArrivalFrom + "' AND '" + filterArrivalTo + "' ");
//	}else if(filterArrivalFrom != "" && filterArrivalTo == ""){
//		queryArray.push(" v.arrival_date = '" + filterArrivalFrom + "' ");
//	}else if(filterArrivalFrom == "" && filterArrivalTo != ""){
//		queryArray.push(" v.arrival_date = '" + filterArrivalTo + "' ");
//	}
//	
//	if(filterDepartureFrom != "" && filterDepartureTo != ""){
//		queryArray.push(" v.departure_date BETWEEN '" + filterDepartureFrom + "' AND '" + filterDepartureTo + "' ");
//	}else if(filterDepartureFrom != "" && filterDepartureTo == ""){
//		queryArray.push(" v.departure_date = '" + filterDepartureFrom + "' ");
//	}else if(filterDepartureFrom == "" && filterDepartureTo != ""){
//		queryArray.push(" v.departure_date = '" + filterDepartureTo + "' ");
//	}
//	
//	var sexArray = new Array();
//	
//	if($(filterMale).is(":checked")){
//		sexArray.push("M");
//	}
//	
//	if($(filterFemale).is(":checked")){
//		sexArray.push("F")
//	}
//	
//	if($(filterOther).is(":checked")){
//		sexArray.push("O")
//	}
//	
//	if(sexArray.length != (0 || 3)){
//		var queryString = "";
//		for(var i = 0; i < sexArray.length; i++){
//			queryString += " vr.sex = '" + sexArray[i] + "' OR ";
//		}
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}
//	
//	
//	var marriedArray = new Array();
//	var maritalId;
//	
//	if($(filterSingle).is(":checked")){
//		maritalId = getMaritalStatusIdWithName("Single");
//		marriedArray.push(maritalId);
//	}
//	
//	if($(filterMarried).is(":checked")){
//		maritalId = getMaritalStatusIdWithName("Married");
//		marriedArray.push(maritalId);
//	}
//	
//	if($(filterDivorced).is(":checked")){
//		maritalId = getMaritalStatusIdWithName("Divorced");
//		marriedArray.push(maritalId);
//	}
//	
//	if($(filterWidowed).is(":checked")){
//		maritalId = getMaritalStatusIdWithName("Widowed");
//		marriedArray.push(maritalId);
//	}
//	
//	if($(filterSeparated).is(":checked")){
//		maritalId = getMaritalStatusIdWithName("Separated");
//		marriedArray.push(maritalId);
//	}
//	
//	if($(filterEngaged).is(":checked")){
//		maritalId = getMaritalStatusIdWithName("Engaged");
//		marriedArray.push(maritalId);
//	}
//	
//	if(marriedArray.length != (0 || 6)){
//		
//		var queryString = "";
//		
//		for(var i = 0; i < marriedArray.length; i++){
//			queryString += " vr.marital_status = " + marriedArray[i] + " OR ";
//		}
//		
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}
//	
//	if(filterAgeFrom != "" && filterAgeTo != ""){
//		var year  = parseInt(getTodaysDate().split("-")[0]);
//		
//		var yearBorn1 = (year - filterAgeFrom) + "-01-01";
//		var yearBorn2 = (year - filterAgeTo) + "-12-31";
//		
//		queryArray.push(" vr.dob BETWEEN '" + yearBorn2 + "' AND '" + yearBorn1 + "' ");
//		
//	}else if(filterAgeFrom != "" && filterAgeTo == ""){
//		var year  = parseInt(getTodaysDate().split("-")[0]);
//		var yearBornBegin = (year - filterAgeFrom) + "-01-01";
//		var yearBornEnd = (year - filterAgeFrom) + "-12-31";
//		
//		queryArray.push(" vr.dob BETWEEN '" + yearBornBegin + "' AND '" + yearBornEnd + "' ");
//		
//	}else if(filterAgeFrom == "" && filterAgeTo != ""){
//		var year  = parseInt(getTodaysDate().split("-")[0]);
//		var yearBornBegin = (year - filterAgeTo) + "-01-01";
//		var yearBornEnd = (year - filterAgeTo) + "-12-31";
//		
//		queryArray.push(" vr.dob BETWEEN '" + yearBornBegin + "' AND '" + yearBornEnd + "' ");
//	}
//	
//	if(filterCountrySelect != 0){
//		queryArray.push(" vr.country_id = " + filterCountrySelect + " ");
//	}
//	
//	if(filterOccupationSelect != 0){
//		queryArray.push(" vr.occupation_id = " + filterOccupationSelect + " ");
//	}
//	
//	if(filterMinistryInput != ""){
//		queryArray.push(" vr.ministry LIKE '%" + filterMinistryInput + "%' ");
//	}
//	
//	if(filterPhoneNo != ""){
//		queryArray.push(" vr.phone1 LIKE '%" + filterPhoneNo + "%' OR phone2 LIKE '%" + filterPhoneNo + "%' ");
//	}
//	
//	if(filterEmail != ""){
//		queryArray.push( " vr.email LIKE '%" + filterEmail + "%' ");
//	}
//	
//	if(filterWebsite != ""){
//		queryArray.push(" vr.website LIKE '%" + filterWebsite + "%' ");
//	}
//	
//	
//	var hasPassportArray = new Array()
//	if($(filterPassportYes).is(":checked")){
//		hasPassportArray.push(" vr.has_passport = 'Y'");
//	}	
//	if($(filterPassportNo).is(":checked")){
//		hasPassportArray.push(" vr.has_passport = 'N'");
//	}
//	if(hasPassportArray.length != (0 || 2)){
//		
//		var queryString = "";
//		
//		for(var i = 0; i < hasPassportArray.length; i++){
//			queryString += hasPassportArray[i] + " OR ";
//		}
//		
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}
//	
//	var medReportArray = new Array()
//	if($(filterMedReportYes).is(":checked")){
//		medReportArray.push(" v.has_med_report = 'Y'");
//	}	
//	if($(filterMedReportNo).is(":checked")){
//		medReportArray.push(" v.has_med_report = 'N'");
//	}
//	if(medReportArray.length != (0 || 2)){
//		
//		var queryString = "";
//		
//		for(var i = 0; i < medReportArray.length; i++){
//			queryString += medReportArray[i] + " OR ";
//		}
//		
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}
//	
//	var takingMedsArray = new Array()
//	if($(filterTakingMedsYes).is(":checked")){
//		takingMedsArray.push(" v.on_meds_on_arrival = 'Y'");
//	}	
//	if($(filterTakingMedsNo).is(":checked")){
//		takingMedsArray.push(" v.on_meds_on_arrival = 'N'");
//	}
//	if(takingMedsArray.length != (0 || 2)){
//		
//		var queryString = "";
//		
//		for(var i = 0; i < takingMedsArray.length; i++){
//			queryString += takingMedsArray[i] + " OR ";
//		}
//		
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}
//	
//	
//	var partnerNoArray = new Array()
//	if($(filterIsPartnerYes).is(":checked")){
//		partnerNoArray.push(" vr.is_partner = 'Y'");
//	}	
//	if($(filterIsPartnerNo).is(":checked")){
//		partnerNoArray.push(" vr.is_partner = 'N'");
//	}
//	if(partnerNoArray.length != (0 || 2)){
//		
//		var queryString = "";
//		
//		for(var i = 0; i < partnerNoArray.length; i++){
//			queryString += partnerNoArray[i] + " OR ";
//		}
//		
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}	
//	
//	
//	var blacklistedArray = new Array()
//	if($(filterBlacklistedYes).is(":checked")){
//		blacklistedArray.push(" vr.blacklisted = 'Y'");
//	}	
//	if($(filterBlacklistedNo).is(":checked")){
//		blacklistedArray.push(" vr.blacklisted = 'N'");
//	}	
//	if(blacklistedArray.length != (0 || 2)){
//		
//		var queryString = "";
//		
//		for(var i = 0; i < blacklistedArray.length; i++){
//			queryString += blacklistedArray[i] + " OR ";
//		}
//		
//		if(queryString != "")
//			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
//	}
//	
//	var query = "SELECT   vr.*, v.visitor_id, COUNT(v.visitor_id) as no_of_visits, MAX(v.arrival_date) as lastVisit, v.arrival_date, v.reason_of_visit, v.departure_date, " + 
//				" v.has_med_report, v.on_meds_on_arrival FROM visitors as vr JOIN visits as v  ON v.visitor_id = vr.id ";
//	
//	if(queryArray.length > 0){
//		for(var i = 0; i < queryArray.length; i++){
//			query += ((i == 0) ? " WHERE " + queryArray[i] + " AND " : queryArray[i] + " AND ");
//		}
//		
//		query = query.substring(0, query.lastIndexOf("AND"));
//	}
//	
//	query += " GROUP BY vr.id"			
//	
//	if(filterVisitsFrom != "" && filterVisitsTo != ""){
//		query += " HAVING no_of_visits BETWEEN " + filterVisitsFrom + " AND " + filterVisitsTo + " ";
//	}else if(filterVisitsFrom != "" && filterVisitsTo == ""){
//		query += " HAVING no_of_visits = " + filterVisitsFrom + " ";
//	}else if(filterVisitsFrom == "" && filterVisitsTo != ""){
//		query += " HAVING no_of_visits " + filterVisitsTo + " ";
//	}
//		
//	console.log(query);
//		
//	$.get("/visitorsLog/get-filter-search?query=" + escape(query), function(data){
//																//console.log(data);
//																$(".pagination").html("");
//																$(".pagination").css("visibility", "hidden");
//																displayVisitors($("#all-visitors"), data);
//																$("html, body").animate({scrollTop: 0}, "slow");
//														  });
//	
//	
//}


////==========================================================================================================================================================================================================
////==================================================== METHODS TO EDIT VISITOR / USER DETAILS ==============================================================================================================
////==========================================================================================================================================================================================================
//
//function editDetailsEntry(ev){
//	//console.log(ev.target);
//		
//	switch($(ev.target).attr("id")){
//	
//		case "visitor-name-edit":toggleVisitorName(ev, $("#visitor-name-inputs")); break;
//		case "visitor-name-cancel": resetEditedValue("visitor-name-cancel", "visitor-first-name", initialFirstName, "visitor-name-inputs"); 
//								 	resetEditedValue("visitor-name-cancel", "visitor-middle-name", initialMiddleName, "visitor-name-inputs");
//								 	resetEditedValue("visitor-name-cancel", "visitor-last-name", initialLastName, "visitor-name-inputs");
//								 	break;
//		
//		case "visitor-dob-edit": toggleEditablePicker(ev, "visitor-dob"); break;
//		case "visitor-dob-cancel": resetEditedValue("visitor-dob-cancel", "visitor-dob", initialDob, "visitor-dob-picker"); break;
//		
//		case "visitor-sex-edit": toggleEditableCheck(ev, "visitor-sex"); break;
//		case "visitor-sex-cancel": resetEditedValue("visitor-sex-cancel", "visitor-sex", initialSex, "visitor-sex-check"); break;
//		
//		case "visitor-marital-status-edit": toggleEditableSelect(ev, "visitor-marital-status"); break;
//		case "visitor-marital-status-cancel": resetEditedValue("visitor-marital-status-cancel", "visitor-marital-status", initialMaritalStatus, "visitor-marital-status-select"); break;
//		
//		case "visitor-country-edit": toggleEditableSelect(ev, "visitor-country"); break;
//		case "visitor-country-cancel": resetEditedValue("visitor-country-cancel", "visitor-country", initialCountry, "visitor-country-select"); break;
//		
//		case "visitor-phone-edit": toggleEditable(ev, "visitor-phone"); break;
//		case "visitor-phone-cancel": resetEditedValue("visitor-phone-cancel", "visitor-phone", initialPhone1, "visitor-phone-select"); break;
//		
//		case "visitor-email-edit": toggleEditable(ev, "visitor-email"); break;
//		case "visitor-email-cancel": resetEditedValue("visitor-email-cancel", "visitor-email", initialEmail, "visitor-email-select"); break;
//		
//		case "visitor-website-edit": toggleEditable(ev, "visitor-website"); break;
//		case "visitor-website-cancel": resetEditedValue("visitor-website-cancel", "visitor-website", initialWebsite, "visitor-website-select"); break;
//		
//		case "visitor-occupation-edit": toggleEditableSelect(ev, "visitor-occupation"); break;
//		case "visitor-occupation-cancel": resetEditedValue("visitor-occupation-cancel", "visitor-occupation", initialOccupation, "visitor-occupation-select"); break;
//		
//		case "visitor-ministry-edit": toggleEditable(ev, "visitor-ministry"); break;
//		case "visitor-ministry-cancel": resetEditedValue("visitor-ministry-cancel", "visitor-ministry", initialMinistry, "visitor-ministry-select"); break;
//		
//		case "visitor-partner-edit": toggleEditableCheck(ev, "visitor-partner"); break;
//		case "visitor-partner-cancel": resetEditedValue("visitor-partner-cancel", "visitor-partner", initialIsPartner, "visitor-partner-check"); break;
//		
//		case "visitor-blacklist-edit": toggleEditableCheck(ev, "visitor-blacklist"); break;
//		case "visitor-blacklist-cancel": resetEditedValue("visitor-blacklist-cancel", "visitor-blacklist", initialBlacklisted, "visitor-blacklist-check"); break;
//		
//		/*
//		*The manage user page=============================================================================================================================================================
//		*/
//		
//		case "user-name-edit": toggleUserName(ev, $("#user-name-inputs")); break;
//		case "user-name-cancel": resetEditedValue("user-name-cancel", "user-first-name", initialFirstName, "user-name-inputs"); 
//								 resetEditedValue("user-name-cancel", "user-middle-name", initialMiddleName, "user-name-inputs");
//								 resetEditedValue("user-name-cancel", "user-last-name", initialLastName, "user-name-inputs");
//								 break;
//		
//		case "user-name-edit": toggleUserName(ev, $("#user-name-inputs")); break;
//		
//		
//		case "user-dob-edit": toggleEditablePicker(ev, "user-dob"); break;
//		case "user-dob-cancel": resetEditedValue("user-dob-cancel", "user-dob", initialDob, "user-dob-picker"); break;
//		
//		case "user-sex-edit": toggleEditableCheck(ev, "user-sex"); break;
//		case "user-sex-cancel": resetEditedValue("user-sex-cancel", "user-sex", initialSex, "user-sex-check"); break;
//		
//		case "user-marital-status-edit": toggleEditableSelect(ev, "user-marital-status"); break;
//		case "user-marital-status-cancel": resetEditedValue("user-marital-status-cancel", "user-marital-status", initialMaritalStatus, "user-marital-status-select"); break;
//		
//		case "user-role-edit": toggleEditableCheck(ev, "user-role"); break;
//		case "user-role-cancel": resetEditedValue("user-role-cancel", "user-role", initialRole, "user-role-check"); break;
//		
//		case "user-account-status-edit": toggleEditableCheck(ev, "user-account-status"); break;
//		case "user-account-status-cancel": resetEditedValue("user-account-status-cancel", "user-account-status", initialAccountStatus, "user-account-status-check"); break;
//		
//	}
//	
//	return false;
//}
//
//function toggleVisitorName(ev, accompInput){
//	if($(ev.target).text() == "edit"){
//		$("#visitor-name").addClass("invisible");
//		$(accompInput).removeClass("invisible");
//		$(accompInput).focus();
//		$(ev.target).text("save");
//		$("#visitor-name-cancel").removeClass("invisible");
//	}else if($(ev.target).text() == "save"){
//		
//		$("#visitor-name-cancel").addClass("invisible");
//		$("#visitor-name").removeClass("invisible");
//		$(accompInput).addClass("invisible");	
//				
//		var firstName = $("#visitor-first-name").val();
//		var middleName = $("#visitor-middle-name").val();
//		var lastName = $("#visitor-last-name").val();
//		
//		$("#visitor-name").val( firstName + " " + middleName + " " + lastName);
//		
//		$(ev.target).text("edit");
//		
//		initialFirstName = (initialFirstName == undefined )? "" : initialFirstName;
//		finalFirstName = (firstName == undefined) ? "" : firstName;
//		
//		initialMiddleName = (initialMiddleName == undefined) ? "" : initialMiddleName;
//		finalMiddleName = (middleName == undefined) ? "" : middleName;
//		
//		initialLastName = (initialLastName == undefined) ? "" : initialLastName;
//		finalLastName = (lastName == undefined) ? "" : lastName;
//		
//		//alert("firstname: " + firstName + ", middlename: " + middleName + ", lastname: " + lastName);
//		
//		//then we register this change in the database.....................
//		var visitorId = $("#id-location").val();
//		$.post("/visitorsLog/update-name", {"table" : "visitors", "id" : visitorId, "initialFirstName" : initialFirstName, "finalFirstName" : finalFirstName, 
//				"initialMiddleName" : initialMiddleName, "finalMiddleName" : finalMiddleName, "initialLastName" : initialLastName, 
//				"finalLastName" : finalLastName }, function(data){
//														alert(data);
//													}
//		);
//		
//	}
//}
//
//function toggleUserName(ev, accompInput){
//	if($(ev.target).text() == "edit"){
//		$("#user-name").addClass("invisible");
//		$(accompInput).removeClass("invisible");
//		$(accompInput).focus();
//		$(ev.target).text("save");
//		$("#user-name-cancel").removeClass("invisible");
//	}else if($(ev.target).text() == "save"){
//		$("#user-name-cancel").addClass("invisible");
//		$("#user-name").removeClass("invisible");
//		$(accompInput).addClass("invisible");		
//		
//		var firstName = $("#user-first-name").val();
//		var middleName = $("#user-middle-name").val();
//		var lastName = $("#user-last-name").val();
//		
//		$("#user-name").val( firstName + " " + middleName + " " + lastName);
//		
//		$(ev.target).text("edit");
//		
//		initialFirstName = (initialFirstName == undefined )? "" : initialFirstName;
//		finalFirstName = (firstName == undefined) ? "" : firstName;
//		
//		initialMiddleName = (initialMiddleName == undefined) ? "" : initialMiddleName;
//		finalMiddleName = (middleName == undefined) ? "" : middleName;
//		
//		initialLastName = (initialLastName == undefined) ? "" : initialLastName;
//		finalLastName = (lastName == undefined) ? "" : lastName;
//		
//		//alert("firstname: " + firstName + ", middlename: " + middleName + ", lastname: " + lastName);
//		
//		//then we register this change in the database.....................
//		var userId = $("#id-location").val();
//		$.post("/visitorsLog/update-name", {"table" : "users_tb", "id" : userId, "initialFirstName" : initialFirstName, "finalFirstName" : finalFirstName, 
//				"initialMiddleName" : initialMiddleName, "finalMiddleName" : finalMiddleName, "initialLastName" : initialLastName, 
//				"finalLastName" : finalLastName }, function(data){
//															alert(data);
//														}
//		);
//		
//		
//	}
//}
//
//function toggleEditable(ev, accompInput){
//	console.log(accompInput);
//	var cancel = accompInput + "-cancel";
//	var edit = accompInput + "-edit";
//	if($(ev.target).text() == "edit"){
//		$("#" + accompInput).attr("readonly", false);
//		$("#" + accompInput).removeClass("form-control-plaintext").addClass("form-control").removeClass("transparent");
//		$("#" + cancel).removeClass("invisible");
//		$("#" + accompInput).focus();
//		$(ev.target).text("save");
//	}else if($(ev.target).text() == "save"){
//		$("#" + accompInput).attr("readonly", true);
//		$("#" + accompInput).addClass("transparent").removeClass("form-control").addClass("form-control-plaintext");
//		$("#" + cancel).addClass("invisible");
//		$(ev.target).text("edit");
//		
//		var visitorId = $("#id-location").val();
//		
//		//then we save the result....
//		if(accompInput == "visitor-phone"){
//			
////			console.log("/visitorsLog/update-phone?id=" +  visitorId + "&initialPhone=" + initialPhone1 + 
////					"&finalPhone=" + $("#visitor-phone").val());
//			$.post("/visitorsLog/update-phone?id=" +  visitorId + "&initialPhone=" + initialPhone1 + 
//					"&finalPhone=" + $("#visitor-phone").val(), function(data){
//																alert(data);
//															 }
//			);
//		}else if(accompInput == "visitor-email"){
////			console.log("/visitorsLog/update-email?id=" +  visitorId + "&initialEmail=" + initialEmail + 
////					"&finalEmail=" + $("#visitor-email").val());
//			$.post("/visitorsLog/update-email?id=" +  visitorId + "&initialEmail=" + initialEmail + 
//					"&finalEmail=" + $("#visitor-email").val(), function(data){
//																alert(data);
//															 }
//			);
//		}else if(accompInput == "visitor-website"){
////			console.log("/visitorsLog/update-website?id=" +  visitorId + "&initialWebsite=" + initialWebsite + 
////					"&finalWebsite=" + $("#visitor-website").val());
//			$.post("/visitorsLog/update-website?id=" +  visitorId + "&initialWebsite=" + initialWebsite + 
//					"&finalWebsite=" + $("#visitor-website").val(), function(data){
//																alert(data);
//															 }
//			);
//		}else if(accompInput == "visitor-ministry"){
////			console.log("/visitorsLog/update-ministry?id=" +  visitorId + "&initialMinistry=" + initialMinistry + 
////					"&finalMinistry=" + $("#visitor-ministry").val());
//			$.post("/visitorsLog/update-ministry?id=" +  visitorId + "&initialMinistry=" + initialMinistry + 
//					"&finalMinistry=" + $("#visitor-ministry").val(), function(data){
//																alert(data);
//															 }
//			);
//		}
//		
//		
//		
//	}		
//	
//}
//
//function toggleEditableSelect(ev, accompInput){
//	var select = accompInput + "-select";
//	var cancel = accompInput + "-cancel";
//	var edit = accompInput + "-edit";
//	//console.log(select);
//	if($(ev.target).text() == "edit"){
//		
//		console.log("The value after clicking edit: " + $("#" + accompInput).val());
//		
//		$("#" + accompInput).addClass("invisible");
//		$("#" + cancel).removeClass("invisible");
//		$("#" + select).removeClass("invisible");
//		$("#" + select).focus();
//		$(ev.target).text("save");
//	}else if($(ev.target).text() == "save"){
//		$("#" + accompInput).removeClass("invisible");
//		$("#" + cancel).addClass("invisible");
//		$("#" + select).addClass("invisible");
//		$(ev.target).text("edit");
//		
//		console.log($("#" + select).val());
//		
//		//$("#" + accompInput).val(getMaritalStatusWithId($("#" + select).val()));
//				
//		if($("#" + select).val() != 0){
//			if(select.indexOf("marital") != -1){
//				$("#" + accompInput).val(getMaritalStatusWithId($("#" + select).val()));
//								
//				if(accompInput.indexOf("user") != -1){
//					var table = "users_tb";
//					var userId = $("#id-location").val();
//					$.post("/visitorsLog/update-marital-status?table=" + table + "&id=" +  userId + "&initialMaritalStatus=" + getMaritalStatusIdWithName(initialMaritalStatus) + 
//							"&finalMaritalStatus=" + getMaritalStatusIdWithName($("#" + accompInput).val()), function(data){
//																												alert(data);
//																											}
//					);
//					
//				}else if(accompInput.indexOf("visitor") != -1){
//					var table = "visitors";
//					var visitorId = $("#id-location").val();
//					$.post("/visitorsLog/update-marital-status?table=" + table + "&id=" +  visitorId + "&initialMaritalStatus=" + getMaritalStatusIdWithName(initialMaritalStatus) + 
//							"&finalMaritalStatus=" + getMaritalStatusIdWithName($("#" + accompInput).val()), function(data){
//																												alert(data);
//																											}
//					);
//					
//				}
//				
//			}else if(select.indexOf("country") != -1){
//				$("#" + accompInput).val(getCountryWithId($("#" + select).val()));
//			
//				var table = "visitors";
//				var visitorId = $("#id-location").val();
//				console.log("/visitorsLog/update-country?table=visitors&id=" +  visitorId + "&initialCountry=" + $("#country-location").val() + 
//						"&finalCountry=" + $("#" + select).val());
//				$.post("/visitorsLog/update-country?table=visitors&id=" +  visitorId + "&initialCountry=" + $("#country-location").val() + 
//						"&finalCountry=" + $("#" + select).val(), function(data){
//																	alert(data);
//																 }
//				);
//			
//			}else if(select.indexOf("occupation") != -1){
//				$("#" + accompInput).val(allOccupations[($("#" + select).val()) - 1].occupation); //Need to figure out what's going on here.....................................
//				
//				var table = "visitors";
//				var visitorId = $("#id-location").val();
////				console.log("/visitorsLog/update-occupation?table=visitors&id=" +  visitorId + "&initialOccupation=" + $("#occupation-location").val() + 
////						"&finalOccupation=" + $("#" + select).val());
//				$.post("/visitorsLog/update-occupation?table=visitors&id=" +  visitorId + "&initialOccupation=" + $("#occupation-location").val() + 
//						"&finalOccupation=" + $("#" + select).val(), function(data){
//																		alert(data);
//																	 }
//				);
//			}
//			
//			//console.log($("#" + accompInput));
//		}
//		
//		
//	}
//	
//}
//
//function toggleEditableCheck(ev, accompInput){
//	var check = accompInput + "-check";
//	var cancel = accompInput + "-cancel";
//	var edit = accompInput + "-edit";
//	console.log(check);
//	if($(ev.target).text() == "edit"){
//		$("#" + cancel).removeClass("invisible");
//		$("#" + check).removeClass("invisible");
//		$("#" + check).focus();
//		$(ev.target).text("save");
//	}else if($(ev.target).text() == "save"){
//		$("#" + cancel).addClass("invisible");
//		$("#" + check).addClass("invisible");
//		$(ev.target).text("edit");
//		
//		var selected = $("input[type=radio][name=" + accompInput + "-value]:checked");	
//		//console.log($(selected).val());
//		if($(selected).val() != (undefined || null))
//			$("#" + accompInput).val($(selected).val());
//		
//		console.log("The value that was selected: " + $(selected).val());
//		console.log("The value that was set on accompInput: " + $("#" + accompInput).val());
//		
//		
//		//Then we save the new sex....
//		if(accompInput.indexOf("sex") != -1){
//			
//			var table = "";
//			var userId = $("#id-location").val();
//			
//			if(accompInput.indexOf("user") != -1){
//				table = "users_tb";
//			}else if(accompInput.indexOf("visitor") != -1){
//				table = "visitors";
//			}
//			if(initialSex != finalSex){	
//				$.post("/visitorsLog/update-sex?table=" + table + "&id=" +  userId + "&initialSex=" + getInitialFromSex(initialSex) + 
//						"&finalSex=" + getInitialFromSex($("#" + accompInput).val()), function(data){
//																						alert(data);
//																					}
//				);
//			}
//		}else if(accompInput.indexOf("role") != -1){
//			var userId = $("#id-location").val();
//			if(initialRole != finalRole){	
////				console.log("/visitorsLog/update-user-role?table=users_tb&id=" +  userId + "&initialRole=" + $("#role-location").val() + 
////						"&finalRole=" + getIdFromRole($("#" + accompInput).val()));
//				$.post("/visitorsLog/update-user-role?table=users_tb&id=" +  userId + "&initialRole=" + $("#role-location").val() + 
//						"&finalRole=" + getIdFromRole($("#" + accompInput).val()), function(data){
//																					alert(data);
//																				  }
//				); 
//			}
//		}else if(accompInput.indexOf("account-status") != -1){
//			var userId = $("#id-location").val();
//			if(initialAccountStatus != finalAccountStatus){	
////				console.log("/visitorsLog/update-user-account-status?table=users_tb&id=" +  userId + "&initialAccountStatus=" + $("#account-status-location").val() + 
////						"&finalAccountStatus=" + getIdFromAccountStatus($("#" + accompInput).val()));
//				$.post("/visitorsLog/update-user-account-status?table=users_tb&id=" +  userId + "&initialAccountStatus=" + $("#account-status-location").val() + 
//						"&finalAccountStatus=" + getIdFromAccountStatus($("#" + accompInput).val()), function(data){
//																					alert(data);
//																				  }
//				); 
//			}
//		}else if(accompInput.indexOf("partner") != -1){
//			var userId = $("#id-location").val();
//			if(initialIsPartner != finalIsPartner){	
////				console.log("/visitorsLog/update-partner?table=users_tb&id=" +  userId + "&initialPartner=" + $("#partner-location").val() + 
////						"&finalPartner=" + getInitialYesOrNo($("#" + accompInput).val()));
//				$.post("/visitorsLog/update-partner?table=visitors&id=" +  userId + "&initialPartner=" + $("#partner-location").val() + 
//						"&finalPartner=" + getInitialYesOrNo($("#" + accompInput).val()), function(data){
//																					alert(data);
//																				  }
//				); 
//			}
//		}else if(accompInput.indexOf("blacklist") != -1){
//			var userId = $("#id-location").val();
//			if(initialBlacklisted != finalBlacklisted){	
////				console.log("/visitorsLog/update-blacklisted?table=users_tb&id=" +  userId + "&initialBlacklisted=" + $("#blacklisted-location").val() + 
////						"&finalBlacklisted=" + getInitialYesOrNo($("#" + accompInput).val()));
//				$.post("/visitorsLog/update-blacklisted?table=visitors&id=" +  userId + "&initialBlacklisted=" + $("#blacklisted-location").val() + 
//						"&finalBlacklisted=" + getInitialYesOrNo($("#" + accompInput).val()), function(data){
//																					alert(data);
//																				  }
//				); 
//			}
//		}
//		
//		
//	}
//	
//}
//
//function toggleEditablePicker(ev, accompInput){
//	var picker = accompInput + "-picker";
//	var cancel = accompInput + "-cancel";
//	var edit = accompInput + "-edit";
//	console.log(picker);
//	if($(ev.target).text() == "edit"){
//		$("#" + cancel).removeClass("invisible");
//		$("#" + picker).removeClass("invisible");
//		$("#" + picker).focus();
//		$("#" + edit).text("save");
//	}else if($(ev.target).text() == "save"){
//		//$("#" + picker).attr("readonly", true);
//		$("#" + cancel).addClass("invisible");
//		$("#" + picker).addClass("invisible");
//		$(ev.target).text("edit");
//		
//		if($("#" + picker).val() != "")
//			$("#" + accompInput).val($("#" + picker).val());
//		
//		
//		//then we save the new value, right?
//		var table = "";
//		var userId = $("#id-location").val();
//		
//		if(accompInput.indexOf("user") != -1){
//			table = "users_tb";
//		}else if(accompInput.indexOf("visitor") != -1){
//			table = "visitors";
//		}
//		$.post("/visitorsLog/update-dob?table=" + table + "&id=" +  userId + "&initialDob=" + initialDob + 
//				"&finalDob=" + $("#" + accompInput).val(), function(data){
//																alert(data);
//															}
//		);
//		
//		
//	}
//	
//}
//
//
//function resetEditedValue(source, accompInput, initialValue, container){
//	
//	//$("#" + accompInput).val(initialValue);
//	
//	console.log("The value after cancel: " + $("#" + accompInput).val());
//	
//	var edit = accompInput + "-edit";
//	var cancel = accompInput + "-cancel";
//	
//	$("#" + edit).text("edit");
//	$("#" + cancel).addClass("invisible");
//	$("#" + source).addClass("invisible");
//	
//	//In case we miss this==============================================================================================
//	$("#user-name-edit").text("edit");
//	$("#visitor-name-edit").text("edit");
//	//==================================================================================================================
//	
//	if(!$("#" + container).hasClass("invisible"))
//		$("#" + container).addClass("invisible");
//	
//	$("#" + accompInput).removeClass("invisible");
//	
//	$("#user-name").removeClass("invisible");
//	$("#visitor-name").removeClass("invisible");
//	
//	if(source.indexOf("country")){
//		
//	}
//	
//	if(source.indexOf("phone") != -1 || source.indexOf("email") != -1 || source.indexOf("website") != -1 || source.indexOf("ministry") != -1)
//		$("#" + accompInput).removeClass("form-control").addClass("form-control-plaintext");
//	
//	//$("#" + source).addClass("invisible");
//}
//
//
//
////==========================================================================================================================================================================================================
////==================================================== METHODS TO EDIT VISITOR / USER DETAILS END HERE =====================================================================================================
////==========================================================================================================================================================================================================


//function tableRowItemClick(ev){
//	
//	var id = $(ev.target).closest("tr").attr("id");	
//	window.location = "/visitorsLog/visitor-details?id=" + id;
//	
//}
//
//function goToUser(id){
//	window.location = "/visitorsLog/user-details?id=" + id;
//}
//
//function getSexFromInitial(initial){
//	switch(initial){
//	case "M": return "Male"; break;
//	case "F": return "Female"; break;
//	case "O": return "Other";
//	
//	}
//}
//
//function getInitialFromSex(sex){
//	switch(sex){
//	case "Male": return "M"; break;
//	case "Female": return "F"; break;
//	case "Other": return "O";
//	
//	}
//}
//
//function getInitialYesOrNo(yesOrNo){
//	switch(yesOrNo){
//	case "Yes": return "Y"; break;
//	case "No": return "N"; 
//	
//	}
//}
//
//function getYesOrNo(yesOrNoInitial){
//	switch(yesOrNoInitial){
//	case "Y": return "Yes"; break;
//	case "N": return "No"; 
//	
//	}
//}
//
//function getIsPartnerWithInitial(initial){
//	if(initial == "Y")
//		return "Yes";
//	else
//		return "No";
//}
//
//function getIsBlacklistedWithInitial(initial){
//	if(initial == "Y")
//		return "Yes";
//	else
//		return "No";
//}
//
//function getUserWithId(id, element){
//	$.get("/visitorsLog/get-user?id=" + id, function(data){
//												console.log(data);
//												$(element).val(data);
//											});
//}

//function getUserById(id){
//	if(allUsers.length == 0){
//		
//	}else{
//		for(var i = 0; i < allUsers.length; i++){
//			if(allUsers[i]["id"] == id)
//				return allUsers[i]["firstName"] + ((allUsers[i]["middleName"] == "") ? "" : " " + allUsers[i]["middleName"]) + " " + allUsers[i]["lastName"];
//		}
//	}
//	
//}
//
//function getVisitorById(id){
//	$.get("/visitorsLog/get-visitor?id=" + id, function(data){
//													//return data;
//													$(".class-" + id).text(data);
//												});
//	
//}


//function populateVisitsTable(id){
//	$.get("/visitorsLog/get-visits?id=" + id, function(data){
//													console.log(data);
//													
//													var allVisits = JSON.parse(data);
//																										
//													var tableBody = $(".visits-container").find("tbody");
//													$(tableBody).html("");
//													var row;
//													var count = 1;
//													
//													var arrivalTime;
//													var departureTime;
//													var takingMeds;
//													var hasMedReport;
//													var recordedBy;
//													
//													visitsArray = new Array();
//													visitsArray.push(new Array("", "", "", "", "", "", "", "", "", ""));
//													
//													allVisits.forEach(function(visit){
//																	
//																	if(visit["arrivalTime"] == null || visit["arrivalTime"] == "00:00:00"){
//																		arrivalTime = "";
//																	}else{
//																		arrivalTime = visit["arrivalTime"];
//																	}
//																	if(visit["departureTime"] == null || visit["departureTime"] == "00:00:00"){
//																		departureTime = "";
//																	}else{
//																		departureTime = visit["departureTime"];
//																	}
//																	
//																	takingMeds = getYesOrNo(visit["onMedOnArrival"]);
//																	hasMedReport = getYesOrNo(visit["hasMedReport"]);
//																	recordedBy = getUserById(visit["recordedBy"]);
//																	
//																	row = $('<tr><td>'	 + count + '</td>' + 
//																				'<td>' + visit["arrivalDate"] + '</td>'+
//																				'<td>' + arrivalTime + '</td>'+
//																				'<td>' + visit["reasonOfVisit"] + '</td>'+
//																				'<td>' + takingMeds + '</td>'+
//																				'<td>' + hasMedReport + '</td>'+
//																				'<td>' + visit["departureDate"] + '</td>'+
//																				'<td>' + departureTime + '</td>'+
//																				'<td>' + visit["comment"] + '</td>'+
//																				'<td>' + recordedBy + '</td>'+																				
//																		  '</tr>');
//																	
////																	visitsArray.push({"count" : count, "arrivalDate" : visit["arrivalDate"], "arrivalTime" : arrivalTime,
////																						"reason" : visit["reasonOfVisit"], "takingMeds" :  gtakingMeds), 
////																						"takingMeds" : takingMeds, "hasMedReport" : hasMedReport, "departureDate" : visit["departureDate"], 
////																						"departureTime" : departureTime, "comment" : visit["comment"], "recordedBy" : recordedBy})
//																	
//																	
//																	visitsArray.push(new Array(count, visit["arrivalDate"], arrivalTime, visit["reasonOfVisit"], takingMeds, 
//																			hasMedReport, visit["departureDate"], departureTime, visit["comment"], recordedBy));
//																	
//																	$(tableBody).append(row);																	
//																	count++;
//																	});
//											  }
//	);
//}


//function populateActivitiesTable(id){
//	//console.log("The user id: " + id);
//	$.get("/visitorsLog/get-user-activities?id=" + id, function(data){
//													
//													console.log(data);
//													
//													var allActivities = JSON.parse(data);
//																										
//													var tableBody = $(".activities-container").find("tbody");
//													$(tableBody).html("");
//													var row;
//													
//													var type;
//													var columnId;
//													var changedFrom;
//													var changedTo;
//													var columnName;
//													var tableName;
//													
//													var count = 1;
//													
//													activitiesArray = new Array();
//													activitiesArray.push(new Array("", "","","","","","","","")); 
//													
//													allActivities.forEach(function(activity){
//																	tableName = ""
//																	
//																	
//																	//columnId = activity["columnId"];
//																	if(activity["tableName"] == "users_tb"){
//																		tableName = "Users";
//																		columnId = getUserById(activity["columnId"]);
//																		
//																		if(activity["columnName"] == "marital_status"){
//																			columnName = "Marital status";
//																			changedFrom = getMaritalStatusWithId(activity["changedFrom"]);
//																			changedTo = getMaritalStatusWithId(activity["changedTo"]);
//																		}else if(activity["columnName"] == "sex"){
//																			columnName = "Sex";
//																			changedFrom = getSexFromInitial(activity["changedFrom"]);
//																			changedTo = getSexFromInitial(activity["changedTo"]);
//																		}else if(activity["columnName"] == "fname"){
//																			columnName = "First name";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "mname"){
//																			columnName = "Middle name";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "lname"){
//																			columnName = "Last name";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "dob"){
//																			columnName = "Date of Birth";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "password"){
//																			columnName = "Password";
//																			changedFrom = "";
//																			changedTo = "";
//																		}else if(activity["columnName"] == "security_question"){
//																			columnName = "Security Question";
//																			changedFrom = "";
//																			changedTo = "";
//																		}else if(activity["columnName"] == "security_answer"){
//																			columnName = "Security Answer";
//																			changedFrom = "";
//																			changedTo = "";
//																		}else if(activity["columnName"] == "role"){
//																			columnName = "Role";
//																			changedFrom = getRoleWithId(activity["changedFrom"]);
//																			changedTo = getRoleWithId(activity["changedTo"]);
//																		}else if(activity["columnName"] == "account_status"){
//																			columnName = "Account status";
//																			changedFrom = getAccountStatusWithAccountStatusId(activity["changedFrom"]);
//																			changedTo = getAccountStatusWithAccountStatusId(activity["changedTo"]);
//																		}else if(activity["columnName"] == "picture_uri"){
//																			columnName = "Picture";
//																			changedFrom = "";//activity["changedFrom"];
//																			changedTo = "";//activity["changedTo"];
//																		}else{
//																			columnName = "";
//																			changedFrom = "";
//																			changedTo = "";
//																		}
//																		
//																	}else if(activity["tableName"] == "visitors"){
//																		tableName = "Visitors";
//																		columnId = getVisitorById(activity["columnId"]);
//																		
//																		//console.log("get visitor by id: " + columnId);
//																		
//																		if(activity["columnName"] == "marital_status"){
//																			columnName = "Marital status";
//																			changedFrom = getMaritalStatusWithId(activity["changedFrom"]);
//																			changedTo = getMaritalStatusWithId(activity["changedTo"]);
//																		}else if(activity["columnName"] == "sex"){
//																			columnName = "Sex";
//																			changedFrom = getSexFromInitial(activity["changedFrom"]);
//																			changedTo = getSexFromInitial(activity["changedTo"]);
//																		}else if(activity["columnName"] == "fname"){
//																			columnName = "First name";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "mname"){
//																			columnName = "Middle name";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "lname"){
//																			columnName = "Last name";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "dob"){
//																			columnName = "Date of Birth";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "country_id"){
//																			columnName = "Country";
//																			changedFrom = getCountryWithId(activity["changedFrom"]);
//																			changedTo = getCountryWithId(activity["changedTo"]);
//																		}else if(activity["columnName"] == "address"){
//																			columnName = "Address";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "phone1"){
//																			columnName = "Phone";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "email"){
//																			columnName = "Email";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "website"){
//																			columnName = "Website";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "occupation_id"){
//																			columnName = "Occupation";
//																			changedFrom = getOccupationWithId(activity["changedFrom"]);
//																			changedTo = getOccupationWithId(activity["changedTo"]);
//																		}else if(activity["columnName"] == "ministry"){
//																			columnName = "Ministry";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else if(activity["columnName"] == "has_passport"){
//																			columnName = "Has passport";
//																			changedFrom = getInitialYesOrNo(activity["changedFrom"]);
//																			changedTo = getInitialYesOrNo(activity["changedTo"]);
//																		}else if(activity["columnName"] == "is_partner"){
//																			columnName = "Is partner";
//																			changedFrom = getInitialYesOrNo(activity["changedFrom"]);
//																			changedTo = getInitialYesOrNo(activity["changedTo"]);
//																		}else if(activity["columnName"] == "picture_uri"){
//																			columnName = "Picture";
//																			changedFrom = "";//activity["changedFrom"];
//																			changedTo = "";//activity["changedTo"];
//																		}else if(activity["columnName"] == "blacklisted"){
//																			columnName = "Blacklisted";
//																			changedFrom = activity["changedFrom"];
//																			changedTo = activity["changedTo"];
//																		}else{
//																			columnName = "";
//																			changedFrom = "";
//																			changedTo = "";
//																		}
//																	}else if(activity["tableName"] == "visits"){
//																		tableName = "Visits";
//																		columnId = getVisitorById(activity["columnId"]);
//																		columnName = "";
//																		changedFrom = "";
//																		changedTo = "";
//																	}else{
//																		tableName = "";
//																		columnName = "";
//																		changedFrom = "";
//																		changedTo = "";
//																	}
//																	
//																	if(activity["columnId"] == 0){
//																		columnId = "";
//																	}
//																	
//																	if(getActivityWithId(activity["activityId"]) == undefined){
//																		type = "";
//																	}else{
//																		type = getActivityWithId(activity["activityId"]);
//																	}
//																	
//																		
//																	
//																	
//																	
//																	
//																	row = $('<tr><td>'	 + count + '</td>' + 
//																				'<td>' + activity["time"].split(" ")[0] + '</td>'+
//																				'<td>' + interpretTime(activity["time"].split(" ")[1]) + '</td>'+
//																				'<td>' + type + '</td>'+
//																				'<td>' + tableName + '</td>'+
//																				'<td>' + columnName + '</td>'+
//																				'<td class="class-' + activity["columnId"] + '">' + columnId + '</td>'+
//																				'<td>' + changedFrom + '</td>'+
//																				'<td>' + changedTo + '</td>'+																			
//																		  '</tr>');
//																	
//																	activitiesArray.push(new Array(count, activity["time"].split(" ")[0], activity["time"].split(" ")[1], 
//																							getActivityWithId(activity["activityId"]), tableName, columnName, columnId,
//																							changedFrom, changedTo));
//																	
//																	$(tableBody).append(row);																	
//																		count++;
//																});
//											  });
//
//}


//function getInitialValues(page){
//	
//	
//	if(page == "visitor-details"){
//		initialFirstName = $("#visitor-first-name").val();
//		initialMiddleName = $("#visitor-middle-name").val();
//		initialListName = $("#visitor-last-name").val();
//		
//		initialDob = $("#visitor-dob").val();
//		initialSex = $("#visitor-sex").val();		
//		initialMaritalStatus = $("#marital-status-location").val();
//				
//		initialCountry = $("#country-location").val();
//		initialPhone1 = $("#visitor-phone").val();
//		initialEmail = $("#visitor-email").val();
//		initialWebsite = $("#visitor-website").val();
//		initialOccupation = $("#occupation-location").val();
//		initialMinistry = $("#visitor-ministry").val();
//		initialIsPartner = $("#partner-location").val();
//		initialBlacklisted = $("#blacklisted-location").val();
//		
//		initialPicLocation = $("#visitor-pic").attr("src");		
//				
//		
//	}else if(page == "user-details" || page == "settings"){
//		initialFirstName = $("#user-first-name").val();
//		initialMiddleName = $("#user-middle-name").val();
//		initialLastName = $("#user-last-name").val();
//		
//		initialDob = $("#user-dob").val();
//		initialSex = $("#user-sex").val();		
//		initialMaritalStatus = $("#user-marital-status").val();
//		
//		initialRole = $("#role-location").val();
//		initialAccountStatus = $("#account-status-location").val();
//		
//		initialPicLocation = $("#visitor-pic").attr("src");		
//				
//	}
//}
//
//function getFinalValues(page){
//	
//	
//	if(page == ("visitor-details")){
//		finalFirstName = $("#visitor-first-name").val();
//		finalMiddleName = $("#visitor-middle-name").val();
//		finalLastName = $("#visitor-last-name").val();
//		
//		finalDob = $("#visitor-dob").val();
//		finalSex = $("#visitor-sex").val();		
//		finalMaritalStatus = $("#visitor-marital-status").val();
//				
//		finalCountry = $("#visitor-country").val();
//		finalPhone1 = $("#visitor-phone").val();
//		finalEmail = $("#visitor-email").val();
//		finalWebsite = $("#visitor-website").val();
//		finalOccupation = $("#visitor-occupation").val();
//		finalMinistry = $("#visitor-ministry").val();
//		finalIsPartner = $("#visitor-partner").val();
//		finalBlacklisted = $("#visitor-blacklist").val();
//		finalLastVisit = $("#visitor-last-visit").val();
//		finalRegisteredBy = $("#visitor-registered-by").val();
//		finalRegisterDate = $("#visitor-register-date").val();
//				
//		finalPicLocation = $("#visitor-pic").attr("src");		
//		
//		
//		
//	}else if(page == ("visitor-details-readonly")){
//		finalFirstName = $("#visitor-first-name").val();
//		finalMiddleName = $("#visitor-middle-name").val();
//		finalLastName = $("#visitor-last-name").val();
//		
//		finalDob = $("#visitor-dob").val();
//		finalSex = $("#visitor-sex").val();		
//		finalMaritalStatus = $("#visitor-marital-status").val();
//				
//		finalCountry = $("#visitor-country").val();
//		finalPhone1 = $("#visitor-phone").val();
//		finalEmail = $("#visitor-email").val();
//		finalWebsite = $("#visitor-website").val();
//		finalOccupation = $("#visitor-occupation").val();
//		finalMinistry = $("#visitor-ministry").val();
//		finalIsPartner = $("#visitor-partner").val();
//		finalBlacklisted = $("#visitor-blacklist").val();
//		finalLastVisit = $("#visitor-last-visit").val();
//		finalRegisteredBy = $("#visitor-registered-by").val();
//		finalRegisterDate = $("#visitor-register-date").val();
//				
//		finalPicLocation = $("#visitor-pic").attr("src");		
//		
//		
//		
//	}else if(page == "user-details" || page == "settings"){
//		finalFirstName = $("#user-first-name").val();
//		finalMiddleName = $("#user-middle-name").val();
//		finalLastName = $("#user-last-name").val();
//		
//		finalDob = $("#user-dob").val();
//		finalSex = $("#user-sex").val();		
//		finalMaritalStatus = $("#user-marital-status").val();
//				
//		finalRole = $("#user-role").val();
//		finalAccountStatus = $("#user-account-status").val();
//		finalRegisteredBy = $("#user-registered-by").val();
//		finalRegisterDate = $("#user-register-date").val();
//		
//		var LastLoginArray = ($("#last-login-location").val()).split(" ");
//		
//		LastLogin = LastLoginArray[0] + " " + interpretTime(LastLoginArray[1]); 
//		
//		finalPicLocation = $("#visitor-pic").attr("src");	
//	}
//}

//function getLastLogin(userId){
//	$.get("/visitorsLog/get-lastlogin?id=" + userId, function(data){
//													console.log(data);
//													//alert(data);
//												});
//}
//
//function getCheckedRadio(radios){
//	
//	for(var i = 0; i < radios.length; i++){
//		if($(radios[i]).is(":checked"))
//			return $(radios[i]).val();
//	}
//		
//	return null;
//}
//
//function showSubmitChangesButton(){
//	if($("#save-button-container").css("display", "none"))
//		$("#save-button-container").css("display", "block");
//}

