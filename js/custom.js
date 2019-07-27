 // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });
	
	

	
	
// CLIENT LOGO SLIDER JS

$(document).ready(function(){

$('.client').slick({
  infinite: false,
  slidesToShow: 5,
  arrows:false,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 });


// TESTIMONIAL SLIDER JS 

$(document).ready(function(){

$('.testimonial_sliders').slick({
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 2000,
  centerPadding: '10px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
		 autoplay: false,
         autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
       breakpoint: 992,
        settings: {
        arrows: true,
		autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
       breakpoint: 767,
      settings: {
        arrows: true,
		autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
   
    {
       breakpoint: 480,
      settings: {
        arrows: true,
		autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    

  ]
});

 });


// COUNTER FACT JS

$(document).ready(function(){

$('.counter').counterUp({
  delay: 100,
  time: 6000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');

});

// COUNTER FACT JS END

// MY SKILLS CIRCLE PREGRESS BAR
//draw the doughnut
var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d')];
for (var i = 0; i < doughnutArray.length; i++) {
  doughnutArray[i].lineWidth = 5; //thickness of the line
  doughnutArray[i].fillStyle = '#eaeaea';
  doughnutArray[i].strokeStyle = "#eaeaea";
  doughnutArray[i].beginPath();
  doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
  doughnutArray[i].stroke();
}
window.onload = function() {
    loadSkills1();
    loadSkills2();
    loadSkills3();
    loadSkills4();
  }
  /*Load skills one function*/
function loadSkills1() {
  var ctx = document.getElementById('skill1').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#222';
    ctx.strokeStyle = "#fd5a01";
    ctx.textAlign = 'center';
    ctx.font = "35px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 20); //speed  	
}
/*loadSkills2 function*/
function loadSkills2() {
  var ctx = document.getElementById('skill2').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#222';
    ctx.strokeStyle = "#fd5a01";
    ctx.textAlign = 'center';
    ctx.font = "35px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 30); //speed
}

/* loadSkill3 function*/
function loadSkills3() {
  var ctx = document.getElementById('skill3').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#222';
    ctx.strokeStyle = "#fd5a01";
    ctx.textAlign = 'center';
    ctx.font = "35px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 92) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 40); //speed
}
/* loadSkill4 function*/
function loadSkills4() {
  var ctx = document.getElementById('skill4').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#222';
    ctx.strokeStyle = "#fd5a01";
    ctx.textAlign = 'center';
    ctx.font = "35px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 50); //speed
  
}
// MY SKILLS CIRCLE PREGRESS BAR END



// PORTFOLIO FILTER ISOTOPE JS

$(document).ready(function () {

 //// ISOTOPE TRIGGER
    var $grid = $('.portfolio-content').isotope({
      itemSelector: '.portfolio-item',
      stagger: 30
    });
    $('.filter-portfolio').on( 'click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    //// MASONRY
    $('.portfolio-content').isotope({
      itemSelector: '.portfolio-caption img',
      masonry: {
        columnWidth: 0
      }
    });


    //// MAGNIFIC POPUP TRIGGER
    $('.modal-image').magnificPopup({
      type:'inline',
      midClick: true
    });

    //// NAVBAR COLLAPSE
    var rNav = $(".right-nav"),
      hInfo = $(".home .info"),
      home = $(".home"),
      navBtn = $(".slide-nav-btn"),
      navBtnActive = "slide-nav-btn-active",
      nav = $(".slide-nav"),
      navActive = "slide-nav-active",
      rNavSpan = $(".right-nav ul li i"),
      up = $(".up i"),
      body = $("html, body");
    rNav.css("top", (home.height() - rNav.height()) / 2);
    hInfo.css("top", (home.height() - hInfo.height()) / 2);
    navBtn.on("click", function() {
      $(this).toggleClass(navBtnActive);
      nav.toggleClass(navActive)
    });

    //// PARSLEY TRIGGER
	
	// PORTFOLIO FILTER ISOTOPE JS END
	
 // TOGGLE MENU EVENT
$(document).ready(function(){
  $("#menu_toggle").click(function(){
    $(".side_menu").toggleClass("active_sidebar");
  });
});

 // NAV CLOSE EVENT FOR CLICK IN IPAD OR MOBILE VIEW
$(document).ready(function(){
 $("#trigger1").click(function(){
$(".side_menu").toggleClass("active_sidebar");
});
});
// this function is used for click inside nav to hide sidebar
$(document).ready(function(){
 $("#trigger2").click(function(){
$(".side_menu").toggleClass("active_sidebar");
});
});

$(document).ready(function(){
 $("#trigger3").click(function(){
$(".side_menu").toggleClass("active_sidebar");
});
});

$(document).ready(function(){
 $("#trigger4").click(function(){
$(".side_menu").toggleClass("active_sidebar");
});
});

$(document).ready(function(){
 $("#trigger5").click(function(){
$(".side_menu").toggleClass("active_sidebar");
});
});

// HOME PAGE TYPING EVENT JS
  $('#typed').typing();
    $("#typed2").typing({
        strings: ['Website Design !', 'Website Development !', 'Project Management !', 'Software Testing !'],
        eraseDelay: 10,
        typeDelay: 70,
        stringStartDelay: 1000,
        color: '#ea3457',
        typingColor: 'black',
        typingOpacity: '0.1',
        loopCount: 3,
        cursorBlink: false,
        cursorChar: '<small>_</small>',
        fade: true,
        onTyping: function () {
        },
        onFinishedTyping: function () {
        },
        onErasing: function () {   
        },
        onFinishedErasing: function () { 
        },
        onAllTypingCompleted: function () {      
        },
        onFinishedFadeErasing: function () {
        }
    });


  });
  
 
