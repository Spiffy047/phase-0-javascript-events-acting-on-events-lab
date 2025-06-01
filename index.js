// Your code here
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); 
  const left = parseInt(leftNumbers, 10);

  
  const dodgerWidth = 20; 
  const gameWidth = 400; 

  if (left < gameWidth - dodgerWidth) { 
    dodger.style.left = `${left + 1}px`; 
  }
}
