$(function(){
	$('#click1').click(function(){
		$('.content').animate({left:0}, 800);
		$('.slider_button').css('background-color', 'yellow');
		$(this).css('background-color', 'red');
	});
	$('#click2').click(function(){
		$('.content').animate({left:-800}, 800);
		$('.slider_button').css('background-color', 'yellow');
		$(this).css('background-color', 'red');
	});
	$('#click3').click(function(){
		$('.content').animate({left:-1600}, 800);
		$('.slider_button').css('background-color', 'yellow');
		$(this).css('background-color', 'red');
	});
	$('#click4').click(function(){
		$('.content').animate({left:-2400}, 800);
		$('.slider_button').css('background-color', 'yellow');
		$(this).css('background-color', 'red');
	});
	$('#click5').click(function(){
		$('.content').animate({left:-3200}, 800);
		$('.slider_button').css('background-color', 'yellow');
		$(this).css('background-color', 'red');
	});
});