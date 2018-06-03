<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaypersons.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/validation.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/useractions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/manage-users.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/handlepic.js"></script>

<title>Manage Users</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
		<jsp:include page="../includes/pic.jsp"></jsp:include>
	</div>	
	
	<article class="col-md-6 col-lg-6" >
		
		<div class="post allow-overflow">
			
			<ul class="nav nav-tabs" >
			  <li class="active" ><a data-toggle="tab" href="#user-actions">User Actions</a></li>
			  <li><a data-toggle="tab" href="#add-new-user">Add New User</a></li>
			</ul>
			
			<div class="tab-content">
			
			      <div id="user-actions" class="tab-pane fade in active no-margin" >		
			      	<div class="alert alert-danger alert-error">
					  <p ><strong>Wait!</strong> <span class="alert-span"></span></p>
					</div>					
					<div class="alert alert-success alert-submited">
					  <p ><strong>Success!</strong> <span class="alert-span2"></span></p>
					</div>	
			      	
						  
			    		<div class="row" >
				    		<div class="col-sm-4">
				    			<select id="group-action" class="custom-select col-sm-6 col-md-6 select" >
								  <option selected>Action</option>
								  <option value=""></option>
								  <!-- <option value="Report">View Report</option> -->
								  <option value="Suspend">Suspend account</option>
								  <option value="Active">Set Active</option>
								  <option value="Probation">Set Probation</option>
								  <option value="Remove">Remove</option>
							</select>
				    		</div>
				    		<div class="col-sm-4 invisible">
				    			<label>Display <span> </span> <input type="number" class="form-control-inline custom-select select" min="5" max="20" id="paginator-number" value="5" style="width: 50px; border-radius: 4px; padding-left: 5px;" /> <span> </span> items at a time.</label>
				    		</div>
				    		<div>
				    			<form class="navbar-form" style="padding: 0px; margin: 0px; float: right;" role="search">
						        <div class="input-group" style="padding: 0px;">
						            <input type="text" style="margin: 0px;" class="form-control" placeholder="Search" name="srch-term" id="srch-term">
						            <div class="input-group-btn" style="padding: 0px; margin: 0px;">
						                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
						            </div>
						        </div>
					        </form>
				    		</div>									  
					 </div>
					 
					 <div class="col-sm-12 col-md-12 scrollable" id="manage-user-div" style="width: 100%; margin: 0px; padding: 0px;">
					 	<table id="manage-users-table" class="table" style="width: 100%; margin: 0px; padding: 0px;">
					 		<thead>
					 			<tr>					 			
					 				<th>
					 					Select
					 				</th>
					 				<th>
					 					Picture
					 				</th>
					 				<th>
					 					Name
					 				</th>
					 				<th>
					 					Sex
					 				</th>
					 				<th>
					 					role
					 				</th>
					 				<th>
					 					Last login
					 				</th>
					 				<th>
					 					Status
					 				</th>
					 			</tr>
					 		</thead>
					 		<tbody>
					 			<tr>
					 				<td>
					 					<input type="checkbox" />
					 				</td>
					 				<td>
					 					<img src="${pageContext.request.contextPath}/images/profile.png" style="width: 30px;"/>
					 				</td>
					 				<td>
					 					John Doe
					 				</td>
					 				<td>
					 					M
					 				</td>
					 				<td>
					 					Editor
					 				</td>
					 				<td>
					 					10/10/2017
					 				</td>
					 				<td>
					 					Suspended
					 				</td>
					 			</tr>
					 			<tr>
					 				<td>
					 					<input type="checkbox" />
					 				</td>
					 				<td>
					 					<img src="${pageContext.request.contextPath}/images/profile.png" style="width: 30px;"/>
					 				</td>
					 				<td>
					 					Jane Doe
					 				</td>
					 				<td>
					 					M
					 				</td>
					 				<td>
					 					Editor
					 				</td>
					 				<td>
					 					10/10/2017
					 				</td>
					 				<td>
					 					Active
					 				</td>
					 			</tr>
					 			<tr>
					 				<td>
					 					<input type="checkbox" />
					 				</td>
					 				<td>
					 					<img src="${pageContext.request.contextPath}/images/profile.png" style="width: 30px;"/>
					 				</td>
					 				<td>
					 					John Doe
					 				</td>
					 				<td>
					 					M
					 				</td>
					 				<td>
					 					Editor
					 				</td>
					 				<td>
					 					10/10/2017
					 				</td>
					 				<td>
					 					Probation
					 				</td>
					 			</tr>
					 			<tr>
					 				<td>
					 					<input type="checkbox" />
					 				</td>
					 				<td>
					 					<img src="${pageContext.request.contextPath}/images/profile.png" style="width: 30px;"/>
					 				</td>
					 				<td>
					 					John Doe
					 				</td>
					 				<td>
					 					M
					 				</td>
					 				<td>
					 					Editor
					 				</td>
					 				<td>
					 					10/10/2017
					 				</td>
					 				<td>
					 					Active
					 				</td>
					 			</tr>
					 			<tr>
					 				<td>
					 					<input type="checkbox" />
					 				</td>
					 				<td>
					 					<img src="${pageContext.request.contextPath}/images/profile.png" style="width: 30px;"/>
					 				</td>
					 				<td>
					 					Emmanuel Doe
					 				</td>
					 				<td>
					 					M
					 				</td>
					 				<td>
					 					Editor
					 				</td>
					 				<td>
					 					01/10/2017
					 				</td>
					 				<td>
					 					Active
					 				</td>
					 			</tr>
					 		
					 		</tbody>
					 	</table>
					 	<div style="text-align: center">
							<ul id="pagination" class="pagination pagination-sm">
								<li class="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#">5</a></li>
							</ul>
					 	</div>
					 
					 </div>
					 
				  </div>				
			
			      
<!-- SECOND TAB CONTENT STARTS HERE====================================================================================================================================================== -->
			      
			      
				  <div id="add-new-user" class="tab-pane fade " >
			      		
			      		<form class="form-horizontal" name="user-register"  action="${pageContext.request.contextPath}/submit-user" method="post">	
			      			
			      			<div class="alert alert-danger alert-error">
							  <p ><strong>Wait!</strong> <span class="alert-span"></span></p>
							</div>					
							<div class="alert alert-success alert-submited">
							  <p ><strong>Success!</strong> <span class="alert-span2"></span></p>
							</div>	
							
				      		<div class="row" style="height: 70px; ">							      	
							  <div class="form-group col-sm-4 col-md-4" style="padding: 0px; padding-right: 5px; margin: 0px;">
								  <label class="control-label" for="fname">First Name<span class="red">*</span></label>
								  <input name="firstName" type="text" class="form-control" id="fname" value="${user.firstName}" placeholder="" required>
							  </div>
						 
						 	  <div class="form-group col-sm-4 col-md-4" style="padding: 0px; padding-right: 5px; padding-left: 5px; margin: 0px;">
								  <label class="control-label" for="mname">Middle Name</label>
								  <input name="middleName" type="text" class="form-control" value="${user.middleName}" id="mname" placeholder="">
							  </div>
						 
						  
							  <div class="form-group col-sm-4 col-md-4" style="padding: 0px; padding-left: 5px; margin: 0px;">
								  <label class="control-label" for="lname">Last Name<span class="red">*</span></label>
								  <input name="lastName" type="text" class="form-control" id="lname" value="${user.lastName}"  placeholder="" required>
							  </div>								
							</div>
							
							<div style="margin-bottom: 0px;">
								<label class="control-label" style="padding-left: 0px; margin-left: 0px;">Sex<span class="red">*</span></label>
								<div class="form-group group" >
							
									<label class="custom-control custom-radio col-sm-4">
										<input id="male" name="sex" value="M" type="radio" class="custom-control-input">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description">Male</span>
									</label>
									<label class="custom-control custom-radio col-sm-4">
										<input id="female" name="sex" value="F" type="radio" class="custom-control-input">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description">Female</span>
									</label>
									<label class="custom-control custom-radio col-sm-4">
										<input id="other" name="sex" value="O" type="radio" class="custom-control-input">
										<span class="custom-control-indicator"></span>
										<span class="custom-control-description">Other</span>
									</label>
									
								  </div>
							  </div>
							
							  <div class="row single-row" >	
								  <div class="form-group col-md-6 col-sm-6"  style="padding: 0px; padding-right: 5px; margin: 0px;">
									  <label class="control-label" for="dob">Date of Birth</label>
									  <input type="date" name="dob" class="form-control" id="dob" placeholder="">									  
								  </div>
								  <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" >
									  <label class="control-label" for="marital-status">Marital Status <span class="red">*</span></label>
									  <select id="marital-status" name="maritalStatus" class="custom-select full-select">
										  <option selected>--Select--</option>
										  <option value="widowed">Single</option>
										  <option value="married">Married</option>
										  <option value="divorced">Divorced</option>
										  <option value="widowed">Widowed</option>
										  <option value="widowed">Engaged</option>
										  <option value="widowed">Separated</option>
									  </select>
								</div>
							  </div>
							
							  <div class="form-group"  >
								  <label class="control-label" for="username">Username<span class="red">*</span></label>
								  <input type="text" name="username" class="form-control" id="username" placeholder="" required>
								  
							  </div>
							  <div class="row" style="height: 70px; ">	
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-right: 5px; margin: 0px;" >
									  <label class="control-label" for="pwd">Password<span class="red">*</span></label>
									  <input type="password" name="password" class="form-control" id="password" placeholder="" required>
									 
								  </div>
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-left: 5px; margin: 0px;" >
									  <label class="control-label" for="cpwd">Confirm Password<span class="red">*</span></label>
									  <input type="password" class="form-control" id="confirm-password" placeholder="" required>
									  
								  </div>
							  </div>
							  
							  <div style="margin-bottom: 0px;">
									<label class="control-label" style="padding-left: 0px; margin-left: 0px;">Role<span class="red">*</span></label>
									<div class="form-group group" id="roles">
								
										<label class="custom-control custom-radio col-sm-4">
											<input id="Admin" name="role" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Admin</span>
										</label>
										<label class="custom-control custom-radio col-sm-4">
											<input id="Editor" name="role" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Editor</span>
										</label>	
										<label class="custom-control custom-radio col-sm-4">
											<input id="Reporter" name="role" type="radio" class="custom-control-input">
											<span class="custom-control-indicator"></span>
											<span class="custom-control-description">Reporter</span>
										</label>									
								  </div>
							  </div>
							  
							  <div class="form-group" style="height: 150px;">
									<label for="comment">Comment</label>
									<textarea class="form-control" name="comment" rows="5" id="comment"></textarea>
							  </div>
							  
							  <input type="text" id="picLocation" name="picLocation" style="display: none;" />
							  <input type="text" id="id-location"  style="display: none;" value="${user.id }"/>
							  
							  
							  <div class="form-group" style="display: block; position: relative;">
								  <p class="red" style="position: absolute; bottom: 10px; font-size: .9em;">Note: Fields marked (*) are required.</p><button type="submit" class="btn btn-primary pull-right">Submit</button>
							  </div>
							  
						  </form>
					
			      </div>
			
			</div>
		
		</div>
			
	</article>
	<div class="col-md-4 col-lg-4">
	<jsp:include page="../includes/pic-sidebar.jsp" />
	</div>
</div>

</body>
</html>