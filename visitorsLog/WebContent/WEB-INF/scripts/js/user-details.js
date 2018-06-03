/**

 * 
 */

var page = "user-details";

$(document).ready(function(){
		getAllUsers();
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
		
		//console.log($("#id-location").val());
		populateActivitiesTable($("#id-location").val());
		
		//the generate button
		$("#generate-user-report").click(function(){
			
			getFinalValues("user-details");
			console.log(activitiesArray);
			
						
			//
			$.post("/visitorsLog/generate-user-report", {"finalFirstName" : finalFirstName, "finalMiddleName" : finalMiddleName, "finalLastName" : finalLastName, 
															"finalDob" : finalDob, "finalRole" : finalRole, "finalSex" : finalSex, "finalMaritalStatus" : finalMaritalStatus,  
															"finalLastLogin" : LastLogin, "finalRegisteredBy" : finalRegisteredBy, "finalRegisterDate" : finalRegisterDate,
															"finalPicLocation": finalPicLocation, "activitiesArray[]" : activitiesArray, 
															"currentUser" : getUserById($("#hidden-user-id").val()), "userId" : $("#id-location").val()}, 
															function(data){
																//alert(data);																
																var newWindow = window.open("user-report?file-location=" + data);
																
															}
			);
			
			
										}
		);	
		
				
		
		
		$("#visitor-pic-div").hover(function(){
			$("#choose-pic").css("visibility", "visible"); 
		}, 
		function(){
			$("#choose-pic").css("visibility", "hidden");
		});
});