<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>

<title>All Notifications</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
	</div>	
	<article class="col-md-6 col-lg-6" >
		
		<div class="post">
			<h5>Notifications</h5>
			<div id="all-notifications">
				<p >No current notifications...</p>
			</div>
			
		</div>
	
	</article>
	<div class="col-md-4 col-lg-4">
		<jsp:include page="../includes/pic-sidebar.jsp" ></jsp:include>
	</div>
</div>

</body>
</html>