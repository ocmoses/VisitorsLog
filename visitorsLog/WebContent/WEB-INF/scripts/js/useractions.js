/**
 * 
 */


//===============================================================================================================================================================================================
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''ACTION FUNCTIONS -- FOR USER ACTIONS ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//===============================================================================================================================================================================================

function supendUsers(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/update-user-account-status?table=users_tb&id=" +  selectedIdsArray[i] + "&initialAccountStatus=" + getIdFromAccountStatus($("#account-" + selectedIdsArray[i]).text()) + 	
				"&finalAccountStatus=" + getIdFromAccountStatus("Suspended"), function(data){
																				if(data.indexOf("success") != -1){
																					displaySuccessMessage("Status change successfull...");
																				}else{
																					displayErrorMessage("Sorry, couldn't change account status to 'Suspended'");
																				}
																				
																			});
	}
	
}

function makeUsersActive(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/update-user-account-status?table=users_tb&id=" +  selectedIdsArray[i] + "&initialAccountStatus=" + getIdFromAccountStatus($("#account-" + selectedIdsArray[i]).text()) + 	
				"&finalAccountStatus=" + getIdFromAccountStatus("Active"), function(data){
																				if(data.indexOf("success") != -1){
																					displaySuccessMessage("Status change successfull...");
																				}else{
																					displayErrorMessage("Sorry, couldn't change account status to 'Active'");
																				}
																				
																			});
	}
	
}

function putUsersOnProbation(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/update-user-account-status?table=users_tb&id=" +  selectedIdsArray[i] + "&initialAccountStatus=" + getIdFromAccountStatus($("#account-" + selectedIdsArray[i]).text()) + 	
				"&finalAccountStatus=" + getIdFromAccountStatus("Probation"), function(data){
																				if(data.indexOf("success") != -1){
																					displaySuccessMessage("Status change successfull...");
																				}else{
																					displayErrorMessage("Sorry, couldn't change account status to 'Probation'");
																				}
																				
																			});
	}
	
}


function deleteUsers(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/delete-user-account?id=" +  selectedIdsArray[i], function(data){
																				if(data.indexOf("success") != -1){
																					displaySuccessMessage("Deletion successfull...");
																				}else{
																					displayErrorMessage("Sorry, couldn't delete account(s)");
																				}
																				
																			});
	}
	
}


function blacklistVisitors(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/update-blacklisted?table=visitors&id=" +   selectedIdsArray[i] + "&initialBlacklisted=" + 
				$("#blacklist-" + selectedIdsArray[i]).text() + "&finalBlacklisted=Y", function(data){
																											if(data.indexOf("success") != -1){
																												displaySuccessMessage("Successfully blacklisted the visitor(s)...");
																											}else{
																												displayErrorMessage("Sorry, couldn't blacklist the visitor(s) :(");
																											}
																											
																										});
	}
	
}

function removeVisitorsFromBlacklist(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/update-blacklisted?table=visitors&id=" +   selectedIdsArray[i] + "&initialBlacklisted=" + 
				$("#blacklist-" + selectedIdsArray[i]).text() + "&finalBlacklisted=N", function(data){
																							if(data.indexOf("success") != -1){
																								displaySuccessMessage("Successfully removed visitor(s) from blacklist...");
																							}else{
																								displayErrorMessage("Sorry, couldn't remove visitor(s) from blacklist :(");
																							}
																							
																						});
	}
	
}

function deleteVisitors(selectedIdsArray){
	dismissTheModal();
	for(var i = 0; i < selectedIdsArray.length; i++){
		$.post("/visitorsLog/delete-visitor?table=visitors&id=" +   selectedIdsArray[i], function(data){
																							if(data.indexOf("success") != -1){
																								displaySuccessMessage("Successfully deleted visitor(s)...");
																							}else{
																								displayErrorMessage("Sorry, couldn't delete visitor(s) :(");
																							}
																							
																						});
	}
	
}


//===============================================================================================================================================================================================
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''ACTION FUNCTIONS END HERE-- FOR USER ACTIONS ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//===============================================================================================================================================================================================