$(document).ready(function () {
  $("#charactersAll").fadeIn(5000);
  $("#charactersSelective").delay(2000).fadeIn(5000);
  $("#beforeAfterCharts").click(function () {
    $('img', this).fadeToggle();
  });

 

  var arrImages = ['images/declutter-1.png', 'images/declutter-2.png', 'images/declutter-3.png', 'images/declutter-4.png', 'images/declutter-5.png', 'images/declutter-6.png',  'images/declutter-7.png'];
  let imgCount = 0;

  $('.button').click(function () {
      imgCount = imgCount + 1;
      if(imgCount < arrImages.length) {
          $('.declutter').fadeIn().attr("src", arrImages[imgCount]);
          
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