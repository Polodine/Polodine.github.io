$(function(){
      var destroyer = 0;
      var topElement = document.getElementById('bar2').getBoundingClientRect().top + window.pageYOffset;
      if (true){ 
      setInterval(function(){
        if (window.pageYOffset > topElement && !destroyer){
          // alert('lal');
          $( '#bar1' ).css('display', 'none');
          destroyer = 1;
        }
        else 
          if (window.pageYOffset <= topElement && destroyer){
            $( '#bar1' ).css('display', 'block');
            destroyer = 0;
          }
        // psevdo.innerHTML += $( '#bar2' ).fixedsticky('update').isFixedToTop; 
      }, 2)  
    }
})
