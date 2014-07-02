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