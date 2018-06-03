<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaypersons.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/dashboard.js"></script>

<title>Admin Dashboard</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
	</div>
	<article class="col-md-5 col-lg-5" >
		
		<div class="post">
			<div>
				<h5>Notifications</h5>
			</div>
			<div>
				<p>No current notifications available</p>	
			</div>
		</div>	
		
		<div class="post">
			
			<div>
				<h5>Users</h5>
			</div>			
			<!-- <p>This would contain some info about user activities</p> -->
			<div class="notification-container"  style="width: 100%;" >
				<table class="table" style="width: 100%; margin: 0px; padding: 0px;">
			 		<thead>
			 			<tr>					 			
			 				<th>
			 					Picture
			 				</th>
			 				<th>
			 					Name
			 				</th>
			 				<th>
			 					Role
			 				</th>
			 				<th>
			 					Last Active
			 				</th>
			 			</tr>
			 		</thead>
			 		<tbody>
			 		</tbody>
				</table>	
			<input type="text" value="${user.id}" id="id-location" style="display: none;" />
			</div>
		</div>
		
		
		
	</article>
	<div class="col-md-5 col-md-5 activities-container" >
		<div style="padding: 10px;">
			<h4>My activity history</h4>
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
</div>

</body>
</html>