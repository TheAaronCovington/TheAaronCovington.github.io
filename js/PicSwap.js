//Swaps out the logo on hover so that it changes color
$(document).ready(function(){
	$('#logo').hover(function(){
		$(this).attr('src', 'img/header2.png');	
	}, function(){
		$(this).attr('src', 'img/header.png');
	});
});
