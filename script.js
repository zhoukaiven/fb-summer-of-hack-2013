// GLOBAL SETTINGS
var on;
var language;
var difficulty = 1;
//

function translate(from, to, text, cb) {
    $.ajax({
        url: 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate?oncomplete=?&appId=68D088969D79A8B23AF8585CC83EBA2A05A97651&from=' + from + '&to=' + to + '&text=' + encodeURIComponent(text),
        type: "GET",
        success: function(data) {
            cb(decodeURIComponent(data.substr(1, data.length - 2)));
        }
    });
}
// Split Functions
function splitByWord(difficulty) {
  $('p').each(function() {
      var word = $(this).getWord(difficulty);
      var that = this;
      translate('en', 'es', word, function (translatedWord) {
        $(that).html($(that).html().replace(word, "<span class='facebook_translate' style='background-color:red' data-original=\"" + word + "\">" + translatedWord + "</span>"));
      });
  });
}

function splitBySentence(difficulty, probability) {
  $('p').each(function() {
    var rand = Math.random() * 10;
    if (rand < probability) {
      var sentence = $(this).getSentence(difficulty);
      var that = this;
      translate('en', 'es', sentence, function (translatedSentence) {
        $(that).html($(that).html().replace(sentence, "<span class='facebook_translate' style='background-color:red' data-original=\"" + sentence + "\">" + translatedSentence + "</span>"));
      });
    }
  });
}
//

if (difficulty == 1) {
    splitByWord('easy');
} else if (difficulty == 2) {
    splitByWord('hard');
} else if (difficulty == 3) {
    splitBySentence('random', 5);
} else if (difficulty == 4) {
    splitBySentence('random', 7);
} else {
    splitBySentence('random', 9);
}


