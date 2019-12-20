$(document).ready(function () {
  $("#charactersAll").fadeIn(5000);
  $("#charactersSelective").delay(2000).fadeIn(5000);
  $("#beforeAfterCharts").click(function () {
    $('img', this).fadeToggle();
  });

  // $(".button").addClass(".buttonA").click(function () {
  //   $("#original").fadeOut(1000, function () {
  //     $("#step1").fadeIn(1000);
  //   })
  // });

  // $(".buttonA").addClass(".buttonB").click(function () {        
  //   $("#step1").fadeOut(1000, function () {
  //     $("#step2").fadeIn(1000);
  //   })
  // });

  // $(".buttonB").addClass(".buttonC").click(function () {
  //   $("#step2").fadeOut(1000, function () {
  //     $("#step3").fadeIn(1000);
  //   })
  // });

  // $(".buttonC").addClass(".buttonD").click(function () {
  //   $("#step3").fadeOut(1000, function () {
  //     $("#step4").fadeIn(1000);
  //   })
  // });

  // $(".buttonD").addClass(".buttonE").click(function () {
  //   $("#step4").fadeOut(1000, function () {
  //     $("#step5").fadeIn(1000);
  //   })
  // });

  // $(".buttonE").addClass(".buttonF").click(function () {
  //   $("#step5").fadeOut(1000, function () {
  //     $("#step6").fadeIn(1000);
  //   })
  // });

  // $(".buttonF").addClass(".buttonF").click(function () {
  //   $("#step6").fadeOut(1000, function () {
  //     $("#finished").fadeIn(1000);
  //   })
  // });
  // function show() {
  // //  $('.declutterWrapper').style.maxHeight = "200px";
  //   var images = $("img.declutter");
  //   console.log(images);
  //   for(var i = 0; i < images.length; i++)
  //   {
  //     images[i].src = images[i].getAttribute('data-src');
  //   }
  // }

  var arrImages = ['images/declutter-1.png', 'images/declutter-2.png', 'images/declutter-3.png', 'images/declutter-4.png', 'images/declutter-5.png', 'images/declutter-6.png',  'images/declutter-7.png'];
  let imgCount = 0;
  // let description = $('.declutterDescription');
  // let desc = description[imgCount];
  // console.log(description);
  // console.log('current image ' + arrImages[imgCount]);
  $('.button').click(function () {
      imgCount = imgCount + 1;
      if(imgCount < arrImages.length) {
          $('.declutter').fadeIn().attr("src", arrImages[imgCount]);
          
          // $('.declutterDescription').css('display', 'block');
          // $('.declutterDescription').css('color', 'red');
          //console.log('current image ' + arrImages[imgCount]);
          console.log('works');
      }
      else {
          $('.declutter').fadeIn().attr("src", arrImages[0]);
          imgCount = 0;
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