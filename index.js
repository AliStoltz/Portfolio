var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


$('#meme').on('mouseenter mouseleave', ()=> {
  if ($('#meme').attr('src') === './images/memeattic.png' )  {
      $('#meme').attr('src', './images/meme2.png');
  } else if ($('#meme').attr('src') === './images/meme2.png' ){
      $('#meme').attr('src', './images/memeattic.png');
  }
  
})

$('#simon').on('mouseenter mouseleave', ()=> {
  if ($('#simon').attr('src') === './images/simon.png' )  {
      $('#simon').attr('src', './images/simon2.png');
  } else if ($('#simon').attr('src') === './images/simon2.png' ){
      $('#simon').attr('src', './images/simon.png');
  }
  
})

$('#wayfarer').on('mouseenter mouseleave', ()=> {
  if ($('#wayfarer').attr('src') === './images/wayfarer.png' )  {
      $('#wayfarer').attr('src', './images/wayfarer2.png');
  } else if ($('#wayfarer').attr('src') === './images/wayfarer2.png' ){
      $('#wayfarer').attr('src', './images/wayfarer.png');
  }
  
})

$('#collabathon').on('mouseenter mouseleave', ()=> {
  if ($('#collabathon').attr('src') === './images/collabathon.png' )  {
      $('#collabathon').attr('src', './images/collabathon2.png');
  } else if ($('#collabathon').attr('src') === './images/collabathon2.png' ){
      $('#collabathon').attr('src', './images/collabathon.png');
  }
  
})

$('#okstupid').on('mouseenter mouseleave', ()=> {
  if ($('#okstupid').attr('src') === './images/okstupid.jpg' )  {
      $('#okstupid').attr('src', './images/okstupid2.png');
  } else if ($('#okstupid').attr('src') === './images/okstupid2.png' ){
      $('#okstupid').attr('src', './images/okstupid.jpg');
  }
  
})
