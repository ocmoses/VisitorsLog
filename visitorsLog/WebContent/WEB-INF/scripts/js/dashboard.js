/**
 * 
 */
$(document).ready(function(){
	//getAndFillAllOccupations();
	getAllUsers();
	getAllRolesInit();
	getAllCountries();
	getAllAccountStatus();
	getAllMaritalStatus();
	

	getAllActivities();
	getAllUserActivities($(".notification-container")); //notification container is actually the container holding all the other users

	populateActivitiesTable($("#id-location").val());
	//console.log("I'm running!");
});


