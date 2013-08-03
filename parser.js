jQuery.fn.getSentences = function(num) {

  // split paragraph into sentences
  var text = $(this).text();
  var sentences = text.split(/[.?!]+/);

  // sort by length
  sentences.sort(function(a, b) {
    return a.length - b.length;
  });

  // return num sentences weighted based on difficulty
  var weight;

  if (mode == 'random') {
    for (var i = 0; i < sentences.length; i++) {
      weight.push(1);
    }
  } else if (mode == 'easy') {
    for (var i = 0; i < sentences.length; i++) {
      weight.push(sentences[i].length);
    }
  } else if (mode == 'hard') {
    for (var i = sentences.length; i >= 0; i--) {
      weight.push(sentences[i].length);
    }
  }

  var result;

  for (var i = 0; i < num; i++) {
    results.push(getRandomItem(sentences, weight));
  }

  return result;
};

function(list, weight) {
  var total_weight = weight.reduce(function (prev, cur, i, arr) {
    return prev + cur;
  });

  var rand = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  var random_num = rand(0, total_weight);
  var weight_sum = 0;

  for (var i = 0; i < list.length; i++) {
    weight_sum += weight[i];
    weight_sum = +weight_sum.toFixed(2);

    if (random_num <= weight_sum) {
      return list[i];
    }
  }
};
