// GLOBAL SETTINGS

var on;
var language;
var difficulty = "1";
var volume = "0";

function load(callback){
  chrome.storage.sync.get(['status', 'volume', 'lang', 'diff'], function(data){
    on = data.status;
    language = data.lang;
    difficulty = data.diff;

    if(on == "on"){
        callback();
    }
  });
}

$(document).ready(function () {

  load(function() {

    if (volume == "1") {
    function playSpeech(text) {
      if ($('#translate-video').length > 0) {
        $('#translate-video').html("<video controls='' autoplay name='media' id='translate-video' style='display:none'><source id='video-source' src='http://translate.google.com/translate_tts?tl=" + language + "&q=" + text.replace(' ','+').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"") + "' type='audio/mpeg'></video>");
      } else {
        $('body').append("<video controls='' autoplay name='media'  id='translate-video' style='display:none'><source id='video-source' src='http://translate.google.com/translate_tts?tl=" + language + "&q=" + text.replace(' ','+').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"") + "' type='audio/mpeg'></video>");
      }
    }

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
        translate('en', language, word, function (translatedWord) {
          $(that).html($(that).html().replace(/<\/*.+?>/g, '').replace(new RegExp("\\b" + word + "\\b", 'i'), "<span class='translate_14385' style='background-color: #FFFAB0;' data-original=\"" + word + "\">" + translatedWord + "</span>"));
          $('.translate_14385').hover(function() {
            playSpeech(translatedWord);
          });
        });
      });
    }

    function splitBySentence(difficulty, probability) {
      $('p').each(function() {
        var rand = Math.random() * 10;
        if (rand < probability) {
          var sentence = $(this).getSentence(difficulty);
          var that = this;
          translate('en', language, sentence, function (translatedSentence) {
            $(that).html($(that).html().replace(/<\/*.+?>/g, '').replace(sentence, "<span class='translate_14385' style='background-color: #FFFAB0;' data-original=\"" + sentence + "\">" + translatedSentence + "</span>"));
            $('.translate_14385').hover(function() {
              console.log($(this).text());
              playSpeech($(this).text());
            });
          });
        }
      });
    }

    if (difficulty == 1) {
      splitByWord('easy');
    } else if (difficulty == 2) {
      splitByWord('hard');
    } else if (difficulty == 3) {
      splitBySentence('easy', 4);
    } else if (difficulty == 4) {
      splitBySentence('medium', 6);
    } else if (difficulty == 5) {
      splitBySentence('hard', 11);
    }

  });
});
