$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		function arrangeBalloons() {
    var positions = ['5%', '18%', '31%', '44%', '57%', '70%', '83%'];
    $('#b1, #b11').stop().animate({ top: '30%', left: positions[0] }, 500);
    $('#b2, #b22').stop().animate({ top: '30%', left: positions[1] }, 500);
    $('#b3, #b33').stop().animate({ top: '30%', left: positions[2] }, 500);
    $('#b4, #b44').stop().animate({ top: '30%', left: positions[3] }, 500);
    $('#b5, #b55').stop().animate({ top: '30%', left: positions[4] }, 500);
    $('#b6, #b66').stop().animate({ top: '30%', left: positions[5] }, 500);
    $('#b7, #b77').stop().animate({ top: '30%', left: positions[6] }, 500);
}
		$(window).resize(function(){
    if ($('#b11').length) {
        arrangeBalloons();
    }
});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		 const element = document.getElementById('brith-confetti');
    element.style.visibility = 'visible'; // Make it visible first
    setTimeout(() => {
        element.style.opacity = '1'; // Then change opacity to 1
    }, 2500); 
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

		function loopOne() {
		// Make random position relative to window dimensions
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6); // Fly in top 60% of screen
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6);
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6);
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6);
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6);
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6);
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = Math.random() * ($(window).width() - $('.balloons').width());
		var randtop = Math.random() * ($(window).height() * 0.6);
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}


	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
    // Stop the random flying loops
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();

    // **NEW:** Remove the rotation animation classes to stop the wiggling
    $('#b1,#b4,#b5,#b7').removeClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6').removeClass('balloons-rotate-behaviour-two');

    // Change IDs to mark the final state
    $('#b1').attr('id','b11');
    $('#b2').attr('id','b22');
    $('#b3').attr('id','b33');
    $('#b4').attr('id','b44');
    $('#b5').attr('id','b55');
    $('#b6').attr('id','b66');
    $('#b7').attr('id','b77');

    // Call the arrange function to position balloons responsively
    arrangeBalloons();

    // Fade in the letters
    $('.balloons').css('opacity','0.9');
    $('.balloons h2').fadeIn(3000);

    // Continue with the rest of the original logic
    $(this).fadeOut('slow').delay(3000).promise().done(function(){
        $('#story').fadeIn('slow');
    });
});
	
	// Refactored story click event
	$('#story').click(function(){
		// Hide the story button
		$(this).fadeOut('slow');
		// Fade out the cake to show the message
		$('.cake').fadeOut('slow').promise().done(function(){
			// Start the message loop
			$('.message').fadeIn('slow');
		});
		
		// Function to loop through messages
		function msgLoop (i) {
			// Find the total number of paragraphs
			var total_messages = $('.message p').length;
			// Fade in the current message
			$("p:nth-child("+i+")").fadeIn('slow').delay(2000).promise().done(function(){
				// After a delay, fade it out
				$(this).fadeOut('slow', function(){
					// Check if there are more messages
					if(i < total_messages){
						// Call the loop for the next message
						msgLoop(i+1);
					}
					// If it's the last message, show the cake and the final button
					else {
						$('.message').fadeOut('slow').promise().done(function() {
							// Show the cake again
							$('.cake').fadeIn('fast').promise().done(function(){
								// Now show the 'cut the cake' button
								$('#cake_cut').fadeIn('slow');
							});
						});
					}
				});
			});
		}
		
		// Start the message loop with the first paragraph
		msgLoop(1);
	});

	// Added the cake cutting logic here
	$('#cake_cut').click(function(){
		// When the button is clicked, add the 'cut' class to each cake layer
		$('.cake .layer').addClass('cut');
		$('.fuego').fadeOut('slow');
		$('.velas').fadeOut('slow');
		$('#cake_cut').fadeOut('slow');
	});
});
