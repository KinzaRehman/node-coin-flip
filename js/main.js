document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){
  const userinput = document.querySelector("#coinFlip").value;
  // Same logic as the old /api route in server.js, now run in the browser
  // so the app works as a static site on GitHub Pages with no server.
  const flipCoin = ['Heads', 'Tails'];
  const randomFlip = flipCoin[Math.floor(Math.random() * flipCoin.length)];
  const winOrLose = userinput == randomFlip ? 'Won' : 'Lost';
  document.querySelector("#clientResult").textContent = userinput
  document.querySelector("#computerResult").textContent = `The flip was ${randomFlip}`
  document.querySelector("#winLose").textContent = `You ${winOrLose}!`
}
