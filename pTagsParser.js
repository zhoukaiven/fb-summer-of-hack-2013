function splitBySentence(difficulty, probability) {
  $('p').each(function() {
    var rand = Math.random() * 10;
    if (rand < probability) {
      var sentence = $(this).getSentence(difficulty);
      $(this).html($(this).html().replace(sentence, "<span class='translate_this2465' data-original=\"" + sentence + "\">" + sentence + "</span>"));
    }

  });
}

function splitByWord(difficulty) {
  $('p').each(function() {
      var word = $(this).getWord(difficulty);
      $(this).html($(this).html().replace(word, "<span class='translate_this2465' data-original=\"" + word + "\">" + word + "</span>"));
  });
}
