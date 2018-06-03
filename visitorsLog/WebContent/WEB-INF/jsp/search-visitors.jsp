<jsp:include page="../includes/head.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/scripts/js/global.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/functions.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaypersons.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/displaymessages.js"></script>
<script src="${pageContext.request.contextPath}/scripts/js/search.js"></script>

<title>Search Visitors</title>
<jsp:include page="../includes/header.jsp"></jsp:include>
<div class="content">
	<div class="col-md-2 col-sm-2">
		<jsp:include page="../includes/aside.jsp"></jsp:include>
	</div>	
	
	<article class="col-md-6 col-lg-6 ">
		
		<div class="post allow-overflow" >
			<form  style="padding: 10px; margin: 0px; width: 100%; " role="search">
		        <div class="input-group no-padding">
		            <input type="text" class="form-control big-search" placeholder="Search" name="search-term" id="search-term" />
		            <div class="input-group-btn" style="padding: 0px; margin: 0px;">
		                <button class="btn btn-default big-search-btn" type="submit"><i style="font-size: 1.5em; font-weight: bold; color: #ccc;" class="glyphicon glyphicon-search"></i></button>
		            </div>
		        </div>
	        </form>			  
		<div class="col-sm-12 col-md-12 scrollable" id="all-visitors" style="width: 100%; margin: 0px; padding: 10px; margin-top: 20px; ">
					 	<table class="table" style="width: 100%; margin: 0px; padding: 0px;">
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
					 	<div style="text-align: center">
							<ul id="pagination" class="pagination">
								<li class="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#">5</a></li>
							</ul>
					 	</div>
					 
					 </div>
		
		</div>
	</article>
	<jsp:include page="../includes/filter-search.jsp"></jsp:include>
</div>

</body>
</html>