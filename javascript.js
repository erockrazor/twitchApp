$(document).ready(function() {

  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var streamButton;
  var streamBool;
  for (var x = 0; x < streamers.length; x++) {
    $.get("https://wind-bow.glitch.me/twitch-api/streams/" + streamers[x], function(dataStreams) {
        if (dataStreams.stream === null) {
          streamButton = '<button type="button" class="btn btn-sm btn-secondary float-right" disabled>Offline</button>';
          streamBool = false;
        } else {
          streamButton = '<button type="button" class="btn btn-sm btn-success float-right">Online</button>';
          streamBool = true;
        }
    });
    $.get("https://wind-bow.glitch.me/twitch-api/channels/" + streamers[x], function(data) {
        // $("#tab1").append('<div class="row"><div class="col col-md-4"> <img class="logo rounded d-inline align-left max-width" src="' + data.logo +'">' + '<div class="col col-md-8"><h4 class="d-inline">' + data.display_name +'</h4></div></div>');
        $("#tab1").append('<br><img class="logo rounded alignleft max_width" alt="tabs_shortcode2" src="'+ data.logo +'">  <h4>'+ data.display_name + streamButton + '</h4> <p>' + data.status + '</p>');
        if (streamBool === false) {
        $("#tab3").append('<br><img class="logo rounded alignleft max_width" alt="tabs_shortcode2" src="'+ data.logo +'">  <h4>'+ data.display_name + streamButton + '</h4> <p>' + data.status + '</p>');
        } else {
        $("#tab2").append('<br><img class="logo rounded alignleft max_width" alt="tabs_shortcode2" src="'+ data.logo +'">  <h4>'+ data.display_name + streamButton + '</h4> <p>' + data.status + '</p>');
        }
        // $("#tab1").append('<div class="col-md-8"><h4 class="d-inline-block">' + data.display_name +'</h4></div></div>');
    });

  }

// https://wind-bow.glitch.me/twitch-api/users/ESL_SC2


// console.log(json.stream);
// console.log(sampleRequest.name);
// console.log(sampleRequest.stream.display_name[0]);


// the code below this line has to do with display functionality, nothing to do with the API processing.

  (function ($) {
  		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

  		$('.tab ul.tabs li a').click(function (g) {
  			var tab = $(this).closest('.tab'),
  				index = $(this).closest('li').index();

  			tab.find('ul.tabs > li').removeClass('current');
  			$(this).closest('li').addClass('current');

  			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
  			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

  			g.preventDefault();
  		} );
  	})(jQuery);

});
