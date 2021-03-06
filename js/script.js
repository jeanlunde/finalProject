$(document).ready(function () {
  // Fade in character background, then selective characters.
  $("#charactersAll").fadeIn(5000);
  $("#charactersSelective").delay(2000).fadeIn(5000);

  // Toggle between before and after images.
  $("#before-after").click(function () {
    $("img", this).fadeToggle();
  });

  // Declare variables used for the step-by-step chart progression function.
  var arrImages = ['images/declutter-1.png', 'images/declutter-2.png', 'images/declutter-3.png', 'images/declutter-4.png', 'images/declutter-5.png', 'images/declutter-6.png', 'images/declutter-7.png'];
  let imgCount = 0;
  var arrDescriptions = ["#description1", "#description2", "#description3", "#description4", "#description5", "#description6", "#description7"];
  let descrCount = 0;

  // Make the beginning chart image visible.
  $(".declutterDescription:first-child").css("visibility", "visible");
 
  $(".button").click(function () {

    // Display each chart image and corresponding description as the button is clicked, while hiding the rest of the images and descriptions.
    if ((descrCount < arrDescriptions.length) && (imgCount < arrImages.length)) {
      descrCount = descrCount + 1;
      $(arrDescriptions[descrCount]).css("visibility", "visible");
      $(arrDescriptions[descrCount - 1]).css("visibility", "hidden");
      imgCount = imgCount + 1;
      $('.declutter').fadeIn().attr("src", arrImages[imgCount]);
      console.log("works");
    } else {
      $(".declutterDescription").css("visibility", "hidden");
      $(".declutterDescription:first-child").css("visibility", "visible");
      $(".declutter").fadeIn().attr("src", arrImages[0]);
      descrCount = 0;
      imgCount = 0;
    }
    // Change button text at the end of the chart improvement steps.
    if (descrCount > 6) {
      $(".button").html ("Start Over");
      $("#declutterIntro").css("visibility", "hidden");
    } else {
      $(".button").html ("Next Step");
      $("#declutterIntro").css("visibility", "visible");
    }
  })

  // document.ready function ends here
});




console.clear();

// Splitting js begins here.
Splitting({
  target: '.tiler',
  by: 'cells',
  rows: 3,
  columns: 3,
  image: true
}); //Image('.tiler-overlay', { rows: 3, cols: 3 });