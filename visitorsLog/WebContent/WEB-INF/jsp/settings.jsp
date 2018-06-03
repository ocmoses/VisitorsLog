<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/user-details.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/settings.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/validation.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/handlepic.js"></script>

<title>User settings</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
		<jsp:include page="../includes/pic.jsp"></jsp:include>
	</div>	
	
	<article class="col-md-5 col-lg-5 ">
		
		<div class="post allow-overflow" >
			<div class="no-padding no-margin" >
			
					<div style="text-align: center;" >
					<h4>My Settings</h4>
					</div>
			       
		 			 <div class="details">
		 			 
			 			<div class="alert alert-danger alert-error">
						  <p ><strong>Wait!</strong> <span class="alert-span"></span></p>
						</div>					
						<div class="alert alert-success alert-submited">
						  <p ><strong>Success!</strong> <span class="alert-span2"></span></p>
						</div>
		  		 	 
		  		 	 	<div class="form-group detail-div">
		  		 	 		<div class="col-sm-3 ">
						    		<label for="user-name" class="col-form-label">Name:</label>
						    </div>
						    <div class="col-sm-7">
						      <input type="text" readonly class="form-control-plaintext detail-text absolute transparent" id="user-name" value="${sessionScope.user.firstName} ${sessionScope.user.middleName} ${sessionScope.user.lastName}">
						      <div id="user-name-inputs" class="absolute invisible" style="display: inline-block; background-color: transparent; padding: 0px;">
						      	<input type="text" class="form-control" style="width: 32%; display: inline-block;" id="user-first-name" value="${sessionScope.user.firstName}">
						      	<input type="text" class="form-control" style="width: 32%; display: inline-block;" id="user-middle-name" value="${sessionScope.user.middleName}">
						      	<input type="text" class="form-control"  style="width: 32%; display: inline-block;" id="user-last-name" value="${sessionScope.user.lastName}">						      
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
						      <input type="date" readonly class="form-control-plaintext detail-text absolute transparent" id="user-dob" value="${sessionScope.user.dob}">
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
						
						<div class="form-group detail-div change-password">
							<form action="${pageContext.request.contextPath}/settings-change-password" name="settings-change-password" method="POST">						
							
								<h5>Change password</h5>
								
								<hr />
								
			  		 	 		<div class="col-sm-3 ">
							    		<label for="settings-old-password" class="col-form-label">Old Password:</label>
							    </div>
							    <div class="col-sm-9">
								      <input type="password" class="form-control detail-text" name="settings-old-password" id="settings-old-password" />
								      
							    </div>
							    						    
							    <div class="col-sm-3 ">
							    		<label for="setting-new-password" class="col-form-label">New Password:</label>
							    </div>
							    <div class="col-sm-9">
								      <input type="password" class="form-control detail-text" name="settings-new-password" id="settings-new-password" />
								      
							    </div>
							    
							    <div class="col-sm-3 ">
							    		<label for="setting-retype-password" class="col-form-label">Retype New Password:</label>
							    </div>
							    <div class="col-sm-9">
								      <input type="password" class="form-control detail-text" id="settings-retype-password" />
								      
							    </div>
							    
							    <div class="col-md-12 col-sm-12">
							    		<input type="submit" class="btn btn-primary pull-right" value="Change Password" />
							    </div>
							    
						    </form>
						</div>	
						
						
						<div class="form-group detail-div change-security-question">
							<form action="${pageContext.request.contextPath}/settings-change-security-question" name="settings-change-security-question" method="POST">		
								<h5>Pick a security question</h5>
								
								<hr />
								<div class="col-sm-3 ">
							    		<label for="user-security-question" class="col-form-label">Security question:</label>
							    </div>
			  		 	 		<div class="col-sm-9 col-md-9">		  		 	 		
							    		<select id="settings-security-question" name="settings-security-question" class="custom-select full-select">
										  <option value="Select" selected>--Select--</option>
										  <option value="What was the house number you lived in as a child?">What was the house number you lived in as a child?</option>
										  <option value="What were the last four digits of your first telephone number?">What were the last four digits of your first Phone number?</option>
										  <option value="What primary school did you attend?">What primary school did you attend?</option>
										  <option value="In what town or city was your first full time job?">In what town or city was your first full time job?</option>
										  <option value="In what town or city did you meet your spouse/partner?">In what town or city did you meet your spouse/partner?</option>
										  <option value="What are the last five digits of your driver's licence number?">What are the last five digits of your driver's license number?</option>
										  <option value="What is your grandmother's (on your mother's side) maiden name?">What is your grandmother's (on your mother's side) maiden name?</option>
										  <option value="What is your spouse or partner's mother's maiden name?">What is your spouse or partner's mother's maiden name?</option>									  
									</select>
							    </div>
							    						    
							    <div class="col-sm-3 ">
							    		<label for="settings-security-answer" class="col-form-label">Security answer:</label>
							    </div>
							    <div class="col-sm-9 col-md-9" >
							    		<input type="text" class="form-control detail-text" name="settings-security-answer" id="settings-security-answer" >
							    </div>
							    						    
							    <div class="col-md-12 col-sm-12">
							    		<input type="submit" class="btn btn-primary pull-right" value="Save" />
							    </div>
							 </form>  
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
						      <input type="text" readonly class="form-control-plaintext detail-text" id="user-register-date" value="${user.createdOn}">
						    </div>
						    <div class="col-sm-2">
						     	
						    </div>
						    
						    <input type="text" id="pic-location" style="display: none;" value="${sessionScope.user.picLocation}" />
						    <input type="text" id="sex-location" style="display: none;" value="${sessionScope.user.sex}" />
						    <input type="text" id="createdby-location" style="display: none;" value="${sessionScope.user.createdBy}" />
						    <input type="text" id="id-location" style="display: none;" value="${sessionScope.user.id}" />
						    <input type="text" id="marital-status-location" style="display: none;" value="${sessionScope.user.maritalStatus}" />
						    <input type="text" id="role-location" style="display: none;" value="${sessionScope.user.role}" />
						    <input type="text" id="account-status-location" style="display: none;" value="${sessionScope.user.status}" />
						    
						</div>
						
						<div class="form-group none" id="save-button-container">
		  		 	 		<input type="button" class="btn btn-primary pull-right" value="Save Changes" />						    
						</div>
						
				  	 </div> 		
			  		 
			  		 
			  </div>
			  
		</div>
	</article>
	
	<div class="col-md-5 col-md-5">
		<div class="send-message-container" >
			<div style="padding: 10px;">
				<h4> Send message</h4>
			</div>		
		</div>
		<div style="margin-top: 20px; width: 100%;">
			<jsp:include page="../includes/pic-sidebar.jsp" ></jsp:include>
		</div>	
	</div>
	
	
</div>

</body>
</html>