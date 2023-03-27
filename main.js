const adviceElement = document.getElementById('advice')
const newAdvice = document.getElementById('new')
const share = document.getElementById('sharebtn')
const background = document.getElementById('background');

//how to get a random number in a range beetween 0 and the limit
const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
  };
 
 //getting a random color for a HSL color 
  const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
  
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };
  
  //setting the rando background color
  const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    background.style.backgroundColor = randomColor;
  };

  //getting data to show in our page
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceElement.innerHTML = ` "${data.slip.advice}" `;
        adviceText = `"${data.slip.advice}"`;
        setBackgroundColor();

    })
    .catch(error => {
        console.error(error);
        adviceElement.innerHTML = `Something failed because ${error.message}`
    })
}

//how the button of new advice works
newAdvice.addEventListener("click", getAdvice);

getAdvice();

//how the twittter button works
function shareOnTwitter() {
    const navUrl =
      `https://twitter.com/intent/tweet?text=${adviceText}`;
    window.open(navUrl, '_blank');
  }

share.addEventListener("click", shareOnTwitter)





