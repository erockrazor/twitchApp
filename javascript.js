$(document).ready(function() {

  var streamers = ["canceldota", "aedrons", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas","froggedTV"];
  var streamButton;
  var streamBool;
  for (var x = 0; x < streamers.length; x++) {
    $.get("https://wind-bow.glitch.me/twitch-api/streams/" + streamers[x], function(dataStreams) {
        if (dataStreams.stream === null) {
          streamButton = '<button type="button" class="btn btn-sm btn-secondary float-left">Offline</button>';
          streamBool = false;
        } else if (dataStreams.stream !== null)  {
          streamButton = '<button type="button" class="btn btn-sm btn-success float-left">Online</button>';
          streamBool = true;
        } else if (streamButton === 'undefined'){
          streamButton = '<button type="button" class="btn btn-sm btn-warning float-left">Reload</button>';
          streamBool = false;
        }
        console.log(dataStreams);
    });
    $.get("https://wind-bow.glitch.me/twitch-api/channels/" + streamers[x], function(data) {
        console.log(data.url);
        // $("#tab1").append('<div class="row"><div class="col col-md-4"> <img class="logo rounded d-inline align-left max-width" src="' + data.logo +'">' + '<div class="col col-md-8"><h4 class="d-inline">' + data.display_name +'</h4></div></div>');
        $("#tab1").append('<div class="row"><div class="col-md-4"><img class="logo rounded float-right max_width img-fluid" alt="tabs_shortcode2" src="'+ data.logo +'"></div><a href="'+ data.url +'"><div class="col-md-4">  <h4>'+ data.display_name + '</a></h4></div><div class="col-md-4"><a href="'+ data.url +'">' + streamButton + '</a></div></div>');
        if (streamBool === false) {
          $("#tab3").append('<div class="row"><div class="col-md-4"><img class="logo rounded float-right max_width img-fluid" alt="tabs_shortcode2" src="'+ data.logo +'"></div><a href="'+ data.url +'"><div class="col-md-4">  <h4>'+ data.display_name + '</a></h4> <p>' + data.status + '</p></div><div class="col-md-4"><a href="'+ data.url +'">' + streamButton + '</a></div></div>');
        } else {
          $("#tab2").append('<div class="row"><div class="col-md-4"><img class="logo rounded float-right max_width img-fluid" alt="tabs_shortcode2" src="'+ data.logo +'"></div><a href="'+ data.url +'"><div class="col-md-4">  <h4>'+ data.display_name + '</a></h4> <p>' + data.status + '</p></div><div class="col-md-4"><a href="'+ data.url +'">' + streamButton + '</a></div></div>');
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
