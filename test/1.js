!function(){

  var headers = document.querySelectorAll('.header');
  
  for (var i = 0; i < headers.length; i++){
    headers[i].parentElement.style.position = 'sticky';
    headers[i].parentElement.style.top = 0;
    window.addEventListener('scroll', scrollListenerStickyHeader(headers[i]));
  }

  function scrollListenerStickyHeader(header){
    if (header.getBoundingClientRect().top <= 0){

    }
  }
}();