function playSpeech(var text) {
  $('#Video-Source').attr('src', "http://translate.google.com/translate_tts?tl=en&q=" + encodeUriComponent(text));
  var v = $("#Video")[0];
  v.load();
  setInterval(function(){v.play();}, 100);
}
