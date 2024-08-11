const showbtn = document.querySelector('.icon-show');
const img = document.querySelector('.show-icon');
const amount = document.querySelector('.amount');
const amountIn = document.querySelector('.amount-in');
const amountOut = document.querySelector('.amount-out');

showbtn.addEventListener('click', () => {
  if (amount.textContent === "$200,000.00") {
    amount.textContent = "*****";
    
    amountIn.textContent = "*****";
    
    amountOut.textContent = "*****";
    
    img.src = 'icons img/Show.png';
    
  } else {
    amount.textContent = "$200,000.00";
    
    amountIn.textContent = "Transaction Received From...Of  +$300,000.00 "
    
    amountOut.textContent = "Transfer To...Of   -$100,000.00 "
    
    img.src = 'icons img/hide.png';
  }
});