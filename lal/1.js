!function(){

  if (['sticky', '-moz-sticky', '-ms-sticky', '-o-sticky', '-webkit-sticky'].some(function(elem){
    return getComputedStyle(document.querySelector('.header-fullWidth')).position == elem;
  }))
    return;
  
  
  var headers = document.querySelectorAll('.header-fullWidth');  
  var content = document.querySelector('.page-container');

  for (var i = 0; i < headers.length; i++){
    var headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
    headers[i].parentElement.insertBefore(headerContainer, headers[i]);
    headerContainer.appendChild(headers[i]);

    var currentListener = scrollListenerStickyHeader(headers[i]);
    content.addEventListener('scroll', currentListener);
  }

  function scrollListenerStickyHeader(header){

    var topCoordsOfStickyHeader = header.getBoundingClientRect().top + content.scrollTop;

    return function(){

      if (content.scrollTop >= topCoordsOfStickyHeader){
        header.style.position = 'fixed';
      }
      else 
        header.style.position = 'relative';
    }

  }

}();

  




