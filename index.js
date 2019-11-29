// console.log('danny is an idiot');
// var about = ['Software Engineer', 'Web Developer', 'Researcher', 'Guitar Enthusiast'];
// var elem = document.getElementById('changeText');
// var inst = setInterval(change, 1000);

// function change() {
//   elem.innerHTML = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//   };
// };

// change();

$(function () {
  count = 0;
  wordsArray = ['Software Engineer', 'Web Developer', 'Researcher', 'Guitar Enthusiast'];
  setInterval(function () {
    count++;
    $('#changeText').fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});