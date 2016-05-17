! function(name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof define == 'function') define(definition);
  else this[name] = definition();
}('sticky', function() {

  return function sticky(el, top) {
    var userAgent = window.navigator.userAgent;
    if ((userAgent.toLowerCase().indexOf('android') > -1 )
    && (userAgent.toLowerCase().indexOf('firefox') > -1)){
      
      if (document.readyState === "complete"){
        alert('complete');
        stickyIn();
      }
      else window.onload = function(){
        alert('andro');
        stickyIn();
      }
      
    }

    else {
      alert('not');
      stickyIn();
    }
    function stickyIn(){
      var requiredOriginalStyles = ['position', 'left', 'top', 'z-index'];

      var requiredTop = top || 0;
      var originalRect = calcRect(el);
      var styles = {
        position: 'fixed',
        left: originalRect.left + 'px',
        top: requiredTop + 'px',
        'z-index': 9999
      }
      var originalStyles = {}
      requiredOriginalStyles.forEach(function(key) {
        originalStyles[key] = el.style[key];
      });

      // var a;

      // if (a) {
      //   a = window.onscroll;
      // }
      
      setInterval(function(){
        if (getWindowScroll().top > originalRect.top - requiredTop) {
          for (key in styles) {
            el.style[key] = styles[key];
          }
        } else {
          for (key in originalStyles) {
            el.style[key] = originalStyles[key];
          }
        }
        // a && a(event)
      }, 20)
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
