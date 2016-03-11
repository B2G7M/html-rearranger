var $h1Above = $('<h1>');
var $h1Below = $('<h1>');
var $ulA = $('<ul>');
var $ulB = $('<ul>');

$h1Above.html('Below ground veggies');
$h1Below.html('Above ground veggies');

$('body').append($h1Above);
$('body').append($ulA);

$('body').append($h1Below);
$('body').append($ulB);

$('ul li').each(function() {
  if($(this).hasClass('above')){
    $ulA.append($(this))
  } else {
    $ulB.append($(this))
  }
});

