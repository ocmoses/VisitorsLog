<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/visitor-details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/handlepic.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/validation.js"></script>


<title>Visitor details</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
		<jsp:include page="../includes/pic.jsp"></jsp:include>
	</div>	
	
	<article class="col-md-5 col-lg-5 ">
		
		<div class="post allow-overflow" >
			<div class="no-padding no-margin" >
			       
		 			 
		  		 	 <div class="details">
		  		 	 
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-name" class="col-form-label">Name:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="visitor-name" value="${visitor.firstName} ${visitor.middleName} ${visitor.lastName}">
						      <div id="visitor-name-inputs" class="absolute invisible" style="display: inline-block; background-color: transparent; padding: 0px;">
						      	<input type="text" class="form-control" style="width: 32%; display: inline-block;" id="visitor-first-name" value="${visitor.firstName}">
						      	<input type="text" class="form-control" style="width: 32%; display: inline-block;" id="visitor-middle-name" value="${visitor.middleName }">
						      	<input type="text" class="form-control"  style="width: 32%; display: inline-block;" id="visitor-last-name" value="${visitor.lastName }">						      
						      </div>
						      
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-name-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-name-edit" class="pull-right link">edit</p>
						    </div>
						</div>
		  		 	 
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-dob" class="col-form-label">Date of Birth:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="date" readonly class="form-control-plaintext detail-text absolute transparent" id="visitor-dob" value="${visitor.dob}">
						      <input type="date" id="visitor-dob-picker" class="form-control absolute invisible" />
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-dob-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-dob-edit" class="pull-right link">edit</p>
						    </div>
						</div>
		  		 	 	
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-sex" class="col-form-label">Sex:</label>
						    </div>
						    <div class="col-sm-7">
							      <input type="text" readonly class="form-control-plaintext detail-text absolute" id="visitor-sex" />
							      <div id="visitor-sex-check" class="absolute full-width invisible" style="background-color: #eee;">
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-sex-check-yes" name="visitor-sex-value" value="Male" type="radio" class="custom-control-input" value="Male">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Male</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-sex-check-no" name="visitor-sex-value" value="Female" type="radio" class="custom-control-input" value="Female">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Female</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-sex-check-no" name="visitor-sex-value" value="Other" type="radio" class="custom-control-input" value="Other">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Other</span>
										</label>									    		  
								</div>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-sex-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-sex-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-marital-status" class="col-form-label">Marital status:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="visitor-marital-status" >
						      <select id="visitor-marital-status-select" class="custom-select full-select absolute invisible">
									  <option selected>Select</option>
									  <option value="Nigeria">Married</option>
									  <option value="South Africa">Divorced</option>
									  <option value="US">whatever</option>
								</select>	
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-marital-status-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-marital-status-edit" class="pull-right link">edit</p>
						    </div>
						</div>	
		  		 	 	
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-country" class="col-form-label">Country:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="visitor-country" >
						      	<select id="visitor-country-select" class="custom-select full-select absolute invisible">
									  <option selected>Select Country</option>
									  <option value="Nigeria">Nigeria</option>
									  <option value="South Africa">South Africa</option>
									  <option value="US">US</option>
								</select>	
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-country-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-country-edit" class="pull-right link">edit</p>
						    </div>
						    
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-phone" class="col-form-label">Phone:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text " id="visitor-phone" value="${visitor.phone1}">
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-phone-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-phone-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-email" class="col-form-label">Email:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text " id="visitor-email" value="${visitor.email}">
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-email-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-email-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-website" class="col-form-label">Website:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-website" value="${visitor.website}">
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-website-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-website-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
							<div class="col-sm-3 ">
						    		<label for="visitor-occupation" class="col-form-label">Occupation:</label>
						    </div>
						    <div class="col-sm-7">
		  		 	 			<input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="visitor-occupation" >
						      	<select id="visitor-occupation-select" class="custom-select full-select absolute invisible">
									  <option selected>Select Occupation</option>
									  <option value="Nigeria">Teacher</option>
									  <option value="South Africa">Carpenter</option>
									  <option value="US">Cabby</option>
								</select>	
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-occupation-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-occupation-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-ministry" class="col-form-label">Ministry/church:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-ministry" value="${visitor.ministry}">
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-ministry-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-ministry-edit" class="pull-right link">edit</p>
						    </div>
						    
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-partner" class="col-form-label">Is a partner:</label>
						    </div>
						    <div class="col-sm-7">
							      <input type="text" readonly class="form-control-plaintext detail-text absolute" id="visitor-partner" >
							      <div id="visitor-partner-check" class="absolute full-width invisible" style="background-color: #eee;">
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-partner-check-yes" name="visitor-partner-value" value="Yes" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Yes</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-partner-check-no" name="visitor-partner-value" value="No" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">No</span>
										</label>
									    		  
									</div>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-partner-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-partner-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-partnership-no" class="col-form-label">Partnership No:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-partnership-no" value="${visitor.partnerNo}">
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-partnership-no-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-partnership-no-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-blacklist" class="col-form-label">Is on blacklist:</label>
						    </div>
						    <div class="col-sm-7">
							      <input type="text" readonly class="form-control-plaintext detail-text absolute" id="visitor-blacklist" >
							      <div id="visitor-blacklist-check" class="absolute full-width invisible" style="background-color: #eee;">
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-partner-check-yes" name="visitor-blacklist-value" value="Yes" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Yes</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="visitor-partner-check-no" name="visitor-blacklist-value" value="No" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">No</span>
										</label>
									    		  
									</div>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-blacklist-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="visitor-blacklist-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-last-visit" class="col-form-label">Last visit:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-last-visit" value="${visitor.lastVisit}">
						    </div>
						    <div class="col-sm-2">
						     	
						    </div>
						</div>
						
		  		 		<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-registered-by" class="col-form-label">Registered by:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-registered-by" >
						    </div>
						    <div class="col-sm-2">
						     	
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-register-date" class="col-form-label">Register date:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-register-date" value="${visitor.createdOn}">
						    </div>
						    <div class="col-sm-2">
						     	
						    </div>
						    
						    <input type="text" id="pic-location" style="display: none;" value="${visitor.picLocation}" />
						    <input type="text" id="sex-location" style="display: none;" value="${visitor.sex}" />
						    <input type="text" id="marital-status-location" style="display: none;" value="${visitor.maritalStatus}" />
						    <input type="text" id="country-location" style="display: none;" value="${visitor.country}" />
						    <input type="text" id="occupation-location" style="display: none;" value="${visitor.occupation}" />
						    <input type="text" id="partner-location" style="display: none;" value="${visitor.isPartner}" />
						    <input type="text" id="blacklisted-location" style="display: none;" value="${visitor.blacklisted}" />
						    <input type="text" id="createdby-location" style="display: none;" value="${visitor.createdBy}" />
						    <input type="text" id="id-location" style="display: none;" value="${visitor.id}" />
						    
						    <input type="text" id="user-id-location" style="display: none;" value="${user.id}" />
						    						    
						</div>
						
						<div class="form-group" id="generate-report-container">
		  		 	 		<input type="button" class="btn btn-primary pull-right" id="generate-visitor-report" value="Generate report" />						    
						</div>
						
				  	 </div> 		
			  		 
			  		 
			  </div>
			  
		</div>
	</article>
	
	<div class="col-md-5 col-md-5 visits-container scrollable" >
		<div style="padding: 10px;">
			<h4>Record of Visits</h4>
		</div>		
		<div class="">
			<table class="table" style="width: 100%; margin: 0px; padding: 0px;">
					 		<thead>
					 			<tr>					 			
					 				<th>
					 					S/N
					 				</th>
					 				<th>
					 					A. Date
					 				</th>
					 				<th>
					 					A. Time
					 				</th>
					 				<th>
					 					Reason
					 				</th>
					 				<th>
					 					Taking Meds
					 				</th>
					 				<th>
					 					Med Report
					 				</th>
					 				<!-- <th>
					 					Illness
					 				</th> -->
					 				<th>
					 					D. Date
					 				</th>
					 				<th>
					 					D. Time
					 				</th>					 				
					 				<th>
					 					Comment
					 				</th>
					 				<th>
					 					By
					 				</th>
					 				
					 			</tr>
					 		</thead>
					 		
					 		<tbody>
					 		
					 		</tbody>
					 		
					 	</table>
		</div>
	</div>
	
	<div class="col-md-5 col-md-5 new-visits-container" >
		<div style="padding: 10px;">
			<h4> Add new Record</h4>
		</div>
		<div class="">
		<form method="post" action="${pageContext.request.contextPath}/add-visit" name="add-visit" >
			<div class="alert alert-danger alert-error">
			  <p ><strong>Wait!</strong> <span class="alert-span"></span></p>
			</div>
			
			<div class="alert alert-success alert-submited">
			  <p ><strong>Success!</strong> <span class="alert-span2">The user has been saved! :)</span></p>
			</div>
			<table class="table" style="width: 100%; margin: 0px; padding: 0px;">
	 			<tbody>
			 		<tr>
			 			<td class="side-label">Arrival Date<span class="red">*</span></td><td><input type="date" name="arrival-date" id="arrival-date" class="form-control" /></td>
			 		</tr>
			 		<tr>
			 			<td class="side-label">Arrival Time</td><td><input type="time" name="arrival-time" id="arrival-time" class="form-control" /></td>
			 		</tr>
			 		<tr>
			 			<td class="side-label">Reason</td><td><textarea class="form-control" name="reason" id="reason" rows="5" ></textarea></td>
			 		</tr>
			 		<tr>
			 			<td class="side-label">Taking Meds</td>
			 			<td>
			 				<div class="absolute full-width" >					 				
								<label class="custom-control custom-radio col-sm-4">
									<input name="taking-meds" value="Y" type="radio" id="taking-meds-yes" class="custom-control-input">
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">Yes</span>
								</label>
								<label class="custom-control custom-radio col-sm-4">
									<input name="taking-meds" value="N" type="radio" id="taking-meds-no" class="custom-control-input " checked>
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">No</span>
								</label>									    		  
							</div>
						</td>
			 		</tr>
			 		<tr>
			 			<td class="side-label">Med Report</td>
			 			<td>
				 			<div class="absolute full-width" >
								<label class="custom-control custom-radio col-sm-4">
									<input name="has-med-report" value="Y" type="radio" id="has-med-report-yes" class="custom-control-input">
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">Yes</span>
								</label>
								<label class="custom-control custom-radio col-sm-4">
									<input name="has-med-report" value="N" type="radio" id="has-med-report-no" class="custom-control-input " checked>
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">No</span>
								</label>									    		  
							</div>
						</td>
			 		</tr>
			 		<tr class="form-group single-row">
			 			
		 				<td ><label class="control-label" for="mode-of-visit">Mode of Visit<span class="red">*</span></label></td>
						    
						<td>
							<div class="form-group col-md-6 col-sm-6" style="padding: 0px; margin: 0px;">
								  <select id="mode-of-visit" name="modeOfVisit" class="custom-select full-select" >
									  <option value="0" selected>--Select mode of visit--</option>
									  <option value="1">SCOAN Invited</option>
									  <option value="2">SCOAN by Gate</option>
									  <option value="3">Special Guest</option>
								  </select>
							 </div>
						 
							 <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" id="ref-no-div">
								  <select id="ref-no" name="referenceNo" class="custom-select full-select" >
									  <option value="0" selected>--Select Reference No-</option>
									  <option value="1">1</option>
									  <option value="2">2</option>
									  <option value="3">3</option>
									  <option value="4">4</option>
									  <option value="5">5</option>
								 </select>								  
							  </div>								  
												
												   
							   <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" id="screener-div" >
								  <input type="text" name="screener" class="form-control" id="screener" placeholder="Enter Screener's Name">								  
							   </div>
							
						
							
							   <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" id="in-care-of-div" >
								  <input type="text" name="inCareOf" class="form-control" id="in-care-of" placeholder="In Care of Who?">								  
							   </div>	
						</td>					  								  
					 
				</tr>	
					  
				  <tr class="form-group" id="group-coordinator-div" >
				  	  <td><label class="control-label" for="group-coordinator">Group Coordinator</label></td>
					  <td><input type="text" name="groupCoordinator" class="form-control" id="group-coordinator" placeholder=""></td>							  
				  </tr>						  
					  
				  <tr class="form-group single-row" >
				  	<td><label class="control-label" for="mode-of-visit">Dining</label></td>
					<td><select id="dining" name="dining" class="custom-select full-select" >
						  <option value="0" selected>--Select Dining--</option>
						  <option value="1">Newland 1 Dining</option>
						  <option value="2">Newland 2 Dining</option>
						  <option value="3">Up Dining</option>
						  <option value="4">Botswana Dining</option>
						  <option value="5">Private Dining</option>									  
					   </select>
					</td>								  
				  </tr>
					  
		 		<tr>
		 			<td class="side-label">Departure Date<span class="red">*</span></td>
		 			<td><input type="date" name="departure-date" id="departure-date" class="form-control" /></td>
		 		</tr>
		 		<tr>
		 			<td class="side-label">Departure Time</td>
		 			<td><input type="time" name="departure-time" id="departure-time" class="form-control" /></td>
		 		</tr>
		 		<tr>
		 			<td class="side-label">Comment</td>
		 			<td><textarea class="form-control" name="comment" id="comment" rows="5" ></textarea></td>
		 		</tr>					 		
	 		
	 		</tbody>
	 	</table>
	 	<input type="text" id="hidden-user-id" style="display: none;" name="current-user-id" value="${sessionScope.user.id}" />
	 	<input type="text" id="hidden-visitor-id" name="visitor-id" style="display: none;" value="${visitor.id}" />
	 	
	 	<div style="margin-top: 20px;">
	 		
	 		<input type="submit" class="btn btn-primary pull-right" style="margin-right: 10px;" />
	 		<input type="reset" class="btn btn-default pull-right" style="margin-right: 10px;" />
	 		
	 	</div>
	 </form>
	</div>
   </div>
	
 </div>
<%-- <jsp:include page="../includes/footer.jsp"></jsp:include> --%>
	
</body>
</html>