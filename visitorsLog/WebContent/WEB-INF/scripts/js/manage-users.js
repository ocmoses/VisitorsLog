/**
 * 
 */
var page = "manage-users";
$(document).ready(function(){
	
		getAllRolesInit();
		getAllUsers();
		getAllMaritalStatus($("#marital-status"));
		getAllRoles($("#roles"));
		getAllAccountStatus();
		
				
		$("#group-action").on("change", function(){ 
											var checked = $("#manage-users-table").find($("input[type=checkbox]:checked"));
											if(checked.length == 0){
												
												displayDialogModal("OK oh...", "I hear you. But no user was checked. Seriously?...", "OK");												
												
											}else{
												 
												var selectedIdsArray = new Array();
												var selectedUsersArray = new Array();
												
												for(var i = 0; i < checked.length; i++){
													selectedIdsArray.push($(checked[i]).attr("id").split("-")[1]);
													selectedUsersArray.push(" " + getUserById($(checked[i]).attr("id").split("-")[1]));
												}
																		
												 
												switch($(this).val()){
													
													case "Report": displayDialogModal("One moment", "Are you sure you want to generate report(s) for the following user(s): " + selectedUsersArray + 
														"?", "OK"); break;
													case "Suspend": displayModal("One moment", "Are you sure you want to suspend the following user(s): " + selectedUsersArray + 
															"?", "No, cancel", "Yes, sure", supendUsers, selectedIdsArray); break;
													case "Active": displayModal("One moment", "Are you sure you want to make the following user(s) active: " + selectedUsersArray + "?", 
															"No, cancel", "Yes, sure", makeUsersActive, selectedIdsArray); break;
													case "Probation": displayModal("One moment", "Are you sure you want to put the following user(s) on probation: " + selectedUsersArray + "?", 
															"No, cancel", "Yes, sure", putUsersOnProbation, selectedIdsArray); break;
													case "Remove": displayModal("Please confirm", "Removing will delete the following user(s) and all their records completely: " + selectedUsersArray + 
															". Are you sure you wish to continue?", 
															"No, cancel", "Yes, continue", deleteUsers, selectedIdsArray);
												}
											}
											
										});
		$.get("/visitorsLog/user-actions", function(data){			  
												$("#visitor-pic-div").css("visibility", "hidden");
												displayUsers($("#user-actions"), data);
												preparePagination("allUsers", MAX_QUERY_TOTAL, "pagination");
										  }
		);
		
		
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			  var target = $(e.target).attr("href") 
			  $.get("/visitorsLog/" + target.slice(1), function(data){
														  //alert(data);													  
														  if(target == "#user-actions"){
															  $("#visitor-pic-div").css("visibility", "hidden");
															  displayUsers(target, data);
															  preparePagination("allUsers", MAX_QUERY_TOTAL, "pagination");
															  
														  }else if(target == "#add-new-user"){
															  $("#visitor-pic-div").css("visibility", "visible");
															  
														  }
													  });
		});
		
		setInterval(function(){
			if($("#srch-term").is(":focus")){
				displayUserMatches($("#srch-term").val(), $("#manage-user-div"))
				preparePagination("searchUsers", MAX_QUERY_TOTAL, "pagination");
			}
		}, 3000);
		
		//Moving on to manage users	
		$("form[name=user-register]").submit(function(e){
												e.preventDefault(e); 
												console.log($(this).serialize());
												console.log($("#visitor-pic").attr("src"));
												
												validateUserRegister();					
																							
												
											});
		
		
		$("#visitor-pic-div").hover(function(){
			$("#choose-pic").css("visibility", "visible"); 
		}, 
		function(){
			$("#choose-pic").css("visibility", "hidden");
		});
		
		
		
		$("#user-actions").click(function(){
			$("#visitor-pic-div").css("visibility", "hidden");
		});
			
		$("#add-new-user").click(function(){
			$("#visitor-pic-div").css("visibility", "visible");
		});
		
});