
    const showbtn = document.querySelector('.icon-show');
    
    const img = document.querySelector('.show-icon');
    
    const amount = document.querySelector('.amount');
    
    showbtn.addEventListener('click', ( ) => {
      if (amount.innerHTML=="&dollar; 200,000.00") {
        amount.innerHTML = "*****";
        
        img.src =' /icons img/Show.png';
        
        
      } else {
        amount.innerHTML = "&dollar; 200,000.00";
        
        img.src =' /icons img/hide.png';
        
      }
      
      
    });