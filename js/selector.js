$(document).ready(function() {
  var a = $('a');
  a.attr('href', 'http://www.naver.com');
  a.html('Naver');

// $('#header h1.title').attr('href','http://www.naver.com');
// $('#header h1.title').html('Naver');

  $('ul li').has('p');
  $('ul li').not('.selected');
  $('ul li').first();
  $('ul li').eq(2);

//fruits class 이름을 갖는 요소를 찾고
//그 중에 selected class 이름을 갖는 요소를 찾는다
//찾은 요소의 css style 을 레드로 정의
$('.fruits').find('.selected').css('color:red');
})
