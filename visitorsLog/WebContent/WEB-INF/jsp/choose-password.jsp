	<jsp:include page="../includes/head.jsp"></jsp:include>
	<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
	<script src="${pageContext.request.contextPath}/scripts/js/validation.js"></script>
	<script src="${pageContext.request.contextPath}/scripts/js/edit-password.js"></script>
	<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>

	<title>Change password</title>
	</head>
	<body style="text-align: center;">
		<div style="text-align: center; width: 100%; padding-top: 100px;">
			
			<div class="login-form" style="text-align: left; width: 25%; min-width: 300px; margin: auto;">
					
				<form action="${pageContext.request.contextPath}/choose-password-submit" name="choose-password-form" method="POST" style="width: 100%;">
					
					
					<div style="padding-top: 20px; padding-bottom: 20px;">
						<p class="red">*You must choose your own password</p>
					</div>
					
					<div class="alert alert-danger alert-error">
						<p ><strong>Wait!</strong> <span class="alert-span">Indicates a dangerous or potentially negative action.</span></p>
					</div>					
					<div class="alert alert-success alert-submited">
					  <p ><strong>Success!</strong> <span class="alert-span2">The user has been saved! :)</span></p>
					</div>
					
					<div class="form-group">
					    <label for="old-password">Old Password</label>
					    <input type="password" name="old-password" class="form-control" id="old-password" >
					</div>
					<div class="form-group">
					    <label for="new-password">New Password</label>
					    <input type="password" name="new-password" class="form-control" id="new-password" >
					</div>
					<div class="form-group">
					    <label for="retype-new-password">Retype New Password</label>
					    <input type="password" name="retype-new-password" class="form-control" id="retype-new-password" >
					</div>
					
					<div style="padding: 10px; border-radius: 5px; background-color: #eee;">
						<h5>Pick a security question</h5>					
						<hr />
						<div>
					    		<label for="user-security-question" class="col-form-label">Security question:</label>
					    </div>
	  		 	 		<div >		  		 	 		
					    		<select id="user-security-question" name="user-security-question" class="custom-select full-select">
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
				    		
				    		<br />
				    			    						    
					    <div>
					    		<label for="user-security-answer" class="col-form-label">Security answer:</label>
					    </div>
					    <div>
					    		<input type="text" class="form-control detail-text" id="user-security-answer" name="user-security-answer" style="background-color: white;">
					    </div>
					
					</div>
					
					<br />
					
					<div style="position: relative; display: inline-block; width: 100%;">				    
					    <input type="submit" class="btn btn-primary pull-right" id="choose-password-submit" value="Submit" >
					</div>
				</form>
			</div>
			
		</div>
		
	</body>
</html>