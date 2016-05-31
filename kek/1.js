function sticky(el, top) {
  var requiredOriginalStyles = ['position', 'top', 'left', 'z-index'];
  var error = 0;
  var requiredTop = 0;
  var originalRect = calcRect(el);
  var styles = {
    position: 'fixed',
    top: requiredTop + 'px',
    // left: originalRect.left + 'px',
    // width: originalRect.width + 'px',
    'z-index': 9999
  }
  var originalStyles = {}
  requiredOriginalStyles.forEach(function(key) {
    originalStyles[key] = el.style[key];
  });

  var onscroll;
  if (window.onscroll) {
    onscroll = window.onscroll;
  }
  var height = document.documentElement.clientHeight;
  // window.onresize = function(e){
  //   if (!getWindowScroll().top && (height == document.documentElement.clientHeight)){
  //     alert('asdf');
  //     e.preventDefault();
  //     e.stopPropagation();
  //     return false;
  //   }
  // }
  // var scrolling = false;
  var depender;
  window.onresize = window.onscroll = function(event) {
    error = (document.documentElement.clientHeight - window.innerHeight > 0) ? (document.documentElement.clientHeight - window.innerHeight) : 0;
    // error = 0;
    if (getWindowScroll().top > originalRect.top + error) {

      // styles.top = document.documentElement.clientHeight - window.innerHeight + 'px';
      console.log(styles.top);
      if (el.nextElementSibling) 
        el.nextElementSibling.style.marginTop = originalRect.height + 'px';
      for (key in styles) {
        el.style[key] = styles[key];
        // el.style.top = getWindowScroll().top + 'px';
        // el.style.top = -error + 'px';
        // console.log(el.style.position);
        // console.log(el.style.top);
        // console.log(el.style.left);
         // el.style.top = window.pageYOffset + 'px';
      }
      // scrolling = true;
    } 
    else {
      if (el.nextElementSibling)
        el.nextElementSibling.style.marginTop = 0;
      for (key in originalStyles) {
        el.style[key] = originalStyles[key];
      }
      // scrolling = false;
    }
  //   var lowerleft = [window.pageXOffset,(window.pageYOffset+window.innerHeight)];
  // var lowerright = [(lowerleft[0] + window.innerWidth),lowerleft[1]];
  // var zoomFactor = window.innerWidth/document.documentElement.clientWidth;

  // el.style.width = lowerright[0] - lowerleft[0] + 'px';
  // el.style.height = parseInt(window.innerHeight/10) + 'px';
  // el.style.left = lowerleft[0] + 'px';
  // el.style.top = lowerleft[1]-el.offsetHeight + 'px';
  // el.style.fontSize = parseInt(zoomFactor*60) + 'px';
    onscroll && onscroll(event)
  }
}

  function calcRect(el) {
    var rect = el.getBoundingClientRect();
    var windowScroll = getWindowScroll()
    return {
      left: rect.left + windowScroll.left,
      top: rect.top + windowScroll.top,
      width: rect.width,
      height: rect.height
    }
  }  

  function getWindowScroll() {
    return {
      top: window.pageYOffset || document.documentElement.scrollTop,
      left: window.pageXOffset || document.documentElement.scrollLeft
    }
  }

