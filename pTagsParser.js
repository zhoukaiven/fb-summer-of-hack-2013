var elems = $('p');
var rand = Math.floor(Math.random() * elems.length);
alert(elems.eq(rand).text());
