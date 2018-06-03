/**
 * 
 */
$(document).ready(function(){
	
	$("#choose-pic").on("click", function(){
			$("#pic-input").click();
		});
	
	$("#pic-input").change(function(){
		$("form[name=upload]").submit();
	});
	
	
	$("form[name=upload]").submit(function(e){
		e.preventDefault(e);												
		var formData = new FormData();
		formData.append('file', $('#pic-input')[0].files[0]);
		formData.append('page', page);
	
		$.ajax({
		       url : '/visitorsLog/upload-pic',
		       type : 'POST',
		       data : formData,
		       processData: false,  
		       contentType: false,  
		       success : function(data) {
		           console.log(data);
		           
		           var dataArray = data.split("/");
		           if(!(dataArray.length > 1))       //In case it is coming from windows...........................................
		        	   	dataArray = data.split("\\");
		           
		           $('#visitor-pic').attr('src', "/visitorsLog/get-uploaded-image?image=" + dataArray[dataArray.length - 1] + "&page=" + page);
		           
		           console.log("After upload, src of image is: " +  $('#visitor-pic').attr('src'));
		           
		           if(page == "user-details" || page == "settings"){
		        	   		
		        	   		//console.log("/visitorsLog/update-user-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + "&finalPic=" + $('#visitor-pic').attr('src'));
		        	   		$.post("/visitorsLog/update-user-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + 
		        	   				"&finalPic=" + $('#visitor-pic').attr('src'), function(data){
		        	   																	alert(data);
		        	   																});
		        	   
		           }else if(page == "visitor-details"){
		        	   		
		        	   		//console.log("/visitorsLog/update-visitor-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + "&finalPic=" + $('#visitor-pic').attr('src'));
		        	   		$.post("/visitorsLog/update-visitor-pic?id=" + $("#id-location").val() + "&initialPic=" + initialPicLocation + 
		        	   				"&finalPic=" + $('#visitor-pic').attr('src'), function(data){
		        	   																	alert(data);
		        	   																});
		        	   
		           }
		           
		       }
		});
		
	});

});
	
function uploadPicture(){
	$("form[name=upload]").submit(function(e){
		e.preventDefault(e);												
		var formData = new FormData();
		formData.append('file', $('#pic-input')[0].files[0]);

		$.ajax({
		       url : '/visitorsLog/upload-pic',
		       type : 'POST',
		       data : formData,
		       processData: false,  
		       contentType: false,  
		       success : function(data) {
		           console.log(data);
		           var dataArray = data.split("/");
		           $('#visitor-pic').attr('src', "/visitorsLog/get-uploaded-image?image=" + dataArray[dataArray.length - 1]);
		       }
		});
		
	});
}