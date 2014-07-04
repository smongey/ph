window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

$('#workhere').on('click', function(e){
	e.preventDefault();
	if (!$('.main').hasClass('popped')){
		$('.main, .job').addClass('popped');
	} 
});

$('.job').on('click', function(e){
	e.preventDefault();
	$('.main, .job').removeClass('popped');
});

$('body').css('opacity', '0' );

$(window).load(function(){
	$('body').animate({'opacity' : 1}, 300);
});

if(window.location.hash == '#intern') {
	setTimeout(function(){
		if (!$('.main').hasClass('popped')){
			$('.main, .job').addClass('popped');
		}
	}, 1000)
	
}