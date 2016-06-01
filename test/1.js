!function(){

  if (getComputedStyle(document.querySelector('.header').parentNode).position == 'sticky') // For browsers, that support position: sticky
    return;

  var headers = document.querySelectorAll('.header');  

  for (var i = 0; i < headers.length; i++){
    var currentListener = scrollListenerStickyHeader(headers[i]);
    window.addEventListener('scroll', currentListener);
  }

  var error = 0;
setInterval(function(){
    lal.innerHTML += window.innerHeight + ' ' + document.documentElement.clientHeight + ' ' 
    + document.body.scrollTop + ' ';
  }, 1000);
  window.addEventListener('resize', resizeListenerError);

  function scrollListenerStickyHeader(header){

    var topCoordsOfStickyHeader = header.getBoundingClientRect().top + window.pageYOffset;

    return function(){
      error = (document.documentElement.clientHeight - window.innerHeight > 0) ? 
            (document.documentElement.clientHeight - window.innerHeight) : 0;
            console.log(error);
      if (window.pageYOffset >= topCoordsOfStickyHeader + error){
        header.style.position = 'fixed';
        header.style.top = -error + 'px';

      }
      
      else 
        header.style.position = 'static';
    }

  }

  function resizeListenerError(){
    if (document.body.scrollTop >= 0)
      return;
    
  }

}();

  




