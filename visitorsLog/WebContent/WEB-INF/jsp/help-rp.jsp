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
					<h5>As a REPORTER you can do the following:</h5>	
					
					<p>You can search visitors' records.</p>
					<p>You can view visitors' records.</p>
					<p>You can generate visitors' reports in pdf</p>	
					<br />
					<br />
					<p>As a Reporter, this is the dashboard you are greeted with on a successful login</p>
					<img src="${pageContext.request.contextPath}/images/help-rp/dashboard-rp.jpg"	style="width: 100%;"/>	
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
				<img src="${pageContext.request.contextPath}/images/help-rp/search-rp.jpg"	style="width: 100%;"/>
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
					 <img src="${pageContext.request.contextPath}/images/help-rp/settings-rp.jpg"	style="width: 100%;"/> 
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