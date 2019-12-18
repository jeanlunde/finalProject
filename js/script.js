$(document).ready(function () {
  $("#charactersAll").fadeIn(4000);
  $("#charactersSelective").delay(0).fadeIn(5000);
  $("#beforeAfterCharts").click(function () {
    $('img', this).fadeToggle();
  });

  $(".button").addClass(".buttonA").click(function () {
    $("#original").fadeOut(1000, function () {
      $("#step1").fadeIn(1000);
    })
  });

  $(".buttonA").addClass(".buttonB").click(function () {        
    $("#step1").fadeOut(1000, function () {
      $("#step2").fadeIn(1000);
    })
  });

  $(".buttonB").addClass(".buttonC").click(function () {
    $("#step2").fadeOut(1000, function () {
      $("#step3").fadeIn(1000);
    })
  });

  $(".buttonC").addClass(".buttonD").click(function () {
    $("#step3").fadeOut(1000, function () {
      $("#step4").fadeIn(1000);
    })
  });

  $(".buttonD").addClass(".buttonE").click(function () {
    $("#step4").fadeOut(1000, function () {
      $("#step5").fadeIn(1000);
    })
  });

  $(".buttonE").addClass(".buttonF").click(function () {
    $("#step5").fadeOut(1000, function () {
      $("#step6").fadeIn(1000);
    })
  });

  // $(".button").click(function () {
  //   $("#step6").fadeOut(1000, function () {
  //     $("#finished").fadeIn(1000);
  //   })
  // });



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