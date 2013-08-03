jQuery.fn.splitBySentence() = function(difficulty) {
  $('p').each(function() {
    var rand = Math.random() * 10;

    if (rand < difficulty) {
      var sentence = $(this).getSentence('easy');
      $(this).replace(sentence, "<span class='facebook_translate' data-original=\"" + sentence + "\">" + sentence + "</span>");
    }

  });
};

jQuery.fn.splitByWord() = function() {
  $('p').each(function() {
      var word = $(this).getWord('easy');
      $(this).replace(word, "<span class='facebook_translate' data-original=\"" + word + "\">" + word + "</span>");
  });
};
