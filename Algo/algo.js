const black0 = document.getElementById('black0');
const black1 = document.getElementById('black1');
const black2 = document.getElementById('black2');
const black3 = document.getElementById('black3');
const black4 = document.getElementById('black4');
const black5 = document.getElementById('black5');
const black6 = document.getElementById('black6');
const black7 = document.getElementById('black7');
const black8 = document.getElementById('black8');
const black9 = document.getElementById('black9');
const black10 = document.getElementById('black10');
const black11 = document.getElementById('black11');
const white0 = document.getElementById('white0');
const white1 = document.getElementById('white1');
const white2 = document.getElementById('white2');
const white3 = document.getElementById('white3');
const white4 = document.getElementById('white4');
const white5 = document.getElementById('white5');
const white6 = document.getElementById('white6');
const white7 = document.getElementById('white7');
const white8 = document.getElementById('white8');
const white9 = document.getElementById('white9');
const white10 = document.getElementById('white10');
const white11 = document.getElementById('white11');
const enterButton = document.getElementById('enter');
const gameArea = document.getElementById('gameArea');
var card1,card2,card3,card4,card5,card6,card7,card8;

var person1 = [];//black0~11,white0~11 1->Serected
var person2 = [];//black0~11,white0~11 1->Serected
for(var i=0;i<24;i++){
  person1.push(0);
  person2.push(0);
}
var countSerected = 0;
var player = [];//black0~11,white0~11 1->Serected
var playerCards=[];

function addCard(_num, _color,_status) {
          this.num = _num;
          this.color = _color;//0->black 1->white
          this.status = _status;//0->close 1->open
}









resetCardButtonClass();
serectCardList(person1);
enterButton.onclick = ()=>{
  if(countSerected===8){
    player.innerText = '２人目のプレイヤー';
    message.innerText = '２人目のプレイヤーに端末を渡してください';
    resetCardButtonClass();
    serectCardList(person2);
    enterButton.onclick = ()=>{
      if(countSerected===8){
        var message = 'person1:';
        var message2 = 'person2:';
        for(var i=0;i<24;i++){
          message += ' ' + person1[i];
          message2 += ' ' + person2[i];
        }
        console.log(message);
        console.log(message2);
        for(var i=0;i<24;i++){
          if(person1[i]===1 && person2[i]===1){
            alert('Error 重複がありました。リロードして１人目のプレイヤーの入力からやり直してください');
            break;
          }
        }
        removeAllChildren(cardSerectArea);
        gamePart();
      }else{
        count.className = 'error';
      }
    }
  }else{
    count.className = 'error';
  }
}


function gamePart(){
  var count = 0;
  for(var i=0;i<12;i++){
    if(person1[i]===0 && person2[i]===0){
      var num = i;
      var color = 0;
      var status = 0;
      playerCards[count] = new addCard(num,color,status);
      count++;
    }
    if(person1[i+12]===0 && person2[i+12]===0){
      var num = i;
      var color = 1;
      var status = 0;
      playerCards[count] = new addCard(num,color,status);
      count++;
    }
  }

  cardOutput();


}


function cardOutput(){
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  gameArea.appendChild(table);
  table.appendChild(tr);
  var message = 'プレイヤーの手持ち:';
  for(var i=0;i<8;i++){
    const th = document.createElement('th');
    tr.appendChild(th);
    const button = document.createElement('button');
    if(playerCards[i].color===0){
      button.className = 'blackNot';
    }else{
      button.className = 'whiteNot';
    }
    if(playerCards[i].status === 1){
      button.innerText = playerCards[i].num;
    }
    th.appendChild(button);
    switch (i) {
      case 0:card1 = button;
             break;
      case 1:card2 = button;
             break;
      case 2:card3 = button;
             break;
      case 3:card4 = button;
             break;
      case 4:card5 = button;
             break;
      case 5:card6 = button;
             break;
      case 6:card7 = button;
             break;
      case 7:card8 = button;
             break;
    }

    message += ' ' + playerCards[i].num;
  }

  console.log(message);
}


function resetCardButtonClass(){
  countSerected = 0;
  black0.className = 'blackNot';
  black1.className = 'blackNot';
  black2.className = 'blackNot';
  black3.className = 'blackNot';
  black4.className = 'blackNot';
  black5.className = 'blackNot';
  black6.className = 'blackNot';
  black7.className = 'blackNot';
  black8.className = 'blackNot';
  black9.className = 'blackNot';
  black10.className = 'blackNot';
  black11.className = 'blackNot';
  white0.className = 'whiteNot';
  white1.className = 'whiteNot';
  white2.className = 'whiteNot';
  white3.className = 'whiteNot';
  white4.className = 'whiteNot';
  white5.className = 'whiteNot';
  white6.className = 'whiteNot';
  white7.className = 'whiteNot';
  white8.className = 'whiteNot';
  white9.className = 'whiteNot';
  white10.className = 'whiteNot';
  white11.className = 'whiteNot';
  return;
}

function serectCardList(cardList){
  black0.onclick = ()=>{cardList[0] = buttonOnClick(black0)};
  black1.onclick = ()=>{cardList[1] = buttonOnClick(black1)};
  black2.onclick = ()=>{cardList[2] = buttonOnClick(black2)};
  black3.onclick = ()=>{cardList[3] = buttonOnClick(black3)};
  black4.onclick = ()=>{cardList[4] = buttonOnClick(black4)};
  black5.onclick = ()=>{cardList[5] = buttonOnClick(black5)};
  black6.onclick = ()=>{cardList[6] = buttonOnClick(black6)};
  black7.onclick = ()=>{cardList[7] = buttonOnClick(black7)};
  black8.onclick = ()=>{cardList[8] = buttonOnClick(black8)};
  black9.onclick = ()=>{cardList[9] = buttonOnClick(black9)};
  black10.onclick = ()=>{cardList[10] = buttonOnClick(black10)};
  black11.onclick = ()=>{cardList[11] = buttonOnClick(black11)};
  white0.onclick = ()=>{cardList[12] = buttonOnClick(white0)};
  white1.onclick = ()=>{cardList[13] = buttonOnClick(white1)};
  white2.onclick = ()=>{cardList[14] = buttonOnClick(white2)};
  white3.onclick = ()=>{cardList[15] = buttonOnClick(white3)};
  white4.onclick = ()=>{cardList[16] = buttonOnClick(white4)};
  white5.onclick = ()=>{cardList[17] = buttonOnClick(white5)};
  white6.onclick = ()=>{cardList[18] = buttonOnClick(white6)};
  white7.onclick = ()=>{cardList[19] = buttonOnClick(white7)};
  white8.onclick = ()=>{cardList[20] = buttonOnClick(white8)};
  white9.onclick = ()=>{cardList[21] = buttonOnClick(white9)};
  white10.onclick = ()=>{cardList[22] = buttonOnClick(white10)};
  white11.onclick = ()=>{cardList[23] = buttonOnClick(white11)};
}

/**
 * カードボタンが押されたときの処理
 * @param {HTMLElement} buttonName 押されたボタンの名前(？)
 * @return {number} Serectedなら1, Notなら2を返す
*/
function buttonOnClick(buttonName){
  count.className = 'none';
  switch (buttonName.className) {
    case 'blackNot':buttonName.className = 'blackSerected';
                    countSerected++;
                    break;
    case 'blackSerected':buttonName.className = 'blackNot';
                    countSerected--;
                    break;
    case 'whiteNot':buttonName.className = 'whiteSerected';
                    countSerected++;
                    break;
    case 'whiteSerected':buttonName.className = 'whiteNot';
                    countSerected--;
                    break;
    default:console.log('Error Not<=>Serected変換 ' + buttonName.id);
  }
  if(countSerected===0){
    count.innerText = '手持ちのカードを選択してください';
  }else if(countSerected===8){
    count.innerText = '選択したカードが合っているか確認して決定を押してください';
  }else if(countSerected<8){
    count.innerText = 'あと'+(8-countSerected)+'枚選択してください';
  }else{
    count.innerText = (countSerected-8)+'枚オーバーしています。確認し直してください';
  }

  if(buttonName.className=='blackSerected' || buttonName.className=='whiteSerected'){
    return 1;
  }else{
    return 0;
  }
}

/**
 * 指定した要素の子要素をすべて削除する
 * @param {HTMLElement} element HTMLの要素
*/
function removeAllChildren(element){
  while(element.firstChild){//子要素があるときこれを削除
    element.removeChild(element.firstChild);
  }
}
