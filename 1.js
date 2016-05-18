! function(name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof define == 'function') define(definition);
  else this[name] = definition();
}('sticky', function() {

  return function sticky(el, top) {
    var userAgent = window.navigator.userAgent;
    if (((userAgent.toLowerCase().indexOf('android') > -1 ) || (userAgent.toLowerCase().indexOf('iphone') > -1 )
      || (userAgent.toLowerCase().indexOf('ipad') > -1 ) || (userAgent.toLowerCase().indexOf('ipod') > -1 ))
    && (userAgent.toLowerCase().indexOf('firefox') > -1)){                                            
      
      if (document.readyState === "complete"){
        // alert('complete');
        stickyInTimer();
      }
      else 
      window.addEventListener('load', function(){
        // alert('andro');
        stickyInTimer();
      });
    }
    
    else {
      // alert('not');
      stickyInTimer(); 
    }

    function stickyInTimer(){
      // b = 0;
      // setInterval(function(){
      //   psevdo.innerHTML += el.getBoundingClientRect().top.toFixed(0) + " ";
      //   b++;
      //   if (b == 40)
      //   {
      //     psevdo.innerHTML += '<br>';
      //     b = 0;
      //   }
      // }, 500)

      var requiredOriginalStyles = ['position', 'left', 'top', 'z-index'];

      var requiredTop = top || 0;
      var originalRect = calcRect(el);
      var styles = {
        position: 'fixed',
        left: originalRect.left + 'px',
        top: requiredTop+ 'px',
        'z-index': 9999
      }
      var originalStyles = {}
      requiredOriginalStyles.forEach(function(key) {
        originalStyles[key] = el.style[key];
      });
      b = 0;
      if ((userAgent.toLowerCase().indexOf('chrome') > -1 )
      || (userAgent.toLowerCase().indexOf('firefox') > -1)
      )
      {
        setInterval(function(){
            // psevdo.innerHTML += el.getBoundingClientRect().top + " ";
            // b++;
            // if (b == 40){
            //   psevdo.innerHTML += '<br>';
            //   b = 0;}
          // if ((el.getBoundingClientRect().top <= 0) && (el.style.position == "")) 
          if ((getWindowScroll().top > originalRect.top - requiredTop) && (el.style.position == ""))
          {
            for (key in styles) {
              el.style[key] = styles[key];
            }
            if (el.nextElementSibling){
              el.nextElementSibling.style.marginTop = originalRect.height + "px";
            }
          } 
          // else  if ((getWindowScroll().top < originalRect.top - requiredTop) && (el.style.position == "fixed"))
          else if ((getWindowScroll().top <= originalRect.top - requiredTop) && (el.style.position == "fixed"))
          {
            for (key in originalStyles) {
              el.style[key] = originalStyles[key];
            }
            if (el.nextElementSibling && el.nextElementSibling.style.marginTop)
              el.nextElementSibling.style.marginTop = 0;
          }
        }, 20)
      }

      else {
        var a;
        if (window.onscroll) {
          a = window.onscroll;
        }

        window.onscroll = function(event) {
          if (getWindowScroll().top > originalRect.top - requiredTop) {
            for (key in styles) {
              el.style[key] = styles[key];
            }
            if (el.nextElementSibling){
              el.nextElementSibling.style.marginTop = originalRect.height + "px";
            }
          } else  {
            for (key in originalStyles) {
              el.style[key] = originalStyles[key];
            }
            if (el.nextElementSibling && el.nextElementSibling.style.marginTop)
              el.nextElementSibling.style.marginTop = 0;
          }
          a && a(event)
        }
      }
    }
  }

  function calcRect(el) {
    var rect = el.getBoundingClientRect();
    var windowScroll = getWindowScroll();
    return {
      left: rect.left + windowScroll.left,
      top: rect.top + windowScroll.top,
      height: rect.height
    }
  }

  function getWindowScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft,
      top: window.pageYOffset || document.documentElement.scrollTop
    }
  }

}); 
