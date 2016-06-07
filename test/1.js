!function(){
// setInterval(function(){
//     window.addEventListener('resize', resizeListenerError);
//     lal.innerHTML += window.innerHeight + ' ' + document.documentElement.clientHeight + ' '
//     + document.body.scrollTop + ' ' + window.innerWidth + ' ' + document.documentElement.clientWidth;
//   }, 1000);
  // if (['sticky', '-moz-sticky', '-ms-sticky', '-o-sticky'].some(function(elem){
  //   return getComputedStyle(document.querySelector('.header-container')).position == elem;
  // }))
  //   return;
  

  var headers = document.querySelectorAll('.header');  
  var content = document.querySelector('.container-body')
  for (var i = 0; i < headers.length; i++){
    var currentListener = scrollListenerStickyHeader(headers[i]);
    window.addEventListener('scroll', currentListener);
  }

  var error = 0;
  var a  = 0;
  var b = 0;
  var c = 0;
  var d = window.innerWidth;
  var e = 0;
  var width = window.innerWidth;
  


  function scrollListenerStickyHeader(header){


    var topCoordsOfStickyHeader = header.getBoundingClientRect().top + window.pageYOffset;

    return function(){

      if (window.pageYOffset - c  >= topCoordsOfStickyHeader + error){
        header.style.position = 'fixed';
        header.style.top = -error + 'px';
      }
      else 
        header.style.position = 'static';
    }
  }

  function resizeListenerError(){
    if (document.body.scrollTop < 0){
      window.addEventListener('scroll', considerError);
    }
  }

  function considerError(){
    error = (document.documentElement.clientHeight - window.innerHeight > 0) ? 
            (document.documentElement.clientHeight - window.innerHeight) : 0;
  } 
}();

  




