
function calculateLove() {
  const yourName = document.getElementById('yourName').value.toLowerCase();
  const partnerName = document.getElementById('partnerName').value.toLowerCase();

  if (partnerName === "prince" || partnerName === "pushkar" || partnerName === "prince kumar" || partnerName === "pushkar kumar" || partnerName === "prince paswan" || partnerName === "pushkar paswan") {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Love Score:101%`;
  } 
    else {
    let loveScore = 0;

    for (let i = 0; i < yourName.length; i++) {
      for (let n = 0; n < partnerName.length; n++) {
        loveScore += (yourName.charCodeAt(i) - 96) * (partnerName.charCodeAt(n) - 96);
      }
    }

    // Mod the loveScore to get a value between 0 and 100
    loveScore = loveScore % 101;

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Love Score: ${loveScore}%`;
  }


}

