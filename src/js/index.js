for (i=0;i<61;i++){
  var d = i + 1;
  var dial = d * 6;
  $('.dial').append('<li class="d' + d + '"></li>');
  $('.dial .d' + d).css('transform', 'rotate(' + dial + 'deg)');		
}

for (i=45;i<50;i++){
  var d = i + 1;
  var n = i - 45;
  var marginLeft = -172 - n*16;
  $('.dial .d' + d).css('transform', 'rotate(270deg)');
  $('.dial .d' + d).css('margin-left', marginLeft + 'px');
}

for (i=50;i<55;i++){
  var d = i + 1;
  var n = i - 50;
  var deg = 285 + n*15;
  $('.dial .d' + d).css('transform', 'rotate(' + deg + 'deg)');
}

for (i=55;i<61;i++){
  var d = i + 1;
  var n = i - 55;
  var marginTop = 80 - n*16;
  $('.dial .d' + d).css('transform', 'rotate(0)');
  $('.dial .d' + d).css('margin-top', marginTop + 'px');
}