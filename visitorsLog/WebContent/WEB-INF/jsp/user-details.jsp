<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/validation.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/user-details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/handlepic.js"></script>

<title>User details</title>
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
						    		<label for="user-name" class="col-form-label">Name:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="user-name" value="${userDetail.firstName} ${userDetail.middleName} ${userDetail.lastName}">
						      <div id="user-name-inputs" class="absolute invisible" style="display: inline-block; background-color: transparent; padding: 0px;">
						      	<input type="text" class="form-control" style="width: 32%; display: inline-block;" id="user-first-name" value="${userDetail.firstName}">
						      	<input type="text" class="form-control" style="width: 32%; display: inline-block;" id="user-middle-name" value="${userDetail.middleName}">
						      	<input type="text" class="form-control"  style="width: 32%; display: inline-block;" id="user-last-name" value="${userDetail.lastName}">						      
						      </div>
						      
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-name-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-name-edit" class="pull-right link">edit</p>
						    </div>
						</div>
		  		 	 
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-dob" class="col-form-label">Date of Birth:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="date" readonly class="form-control-plaintext detail-text absolute transparent" id="user-dob" value="${userDetail.dob}">
						      <input type="date" id="user-dob-picker" class="form-control absolute invisible" />
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-dob-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-dob-edit" class="pull-right link">edit</p>
						    </div>
						</div>
		  		 	 	
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-sex" class="col-form-label">Sex:</label>
						    </div>
						    <div class="col-sm-7">
							      <input type="text" readonly class="form-control-plaintext detail-text absolute" id="user-sex" />
							      <div id="user-sex-check" class="absolute full-width invisible" style="background-color: #eee;">
							      		
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-sex-check-yes" name="user-sex-value" type="radio" class="custom-control-input" value="Male">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Male</span>
										</label>
										
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-sex-check-no" name="user-sex-value" type="radio" class="custom-control-input"  value="Female">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Female</span>
										</label>
										
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-sex-check-no" name="user-sex-value" type="radio" class="custom-control-input"  value="Other">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Other</span>
										</label>									    		  
								</div>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-sex-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-sex-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-marital-status" class="col-form-label">Marital status:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="user-marital-status" >
						      <select id="user-marital-status-select" class="custom-select full-select absolute invisible">
									  <option selected>Select</option>
									  <option value="Nigeria">Married</option>
									  <option value="South Africa">Divorced</option>
									  <option value="US">whatever</option>
								</select>	
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-marital-status-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-marital-status-edit" class="pull-right link">edit</p>
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-role" class="col-form-label">Role:</label>
						    </div>
						    <div class="col-sm-7">
							      <input type="text" readonly class="form-control-plaintext detail-text absolute" id="user-role" />
							      <div id="user-role-check" class="absolute full-width invisible" style="background-color: #eee;">
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-role-check-admin" name="user-role-value" type="radio" class="custom-control-input" value="Admin">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Admin</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-sex-check-editor" name="user-role-value" type="radio" class="custom-control-input" value="Editor">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Editor</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-role-check-reporter" name="user-role-value" type="radio" class="custom-control-input" value="Reporter">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Reporter</span>
										</label>									    		  
								</div>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-role-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-role-edit" class="pull-right link">edit</p>
						    </div>
						</div>	
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-account-status" class="col-form-label">Account status:</label>
						    </div>
						    <div class="col-sm-7">
							      <input type="text" readonly class="form-control-plaintext detail-text absolute" id="user-account-status" />
							      <div id="user-account-status-check" class="absolute full-width invisible" style="background-color: #eee;">
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-account-status-check-active" name="user-account-status-value" type="radio" class="custom-control-input" value="Active">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Active</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-account-status-check-suspended" name="user-account-status-value" type="radio" class="custom-control-input" value="Suspended">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Suspended</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="user-account-status-check-probation" name="user-account-status-value" type="radio" class="custom-control-input" value="Probation">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Probation</span>
										</label>									    		  
								</div>
						    </div>
						    <div class="col-sm-1 ">
						     	<p onclick="editDetailsEntry(event)" id="user-account-status-cancel" class="pull-right link invisible">cancel</p>
						    </div>
						    <div class="col-sm-1">
						     	<p onclick="editDetailsEntry(event)" id="user-account-status-edit" class="pull-right link">edit</p>
						    </div>
						</div>	  		 	 	
						
						
		  		 		<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-registered-by" class="col-form-label">Added by:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="user-registered-by" >
						    </div>
						    <div class="col-sm-2">
						     	
						    </div>
						</div>
						
						<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-register-date" class="col-form-label">Add date:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text" id="user-register-date" value="${userDetail.createdOn}">
						    </div>
						    <div class="col-sm-2">
						     	
						    </div>
						    
						    <input type="text" id="pic-location" style="display: none;" value="${userDetail.picLocation}" />
						    <input type="text" id="sex-location" style="display: none;" value="${userDetail.sex}" />
						    <input type="text" id="createdby-location" style="display: none;" value="${userDetail.createdBy}" />
						    <input type="text" id="id-location" style="display: none;" value="${userDetail.id}" />
						    <input type="text" id="marital-status-location" style="display: none;" value="${userDetail.maritalStatus}" />
						    <input type="text" id="role-location" style="display: none;" value="${userDetail.role}" />
						    <input type="text" id="account-status-location" style="display: none;" value="${userDetail.status}" />
						    
						    <input type="text" id="last-login-location" style="display: none;" value="${user.lastLogin}" />
						    <input type="text" id="hidden-user-id" style="display: none;" value="${user.id}" />
						    
						</div>
						
						<div class="form-group" id="generate-report-container">
		  		 	 		<input type="button" class="btn btn-primary pull-right" id="generate-user-report" value="Generate report" />						    
						</div>
						
				  	 </div> 		
			  		 
			  		 
			  </div>
			  
		</div>
	</article>
	
	<div class="col-md-5 col-md-5 activities-container scrollable" >
		<div style="padding: 10px;">
			<h4>User activity history</h4>
		</div>		
		<div class="">
			<table class="table" style="width: 100%; margin: 0px; padding: 0px;">
					 		<thead>
					 			<tr>					 			
					 				<th>
					 					S/N
					 				</th>
					 				<th>
					 					Date
					 				</th>
					 				<th>
					 					Time
					 				</th>
					 				<th>
					 					Type
					 				</th>
					 				<th>
					 					Table
					 				</th>
					 				<th>
					 					Column
					 				</th>
					 				<th>
					 					Visitor/User
					 				</th>
					 				<th>
					 					Changed from
					 				</th>
					 				<th>
					 					Changed to
					 				</th>
					 				<th>
					 					Comment
					 				</th>
					 				
					 			</tr>
					 		</thead>
					 		<tbody>
					 		
					 		</tbody>
					 	</table>
		</div>
	</div>
	
	<div class="col-md-5 col-md-5 send-message-container" >
		<div style="padding: 10px;">
			<h4> Send message</h4>
		</div>		
	</div>
	
</div>

</body>
</html>