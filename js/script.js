
$(document).ready(function() {
  // $('p').html("안녕! JQuery");
  var result = $('p').html();
  console.log(result);


$('a').click(function(){
  alert('구글로 이동합니다');
  event.preventDefault();
});

// GET 방식으로 http 통신을 하는 메소드
$('a.ajax').click(function(){
  alert('Hello')
  $.get('ajax.html',myCallBack);
});

function myCallBack(text){
  console.log("callback 실행!");
}
  //$('h1').addClass('red big');
  //$('h1').removeClass('big');
  //
  //

  $('#btn').click(function() {
    if ($('h1').css('display') != 'none'){
      $('h1').hide('slow');
    }else {
      $('h1').show('solw');
    }
  });
  // $('#btn').click(function()){
  // if ( $('h1').hasclass('big') ) {
  //
  //
//$('h1').removeClass('big');
  // $(this).removeClass('big');
  // }else {
    // $('h1').addClass('big');
  // }
// });
});
