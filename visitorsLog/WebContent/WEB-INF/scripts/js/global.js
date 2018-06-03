/**
 * 
 */
todaysDate = new Date();
currentYear = todaysDate.getFullYear();
currentMonth= todaysDate.getMonth() + 1;
currentDay = todaysDate.getDate();

currentUserRole = "";

function Role(){
	var id;
	var role;
}


function AccountStatus(){
	var id;
	var status;
}

function MaritalStatus(){
	var id;
	var maritalStatus;
}

function Occupation(){
	var id;
	var occupation;
}

function Country(){
	var id;
	var name;
}

function UserActivity(){
	var id;
	var activity;
}

function VisitDates(){
	var doa;
	var dod;
}

function Dining(){
	var id;
	var dining;
}

function ReferenceNo(){
	var referenceNo;
	var referenceName;
}

function ModeOfVisit(){
	var id;
	var modeOfVisit;
}


allRoles = new Array();
allAccountStatus = new Array();
allCountries = new Array();
allOccupations = new Array();
allMaritalStatus = new Array();
allUserActivities = new Array();
allUsers = new Array();
allVisitDates = new Array();

allDinings = new Array();
allReferenceNos = new Array();
allModesOfVisit = new Array();

DEFAULT_PIC_SOURCE = "/visitorsLog/images/profile.png";
today = new Date().get;

MAX_QUERY_TOTAL = 20;

visitsArray = new Array();
activitiesArray = new Array();



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
	
	document.onclick = function(){
		if($(".alert-error").css("display") != "none"){
			$(".alert-error").css("display", "none");

		}
			
		
		if($(".alert-submited").css("display") != "none"){
			$(".alert-submited").css("display", "none");
			
			if(page == "manage-users"){
				try{
					$("form[name=user-register]").trigger("reset");
					$('#visitor-pic').attr('src', DEFAULT_PIC_SOURCE);
					location.reload(); 									//Should have done this all along=========================================
				}catch(ex){
					console.log("clicked but nothing happened on manage users tab")
				}
			}else if(page == "manage-visitors"){
				try{
					$("form[name=visitor-register]").trigger("reset");
					if(page == "manage-visitors"){
						location.reload();
					}
				}catch(ex){
					console.log("clicked but nothing happened on manage visitors tab");				
				}
				$('#visitor-pic').attr('src', DEFAULT_PIC_SOURCE);
			}
			
			
		}
			
	}
	
	$("#logout").click(function(){
		displayModal("One Sec!", "Do you really want to logout? Any unsaved job will be deleted. Are you sure you want to continue?", "No, cancel", "Yes!", tryLogout);
	});

});