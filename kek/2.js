// var a = window.width;
  // window.onresize = function(){
  //   if (window.width == a)
  //     return false;
  //   lal.innerHTML += "1" + " ";
  // }

  setInterval(function(){
    lal.innerHTML += window.innerHeight + " " + document.documentElement.clientHeight + " " 
    + document.documentElement.scrollTop + " ";
  }, 5000);
  // setTimeout(window.resizeBy(0, 200), 2000);
  
  // setInterval(function(){
    // if (document.documentElement.clientHeight != window.innerHeight){
      // document.body.style.transform = 'translateY(' + (window.innerHeight - document.documentElement.clientHeight) + 'px)';
      // window.resizeBy(0, document.documentElement.clientHeight - window.innerHeight);
    // }

  // }, 4)
      

  lal.innerHTML += ' ' + document.documentElement.clientHeight;
  // window.onresize = function(){
  //   if (!window.pageYOffset){
  //     lal.innerHTML += ' ' + window.innerHeight;
  //   }
  // }
  






  var bars = document.querySelectorAll('.bar');
  var width = window.innerHeight;
  if (!(featureTest('position', 'sticky', true))){


    window.onload = function(){
      
      Array.prototype.forEach.call(bars, function(bar) {
        sticky(bar);
        bar.onresize = function(e){
          e.preventDefault();
        }
      });
    
    }

    setInterval(function(){
      if (window.innerHeight !== width){
        window.onscroll = null;
        Array.prototype.forEach.call(bars, function(bar) {
          if (bar.getBoundingClientRect().top < 0)
            return;
          sticky(bar);
        });
        width = window.innerHeight;
      }
    }, 4)
  }


  else {
    Array.prototype.forEach.call(bars, function(bar) {
      bar.style.position = 'sticky';
      bar.style.top = 0;

    });
    setInterval(function(){
      lal.innerHTML += window.pageYOffset;
    }, 1000)
  }






  function featureTest( property, value, noPrefixes ) {
    // Thanks Modernizr! https://github.com/phistuck/Modernizr/commit/3fb7217f5f8274e2f11fe6cfeda7cfaf9948a1f5
    var prop = property + ':',
      el = document.createElement( 'test' ),
      mStyle = el.style;

    if( !noPrefixes ) {
      mStyle.cssText = prop + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( value + ';' + prop ) + value + ';';
    } else {
      mStyle.cssText = prop + value;
    }
    return mStyle[ property ].indexOf( value ) !== -1;
  }





  // setInterval(function(){
  //   if (window.innerWidth == width || window.innerHeight == height)
  //     return;
  //   window.onscroll = null;
  //   var bars=document.querySelectorAll('.bar')
  //   Array.prototype.forEach.call(bars, function(bar) {
  //     sticky(bar);
  //   });
  //   width = window.innerWidth;
  //   height = window.innerHeight;
  // }, 4)
    
