$(document).ready(function(){
	$('.btn-success').click(function(){
		var isValid = true;
	  $('.form-control').each(function() {
	    if ( $(this).val() === '' || $(this).val() === 'Firstname *' || $(this).val() === 'Lastname *' || $(this).val() === 'Email *' || $(this).val() === 'Message for me *')
	        isValid = false;
	    	if($(this).is("#form_phone")){
	    		isValid = true;
	    	}
	  });
	  if(isValid){
	  	alert("Email has been sent successfully!");
	  }
	});
});

function validateForm() {

}
