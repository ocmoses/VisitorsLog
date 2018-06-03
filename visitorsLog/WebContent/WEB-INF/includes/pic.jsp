<div id="visitor-pic-div" >
	<img id="visitor-pic" class="img-thumbnail" name="picLocation" src="/visitorsLog/images/profile.png" />		
	<p id="choose-pic" ><span class="glyphicon glyphicon-camera"></span>Change picture</p>	
</div>

<form name="upload" style="display: none;" action="${pageContext.request.contextPath}/upload-pic" method="POST" enctype="multipart/form-data">
	<input type="file" name="file" id="pic-input" />
	<br />
	<input type="submit" value="Submit" />
</form>