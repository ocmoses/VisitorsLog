/**
 * 
 */

$(document).ready(function(){
	
		getAllUsers();
		getAllCountries($("#visitor-country-select"));
		getAllOccupations($("#visitor-occupation-select"));
		getAllMaritalStatus($("#visitor-marital-status-select"));
		
		$("#visitor-pic").attr("src", $("#pic-location").val());		
		$("#visitor-sex").val(getSexFromInitial($("#sex-location").val()));
		setMaritalStatusWithId($("#marital-status-location").val(), $("#visitor-marital-status"), $("#visitor-marital-status-select"));
		setCountryWithId($("#country-location").val(), $("#visitor-country"), $("#visitor-country-select"));
		setOccupationWithId($("#occupation-location").val(), $("#visitor-occupation"), $("#visitor-occupation-select"));
		$("#visitor-partner").val(getIsPartnerWithInitial($("#partner-location").val()));
		$("#visitor-blacklist").val(getIsBlacklistedWithInitial($("#blacklisted-location").val()));
		getUserWithId($("#createdby-location").val(), $("#visitor-registered-by"));
		
		getInitialValues(page);
			
		populateVisitsTable($("#id-location").val());
		
		//the generate button
		$("#generate-visitor-report").click(function(){
			
			getFinalValues("visitor-details");
			getFinalValues("visitor-details-readonly");
			console.log(visitsArray);
			
			
			$.post("/visitorsLog/generate-visitor-report", {"finalFirstName" : finalFirstName, "finalMiddleName" : finalMiddleName, "finalLastName" : finalLastName, 
															"finalDob" : finalDob, "finalSex" : finalSex, "finalMaritalStatus" : finalMaritalStatus, "finalCountry" : finalCountry, 
															"finalPhone1" : finalPhone1, "finalEmail" : finalEmail, "finalWebsite" : finalWebsite, "finalOccupation" : finalOccupation, 
															"finalMinistry" : finalMinistry, "finalIsPartner" : finalIsPartner, "finalBlacklisted" : finalBlacklisted, 
															"finalLastVisit" : finalLastVisit, "finalRegisteredBy" : finalRegisteredBy, "finalRegisterDate" : finalRegisterDate,
															"finalPicLocation": finalPicLocation, "visitsArray[]" : visitsArray, "currentUser" : getUserById($("#hidden-user-id").val())}, function(data){
																																	alert(data);
																																}
			);}
			
											
		);
		
});