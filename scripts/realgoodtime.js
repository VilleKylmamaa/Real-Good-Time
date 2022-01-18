

// jQuery marquee for Firefox and other browsers that hate marquees
// Source: https://stackoverflow.com/questions/10547797/very-simple-very-smooth-javascript-marquee
(function($) {
  $.fn.textWidth = function(){
    var calc = '<span style="display:none">' + $(this).text() + '</span>';
    $('body').append(calc);
    var width = $('body').find('span:last').width();
    $('body').find('span:last').remove();
    return width;
  };

  $.fn.marquee = function(args) {
    var that = $(this);
    var textWidth = that.textWidth(),
      offset = that.width(),
      width = offset,
      css = {
        'text-indent' : that.css('text-indent'),
        'overflow' : that.css('overflow'),
        'white-space' : that.css('white-space')
      },
      marqueeCss = {
        'text-indent' : width,
        'overflow' : 'hidden',
        'white-space' : 'nowrap'
      },
      args = $.extend(true, { count: -1, speed: 15, leftToRight: false, extra_length: 0 }, args),
      i = 0,
      stop = textWidth*-1,
      dfd = $.Deferred();
    
    function go() {
      if(!that.length) return dfd.reject();
      if(width + args.extra_length == stop) {
        i++;
        if(i == args.count) {
          that.css(css);
          return dfd.resolve();
        }
        if(args.leftToRight) {
          width = textWidth*-1;
        } else {
          width = offset;
        }
      }
      that.css('text-indent', width + 'px');
      if(args.leftToRight) {
        width++;
      } else {
        width--;
      }
      setTimeout(go, args.speed);
    };
    if(args.leftToRight) {
      width = textWidth*-1;
      width++;
      stop = offset;
    } else {
      width--;            
    }
    that.css(marqueeCss);
    go();
    return dfd.promise();
  };
})(jQuery);


// Show consent form modal when the page is loaded
$(window).on('load', function() {
  $('#consent_modal').modal({backdrop: 'static', keyboard: false});
  new Audio('media/entry.mp3').play();
});

// If the user clicks the "No" button in the modal, remove it
$("#modal_no").click(function () {
  new Audio('media/nope.mp3').play();
  $("#modal_no").hide(500);
});

// Play audio when the user clicks the "Yes" button in the modal
$("#modal_yes").click(function () {
  new Audio('media/yes.mp3').play();
});

// Start the video and the marquees when the modal is closed
// The moving stop buttons are also activated here because otherwise they can
// move if the mouse is on top of them when the modal is being loaded
$("#consent_modal").on("hidden", function (e) {
  let ranranruu = document.getElementById("ranranruu_video");
  ranranruu.play()
  ranranruu.muted = false;

  $("#allstar").append(
  '<img src="img/spin2-small.gif"> SomeBODY once told me the world is gonna roll me &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance2.gif">I ain\'t the sharpest tool in the shed &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance4.gif">She was looking kind of dumb with her finger and her thumb &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin1.gif">In the shape of an "L" on her forehead &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin3.gif">Well the years start coming and they don\'t stop coming &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin7.gif">Fed to the rules and I hit the ground running &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin8.gif">Didn\'t make sense not to live for fun &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin5.gif">Your brain gets smart but your head gets dumb &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin4.gif">So much to do, so much to see &nbsp;&nbsp;&nbsp;' +
  '<img src="img/spin6.gif">So what\'s wrong with taking the back streets? &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance3.gif">You\'ll never know if you don\'t go &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance5.gif">You\'ll never shine if you don\'t glow &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance6.gif">Hey now, you\'re an all-star, get your game on, go play &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance7.gif">Hey now, you\'re a rock star, get the show on, get paid &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance9.gif">And all that glitters is gold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance10.gif">Only shooting stars break the mold &nbsp;&nbsp;&nbsp;' +

  '<img src="img/dance11.gif">It\'s a cool place and they say it gets colder &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance12.gif">You\'re bundled up now, wait \'til you get older &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance13.gif">But the meteor men beg to differ &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance14.gif">Judging by the hole in the satellite picture &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance15.gif">The ice we skate is getting pretty thin &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance16.gif">The water\'s getting warm so you might as well swim &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance17.gif">My world\'s on fire, how about yours? &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance18.gif">That\'s the way I like it and I\'ll never get bored &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance19.gif">Hey now, you\'re an all-star, get your game on, go play &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance20.gif">Hey now, you\'re a rock star, get the show on, get paid &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance21.gif">All that glitters is gold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance22.gif">Only shooting stars break the mold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance23.gif">Hey now, you\'re an all-star, get your game on, go play &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance24.gif">Hey now, you\'re a rock star, get the show, on get paid &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance25.gif">And all that glitters is gold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance26.gif">Only shooting stars &nbsp;&nbsp;&nbsp;' +

  '<img src="img/dance27.gif">Somebody once asked could I spare some change for gas? &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance28.gif">I need to get myself away from this place &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance29.gif">I said, "Yup" what a concept &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance30.gif">I could use a little fuel myself &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance31.gif">And we could all use a little change &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance32.gif">Well, the years start coming and they don\'t stop coming &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance33.gif">Fed to the rules and I hit the ground running &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance34.gif">Didn\'t make sense not to live for fun &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance35.gif">Your brain gets smart but your head gets dumb &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance36.gif">So much to do, so much to see &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance37.gif">So what\'s wrong with taking the back streets? &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance38.gif">You\'ll never know if you don\'t go (go!) &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance39.gif">You\'ll never shine if you don\'t glow &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance40.gif">Hey now, you\'re an all-star, get your game on, go play &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance41.gif">Hey now, you\'re a rock star, get the show on, get paid &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance42.gif">And all that glitters is gold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance44.gif">Only shooting stars break the mold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance45.gif">And all that glitters is gold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/dance46.gif">Only shooting stars break the mold &nbsp;&nbsp;&nbsp;' +
  '<img src="img/travolta.gif" style="margin-left: 500px;">'
  );
  
  $("#bottom_marquee").append(
    '<img src="img/spin2-small.gif">' +
    '<img src="img/dance2.gif">' +
    '<img src="img/dance4.gif">' +
    '<img src="img/spin1.gif">' +
    '<img src="img/spin3.gif">' +
    '<img src="img/spin7.gif">' +
    '<img src="img/spin8.gif">' +
    '<img src="img/spin5.gif">' +
    '<img src="img/spin4.gif">' +
    '<img src="img/spin6.gif">' +
    '<img src="img/dance3.gif">' +
    '<img src="img/dance5.gif">' +
    '<img src="img/dance6.gif">' +
    '<img src="img/dance7.gif">' +
    '<img src="img/dance9.gif">' +
    '<img src="img/dance10.gif">' +
    '<img src="img/dance11.gif">' +
    '<img src="img/dance12.gif">' +
    
    '<img src="img/dance13.gif">' +
    '<img src="img/dance14.gif">' +
    '<img src="img/dance15.gif">' +
    '<img src="img/dance16.gif">' +
    '<img src="img/dance17.gif">' +
    '<img src="img/dance18.gif">' +
    '<img src="img/dance19.gif">' +
    '<img src="img/dance20.gif">' +
    '<img src="img/dance21.gif">' +
    '<img src="img/dance22.gif">' +
    '<img src="img/dance23.gif">' +
    '<img src="img/dance24.gif">' +
    '<img src="img/dance25.gif">' +
    '<img src="img/dance26.gif">' +
    '<img src="img/dance27.gif">' +
    '<img src="img/dance28.gif">' +
    
    '<img src="img/dance29.gif">' +
    '<img src="img/dance30.gif">' +
    '<img src="img/dance31.gif">' +
    '<img src="img/dance32.gif">' +
    '<img src="img/dance33.gif">' +
    '<img src="img/dance34.gif">' +
    '<img src="img/dance35.gif">' +
    '<img src="img/dance36.gif">' +
    '<img src="img/dance37.gif">' +
    '<img src="img/dance38.gif">' +
    '<img src="img/dance39.gif">' +
    '<img src="img/dance40.gif">' +
    '<img src="img/dance41.gif">' +
    '<img src="img/dance42.gif">' +
    '<img src="img/dance45.gif">' +
    '<img src="img/dance46.gif">' +
    '<img src="img/dance44.gif">' +
    '<img src="img/dance43.gif">' +
    '<img src="img/travolta.gif" style="margin-left: 500px;">'
  );

  $('#allstar').marquee({ extra_length: 19500 });
  $('#bottom_marquee').marquee({ extra_length: 4500 });

  // Stop video button escapes when user tries to click it, triggered on mouse-over.
  // After moving 6 times the button no longer escapes and becomes clickable.
  // The button can only move upwards because if it moves over the video it becomes
  // unclickable. Both left and right are allowed for horizontal movement.
  var times_moved = 0;
  $("#moving_stop").mouseenter(function () {
    var plus_or_minus = Math.random() < 0.5 ? -1 : 1;
    if (times_moved < 6) {
      new Audio('media/dodge2.mp3').play();
      $(this).animate({
        top: -Math.random() * 300
      }, 100);
      $(this).animate({
        left: Math.random() * 300 * plus_or_minus
      }, 100);
    } else {
      $(this).attr("id", "real_stop")
    }
    times_moved++;
  });
  // Sometimes the button doesn't move far enough and the mouse stays over the
  // button. In this case a click should also activate movement.
  $("#moving_stop").click(function () {
    var plus_or_minus = Math.random() < 0.5 ? -1 : 1;
    if (times_moved < 6) {
      new Audio('media/dodge2.mp3').play();
      $(this).animate({
        top: -Math.random() * 1
      }, 100);
      $(this).animate({
        left: Math.random() * 1 * plus_or_minus
      }, 100);
    } else {
      $(this).attr("id", "real_stop")
    }
    times_moved++;
  });


  // Stop button runs off screen and confused Travolta appears on its place
  var times_moved = 0;
  $("#fake_stop").mouseenter(function () {
    new Audio('media/dodge1.mp3').play();
    $(this).animate({
      left: "2000"
    }, 500, function() {
      $("#fake_stop_div").after("<img id='new_travolta' class='zoom' src='img/travolta3.gif'>");
      $(this).hide();
      
      // Play GLaDOS quote when the newly created Travolta is clicked
      $("#new_travolta").click(function () {
        let ranranruu_videos = $(".ranranruu_video");
        ranranruu_videos.each(function() {
          this.muted = true;
        });

        new Audio('media/dumb.mp3').play();

        $(this).delay(6000).queue(function() {
          if (enter_endgame === false) {
            let ranranruu_videos = $(".ranranruu_video");
            ranranruu_videos.each(function() {
              this.muted = false;
            });
          }
          $(this).dequeue();
        });
      });
    });
  });
});

// Make a new video and start playing it when the stop button is clicked
var video_index = 1;
var mushroom_index = 1;
var mushroom_rain = false;
var enter_endgame = false;
$(document).on('click', '#real_stop', function() {
  // Play audio
  new Audio('media/wow.mp3').play();

  // Add a new video on each click
  $(".ranranruu_div").append(
    "<img src='img/mushroom.gif' class='mushroom zoom'>" +
    "<video id='ranranruu_video_new_" + video_index + 
    "' class='ranranruu_video' src='media/ranranruu.mp4' loop></video>" +
    "<img src='img/mushroom.gif' class='mushroom zoom'>"
  );
  let ranranruu_new = document.getElementById("ranranruu_video_new_" + video_index);
  ranranruu_new.play();
  video_index++;
  
  // Mushroom become killable by clicking
  $(".mushroom_wait").replaceWith("<img src='img/mushroom.gif' class='mushroom zoom'>");
  $("#alert").html(
    "<div class='alert alert-info'>" +
      "<a class='close zoom_more'>&times;</a>" +
      "<img class='pull-left' style='margin-top: -8px' src='img/drudgesiren.gif' width='80'>" +
      "<h4 class='alert-heading'>STOP Video</h4>" +
      "<p>Kill the mushrooms by clicking them to stop the video!</p>" +
    "</div>"
  );

  // Kill a mushroom by clicking it
  $(document).on('click', '.mushroom', function() {
    $(this).hide(1000);
    new Audio('media/pop.mp3').play();
  });

  // If there are no more mushrooms, start spawning more mushrooms
  if (mushroom_rain === false) {
    $(".mushroom").click(function () {
      mushroom_rain = true;
      let mushroom_amount = $('.mushroom').filter(function () { 
        return $(this).css("display") == 'inline' 
      });

      if (mushroom_amount.length - 1 === 0) {
        enter_endgame = true;
        $(this).hide(1000);

        let ranranruu_videos = $(".ranranruu_video");
        ranranruu_videos.each(function() {
          this.muted = true;
        });
        
        new Audio('media/surprise.mp3').play();

        $(this).delay(7600).queue(function() {
          // Mute ranranruu videos again in case user has clicked multiple sound effects
          let ranranruu_videos = $(".ranranruu_video");
          ranranruu_videos.each(function() {
            this.muted = true;
          });
          new Audio('media/damaged.mp3').play();

          setInterval(function () {
            for (let i = 0; i < 15; i++) {
              // Minus 82 and 110 so the mushrooms don't keep making the document bigger
              let x = Math.random() * $(document).width() - 82;
              let y = Math.random() * $(document).height() - 110;

              // All this is just to make fadeIn() work
              new_mushroom_div = "<div class='new_mushroom_div_" + mushroom_index + "' style='display: none;'></div>";
              new_mushroom = "<img src='img/mushroom.gif' style='position:absolute; " + 
                "left:" + x + "px; top:" + y + "px;' class='mushroom'>";
              $(new_mushroom_div).appendTo('.ranranruu_div').fadeIn(500);
              $(".new_mushroom_div_" + mushroom_index).html(new_mushroom, 500);
              mushroom_index++;
            }
          }, 1000)
          $(this).dequeue();
        });
      
        $(this).delay(11000).queue(function() {
          ranranruu_videos.each(function() {
            this.muted = false;
          });
          enter_endgame = false;
          $(this).dequeue();
        });
      }
    });
  }
});


// Make a new success message when user tries to close it
$(document).on('click', '.close', function() {
  new Audio('media/dundun.mp3').play();

  $(".close").after(
  "<li class='span4'>" +
    "<div class='alert alert-success'>" +
      "<a class='close zoom_more'>&times;</a>" +
        "<strong>Success</strong> You successfully read this important alert message." +
    "</div>" +
  "</li>");
});


// Play Initial D - Deja Vu and send a racing car when the marquee with
// the All Star lyrics is clicked
var dejavu_index = 1;
var dejavu_remove_index = 1;
$("#allstar").click(function () {
  new Audio('media/dejavu.mp3').play();
  $("#allstar").after("<div class='dejavu" + dejavu_index + "'><img width='100' src='img/dejavu.gif'></div>")
  $(".dejavu" + dejavu_index).marquee({ speed: 3, count: 1 });
  setTimeout(function() {
    $(".dejavu" + dejavu_remove_index).remove();
    $(this).dequeue();
    dejavu_remove_index++;
  }, 5850);
  dejavu_index++;
});


// Play GTA: San Andreas theme and send CJ when the bottom marquee is clicked
var gta_index = 1;
var gta_remove_index = 1;
$("#bottom_marquee").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/gta.mp3').play();
  $("#bottom_marquee").after(
    "<div class='gta" + gta_index + "'>" +
      "<img width=250 src='img/cj1.gif'>" +
      "<img width=140 src='img/cj2.gif'>" +
      "<img width=150 src='img/cj3.gif'>" +
      "<img width=120 src='img/cj4.gif'>" +
      "<img width=80 src='img/cj5.gif'>" +
    "</div>"
  );
  $(".gta" + gta_index).marquee({ speed: 6, extra_length: 1000 });
  setTimeout(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(".gta" + gta_remove_index).remove();
    $(this).dequeue();
    gta_remove_index++;
  }, 15000);
  gta_index++;
});


// Prevent page from reloading when enter is clicked while
// feedback input field is in focus
$('#feedback_form').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});


// Dramatic chipmunk when feedback is sent
$("#feedback_button").click(function () {
  let feedback_input = document.forms["feedback_form"]["feedback"].value;
  if (feedback_input !== null && feedback_input !== "") {
    $("#feedback_animegirl").hide();
    $(".feedback_div").append(
      "<img src='img/chipmunk-dramatic.gif'>" +
      "<br><br><strong>Feedback received</strong><br><br>" +
      "This form is connected to the University of Oulu Web Survey API.<br><br>" +
      "Instead of your input, another positive review for relocating the campus " +
      "to Oulu downtown was delivered."
    );
    new Audio('media/dramatic-chipmunk.mp3').play();
  } else {
    $(".feedback_div").html("Feedback input field is empty. ");
  }
});


// Play Windows XP boot sound when Real Good Time title is clicked
$("#real_good_time_title").click(function () {
  new Audio('media/windows.mp3').play();
});


// Play Windows PPAP song and spawn Windows XP memes when the ICT tiedote is clicked
var ict_index = 1;
$("#ICT").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });

  new Audio('media/windows-ppap.mp3').play();
  
  $(this).delay(800).queue(function() {
    $("#ICT").after(
      "<img src='img/windows-error.jpg' width=275 class='windows_error" +
      ict_index + " ict_error zoom'></img>"
    );
    $(".windows_error" + ict_index).click(function () {
      new Audio('media/windows-error.mp3').play();
    });
    $(this).dequeue();
  });

  $(this).delay(2000).queue(function() {
    $("#ICT").after(
      "<img src='img/windows-error2.jpg' class='windows_error2" +
      ict_index + " ict_error zoom' width=225></img>"
      );
    $(".windows_error2" + ict_index).click(function () {
      new Audio('media/windows-error3.mp3').play();
    });
    $(this).dequeue();
  });

  $(this).delay(2500).queue(function() {
    $("#ICT").after(
      "<img src='img/windows-xp.png' class='windows_shutdown" +
      ict_index + " ict_error zoom' width=200></img>"
    );
    $(".windows_shutdown" + ict_index).click(function () {
      new Audio('media/windows-shutdown.mp3').play();
    });
    ict_index++;
    $(this).dequeue();
  });

  $(this).delay(2000).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});


// Play click sound when navbar is clicked
$(".dropdown").click(function () {
  new Audio('media/click.mp3').play();
});


// Play Never Gonna Give You Up when the lyrics are clicked
$("#astley_upper").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/astley-upper.mp3').play();

  $(this).delay(8000).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});
$("#astley_lower").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/astley-lower.mp3').play();

  $(this).delay(8000).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});


// Play Among Us theme when the characters are clicked
$(".amogus").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/amogus.mp3').play();

  $(this).delay(4000).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});


// Play sad violin when the design heuristics are clicked
$("#heuristics").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/jurassic.mp3').play();

  $(this).delay(7000).queue(function() {
    $("#heuristic1").append("<img src='img/dino1.gif' width=50></img>")
    $(this).dequeue();
  });
  $(this).delay(1000).queue(function() {
    $("#heuristic2").append("<img src='img/dino2.gif' width=50></img>")
    $(this).dequeue();
  });
  $(this).delay(1000).queue(function() {
    $("#heuristic3").append("<img src='img/dino3.gif' width=50></img>")
    $(this).dequeue();
  });
  $(this).delay(1000).queue(function() {
    $("#heuristic4").append("<img src='img/dino4.gif' width=50></img>")
    $(this).dequeue();
  });
  $(this).delay(1200).queue(function() {
    $("#heuristic5").append("<img src='img/dino5.gif' width=50></img>")
    $(this).dequeue();
  });


  $(this).delay(4000).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});


// Play U Can't Touch This when the div with the MC Hammer is clicked
// Another MC Hammer is added
$("#mchammer").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/mchammer.mp3').play();
  $("#mchammer_marquee").append(
    "<p>Can't touch this</p>" +
    "<small><img src='img/mchammer.gif'>, 369 BC</small>"
  );

  $(this).delay(4500).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});


// Play Attack on Titan season 4 theme when the niilo22 quote is clicked
// Alternate between chorus 1 and 2
// First click creates swing gif and second click the falling leaves gifs
// Duplicate gifs aren't created here
var aot_index = 1;
var aot_spawn_1 = false;
var aot_spawn_2 = false;
$("#jaksaa").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });

  if (aot_index % 2 === 1) {
    new Audio('media/aot.mp3').play();
    if (!aot_spawn_1) {
      aot_spawn_1 = true;
      $("#jaksaa").append(
        "<img id='aot' src='img/aot.gif' width=150 style='margin-left: 150px;'>"
      );
    }
    $(this).delay(14500).queue(function() {
      if (enter_endgame === false) {
        let ranranruu_videos = $(".ranranruu_video");
        ranranruu_videos.each(function() {
          this.muted = false;
        });
      }
      $(this).dequeue();
    });
  } else {
    new Audio('media/aot2.mp3').play();
    if (!aot_spawn_2) {
      aot_spawn_2 = true;
      $("#jaksaa").css("max-width", "520px");
      $("#aot").css("margin-left", "0px");
      $("#aot").before("<img src='img/fall.gif' width=150>");
      $("#aot").after("<img src='img/fall.gif' width=150>");
    }
    $(this).delay(14500).queue(function() {
      if (enter_endgame === false) {
        let ranranruu_videos = $(".ranranruu_video");
        ranranruu_videos.each(function() {
          this.muted = false;
        });
      }
      $(this).dequeue();
    });
  }
  aot_index++;
});


// Play he-man meme song when the Travolta at the bottom of the page is clicked
$("#travolta_bottom").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });

  if (mushroom_rain === false) {
    new Audio('media/sad-violin.mp3').play();
    $(this).delay(20500).queue(function() {
      if (enter_endgame === false) {
        let ranranruu_videos = $(".ranranruu_video");
        ranranruu_videos.each(function() {
          this.muted = false;
        });
      }
      $(this).dequeue();
    }); 
  } else {
    new Audio('media/heman.mp3').play();
    $(this).delay(9000).queue(function() {
      if (enter_endgame === false) {
        let ranranruu_videos = $(".ranranruu_video");
        ranranruu_videos.each(function() {
          this.muted = false;
        });
      }
      $(this).dequeue();
    }); 
  }
});


// Play You Spin Me Round when spinning anime girl is clicked
$(".anime_spin").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });

  new Audio('media/spin.mp3').play();

  $(this).delay(7000).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});


// Play Squidward yes when the Squidward is clicked
$(".squidward").click(function () {
  new Audio('media/yes-squidward.mp3').play();
});


// Play different Windows sounds when the IE logo, notepad, etc. are clicked
$("#ie_logo").click(function () {
  new Audio('media/windows-error.mp3').play();
});
$("#ns_logo").click(function () {
  new Audio('media/windows-shutdown.mp3').play();
});
$("#no_frames").click(function () {
  new Audio('media/windows-error2.mp3').play();
});
$("#notepad").click(function () {
  let ranranruu_videos = $(".ranranruu_video");
  ranranruu_videos.each(function() {
    this.muted = true;
  });
  new Audio('media/windows-error-music.mp3').play();

  $(this).delay(8500).queue(function() {
    if (enter_endgame === false) {
      let ranranruu_videos = $(".ranranruu_video");
      ranranruu_videos.each(function() {
        this.muted = false;
      });
    }
    $(this).dequeue();
  });
});

// Play Siegmeyer hmm when the mushrooms are clicked before they become killable
$(".mushroom_wait").click(function () {
  new Audio('media/hmm.mp3').play();
});


// Play tuturu when feedback anime girl is clicked
$("#feedback_animegirl").click(function () {
  new Audio('media/tuturu.mp3').play();
});


// Insert amogus when links in the second navigation bar are clicked
$("#second_nav1").click(function () {
  $(this).append("<img src='img/amogus6.gif' width='15'>");
  new Audio('media/amogus-spawn.mp3').play();
});
$("#second_nav2").click(function () {
  $(this).append("<img src='img/amogus8.gif' width='15'>");
  new Audio('media/amogus-spawn.mp3').play();
});
$("#second_nav3").click(function () {
  $(this).append("<img src='img/amogus9.gif' width='15'>");
  new Audio('media/amogus-spawn.mp3').play();
});
$("#second_nav4").click(function () {
  $(this).append("<img src='img/amogus10.gif' width='15'>");
  new Audio('media/amogus-spawn.mp3').play();
});


// Preload some gifs and sound files
$(document).ready(function() {
  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
      (new Image()).src = this;
    });
  }

  preload([
    "/img/amogus6.gif",
    "/img/amogus8.gif",
    "/img/amogus9.gif",
    "/img/amogus10.gif",
    "/img/aot.gif",
    "/img/travolta3.gif",
    "/img/chipmunk-dramatic.gif",
    "/img/dejavu.gif",
    "/img/dino1.gif",
    "/img/dino2.gif",
    "/img/dino3.gif",
    "/img/dino4.gif",
    "/img/dino5.gif",
    "/img/dino5.gif",
    "/img/cj1.gif",
    "/img/cj2.gif",
    "/img/cj3.gif",
    "/img/cj4.gif",
    "/img/cj5.gif",
    "/img/fall.gif",
    "/img/windows-error.jpg",
    "/img/windows-error2.jpg",
    "/img/windows-xp.png"
  ]);

  var audio_files = [
    "/media/amogus-spawn.mp3",
    "/media/amogus.mp3",
    "/media/aot.mp3",
    "/media/aot2.mp3",
    "/media/astley-lower.mp3",
    "/media/astley-upper.mp3",
    "/media/click.mp3",
    "/media/damaged.mp3",
    "/media/dejavu.mp3",
    "/media/dodge1.mp3",
    "/media/dodge2.mp3",
    "/media/dramatic-chipmunk.mp3",
    "/media/dumb.mp3",
    "/media/dundun.mp3",
    "/media/entry.mp3",
    "/media/gta.mp3",
    "/media/heman.mp3",
    "/media/hmm.mp3",
    "/media/jurassic.mp3",
    "/media/mchammer.mp3",
    "/media/nope.mp3",
    "/media/pop.mp3",,
    "/media/sad-violin.mp3",
    "/media/spin.mp3",
    "/media/surprise.mp3",
    "/media/tuturu.mp3",
    "/media/windows.mp3",
    "/media/windows-error.mp3",
    "/media/windows-error2.mp3",
    "/media/windows-error3.mp3",
    "/media/windows-error-music.mp3",
    "/media/windows-ppap.mp3",
    "/media/windows-shutdown.mp3",
    "/media/wow.mp3",
    "/media/yes-squidward.mp3",
    "/media/yes.mp3"
  ];
  
  function preloadAudio(url) {
    var audio = new Audio();
    audio.src = url;
  }
  
  for (var i in audio_files) {
    preloadAudio(audio_files[i]);
  }
});