window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

$('#workhere').on('click', function(){
	if (!$('.main').hasClass('popped')){
		$('.main, .job').addClass('popped');
	} 
});

$('.job').on('click', function(){
	$('.main, .job').removeClass('popped');
});

$('body').css('opacity', '0' );

$(window).load(function(){
	$('body').animate({'opacity' : 1}, 300);
});