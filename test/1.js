!function(){

  var headers = document.getElementsByClassName('.header');

  for (var i = 0; i < headers.length; i++){
    window.addEventListener('scroll', scrollListenerStickyHeader(headers[i]));
  }

  function scrollListenerStickyHeader(header){

  }
}();