/*JS for preloader*/
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
		loader.style.display = "none";
		})


// Get the top to up button://
let mybutton = document.getElementById("myScrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}	

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//end of Get the top to up button://


/*js for work counter*/
$(document).ready(function () {
        $.fn.jQuerySimpleCounter = function (options) {
            var settings = $.extend({
                start: 0,
                end: 100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options);

            var thisElement = $(this);

            $({ count: settings.start }).animate({ count: settings.end }, {
                duration: settings.duration,
                easing: settings.easing,
                step: function () {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };
        $('#number1').jQuerySimpleCounter({ end: 200, duration: 5000 });
        $('#number2').jQuerySimpleCounter({ end: 200, duration: 5000 });
        $('#number3').jQuerySimpleCounter({ end: 200, duration: 5000 });
        $('#number4').jQuerySimpleCounter({ end: 200, duration: 5000 });
		$('#number5').jQuerySimpleCounter({ end: 200, duration: 5000 });
		$('#number6').jQuerySimpleCounter({ end: 200, duration: 5000 });
		$('#number7').jQuerySimpleCounter({ end: 200, duration: 5000 });
		$('#number8').jQuerySimpleCounter({ end: 200, duration: 5000 });
		$('#number9').jQuerySimpleCounter({ end: 200, duration: 5000 });
		$('#number10').jQuerySimpleCounter({ end: 200, duration: 5000 });
    });
/*end of js for work counter*/

