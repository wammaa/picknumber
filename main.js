let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chances = 20;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history=[];

playButton.addEventListener('click',play);
resetButton.addEventListener('click',reset);
userInput.addEventListener('focus',function(){
  this.value='';
})
function pickRandomNum(){
  computerNum = Math.floor(Math.random()*500)+1;
  console.log('정답',computerNum);
}

function play(){
  let userValue = userInput.value;
  if(userValue < 1 || userValue > 500){
    resultArea.textContent = '잘못된 입력입니다. 1부터 500사이의 숫자를 입력해주세요';
    return;
  }
  if(history.includes(userValue)){
    resultArea.textContent = '이미 입력한 숫자입니다';
    return;
  }
  chances --;
  chanceArea.textContent = `남은 기회:${chances}회`;
  if(userValue < computerNum){
    resultArea.textContent = 'UP!!';
  }else if(userValue > computerNum){
    resultArea.textContent = 'DOWN!!';
  }else{
    resultArea.textContent = '지갑을 꺼내시오';
    gameOver = true;
  }
  history.push(userValue);
  if(chances < 1){
    gameOver = true;
  }
  if(gameOver === true){
    playButton.disabled = true;
  }
  
}

function reset(){
  userInput.value = '';
  pickRandomNum();
  resultArea.textContent = '결과';
  chances=20;
  playButton.disabled = false;
  chances.textContent = `남은 횟수:${chances}회 남았습니다`;
}

pickRandomNum();