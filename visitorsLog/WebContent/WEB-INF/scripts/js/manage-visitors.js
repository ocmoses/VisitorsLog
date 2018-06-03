/**
 * 
 */
var page = "manage-visitors";
$(document).ready(function(){
	
		getAllMaritalStatus($("#marital-status"));
		getAllCountries($("#country"));		
		getAllOccupations($("#occupation"));
		getAllDinings($("#dining"));
		getAllReferenceNos($("#ref-no"));
		getAllModesOfVisit($("#mode-of-visit"));
		
		$(".sidebar").css("visibility", "hidden");
		
		$.get("/visitorsLog/visitor-actions", function(data){			  
												$("#visitor-pic-div").css("visibility", "hidden");
												displayVisitors($("#visitor-actions"), data);
												preparePagination("allVisitors", MAX_QUERY_TOTAL, "pagination", $("#srch-term").val());
										  }
		);
		
		$("#group-action").on("change", function(){ 
			var checked = $("#manage-visitor-table").find($("input[type=checkbox]:checked"));
			if(checked.length == 0){
				
				displayDialogModal("OK oh...", "I hear you. But no visitor was checked. Seriously?...", "OK");												
				
			}else{
				 
				var selectedIdsArray = new Array();
				var selectedVisitorsArray = new Array();
				
				for(var i = 0; i < checked.length; i++){
					//console.log("The checked: " + $(checked[i]).attr("id"));
					selectedIdsArray.push($(checked[i]).attr("id").split("-")[1]);
					selectedVisitorsArray.push(" " + $("#name-" + $(checked[i]).attr("id").split("-")[1]).text());
				}
										
				 
				switch($(this).val()){
				
//					case "Report": displayDialogModal("One moment", "Are you sure you want to suspend the following user(s): " + selectedVisitorsArray + 
//						"?", "OK", "Yes, sure", viewVisitorReport, selectedIdsArray); break;
					
					case "Report": displayDialogModal("One moment", "Are you sure you want to generate report(s) for the following visitor(s): " + selectedVisitorsArray + 
							"?", "OK"); break;
					case "Unblacklist": displayModal("One moment", "Are you sure you want to remove the following visitor(s) from the blacklist: " + selectedVisitorsArray + "?", 
							"No, cancel", "Yes, sure", removeVisitorsFromBlacklist, selectedIdsArray); break;
					case "Blacklist": displayModal("One moment", "Are you sure you want to blacklist the following visitor(s): " + selectedVisitorsArray + "?", 
							"No, cancel", "Yes, sure", blacklistVisitors, selectedIdsArray); break;
					case "Remove": displayModal("Please confirm", "Removing will delete the following visitor(s) and all their records completely: " + selectedVisitorsArray + 
							". Are you sure you wish to continue?", "No, cancel", "Yes, continue", deleteVisitors, selectedIdsArray); 
				}
			}
			
		});
		
		
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			  var target = $(e.target).attr("href") 
			  $.get("/visitorsLog/" + target.slice(1), function(data){
														  //alert(data);													  
														  if(target == "#visitor-actions"){
															  $("#visitor-pic-div").css("visibility", "hidden");
															  $(".sidebar").css("visibility", "hidden");
															  
															  //console.log(data);
															  displayVisitors(target, data);
															  preparePagination("allVisitors", MAX_QUERY_TOTAL, "pagination");
															  
															  //$("#visitor-actions-all").css("display", "none");  ///This is only for development now..............
															  
														  }else if( target == "#add-new-visitor"){
															  $("#visitor-pic-div").css("visibility", "visible");
															  $(".sidebar").css("visibility", "visible");
														  }
													  });
		});
		
		setInterval(function(){
			if($("#srch-term").is(":focus")){
				displayVisitorMatches($("#srch-term").val(), $("#manage-visitor-div"));
				preparePagination("searchVisitors", MAX_QUERY_TOTAL, "pagination", $("#srch-term").val());
						
			}
		}, 3000);
		
		setInterval(function(){
			if(($("#firstName").is(":focus") || $("#middleName").is(":focus") || $("#lastName").is(":focus"))){
				getSimilarRecords($("#firstName").val(), $("#middleName").val(), $("#lastName").val());
				preparePagination("similarVisitors", MAX_QUERY_TOTAL, "pagination");
			}
		}, 3000);	
		
		
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
		$("form[name=visitor-register]").submit(function(e){
													e.preventDefault(e);												
													prepareCheckboxes();
													console.log($(this).serialize());
																									
													validateVisitorRegisteration();
													
													//$("form[name=visitor-register]")[0].submit();
												});
		
		
		$("#visitor-pic-div").hover(function(){
			$("#choose-pic").css("visibility", "visible"); 
		}, 
		function(){
			$("#choose-pic").css("visibility", "hidden");
		});
				
});

