$(document).ready(function(){
	$('.btn-success').click(function(){
		var isValid = true;
	  $('.form-control').each(function() {
	    if ( $(this).val() === '')
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
