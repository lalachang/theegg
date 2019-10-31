var imgs = [];
var canvas;
var count=1;

function preload() {
  for (var i=1; i<22; i++) {
    console.log("image/"+i+".jpg");
    imgs[i] = loadImage("image/"+i+".jpg");

  }
}
function setup() {
  frameRate(1);
  var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    imageMode(CENTER);
}

function draw() {
  console.log($(window).scrollLeft());
    if ((frameCount%3==0) && (count<22) && ($(window).scrollLeft()<72367)) {

    image(imgs[count], random(width), random(height),imgs[count].width / 3,imgs[count].height / 3);
    count++;



}


if ($(window).scrollLeft()>=72367){
  background(0);
}
}
//
// //smooth scroll back to left
// function theme_enqueue_script(){
//     wp_enqueue_script('jquery');
// }
//
// add_action('wp_enqueue_scripts', 'theme_enqueue_script');
//
// jQuery(document).ready(function() {
//     var offset = 220;
//     var duration = 500;
//     jQuery(window).scroll(function() {
//         if (jQuery(this).scrollLeft() > offset) {
//             jQuery('.myBtn').fadeIn(duration);
//         } else {
//             jQuery('.myBtn').fadeOut(duration);
//         }
//     });
//
//     jQuery('.myBtn').click(function(event) {
//         event.preventDefault();
//         jQuery('html, body').animate({scrollLeft: 330}, duration);
//         return false;
//     })
// });

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollRight > 20 || document.documentElement.scrollRight > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function leftFunction() {
  document.body.scrollLeft = 0; // For Safari
  document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
  // $('document.body').animate({scrollLeft:0}), 'slow');
  $('#myBtn').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollLeft: 0 }, 'slow');
          return false;
      });
  });
}
