$(document).ready(function () {
  $("#charactersAll").fadeIn(5000);
  $("#charactersSelective").delay(2000).fadeIn(6000);
  $("#beforeAfterCharts").click(function () {
    $('img', this).fadeToggle();
  });
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
