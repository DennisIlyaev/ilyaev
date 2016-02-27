$(document).ready(function() {

// Adding/Removing active class on click in mainNavigation.

$('#mainNav').on('click', 'li' ,function() {
	$('li').removeClass('active');
	$(this).addClass('active');

 });


//  Loading Pictures page.

$('#picNav').on('click', function() {
	$('#memPage').addClass('hiddenPage');
	$('#conPage').addClass('hiddenPage');
	$('#vidPage').addClass('hiddenPage');
	$('#homePage').addClass('hiddenPage');
	$('#picPage').removeClass('hiddenPage');
});

// 	Loading Home page.

$('#homeNav').on('click', function() {
	$('#picPage').addClass('hiddenPage');
	$('#memPage').addClass('hiddenPage');
	$('#conPage').addClass('hiddenPage');
	$('#vidPage').addClass('hiddenPage');
	$('#homePage').removeClass('hiddenPage');
});	

// 	Loading Videos page.

$('#vidNav').on('click', function() {
	$('#picPage').addClass('hiddenPage');
	$('#memPage').addClass('hiddenPage');
	$('#conPage').addClass('hiddenPage');
	$('#homePage').addClass('hiddenPage');
	$('#vidPage').removeClass('hiddenPage');
});

// 	Loading Members page.

$('#memNav').on('click', function() {
	$('#picPage').addClass('hiddenPage');
	$('#homePage').addClass('hiddenPage');
	$('#vidPage').addClass('hiddenPage');
	$('#conPage').addClass('hiddenPage');
	$('#memPage').removeClass('hiddenPage');
});

// 	Loading contact page.

$('#conNav').on('click', function() {
	$('#picPage').addClass('hiddenPage');
	$('#memPage').addClass('hiddenPage');
	$('#homePage').addClass('hiddenPage');
	$('#vidPage').addClass('hiddenPage');
	$('#conPage').removeClass('hiddenPage');
});

// Preventing page jump on anchors.

$('#upcomingEvents, nav, footer').on('click', 'a', function(e){
	e.preventDefault();
});





});
