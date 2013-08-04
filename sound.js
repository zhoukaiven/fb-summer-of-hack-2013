function playSpeech(text) {
  $('#Video-Source').attr('src', "http://translate.google.com/translate_tts?tl=en&q=" + encodeURIComponent(text));
  var v = $("#Video")[0];
  v.load();
  v.play();
}
