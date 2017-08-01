
$(document).ready(function(){
	$('textarea').val('__Hello__, World\n =========')
	var marktext = marked($('textarea').val());
	$('p').html(marktext);
	$('textarea').keyup(function(){
		var marktext = marked($('textarea').val());
		console.log(marktext);
		$('p').html(marktext);
	});
})