/**
 * 
 */

var page = "visitor-details";

$(document).ready(function(){
		
		getAllUsers();
		getAllCountries($("#visitor-country-select"));
		getAllOccupations($("#visitor-occupation-select"));
		getAllMaritalStatus($("#visitor-marital-status-select"));
		getAllDinings($("#dining"));
		getAllReferenceNos($("#ref-no"));
		getAllModesOfVisit($("#mode-of-visit"));
		
		$("#visitor-pic").attr("src", $("#pic-location").val());		
		$("#visitor-sex").val(getSexFromInitial($("#sex-location").val()));
		setMaritalStatusWithId($("#marital-status-location").val(), $("#visitor-marital-status"), $("#visitor-marital-status-select"));
		setCountryWithId($("#country-location").val(), $("#visitor-country"), $("#visitor-country-select"));
		setOccupationWithId($("#occupation-location").val(), $("#visitor-occupation"), $("#visitor-occupation-select"));
		$("#visitor-partner").val(getIsPartnerWithInitial($("#partner-location").val()));
		$("#visitor-blacklist").val(getIsBlacklistedWithInitial($("#blacklisted-location").val()));
		getUserWithId($("#createdby-location").val(), $("#visitor-registered-by"));
		
		getInitialValues("visitor-details");
			
		populateVisitsTable($("#id-location").val());
		
		//the generate button
		$("#generate-visitor-report").click(function(){
			
			getFinalValues("visitor-details");
			getFinalValues("visitor-details-readonly");
			console.log("User who recorded this: " + getUserById($("#hidden-user-id").val()));
			
			
			
			$.post("/visitorsLog/generate-visitor-report", {"finalFirstName" : finalFirstName, "finalMiddleName" : finalMiddleName, "finalLastName" : finalLastName, 
															"finalDob" : finalDob, "finalSex" : finalSex, "finalMaritalStatus" : finalMaritalStatus, "finalCountry" : finalCountry, 
															"finalPhone1" : finalPhone1, "finalEmail" : finalEmail, "finalWebsite" : finalWebsite, "finalOccupation" : finalOccupation, 
															"finalMinistry" : finalMinistry, "finalIsPartner" : finalIsPartner, "finalBlacklisted" : finalBlacklisted, 
															"finalLastVisit" : finalLastVisit, "finalRegisteredBy" : finalRegisteredBy, "finalRegisterDate" : finalRegisterDate,
															"finalPicLocation": finalPicLocation, "visitsArray[]" : visitsArray, "currentUser" : getUserById($("#hidden-user-id").val())}, 
															
															function(data){
																//alert(data);																
																//window.location = "file://" + data;
																var newWindow = window.open("visitor-report?file-location=" + data);
																//alert(data);
																

															}
			);}
		);	
		
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
		
		//Moving on to manage visitors
		$("form[name=add-visit]").submit(function(e){
											e.preventDefault(e);												
											
											console.log($(this).serialize());
																							
											validateAddVisit();
											
											//$("form[name=visitor-register]")[0].submit();
										});
		
		$("#visitor-pic-div").hover(function(){
			$("#choose-pic").css("visibility", "visible"); 
		}, 
		function(){
			$("#choose-pic").css("visibility", "hidden");
		});
		
});