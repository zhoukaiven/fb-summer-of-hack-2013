// Retrieve a random word in a given element
jQuery.fn.getWord = function(mode) {

  // split paragraph into sentences
  var text = $(this).text();
  var words = text.replace(/\n/g, " ").split(/[^A-Za-z'-]/);

  // sort by length
  words.sort(function(a, b) {
    return a.length - b.length;
  });

  // return num words weighted based on difficulty
  var weight = [];

  if (mode == 'medium') {
    for (var i = 0; i < words.length; i++) {
      weight.push(1);
    }
  } else if (mode == 'easy') {
    words.sort(function(a,b) {
      return a.length < b.length;
    });
    for (var i = 0; i < words.length; i++) {
      weight.push(i*10);
    }
  } else if (mode == 'hard') {
    words.sort(function(a,b) {
      return a.length < b.length;
    });
    for (var i = words.length - 1; i >= 0; i--) {
      weight.push(i*10);
    }
  }

  var result = getRandomItem(words, weight);

  return result;
};

// Retrieve a random sentence in a given element
jQuery.fn.getSentence = function(mode) {

  // split paragraph into sentences
  var text = $(this).text();
  var sentences = text.replace(/\n/g, "").split(/[.?!]+/);

  // sort by length
  sentences.sort(function(a, b) {
    return a.length - b.length;
  });

  // return num sentences weighted based on difficulty
  var weight = [];

  if (mode == 'medium') {
    for (var i = 0; i < sentences.length; i++) {
      weight.push(1);
    }
  } else if (mode == 'easy') {
    sentences.sort(function(a,b) {
      return a.length < b.length;
    });
    for (var i = 0; i < sentences.length; i++) {
      weight.push(i*10);
    }
  } else if (mode == 'hard') {
    sentences.sort(function(a,b) {
      return a.length < b.length;
    });
    for (var i = sentences.length - 1; i >= 0; i--) {
      weight.push(i*10);
    }
  }

  var result = getRandomItem(sentences, weight);

  return result;
};

// Get weighted random element
function getRandomItem(list, weight) {
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
}
