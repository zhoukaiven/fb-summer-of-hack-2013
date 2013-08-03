$('p').each(function() {
  var rand = Math.random() * 10;

  if (rand < 2) {
    var sentence = $(this).modifyParagraph('easy');
    $(this).replace(sentence, "<span class='facebook_translate' data-original=\"" + sentence + "\">" + sentence + "</span>");
  }

});


