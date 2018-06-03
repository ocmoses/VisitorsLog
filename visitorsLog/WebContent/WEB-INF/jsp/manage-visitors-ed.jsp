<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaypersons.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/validation.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/useractions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/manage-visitors.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/handlepic.js"></script>

<title>Manage Visitors</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
		<jsp:include page="../includes/pic.jsp"></jsp:include>
	</div>	
	
	<article class="col-md-6 col-lg-6 ">
		
		<div class="post allow-overflow" >
			<ul class="nav nav-tabs" >			  
			  <li class="active" ><a data-toggle="tab" href="#visitor-actions">Manage visitors</a></li>
			  <li><a data-toggle="tab" href="#add-new-visitor">Add New Visitor</a></li>
			</ul>
			
			<div class="tab-content no-padding no-margin scrollable" >
			
			      <div id="visitor-actions" class="tab-pane fade in active no-margin"  >	
				 	
				 	<div class="alert alert-danger alert-error">
					  <p ><strong>Wait!</strong> <span class="alert-span"></span></p>
					</div>					
					<div class="alert alert-success alert-submited">
					  <p ><strong>Success!</strong> <span class="alert-span2"></span></p>
					</div>
					
					 <div >
					 	<div class="row" >
					    		<div class="col-sm-4">
					    			<select id="group-action" class="custom-select col-sm-6 col-md-6 select" >
								  <option selected>Action</option>
								  <option value=""></option>
								  <!-- <option value="Report">View Report</option> -->
								  <option value="Unblacklist">Remove Blacklist</option>
								  <option value="Blacklist">Blacklist</option>								  
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
				    								 
						 <div class="col-sm-12 col-md-12" id="manage-visitor-div" style="width: 100%; margin: 0px; padding: 0px;">
						 	<table id="manage-visitor-table" class="table" style="width: 100%; margin: 0px; padding: 0px;">
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
						 					Phone
						 				</th>
						 				<th>
						 					Email
						 				</th>
						 				<th>
						 					Country
						 				</th>
						 				<th>
						 					Last Visit
						 				</th>
						 				<th>
						 					Blacklist
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
						 					+1 2345231452
						 				</td>
						 				<td>
						 					johndoe@gmail.com
						 				</td>
						 				<td>
						 					United States
						 				</td>
						 				<td>
						 					10/10/2017
						 				</td>
						 				<td>
						 					Yes
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
						 					+1 2345231452
						 				</td>
						 				<td>
						 					johndoe@gmail.com
						 				</td>
						 				<td>
						 					United States
						 				</td>
						 				<td>
						 					10/10/2017
						 				</td>
						 				<td>
						 					Yes
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
						 					+1 2345231452
						 				</td>
						 				<td>
						 					johndoe@gmail.com
						 				</td>
						 				<td>
						 					United States
						 				</td>
						 				<td>
						 					10/10/2017
						 				</td>
						 				<td>
						 					Yes
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
						 					+1 2345231452
						 				</td>
						 				<td>
						 					johndoe@gmail.com
						 				</td>
						 				<td>
						 					United States
						 				</td>
						 				<td>
						 					10/10/2017
						 				</td>
						 				<td>
						 					Yes
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
						 					+1 2345231452
						 				</td>
						 				<td>
						 					johndoe@gmail.com
						 				</td>
						 				<td>
						 					United States
						 				</td>
						 				<td>
						 					10/10/2017
						 				</td>
						 				<td>
						 					Yes
						 				</td>
						 			</tr>
						 		
						 		</tbody>
						 	</table>
						 	<div  style="text-align: center">
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
					 
				</div>    		
			  			  
			  			  <!-- 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<================================THE SECOND TAB CONTENT GOES HERE=================================================================================================>>>>>>>>>>>>>>>>>>>>
			  			   -->
				 
			  		 
			  	
			  		<div id="add-new-visitor" class="tab-pane fade" >
			      		
			      		<form class="form-horizontal" name="visitor-register" action="${pageContext.request.contextPath}/submit-visitor" method="post">	
			      		
			      			<div class="alert alert-danger alert-error">
							  <p ><strong>Wait!</strong> <span class="alert-span"></span></p>
							</div>
							
							<div class="alert alert-success alert-submited">
							  <p ><strong>Success!</strong> <span class="alert-span2"></span></p>
							</div>
			      		
					      	<div class="row single-row" >							      	
								  <div class="form-group col-sm-4 col-md-4 " style="padding: 0px; padding-right: 5px; margin: 0px;">
									  <label class="control-label" for="firstName">First Name<span class="red">*</span></label>
									  <input type="text" name="firstName" class="form-control" id="firstName" value="${visitor.firstName}" placeholder="" required>
								  </div>
							 
							 	  <div class="form-group col-sm-4 col-md-4" style="padding: 0px; padding-right: 5px; padding-left: 5px; margin: 0px;">
									  <label class="control-label" for="middleName">Middle Name</label>
									  <input type="text" name="middleName" class="form-control" id="middleName" value="${visitor.middleName}" placeholder="">
								  </div>
							 
							  
								  <div class="form-group col-sm-4 col-md-4" style="padding: 0px; padding-left: 5px; margin: 0px;">
									  <label class="control-label" for="lastName">Last Name<span class="red">*</span></label>
									  <input type="text" name="lastName" class="form-control" id="lastName" value="${visitor.lastName}" placeholder="" required>
								  </div>											
							  </div>
							  <div style="margin-bottom: 0px;">
									<label class="control-label" style="padding-left: 0px; margin-left: 0px;">Sex<span class="red">*</span></label>
									<div class="form-group group">
								
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
									  <label class="control-label" for="marital-status">Marital Status<span class="red">*</span></label>
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
							  
							  <div class="form-group single-row" >
								  <label class="control-label" for="country">Country<span class="red">*</span></label>
								  <select id="country" name="country" class="custom-select full-select">
									  <option selected>Select Country</option>
									  <option value="Nigeria">Nigeria</option>
									  <option value="South Africa">South Africa</option>
									  <option value="US">US</option>
								</select>								  
							  </div>
							  	
							  <div class="form-group"  >
								  <label class="control-label" for="address">Address</label>
								  <input type="text" name="address" class="form-control" id="address" placeholder="">								  
							  </div>
							  
							  <div class="row single-row" >	
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-right: 5px; margin: 0px;" >
									  <label class="control-label" for="phone1">Phone no<span class="red">*</span></label>
									  <input type="tel" name="phone1" class="form-control" id="phone1" placeholder="" required>
									 
								  </div>
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-left: 5px; margin: 0px;" >
									  <label class="control-label" for="phone2">Phone no 2</label>
									  <input type="tel" name="phone2" class="form-control" id="phone2" placeholder="">
									  
								  </div>
							  </div>
							  
							  <div class="row single-row" >	
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-right: 5px; margin: 0px;" >
									  <label class="control-label" for="email">Email</label>
									  <input type="email" name="email" class="form-control" id="email" placeholder="">
									 
								  </div>
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-left: 5px; margin: 0px;" >
									  <label class="control-label" for="website">Website URL</label>
									  <input type="url" name="website" class="form-control" id="website" placeholder="http://">
									  
								  </div>
							  </div>
							  
							  <div class="row single-row">	
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-right: 5px; margin: 0px;" >
									  <label class="control-label" for="doa">Date of Arrival<span class="red">*</span></label>
									  <input type="date" name="dateOfArrival" class="form-control" id="doa" placeholder="" required>
									 
								  </div>
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-left: 5px; margin: 0px;" >
									  <label class="control-label" for="toa">Time of Arrival</label>
									  <input type="time" name="timeOfArrival" class="form-control" id="toa" placeholder="">
									  
								  </div>
							  </div>
							  
							  <div class="row single-row" >	
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-right: 5px; margin: 0px;" >
									  <label class="control-label" for="doa">Date of Departure<span class="red">*</span></label>
									  <input type="date" name="dateOfDeparture" class="form-control" id="dod" placeholder="" required>
									 
								  </div>
								  <div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-left: 5px; margin: 0px;" >
									  <label class="control-label" for="tod">Time of Departure</label>
									  <input type="time" name="timeOfDeparture" class="form-control" id="tod" placeholder="">
									  
								  </div>
							  </div>
							  
							  <div class="form-group" style="height: 150px;">
									<label for="reason-for-visit">Reason for Visit</label>
									<textarea class="form-control" name="reason" rows="5" id="reason-for-visit"></textarea>
							  </div>
							  
							  <div class="form-group single-row" >
								  <label class="control-label" for="occupation">Occupation<span class="red">*</span></label>
								  <select id="occupation" name="occupation" class="custom-select full-select" >
									  <option selected>Select Occupation</option>
									  <option value="Engineer">Engineer</option>
									  <option value="Doctor">Doctor</option>
									  <option value="Police">Police</option>
								</select>								  
							  </div>
							  
							  <div class="form-group">
								  <label class="control-label" for="ministry">Ministry</label>
								  <input type="text" name="ministry" class="form-control" id="ministry" placeholder="">
							  </div>	
							  
							 	<div class="form-check single-small-row " >
									<label class="form-check-label">
										<input class="form-check-input" type="checkbox" id="have-passport"  name="hasPassport" > Has Passport 
									</label>
								</div>
								<div class="form-check single-small-row" >
									<label class="form-check-label">
									<input class="form-check-input" type="checkbox" id="have-med"  name="hasMedReport" > Has Medical Report
									</label>
								</div>								
							    <div class="form-check single-small-row" >
									<label class="form-check-label">
									<input class="form-check-input" type="checkbox" id="taking-meds" name="takingMeds" > On Medication on Arrival 
									</label>
							    </div>
							    <div class="row single-row">
							    	<div class="form-group col-sm-6 col-md-6" style="padding: 0px; padding-right: 5px; padding-left: 5px; margin: 0px;">
										<label class="form-check-label">
										<input class="form-check-input" type="checkbox" id="is-partner"  name="isPartner" > Partner
									</label>
								    </div>
								    <div class="form-group col-sm-6 col-md-6" id="partner-number-div" style="padding: 0px; padding-right: 5px; margin: 0px;" >
									  <label class="control-label" for="partner-number">Partnership No:</label>
									  <input type="text" name="partnerNo" class="form-control" id="partner-number" placeholder="">
								  	</div>	
							    </div>							    
							    
							    <!-- <div class="form-check group" style="padding-bottom: 20px;">
									<label class="form-check-label" >
									<input class="form-check-input"  type="checkbox" id="visited-before"  name="visitedBefore" > Has visited before 
									</label>
							    </div> -->	
							    
							    <hr />
							    
							    <div class="form-group single-row">
								    <div class="form-group col-md-6 col-sm-6" style="padding: 0px; margin: 0px;">
								    	<label class="control-label" for="mode-of-visit">Mode of Visit<span class="red">*</span></label>
										  <select id="mode-of-visit" name="modeOfVisit" class="custom-select full-select" >
											  <option value="0" selected>--Select mode of visit--</option>
											  <option value="1">SCOAN Invited</option>
											  <option value="2">SCOAN by Gate</option>
											  <option value="3">Special Guest</option>
										 </select>
									 </div>
									 <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" id="ref-no-div">
									  <label class="control-label" for="ref-no">Reference No<span class="red">*</span></label>
									  <select id="ref-no" name="referenceNo" class="custom-select full-select" >
										  <option value="0" selected>--Select Reference-</option>
										  <option value="1">1</option>
										  <option value="2">2</option>
										  <option value="3">3</option>
										  <option value="4">4</option>
										  <option value="5">5</option>
									 </select>								  
								   </div>								   
								   <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" id="screener-div" >
									  <label class="control-label" for="screener">Screener<span class="red">*</span></label>
									  <input type="text" name="screener" class="form-control" id="screener" placeholder="">								  
								   </div>
								   <div class="form-group col-md-6 col-sm-6" style="padding: 0px; padding-left: 5px; margin: 0px;" id="in-care-of-div" >
									  <label class="control-label" for="in-care-of">In Care Of</label>
									  <input type="text" name="inCareOf" class="form-control" id="in-care-of" placeholder="">								  
								   </div>								  								  
							  </div>	
							  
							  <div class="form-group" id="group-coordinator-div" >
								  <label class="control-label" for="group-coordinator">Group Coordinator</label>
								  <input type="text" name="groupCoordinator" class="form-control" id="group-coordinator" placeholder="">								  
							  </div>						  
							  
							  <div class="form-group single-row" >
								  <label class="control-label" for="mode-of-visit">Dining<span class="red">*</span></label>
								  <select id="dining" name="dining" class="custom-select full-select" >
									  <option value="0" selected>--Select Dining--</option>
									  <option value="1">Newland 1 Dining</option>
									  <option value="2">Newland 2 Dining</option>
									  <option value="3">Up Dining</option>
									  <option value="4">Botswana Dining</option>
									  <option value="5">Private Dining</option>									  
								</select>								  
							  </div>
							  
							  <hr />
							    
							    <div class="form-group" style="height: 150px;">
									<label for="comment">Comment</label>
									<textarea class="form-control" name="comment" rows="5" id="comment"></textarea>
							  	</div>
							    
							    <input type="text" id="picLocation" name="picLocation" style="display: none;" />						    
							 
							  <div class="form-group" style="position: relative; display: block; padding-top: 20px;">
							  	  <p class="red" style="position: absolute; bottom: 10px; font-size: .9em;">Note: Fields marked (*) are required.</p>								  
								  <button type="submit" style="float: right; margin-left: 10px;" class="btn btn-primary">Submit</button>
								  <button type="reset" style="float: right; " class="btn btn-default">Reset</button>
							  </div>							 
							 
						  </form>					
			    
			      </div>
			  	 
			  </div>
			  
		</div>
	</article>
	<jsp:include page="../includes/sidebar.jsp"></jsp:include>
</div>

	

</body>
</html>