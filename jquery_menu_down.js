$(document).ready(function(){
	$("li").click(function(){
		$(".showeSilki").toggle(1000);
	});

});
$(function(){
    $('#menu_bar').find('> li').hover(function(){
        $(this).find('ul')
        .removeClass('.showeSilki')
        .stop(true, true).slideToggle('fast');
    });
});