/**
 * 
 */

//==========================================================Display of errors or messages/feedback============================================================================================================
//============================================================================================================================================================================================================


function displayErrorMessage(message){
	$(".alert-span").text(message);
	$(".alert-error").css("display", "block");
	$("html, body").animate({ scrollTop: 0 }, "slow");
}

function displaySuccessMessage(message){
	$(".alert-span2").text(message);
	$(".alert-submited").css("display", "block");
	$("html, body").animate({ scrollTop: 0 }, "slow");
}

function displayModal(title, body, noButton, yesButton, submitFunction, anArray){
	
	var modal = $('<div id="myModal" class="modal fade" role="dialog"></div>');
	var modalDialog = $('<div class="modal-dialog modal-sm"></div>');
	
	modal.append(modalDialog);
	  
	var modalContent = $('<div class="modal-content"></div>');
	modalDialog.append(modalContent);
	
	var modalHeader = $('<div class="modal-header"></div>');
	modalContent.append(modalHeader);
	
	var closeButton = '<button type="button" class="close" data-dismiss="modal">&times;</button>'
	var headerH4 = '<h4 class="modal-title">' + title + '</h4>';
	modalHeader.append(closeButton);
	modalHeader.append(headerH4);
	
	var modalBody = $('<div class="modal-body"></div>');
	var bodyP = $('<p>'+ body + '</p>');
	
	modalBody.append(bodyP);
	modalContent.append(modalBody);
	
	var modalFooter = $('<div class="modal-footer"></div>');
	var noButton = $('<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">' + noButton + '</button>');
	var continueButton = $('<button type="button" class="btn btn-primary btn-sm" id="yes-button" >' + yesButton + '</button>');
	modalFooter.append(noButton);
	modalFooter.append(continueButton);
	
	modalContent.append(modalFooter);
	
	$(modal).modal();
	
	if(anArray == undefined){
		$(modalContent).find("#yes-button").on("click", submitFunction);
	}else{
		$(modalContent).find("#yes-button").on("click", function(){submitFunction(anArray);});
	}
	
	   
	
}

function displayDialogModal(title, body, dismissButton){
	
	var modal = $('<div id="myModal" class="modal fade" role="dialog"></div>');
	var modalDialog = $('<div class="modal-dialog modal-sm"></div>');
	
	modal.append(modalDialog);
	  
	var modalContent = $('<div class="modal-content"></div>');
	modalDialog.append(modalContent);
	
	var modalHeader = $('<div class="modal-header"></div>');
	modalContent.append(modalHeader);
	
	var closeButton = '<button type="button" class="close" data-dismiss="modal">&times;</button>'
	var headerH4 = '<h4 class="modal-title">' + title + '</h4>';
	modalHeader.append(closeButton);
	modalHeader.append(headerH4);
	
	var modalBody = $('<div class="modal-body"></div>');
	var bodyP = $('<p>'+ body + '</p>');
	
	modalBody.append(bodyP);
	modalContent.append(modalBody);
	
	var modalFooter = $('<div class="modal-footer"></div>');
	var okButton = $('<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">' + dismissButton + '</button>');
	modalFooter.append(okButton);
	
	modalContent.append(modalFooter);
	
	$(modal).modal();
		
}

//==========================================================Display of errors or messages/feedback ends here==================================================================================
//============================================================================================================================================================================================