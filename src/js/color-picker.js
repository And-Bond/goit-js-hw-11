const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const startBtn = document.querySelector("[data-action='start']")
const stopBtn = document.querySelector("[data-action='stop']")
const body = document.querySelector('body')
let timer = null

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function makeColorPicker() {
    const i = randomIntegerFromInterval(0,5)
    body.style.backgroundColor = colors[i]

}


startBtn.addEventListener('click', () =>{
    timer = setInterval(makeColorPicker, 1000)
})

stopBtn.addEventListener('click', stopColorPicker)

function stopColorPicker(){
    clearInterval(timer)
}