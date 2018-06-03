/**
 * 
 */
$(document).ready(function(){
	
	getAllUsers();
	getAllMaritalStatus();
	getAllDinings($("#filter-dining-select"));
	getAllReferenceNos($("#filter-reference-no-select"));
	getAllModesOfVisit($("#filter-mode-of-visit-select"));
	
	$("#start-search").on("click", function(){buildFilterQuery();});
	$("#clear-search").on("click", function(){location.reload();});
	
	getAllCountries($("#filter-country-select"));
	getAllOccupations($("#filter-occupation-select"))
	$.get("/visitorsLog/visitor-actions", function(data){
											setTimeout(displayVisitors($("#all-visitors"), data), 1000);
											preparePagination("allVisitors", MAX_QUERY_TOTAL, "pagination");
										  });
	
	$(".filter-p").click(function(e){
		
		var next = $(e.target).next();
		if(next.css("display") == "none"){
			next.css("display", "inline-block");
			next.css("width", "100%");
		}else{
			next.css("display", "none");
			
		}
		
	});
	
	setInterval(function(){
		if($("#search-term").is(":focus")){
				displayVisitorMatches($("#search-term").val(), $("#all-visitors"));
				preparePagination("searchVisitors", MAX_QUERY_TOTAL, "pagination", $("#srch-term").val());	
		}
	}, 3000);
		
		
	
});


function buildFilterQuery(){
	
	var queryArray = new Array();
	
	var filterArrivalFrom = $("#filter-arrival-from").val();
	var filterArrivalTo = $("#filter-arrival-to").val();
	
	var filterDepartureFrom = $("#filter-departure-from").val();
	var filterDepartureTo = $("#filter-departure-to").val();
	
	var filterMale = $("#filter-male");
	var filterFemale = $("#filter-female");
	var filterOther = $("#filter-other");
	
	var filterSingle = $("#filter-single");
	var filterMarried = $("#filter-married");
	var filterDivorced = $("#filter-divorced");
	var filterWidowed = $("#filter-widowed");
	var filterSeparated = $("#filter-separated");
	var filterEngaged = $("#filter-engaged");
	
	var filterAgeFrom = $("#filter-age-from").val();
	var filterAgeTo = $("#filter-age-to").val();
	
	var filterCountrySelect = $("#filter-country-select").val();
	var filterOccupationSelect = $("#filter-occupation-select").val();
	
	var filterMinistryInput = $("#filter-ministry-input").val();	
	var filterPhoneNo = $("#filter-phone-no").val();
	
	var filterEmail = $("#filter-email").val();	
	var filterWebsite = $("#filter-website").val();
	
	var filterVisitsFrom = $("#filter-visits-from").val();
	var filterVisitsTo = $("#filter-visits-to").val();
	
	var filterPassportYes = $("#filter-passport-yes");
	var filterPassportNo = $("#filter-passport-no");
	
	var filterMedReportYes = $("#filter-med-report-yes");
	var filterMedReportNo = $("#filter-med-report-no");
	
	var filterTakingMedsYes = $("#filter-taking-meds-yes");
	var filterTakingMedsNo = $("#filter-taking-meds-no");
	
	var filterReason = $("#filter-reason-input").val();
	var filterDiningSelect = $("#filter-dining-select").val();
	var filterModeOfVisitSelect = $("#filter-mode-of-visit-select").val();
	var filterReferenceNoSelect = $("#filter-reference-no-select").val();
	
	var filterIsPartnerYes = $("#filter-is-partner-yes");
	var filterIsPartnerNo = $("#filter-is-partner-no");
	
	var filterBlacklistedYes = $("#filter-blacklisted-yes");
	var filterBlacklistedNo = $("#filter-blacklisted-no");
	
	//We begin building string here
	
	if(filterArrivalFrom != "" && filterArrivalTo != ""){
		queryArray.push(" v.arrival_date BETWEEN '" + filterArrivalFrom + "' AND '" + filterArrivalTo + "' ");
	}else if(filterArrivalFrom != "" && filterArrivalTo == ""){
		queryArray.push(" v.arrival_date = '" + filterArrivalFrom + "' ");
	}else if(filterArrivalFrom == "" && filterArrivalTo != ""){
		queryArray.push(" v.arrival_date = '" + filterArrivalTo + "' ");
	}
	
	if(filterDepartureFrom != "" && filterDepartureTo != ""){
		queryArray.push(" v.departure_date BETWEEN '" + filterDepartureFrom + "' AND '" + filterDepartureTo + "' ");
	}else if(filterDepartureFrom != "" && filterDepartureTo == ""){
		queryArray.push(" v.departure_date = '" + filterDepartureFrom + "' ");
	}else if(filterDepartureFrom == "" && filterDepartureTo != ""){
		queryArray.push(" v.departure_date = '" + filterDepartureTo + "' ");
	}
	
	var sexArray = new Array();
	
	if($(filterMale).is(":checked")){
		sexArray.push("M");
	}
	
	if($(filterFemale).is(":checked")){
		sexArray.push("F")
	}
	
	if($(filterOther).is(":checked")){
		sexArray.push("O")
	}
	
	if(sexArray.length != (0 || 3)){
		var queryString = "";
		for(var i = 0; i < sexArray.length; i++){
			queryString += " vr.sex = '" + sexArray[i] + "' OR ";
		}
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}
	
	
	var marriedArray = new Array();
	var maritalId;
	
	if($(filterSingle).is(":checked")){
		maritalId = getMaritalStatusIdWithName("Single");
		marriedArray.push(maritalId);
	}
	
	if($(filterMarried).is(":checked")){
		maritalId = getMaritalStatusIdWithName("Married");
		marriedArray.push(maritalId);
	}
	
	if($(filterDivorced).is(":checked")){
		maritalId = getMaritalStatusIdWithName("Divorced");
		marriedArray.push(maritalId);
	}
	
	if($(filterWidowed).is(":checked")){
		maritalId = getMaritalStatusIdWithName("Widowed");
		marriedArray.push(maritalId);
	}
	
	if($(filterSeparated).is(":checked")){
		maritalId = getMaritalStatusIdWithName("Separated");
		marriedArray.push(maritalId);
	}
	
	if($(filterEngaged).is(":checked")){
		maritalId = getMaritalStatusIdWithName("Engaged");
		marriedArray.push(maritalId);
	}
	
	if(marriedArray.length != (0 || 6)){
		
		var queryString = "";
		
		for(var i = 0; i < marriedArray.length; i++){
			queryString += " vr.marital_status = " + marriedArray[i] + " OR ";
		}
		
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}
	
	if(filterAgeFrom != "" && filterAgeTo != ""){
		var year  = parseInt(getTodaysDate().split("-")[0]);
		
		var yearBorn1 = (year - filterAgeFrom) + "-01-01";
		var yearBorn2 = (year - filterAgeTo) + "-12-31";
		
		queryArray.push(" vr.dob BETWEEN '" + yearBorn2 + "' AND '" + yearBorn1 + "' ");
		
	}else if(filterAgeFrom != "" && filterAgeTo == ""){
		var year  = parseInt(getTodaysDate().split("-")[0]);
		var yearBornBegin = (year - filterAgeFrom) + "-01-01";
		var yearBornEnd = (year - filterAgeFrom) + "-12-31";
		
		queryArray.push(" vr.dob BETWEEN '" + yearBornBegin + "' AND '" + yearBornEnd + "' ");
		
	}else if(filterAgeFrom == "" && filterAgeTo != ""){
		var year  = parseInt(getTodaysDate().split("-")[0]);
		var yearBornBegin = (year - filterAgeTo) + "-01-01";
		var yearBornEnd = (year - filterAgeTo) + "-12-31";
		
		queryArray.push(" vr.dob BETWEEN '" + yearBornBegin + "' AND '" + yearBornEnd + "' ");
	}
	
	if(filterCountrySelect != 0){
		queryArray.push(" vr.country_id = " + filterCountrySelect + " ");
	}
	
	if(filterOccupationSelect != 0){
		queryArray.push(" vr.occupation_id = " + filterOccupationSelect + " ");
	}
	
	if(filterMinistryInput != ""){
		queryArray.push(" vr.ministry LIKE '%" + filterMinistryInput + "%' ");
	}
	
	if(filterPhoneNo != ""){
		queryArray.push(" vr.phone1 LIKE '%" + filterPhoneNo + "%' OR phone2 LIKE '%" + filterPhoneNo + "%' ");
	}
	
	if(filterEmail != ""){
		queryArray.push( " vr.email LIKE '%" + filterEmail + "%' ");
	}
	
	if(filterWebsite != ""){
		queryArray.push(" vr.website LIKE '%" + filterWebsite + "%' ");
	}
	
	
	var hasPassportArray = new Array()
	if($(filterPassportYes).is(":checked")){
		hasPassportArray.push(" vr.has_passport = 'Y'");
	}	
	if($(filterPassportNo).is(":checked")){
		hasPassportArray.push(" vr.has_passport = 'N'");
	}
	if(hasPassportArray.length != (0 || 2)){
		
		var queryString = "";
		
		for(var i = 0; i < hasPassportArray.length; i++){
			queryString += hasPassportArray[i] + " OR ";
		}
		
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}
	
	var medReportArray = new Array()
	if($(filterMedReportYes).is(":checked")){
		medReportArray.push(" v.has_med_report = 'Y'");
	}	
	if($(filterMedReportNo).is(":checked")){
		medReportArray.push(" v.has_med_report = 'N'");
	}
	if(medReportArray.length != (0 || 2)){
		
		var queryString = "";
		
		for(var i = 0; i < medReportArray.length; i++){
			queryString += medReportArray[i] + " OR ";
		}
		
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}
	
	var takingMedsArray = new Array()
	if($(filterTakingMedsYes).is(":checked")){
		takingMedsArray.push(" v.on_meds_on_arrival = 'Y'");
	}	
	if($(filterTakingMedsNo).is(":checked")){
		takingMedsArray.push(" v.on_meds_on_arrival = 'N'");
	}
	if(takingMedsArray.length != (0 || 2)){
		
		var queryString = "";
		
		for(var i = 0; i < takingMedsArray.length; i++){
			queryString += takingMedsArray[i] + " OR ";
		}
		
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}
	
	if(filterReason != ""){
		queryArray.push( " v.reason_of_visit LIKE '%" + filterReason + "%' ");
	}
	
	if(filterDiningSelect != "0"){
		queryArray.push( " v.dining = '" + filterDiningSelect + "' ");
	}
	
	if(filterModeOfVisitSelect != "0"){
		queryArray.push( " v.mode_of_visit = '" + filterModeOfVisitSelect + "' ");
	}
	
	if(filterReferenceNoSelect != "0"){
		queryArray.push( " v.reference_no = '" + filterReferenceNoSelect + "' ");
	}	
	
	var partnerNoArray = new Array()
	if($(filterIsPartnerYes).is(":checked")){
		partnerNoArray.push(" vr.is_partner = 'Y'");
	}
	
	if($(filterIsPartnerNo).is(":checked")){
		partnerNoArray.push(" vr.is_partner = 'N'");
	}
	
	if(partnerNoArray.length != (0 || 2)){
		
		var queryString = "";
		
		for(var i = 0; i < partnerNoArray.length; i++){
			queryString += partnerNoArray[i] + " OR ";
		}
		
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}	
	
	
	var blacklistedArray = new Array()
	if($(filterBlacklistedYes).is(":checked")){
		blacklistedArray.push(" vr.blacklisted = 'Y'");
	}	
	if($(filterBlacklistedNo).is(":checked")){
		blacklistedArray.push(" vr.blacklisted = 'N'");
	}	
	if(blacklistedArray.length != (0 || 2)){
		
		var queryString = "";
		
		for(var i = 0; i < blacklistedArray.length; i++){
			queryString += blacklistedArray[i] + " OR ";
		}
		
		if(queryString != "")
			queryArray.push(queryString.substring(0, queryString.lastIndexOf("OR")) );
	}
	
	var query = "SELECT   vr.*, v.visitor_id, COUNT(v.visitor_id) as no_of_visits, MAX(v.arrival_date) as lastVisit, v.arrival_date, v.reason_of_visit, v.departure_date, " + 
				" v.has_med_report, v.on_meds_on_arrival, v.reason_of_visit, v.dining, v.mode_of_visit, v.reference_no FROM visitors as vr JOIN visits as v  ON v.visitor_id = vr.id ";
	
	if(queryArray.length > 0){
		for(var i = 0; i < queryArray.length; i++){
			query += ((i == 0) ? " WHERE " + queryArray[i] + " AND " : queryArray[i] + " AND ");
		}
		
		query = query.substring(0, query.lastIndexOf("AND"));
	}
	
	query += " GROUP BY vr.id"			
	
	if(filterVisitsFrom != "" && filterVisitsTo != ""){
		query += " HAVING no_of_visits BETWEEN " + filterVisitsFrom + " AND " + filterVisitsTo + " ";
	}else if(filterVisitsFrom != "" && filterVisitsTo == ""){
		query += " HAVING no_of_visits = " + filterVisitsFrom + " ";
	}else if(filterVisitsFrom == "" && filterVisitsTo != ""){
		query += " HAVING no_of_visits " + filterVisitsTo + " ";
	}
		
	console.log(query);
		
	$.get("/visitorsLog/get-filter-search?query=" + escape(query), function(data){
																//console.log(data);
																$(".pagination").html("");
																$(".pagination").css("visibility", "hidden");
																displayVisitors($("#all-visitors"), data);
																$("html, body").animate({scrollTop: 0}, "slow");
														  });
	
	
}

