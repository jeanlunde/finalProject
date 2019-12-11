$(document).ready(function () {
    $("#beforeAfterCharts").click(function () {
        $('img', this).toggle();
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