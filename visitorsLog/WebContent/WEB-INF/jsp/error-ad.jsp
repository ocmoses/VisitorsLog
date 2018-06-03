<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>


<title>User details</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
		
	</div>	
	
	<article class="col-md-6 col-lg-6 ">		
		
 	 	<div style="background-color: black; height: 50px;">
 	 		
 	 	</div>
 	 	<div class=" alert alert-danger">
 	 		Sorry, an error occurred while processing your request...
 	 	</div>
 	 	<div style="background-color: black; padding: 20px;">
 	 		<h4 class="white" >What do you want to do?</h4><br />
 	 		<a href="/visitorsLog/dashboard" class="white" >Dashboard</a><br /><br />
 	 		<a href="/visitorsLog/manage-users"  class="white margin-top">Manage Users</a><br /><br />
 	 		<a href="/visitorsLog/manage-visitors"  class="white margin-top">Manage Visitors</a><br /><br />
 	 		<a href="/visitorsLog/search-visitors"  class="white">Search Visitors</a><br /><br />
 	 		<a href="/visitorsLog/notifications" class="white">Notification</a><br /><br />
 	 		<a href="/visitorsLog/settings" class="white">Settings</a><br /><br />
 	 		<a href="/visitorsLog/help" class="white">Help</a><br /><br />
 	 	</div>				
		  	 
	</article>
	
		
</div>

</body>
</html>