<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/visitor-details-readonly.js"></script>

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
						    
						</div>
		  		 	 
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-dob" class="col-form-label">Date of Birth:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="date" readonly class="form-control-plaintext detail-text absolute transparent" id="visitor-dob" value="${visitor.dob}">
						      <input type="date" id="visitor-dob-picker" class="form-control absolute invisible" />
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
						    
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-phone" class="col-form-label">Phone:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text " id="visitor-phone" value="${visitor.phone1}">
						    </div>
						    
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-email" class="col-form-label">Email:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text " id="visitor-email" value="${visitor.email}">
						    </div>
						    
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-website" class="col-form-label">Website:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-website" value="${visitor.website}">
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
						    
						</div>
						
						<div class="form-group detail-div">
		  		 	 		
		  		 	 		<div class="col-sm-3 ">
						    		<label for="visitor-ministry" class="col-form-label">Ministry/church:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="visitor-ministry" value="${visitor.ministry}">
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
						    
						    <input type="text" id="hidden-user-id" style="display: none;" value="${sessionScope.user.id}" />
						    
						</div>
						
						<div class="form-group" id="generate-report-container">
		  		 	 		<input type="button" class="btn btn-primary pull-right" id="generate-visitor-report" value="Generate report" />						    
						</div>
						
				  	 </div> 		
			  		 
			  		 
			  </div>
			  
		</div>
	</article>
	
	<div class="col-md-5 col-md-5 visits-container" >
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
	<div class="col-md-5 col-lg-5" style="margin-top: 20px;">
		<jsp:include page="../includes/pic-sidebar.jsp" />
	</div>
	
</div>
<%-- <jsp:include page="../includes/footer.jsp"></jsp:include> --%>
	

</body>
</html>