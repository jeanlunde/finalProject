$(document).ready(function () {
  $("#charactersAll").fadeIn(5000);
  $("#charactersSelective").delay(0).fadeIn(6000);
  $("#beforeAfterCharts").click(function () {
    $('img', this).fadeToggle();
  });
  $("#original").fadeOut(2000);
  $("#step1").fadeIn(2000);
  $("#step1").fadeOut(2000);
  $("#step2").fadeIn(2000);
  $("#step2").fadeOut(2000);
  $("#step3").fadeIn(2000);
  $("#step3").fadeOut(2000);
  $("#step4").fadeIn(2000);
  $("#step4").fadeOut(2000);
  $("#step5").fadeIn(2000);
  $("#step5").fadeOut(2000);
  $("#step6").fadeIn(2000);
  $("#step6").fadeOut(2000);
  $("#finished").fadeIn(2000);
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
