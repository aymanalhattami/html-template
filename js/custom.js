$(function () {
	'use strict';
	
	// trigger the file (nicescroll.js)
	
	
	//to make header height as the same height of the window
	$('.header').height($(window).height());
	
	var winHeight = $(window).height();
	
	var introHeight = $('.intro').height();
	
	var getmid = winHeight - introHeight;
	
	var midIntro = getmid/2;
	
	$('.intro').css({
		marginTop: midIntro,
		marginBottom: midIntro
	});
	
	$('.header .arrow i').click(function () {
		$('html, body').animate({
			//$('.features').offset().top five us the offset of the element from the top
			//and we will give the $('.features') element scrollTop as the offset of $('.features') element
			scrollTop: $('.features').offset().top
		}, 1000);
	});
	
	$('.hire').click(function () {
		$('html, body').animate({
			scrollTop: $('.our-team').offset().top
		}, 1000);
	});
	
	$('.btn-our-work').click(function () {
		$('html, body').animate({
			scrollTop: $('.our-work').offset().top
		}, 1000);
	});
	
	/* show-more button */
	$('.show-more').click(function () {
		$('.our-work .hidden').show(500, function () {
			$('.show-more').hide(500);
		});
	});
	
	/**************************************************************
	/*start method number 1 for [testimonials]*/
	/*
	function testiRight() 
	{
		if($('.client:eq(0)').is(':visible'))
		{
			$('.client:eq(0)').hide();
			$('.client:eq(1)').show();
			$('.fa-chevron-left').show();
		}

		else if($('.client:eq(1)').is(':visible'))
		{
			$('.client:eq(1)').hide();
			$('.client:eq(2)').show();
			$('.fa-chevron-left').show();
		}

		else if($('.client:eq(2)').is(':visible'))	
		{
			$('.client:eq(2)').hide();
			$('.client:eq(3)').show();
			$('.fa-chevron-left').show();
			$('.fa-chevron-right').hide();
		}

		else if($('.client:eq(3)').is(':visible'))
		{
			$('.fa-chevron-right').hide();
			$('.fa-chevron-left').show();
		}
	}
	
	/* function when pressing on the left arrow in the testimonials *//*
	function testiLeft ()
	{
		if($('.client:eq(0)').is(':visible'))
		{
			$('.fa-chevron-right').show();
			$('.fa-chevron-left').hide();
		}

		else if($('.client:eq(1)').is(':visible'))
		{
			$('.client:eq(1)').hide();
			$('.client:eq(0)').show();
			$('.fa-chevron-left').hide();
			$('.fa-chevron-right').show();
		}

		else if($('.client:eq(2)').is(':visible'))
		{
			$('.client:eq(2)').hide();
			$('.client:eq(1)').show();
			$('.fa-chevron-right').show();
		}

		else if($('.client:eq(3)').is(':visible'))
		{
			$('.client:eq(3)').hide();
			$('.client:eq(2)').show();
			$('.fa-chevron-right').show();
		}
	}
	
	$('.fa-chevron-left').click(function () {
		testiLeft()
	});
	
	$('.fa-chevron-right').click(function () {
		testiRight();
	});
	
	/* to run this function after finishing loading *//*
	testiLeft();
	*/
	/*end method number 1 for [testimonials]*/
	
	
	/*********************************************************/
	/*start method number 2 for [testimonials]*/
	var leftArrow = $('.testimonials .fa-chevron-left'),
		rightArrow = $('.testimonials .fa-chevron-right');
	
	function checkClients()
	{
		$('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
		$('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
	}
	
	checkClients();
	
	$('.testimonials i').click(function () {
		if($(this).hasClass('fa-chevron-right'))
		{
			$('.testimonials .active').fadeOut(100, function () {
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				checkClients();
			})
		}
		else
		{
			$('.testimonials .active').fadeOut(100, function () {
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				checkClients();
			});
		}
	});
	/*end method number 2 for [testimonials]*/
	
});