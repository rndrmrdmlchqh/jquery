$(document).ready(function(){
$('input#content').focus(function(){
  console.log('focusing to #content');
});
$('input#content').blur(function(){
  console.log('blur to #content')
});
$('select').change(function(){
  console.log('select value changed')
});

$('input#content').ketdown(function(){
  console.log('keydown');
});
$('input#content').ketup(function(){
  console.log('keyup');

});

$('input#act').click(function(){
  console.log('act button click');

});
$('input#act').hover(function(){
  console.log('act button mouse over');
});

$('input#toggle').click(function(){
  $('p.target').toggle(1000,function(){
    console.log('first it');
});
});
