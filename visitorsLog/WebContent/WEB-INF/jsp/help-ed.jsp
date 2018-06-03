<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/help.js"></script>
<title>Help</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
	</div>	
	<article class="col-md-6 col-lg-6" >
		
		<div class="post">
			<h5>Help</h5>
			<div class="help-subcontainer">	
				<p class="help-p">General</p>
				<div class="collapse help-spec">
					<h5>As an EDITOR you can do the following:</h5>					
					<p>You can add visitors<p>
					<p>You can edit visitors' records<p>
					<p>You can search visitors' records.</p>
					<p>You can generate visitors' reports in pdf</p>	
					<br />					
					<br />
					<p>As an Editor, this is the dashboard you are greeted with on a successful login</p>
					<img src="${pageContext.request.contextPath}/images/help-ed/dashboard-editor.jpg"	style="width: 100%;"/>	
					<br />	
					<br />
					<ol>
						<li>This is your navigation</li>
						<li>Notifications will be shown here</li>
						<li>This is a list of all your activities.</li>
					</ol>
					<br />	
					<br />  
				</div>
			</div>
			
			
			<div class="help-subcontainer">	
				<p class="help-p">Adding visitors</p>
				<div class="collapse help-spec">
					<h5>How to add new visitors</h5>
					<p>Click on Manage Visitors in the navigation to bring you here</p>					
					<p>Then click on the add new visitor tab as indicated.</p>
					<img src="${pageContext.request.contextPath}/images/help-ed/manage-visitors.jpg"	style="width: 100%;"/>
					<br />
					<p>This opens this tab:</p>
					<img src="${pageContext.request.contextPath}/images/help-ed/add-new-visitor.jpg"	style="width: 100%;"/>
					<br />
					<br />
					<ol>
						<li>This is where you add visitor's picture (picture size must be less than 2MB)</li>
						<li>This is where you add visitor details. Only fields marked with red asterisks are compulsory</li>	
						<li>Important! Watch this section. After entering a visitor name, similar records will be shown to you. See below.<br /><br />
						<img src="${pageContext.request.contextPath}/images/help/view-matched.jpg"	style="width: 100%;"/><br /><br />
						You should continue registering if no match was found. Otherwise, click on "View more..." to go to the visitor details and add a new record.<br /><br />
						On clicking "View more...", you will be taken to the visitor details page...
						<img src="${pageContext.request.contextPath}/images/help-ed/visitor-details.PNG"	style="width: 100%;"/><br /><br />
						</li>					
					</ol>					
					<br /></br /> 
				</div>
			</div>
			
			<div class="help-subcontainer">	
				<p class="help-p">Managing visitors</p>
				<div class="collapse help-spec">
					  <h5>Click on Manage Visitors in the navigation</h5>
					  <p>From this page, click on any visitor you want to manage.</p>
					  <img src="${pageContext.request.contextPath}/images/help-ed/manage-visitors.PNG"	style="width: 100%;"/>
					  <br />
					  <p>Alternatively, you can combine actions for multiple visitors by checking all the visitors and clicking on the Action combo.</p> 
					  <p><strong>Note:</strong> You can search the visitor as well.</p> 
					  <br /><br />
				</div>
			</div>
			
			<div class="help-subcontainer">	
				<p class="help-p">Editing visitor details</p>
				<div class="collapse help-spec">
					<h5>How to edit visitor details</h5>
					<p>On clicking on a visitor from the Manage Visitors page or the Search page, you are taken to the details of the visitor</p>
					<br />
					<img src="${pageContext.request.contextPath}/images/help-ed/visitor-details.jpg"	style="width: 100%;"/>
					<br />
					<br />
					<ol>
						<li>This is where you can change visitor picture (picture size must be less than 2MB)</li>
						<li>By clicking on the edit links in this section, you can edit any of the entries and remember to click save to save it. You can click cancel if you change your mind.</li>
						<li>Displayed here are the recorded visits for the visitor</li>	
						<li>This is where you add a new visit record.</li>					
					</ol>
										    
				</div>
			</div>
			
			<div class="help-subcontainer">	
				<p class="help-p">Generating visitor report</p>
				<div class="collapse help-spec">
					<h5>How to generate visitor report</h5> 
					<p>After clicking on the visitor, you are taken to the details page. Then at the bottom of the visitor's detail, you will see the button as shown.</p>
					<img src="${pageContext.request.contextPath}/images/help/generate-visitor-report.jpg"	style="width: 50%;"/>
					<br />
					<br />
					<p>You will see a sign downloading the generated pdf at the bottom of the browser</p>
					<img src="${pageContext.request.contextPath}/images/help/downloaded-visitor.jpg"	style="width: 50%;"/>
					<br />
					<br />
					<p>Double-click the download to see the report in the browser. You can print if you wish.</p>
					<img src="${pageContext.request.contextPath}/images/help/downloaded-pdf.PNG"	style="width: 50%;"/>
					<br />
					<br />
					<p><strong>Note:</strong> If the download fails. Your browser could be blocking it. Confirm if you see this at the top left of your browser. in the address bar</p>
					<img src="${pageContext.request.contextPath}/images/help/popup-block.PNG"	style="width: 50%;"/>
					<br />
					<br />
					<p>Then click on the popup sign and choose "Always allow..."</p>
					<p>Then try generating the pdf again.</p>  
				</div>
			</div>
			
			<div class="help-subcontainer">	
				<p class="help-p">Searching visitors</p>
				<div class="collapse help-spec">
				<h5>How to use the Search</h5>
				<p>Click on Search Visitors in the navigation.</p>
				<img src="${pageContext.request.contextPath}/images/help-ed/search.jpg"	style="width: 100%;"/>
				<br />
				<br />
				<ol>
					<li>Navigation</li>
					<li>Search results displayed here</li>	
					<li>Advanced search conditions.<br /><br />
				</ol>
				<br />
				<br />
				
				<h5>Use the Search bar</h5>
				<p>On typing a name, results are displayed</p>
				<img src="${pageContext.request.contextPath}/images/help/name-search.jpg"	style="width: 100%;"/>
				<br />
				<br />
				
				<h5>Use the filter</h5>
				<p>Combine search conditions to get even more accurate search results.</p>
				<img src="${pageContext.request.contextPath}/images/help/combine-search.jpg"	style="width: 50%;"/>
				
				
				</div>
			</div>
			
			<div class="help-subcontainer">	
				<p class="help-p">Editing settings</p>
				<div class="collapse help-spec">
					<h5>How to use the settings</h5>
					<p>Click on Settings in the navigation.</p>
					 <img src="${pageContext.request.contextPath}/images/help-ed/settings.jpg"	style="width: 100%;"/> 
					 <br />
					 <br />
					 <ol>
						<li>This is where you can change your picture (picture size must be less than 2MB)</li>
						<li>Change your password</li>	
						<li>Change your security question and answer. Remember to save.</li>					
					 </ol>					
					 <br />
					 <p>Click the edit link on each side of your details to edit them. If you change your mind, click cancel. Otherwise, click save to save your changes.</p>
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