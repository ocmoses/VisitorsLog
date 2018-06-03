</head>
<body class="scrollable">
	<header style="background-color: black; height: 50px; ">
		<div class="col-md-2 col-sm-2" style="padding-top: 10px;"><img id="logo" src="/visitorsLog/images/logo.png" /></div>
		<div style="display: table; position: relative; float: right;">
			<div class="notification-panel" ><p class="logout" id="logout" >Logout</p></div>
			<div class="notification-panel"><span class="glyphicon glyphicon-globe header-span"></span><!-- <p class="header-badge" >5</p> --></div>
			<div class="notification-panel"><span class="glyphicon glyphicon-comment header-span"></span><!-- <p class="header-badge" >15</p> --></div>
			<div class="greeting" ><span onclick="goToUser(${user.id});"  >Good morning, ${user.firstName}</span><span id="display-role"></span></div>
			<div class="profile-img"><img onclick="goToUser(${user.id});" class="img-circle" src="${user.picLocation}" /></div>
		</div>
		<input type="text" style="display: none;" id="user-id-value" value="${user.role}" />		
	</header>
	