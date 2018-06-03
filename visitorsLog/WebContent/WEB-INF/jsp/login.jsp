	<jsp:include page="../includes/head.jsp"></jsp:include>
	<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
	<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
	<script src="${pageContext.request.contextPath}/scripts/js/login.js"></script>

	<title>Login page</title>
	</head>
	<body>
	
		<div style="text-align: center; width: 100%; padding-top: 100px; padding-top: 50px;">
				
			<div class="login-form" style="text-align: left; width: 17%; min-width: 300px; margin: auto;">
				
				<img class="logo" style="width: 100%; margin-bottom: 20px;" src="${pageContext.request.contextPath}/images/logo.png" />
				<form action="${pageContext.request.contextPath}/login-submit" name="login-form" method="POST">
					
					<p class="error-login" ></p>
					<div class="form-group">
					    <label for="username">Username</label>
					    <input type="text" name="username" class="form-control" id="login-username" placeholder="Username">
					</div>
					<div class="form-group">
					    <label for="password">Password</label>
					    <input type="password" name="password" class="form-control" id="login-password" placeholder="Password">
					</div>
					
					<div style="position: relative; display: inline-block; width: 100%;">
					    <a href="${pageContext.request.contextPath}/change-password" style="font-size: .8em; position: absolute; bottom: 0px;">Sorry, forgot my password</a>
					    <input type="submit" class="btn btn-primary pull-right" id="login-submit" value="Submit" >
					</div>
				</form>
				
			</div>
			
		</div>
		
		<div style="text-align: center; width: 100%; padding-top: 100px; ">
				
			<div style="text-align: left; width: 50%; min-width: 500px; margin: auto; position: relative; display: inline-block;">
							
				<img class="img-thumbnail login-pics" id="login-pic1" style="box-shadow: 0px 0px 15px #aaa; opacity: .6; width: 350px; position: absolute; left: 0px;" 
						src="${pageContext.request.contextPath}/images/the-scoan.jpg" />
				<img class="img-thumbnail login-pics" id="login-pic2" style="box-shadow: 0px 0px 15px #aaa; opacity: .6;width: 350px; position: absolute; right: 0px;" 
						src="${pageContext.request.contextPath}/images/slides/scoan-visitors14.jpg" />
				<img class="img-thumbnail login-pics" id="login-pic3" style="box-shadow: 0px 0px 15px #aaa; opacity: .6; width: 350px; position: absolute; top: 100px; left: 30%;" 
						src="${pageContext.request.contextPath}/images/tb-joshua.jpg" />				
								
			</div>
			
		</div>
	
	</body>
</html>