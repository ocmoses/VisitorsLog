/**
 * 
 */

function displayUsers(target, data){
	
	var table = $(target).find(".table");
	  table.html("");
	  table.append(`<thead>
			  			<tr>					 			
			 				<th>
			 					Select
			 				</th><th>
			 					Picture
			 				</th><th>
			 					Name
			 				</th><th>
			 					Sex
			 				</th><th>
			 					Role
			 				</th><th>
			 					Last login
			 				</th><th>
			 					Status
			 				</th>
			 			</tr>
			 		</thead>`);
	  var allUsers = JSON.parse(data);
	  
	  var tableBody = $("<tbody></tbody>");
	  table.append(tableBody);
	  var tableRow;
	  var tableData;
	  var userRole;
	  var lastLogin;
	  	  
	  allUsers.forEach(function(user){
		  if(user["id"] != $("#id-location").val() && user["id"] != 4){  //If it is not the curent user, display in table
			  tableRow = $('<tr class="table-row-item"></tr>');															  
			  tableBody.append(tableRow);
			  
			  tableData = $('<td> <input id="id-' + user["id"] + '" type="checkbox" /></td>');
			  tableRow.append(tableData);
			  
			  tableData = $('<td><img onclick="goToUser(' + user["id"] + ');" src="' + user["picLocation"] + '" style="width: 30px;"/></td>');
			  tableRow.append(tableData);
			  
			  tableData = $('<td onclick="goToUser(' + user["id"] + ');" >' + user["firstName"] + (($.trim(user["middleName"]) == "") ? " " : " " + user["middleName"] + " ")  + user["lastName"] + '</td>');
			  tableRow.append(tableData);
			  
			  tableData = $('<td onclick="goToUser(' + user["id"] + ')">' + user["sex"] + '</td>');
			  tableRow.append(tableData);
			  
			  userRole = function(){
				  			for(var i = 0; i < allRoles.length; i++){
				  				if(allRoles[i]["id"] == user["role"])
				  					return allRoles[i]["role"];
				  			}
			  			 };
			  tableData = $('<td id="role-' + user["id"] + '" onclick="goToUser(' + user["id"] + ')">' + userRole() + '</td>');
			  tableRow.append(tableData);
			  
			  if(userRole() == "Admin"){
				  $(".list-group-item #manage-users").css("display", "block");
				  $(".list-group-item #manage-visitors").css("display", "block");
			  }else if(userRole() == "Editor"){
				  $(".list-group-item #manage-visitors").css("display", "block");
			  }else if(userRole() == "Reporter"){
				  
			  }
			  
			  lastLogin = function(){
				  var lastLoginDay;
				  var lastLoginTime;
				  var rawDateTime = user["lastLogin"];
				  
				  console.log("The raw date time returned: " + rawDateTime);
				  
				  //interpretDate(rawDateTime);
				  
				  if(rawDateTime != "" && rawDateTime != null){
					  return interpretDate(rawDateTime);
					  
				  }else 
					  return "";
				  
			  }
			  
			  tableData = $('<td onclick="goToUser(' + user["id"] + ')">' + lastLogin() + '</td>');
			  tableRow.append(tableData);
			  
			  accountStatus = getAccountStatusByUserId(user["id"]);
														  
			  tableData = $('<td id="account-' + user["id"] + '" onclick="goToUser(' + user["id"] + ')">' + accountStatus + '</td>');
			  tableRow.append(tableData);
		  }
		  
				 				
	  });
	  
}

function preparePagination(range, divisor, paginatorId, search){
	if(range == "allUsers"){
		$.get("/visitorsLog/user-actions-total", function(data){
													if(data < MAX_QUERY_TOTAL * 20){														
														var totalPages = Math.ceil(data / MAX_QUERY_TOTAL);
														//alert("Total results: " + data + ", total pages: " + Math.ceil(totalPages));
														console.log("Data we got: " + data);
														if(totalPages > 1){
															var paginator = $("#" + paginatorId).html("");
															for(var i = 0; i < totalPages; i++){
																paginator.append('<li onclick="getUsersPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
															}
															$(paginator).css("visibility", "visible");
															
																													
														}
													}
														
												});
	}else if(range == "searchUsers"){
		$.get("/visitorsLog/get-user-matches-total?search=" + $("#srch-term").val(), function(data){
																		if(data < MAX_QUERY_TOTAL * 20){														
																			var totalPages = Math.ceil(data / MAX_QUERY_TOTAL);
																			//alert("Total results: " + data + ", total pages: " + totalPages);
																			console.log("Data we got: " + data);
																			var paginator = $("#" + paginatorId);
																			$(paginator).html("");
																			$(paginator).css("visibility", "hidden");
																			if(totalPages > 1){
																				
																				for(var i = 0; i < totalPages; i++){
																					paginator.append('<li onclick="getUserMatchesPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
																				}
																				$(paginator).css("visibility", "visible");
																				
																																		
																			}
																		  }
																	  }
		);
		
	}else if(range == "allVisitors"){
		$.get("/visitorsLog/visitor-actions-total", function(data){
														if(data < MAX_QUERY_TOTAL * 20){														
															var totalPages = data / MAX_QUERY_TOTAL;
															//alert("Total results: " + data + ", total pages: " + Math.ceil(totalPages));
															
															if(totalPages > 1){
																
																var paginator = $("#" + paginatorId);
																$(paginator).html("");
																
																for(var i = 0; i < totalPages; i++){
																	paginator.append('<li onclick="getVisitorsPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
																}
																$(paginator).css("visibility", "visible");
																//$(paginator).children(":first").addClass("active");
															}
														}
												});
	}else if(range == "searchVisitors"){
		var search = ($("#srch-term").val() == undefined) ? $("#search-term").val() : $("#srch-term").val();
		$.get("/visitorsLog/get-visitor-matches-total?search=" + search, function(data){
			
															console.log("Data we got: " + data);
															
															if(data < MAX_QUERY_TOTAL * 20){														
																var totalPages = Math.ceil(data / MAX_QUERY_TOTAL);
																//alert("Total results: " + data + ", total pages: " + totalPages);
																var paginator = $("#" + paginatorId);
																$(paginator).html("");
																$(paginator).css("visibility", "hidden");
																if(totalPages > 1){
																	
																	for(var i = 0; i < totalPages; i++){
																		paginator.append('<li onclick="getVisitorMatchesPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
																	}
																	$(paginator).css("visibility", "visible");
																	//$(paginator).children(":first").addClass("active");
																}
															}
		});
		
	}else if(range == "similarVisitors"){
		$.get("/visitorsLog/get-similar-records", function(data){
														if(data < MAX_QUERY_TOTAL * 20){														
															var totalPages = data / MAX_QUERY_TOTAL;
															//alert("Total results: " + data + ", total pages: " + Math.ceil(totalPages));
															
															if(totalPages > 1){
																var paginator = $("#" + paginatorId).html("");
																for(var i = 0; i < totalPages; i++){
																	paginator.append('<li onclick="getVisitorMatchesPaginated(' + MAX_QUERY_TOTAL + ', ' + (i * MAX_QUERY_TOTAL) + ', ' + paginatorId + ', event)"><span>' + (i + 1) +'</span></li>' );
																}
																$(paginator).css("visibility", "visible");
																//$(paginator).children(":first").addClass("active");
															}
														}
		});
		
	}
	
	
}

function getUsersPaginated(divisor, offset, paginatorId, event){
	$.get("/visitorsLog/user-actions?total=" + divisor + "&offset=" + offset, function(data){
																				//displayUsers("#user-actions", data);
																				displayUsers("#manage-user-div", data);
																				
																			}
	);
	
}

function getUserMatchesPaginated(divisor, offset, paginatorId, event){
	$.get("/visitorsLog/get-user-matches?total=" + divisor + "&offset=" + offset  + "&search=" + $("#srch-term").val(), function(data){
																				//displayUsers("#user-actions", data);
																				displayUsers("#manage-user-div", data);
																				
																			}
	);
	
}

function getVisitorsPaginated(divisor, offset, paginatorId, event){
	$.get("/visitorsLog/visitor-actions?total=" + divisor + "&offset=" + offset, function(data){
																				displayVisitors("#visitor-actions", data);
																				displayVisitors("#all-visitors", data);
																				
																			}
	);
	
}

function getVisitorMatchesPaginated(divisor, offset, paginatorId, event){
	var search = ($("#srch-term").val() == undefined) ? $("#search-term").val() : $("#srch-term").val();
	$.get("/visitorsLog/get-visitor-matches?total=" + divisor + "&offset=" + offset + "&search=" + search, function(data){
																				displayVisitors("#visitor-actions", data);
																				displayVisitors("#all-visitors", data);
																				
																			}
	);
	
}

function displayVisitors(target, data){
	
	var table = $(target).find(".table");
	  table.html("");
	  table.append(`<thead>
	  			<tr>					 			
	 				<th>
	 					Select
	 				</th><th>
	 					Picture
	 				</th><th>
	 					Name
	 				</th><th>
	 					Sex
	 				</th><th>
	 					Phone
	 				</th><th style="word-wrap: break-word ;max-width: 100px;">
	 					Email
	 				</th><th>
	 					Country
	 				</th><th>
	 					Last Visit
	 				</th><th>
	 					Blacklist
	 				</th>
	 			</tr>
	 		</thead>`);
	  var allVisitors = JSON.parse(data);
	  //console.log(allVisitors);
	  var tableBody = $("<tbody></tbody>");
	  table.append(tableBody);
	  
	  var tableRow;
	  var tableData;
	  var visitorCountry
	  var lastVisit;
	  
	 
	  allVisitors.forEach(function(visitor){
		  		  
		  tableRow = $('<tr id="' + visitor["id"] + '" class="table-row-item"></tr>');															  
		  tableBody.append(tableRow);
		  
		  tableData = $('<td ><input id="id-' + visitor["id"] + '" type="checkbox" /></td>');
		  tableRow.append(tableData);
		  
		  tableData = $('<td><img onclick = "tableRowItemClick(event);" src="' + visitor["picLocation"] + '" style="width: 30px;"/></td>');
		  tableRow.append(tableData);
		  
		  tableData = $('<td id="name-' + visitor["id"] + '" onclick = "tableRowItemClick(event);" >' + visitor["firstName"] + (($.trim(visitor["middleName"]) == "") ? " " : " " + visitor["middleName"] + " ")  + visitor["lastName"] + '</td>');
		  tableRow.append(tableData);
		  
		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitor["sex"] + '</td>');
		  tableRow.append(tableData);
		  
		  //tableData = $('<td>' + visitor["phone1"] + (($.trim(visitor["phone2"]) == "0") ? "" : ", " + visitor["phone2"] ) + '</td>');
		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitor["phone1"] + '</td>');
		  tableRow.append(tableData);
		  
		  tableData = $('<td onclick = "tableRowItemClick(event);" style="word-wrap: break-word ;max-width: 100px;">' + visitor["email"] + '</td>');
		  tableRow.append(tableData);
		  
		  visitorCountry = function(){
	  			for(var i = 0; i < allCountries.length; i++){
	  				if(allCountries[i]["id"] == visitor["country"])
	  					return allCountries[i]["name"];
	  			}
		  };
		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitorCountry() + '</td>');
		  tableRow.append(tableData);
		  
		  
		  tableData = $('<td onclick = "tableRowItemClick(event);">' + visitor["lastVisit"] + '</td>');
		  tableRow.append(tableData);
		  
		  
		  tableData = $('<td id="blacklist-' + visitor["id"] + '" onclick = "tableRowItemClick(event);">' + getYesOrNo(visitor["blacklisted"]) + '</td>');
		  tableRow.append(tableData);
		  
		  if(visitor["blacklisted"] == 'Y'){
			  $("#" + visitor["id"]).css("color", "red");
		  }		  		  
		  
	  });
	  
}


function displayUserMatches(search, tableContainer){
	if(search != ""){
		$.get("/visitorsLog/get-user-matches?search=" + search, function(data){
			//console.log(data);
			displayUsers(tableContainer, data);			
			preparePagination("searchUsers", MAX_QUERY_TOTAL, "pagination");
		  });
	}else{
		$.get("/visitorsLog/user-actions", function(data){
			displayUsers(tableContainer, data);
			preparePagination("allUsers", MAX_QUERY_TOTAL, "pagination");
		  });
	}
	
	
}


function displayVisitorMatches(search, tableContainer){
	if(search != ""){
		$.get("/visitorsLog/get-visitor-matches?search=" + search, function(data){
			//console.log(data);
			displayVisitors(tableContainer, data);
		  });
	}else{
		$.get("/visitorsLog/visitor-actions", function(data){
			displayVisitors(tableContainer, data);
		  });
	}
		
}