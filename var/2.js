$(function(){
  var destroyer = 0;
  var userAgent = window.navigator.userAgent;
  var topElement = document.getElementById('bar2').getBoundingClientRect().top + window.pageYOffset;
  if (((userAgent.toLowerCase().indexOf('android') > -1 ) || (userAgent.toLowerCase().indexOf('iphone') > -1 )
  || (userAgent.toLowerCase().indexOf('ipad') > -1 ) || (userAgent.toLowerCase().indexOf('ipod') > -1 ))
&& (userAgent.toLowerCase().indexOf('firefox') > -1)){ 
  setInterval(function(){
    if (window.pageYOffset > topElement && !destroyer){
      alert('s');
      $( '#bar1' ).css('display', 'none');
      destroyer = 1;
    }
    else 
      if (window.pageYOffset <= topElement && destroyer){
        $( '#bar1' ).css('display', 'block');
        destroyer = 0;
      }
    // psevdo.innerHTML += $( '#bar2' ).fixedsticky('update').isFixedToTop; 
  }, 20)  
  }  
})
