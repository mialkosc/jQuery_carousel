$(function(){
	$('#click1').click(function(){
		$('.content').animate({left:0}, 800);
		$('.slider_button').css('background-color', '#00DDDD');
		$(this).css('background-color', '#EE4444');
	});
	$('#click2').click(function(){
		$('.content').animate({left:-800}, 800);
		$('.slider_button').css('background-color', '#00DDDD');
		$(this).css('background-color', '#EE4444');
	});
	$('#click3').click(function(){
		$('.content').animate({left:-1600}, 800);
		$('.slider_button').css('background-color', '#00DDDD');
		$(this).css('background-color', '#EE4444');
	});
	$('#click4').click(function(){
		$('.content').animate({left:-2400}, 800);
		$('.slider_button').css('background-color', '#00DDDD');
		$(this).css('background-color', '#EE4444');
	});
	$('#click5').click(function(){
		$('.content').animate({left:-3200}, 800);
		$('.slider_button').css('background-color', '#00DDDD');
		$(this).css('background-color', '#EE4444');
	});
});