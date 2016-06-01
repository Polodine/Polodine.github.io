!function(){

  if (getComputedStyle(document.querySelector('.header').parentNode).position == "sticky")
    return;

  var headers = document.querySelectorAll('.header');  

  for (var i = 0; i < headers.length; i++){
    var currentListener = scrollListenerStickyHeader(headers[i]);
    window.addEventListener('scroll', currentListener);
  }

  setInterval(function(){
    lal.innerHTML += window.innerHeight + " " + document.documentElement.clientHeight + " " 
    + document.documentElement.scrollTop + " ";
  }, 3000);

  function scrollListenerStickyHeader(header){

    var topCoordsOfStickyHeader = header.getBoundingClientRect().top + window.pageYOffset;
    var error = 0;

    return function(){
      error = (document.documentElement.clientHeight - window.innerHeight > 0) ? 
              (document.documentElement.clientHeight - window.innerHeight) : 0;
      if (window.pageYOffset >= topCoordsOfStickyHeader + error){
        header.style.position = "fixed";
        header.style.top = 0;
      }
      else 
        header.style.position = "static";
    }

  }

}();
