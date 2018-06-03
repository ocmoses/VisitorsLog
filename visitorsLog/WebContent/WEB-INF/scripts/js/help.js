/**
 * 
 */
$(document).ready(function(){
	$(".help-p").click(function(e){
		var next = $(e.target).next();
		if(next.css("display") == "none"){
			next.css("display", "inline-block");
			next.css("width", "100%");
		}else{
			next.css("display", "none");
			
		}
		
	});
});