$('#show').click(function(){
  $('p').show();
});
$('#hide').click(function(){
  $('p').hide();
});

$('#slideup').click(function(){
  $('p').slideUp(500);
});
$('#slidedown').click(function(){
  $('p').slideDown(1000);
});

$('#fadein').click(function(){
  $('p').fadeIn(1000);
});
$('#fadeout').click(function(){
  $('p').fadeOut(1000);
});

$('#toggle').click(function(){
  $('p').toggle("slow");
});
$('#slidetoggle').click(function(){
  $('p').slidetoggle("fast");
});
$('#fadetoggle').click(function(){
  $('p').fadetoggle("slow","linear");
});
