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
const cardArea = document.getElementById('cardArea');
const messageArea = document.getElementById('messageArea');
var card1,card2,card3,card4,card5,card6,card7,card8;

var person1 = [];//black0~11,white0~11 1->Serected
var person2 = [];//black0~11,white0~11 1->Serected
for(var i=0;i<24;i++){
  person1.push(0);
  person2.push(0);
}
var countSerected = 0;
var player = [];//black0~11,white0~11 1->Serected




var cardSerect = {
  classReset:function (){
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
  },
  inputOnclickFunc:function (cardList){
    black0.onclick = ()=>{cardList[0] = this.cardButtonOnclick(black0)};
    black1.onclick = ()=>{cardList[1] = this.cardButtonOnclick(black1)};
    black2.onclick = ()=>{cardList[2] = this.cardButtonOnclick(black2)};
    black3.onclick = ()=>{cardList[3] = this.cardButtonOnclick(black3)};
    black4.onclick = ()=>{cardList[4] = this.cardButtonOnclick(black4)};
    black5.onclick = ()=>{cardList[5] = this.cardButtonOnclick(black5)};
    black6.onclick = ()=>{cardList[6] = this.cardButtonOnclick(black6)};
    black7.onclick = ()=>{cardList[7] = this.cardButtonOnclick(black7)};
    black8.onclick = ()=>{cardList[8] = this.cardButtonOnclick(black8)};
    black9.onclick = ()=>{cardList[9] = this.cardButtonOnclick(black9)};
    black10.onclick = ()=>{cardList[10] = this.cardButtonOnclick(black10)};
    black11.onclick = ()=>{cardList[11] = this.cardButtonOnclick(black11)};
    white0.onclick = ()=>{cardList[12] = this.cardButtonOnclick(white0)};
    white1.onclick = ()=>{cardList[13] = this.cardButtonOnclick(white1)};
    white2.onclick = ()=>{cardList[14] = this.cardButtonOnclick(white2)};
    white3.onclick = ()=>{cardList[15] = this.cardButtonOnclick(white3)};
    white4.onclick = ()=>{cardList[16] = this.cardButtonOnclick(white4)};
    white5.onclick = ()=>{cardList[17] = this.cardButtonOnclick(white5)};
    white6.onclick = ()=>{cardList[18] = this.cardButtonOnclick(white6)};
    white7.onclick = ()=>{cardList[19] = this.cardButtonOnclick(white7)};
    white8.onclick = ()=>{cardList[20] = this.cardButtonOnclick(white8)};
    white9.onclick = ()=>{cardList[21] = this.cardButtonOnclick(white9)};
    white10.onclick = ()=>{cardList[22] = this.cardButtonOnclick(white10)};
    white11.onclick = ()=>{cardList[23] = this.cardButtonOnclick(white11)};
  },
  cardButtonOnclick:function (buttonName){
    /**
     * カードボタンが押されたときの処理
     * @param {HTMLElement} buttonName 押されたボタンの名前(？)
     * @return {number} Serectedなら1, Notなら2を返す
    */
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
  },
}

var gamePart = {
  playerCards:[0,0,0,0,0,0,0,0],
  start:function (){
    var count = 0;
    for(var i=0;i<12;i++){
      if(person1[i]===0 && person2[i]===0){
        var num = i;
        var color = 0;
        this.playerCards[count] = new this.makeCardObject(num,color);
        count++;
      }
      if(person1[i+12]===0 && person2[i+12]===0){
        var num = i;
        var color = 1;
        this.playerCards[count] = new this.makeCardObject(num,color);
        count++;
      }
    }


    this.cardOutput();
    var message = 'プレイヤー手札:';
    for(var i=0;i<8;i++){
      message += ' ' + this.playerCards[i].num;
    }
    console.log(message);
    this.inputOnclickFunc();
  },
  makeCardObject:function (_num, _color) {
            this.element = null;
            this.num = _num;
            this.color = _color;//0->black 1->white
  },
  cardOutput:function (){
    const h2 = document.createElement('h2');
    h2.innerText = 'アタック！！！';
    cardArea.appendChild(h2);
    var message = 'プレイヤーの手持ち:';
    for(var i=0;i<8;i++){
      const button = document.createElement('button');
      if(this.playerCards[i].color===0){
        button.className = 'blackNot';
      }else{
        button.className = 'whiteNot';
      }
      cardArea.appendChild(button);
      this.playerCards[i].element = button;

    }
  },
  cardButtonOnclick:function (num){
    var status = 0;
    switch (this.playerCards[num].element.className){
      case 'blackNot':this.playerCards[num].element.className = 'blackSerected';
                      status = 1;
                      break;
      case 'whiteNot':this.playerCards[num].element.className = 'whiteSerected';
                      status = 1;
                      break;
      case 'blackSerected':this.playerCards[num].element.className = 'blackNot';
                      break;
      case 'whiteSerected':this.playerCards[num].element.className = 'whiteNot';
                      break;
      default:console.log('Error Not<=>Serected変換 ' + this.playerCards[num].element.id);
    }
    for(var i=0;i<8;i++){
      if(i != num){
        if(this.playerCards[i].color === 0){
          this.playerCards[i].element.className = 'blackNot';
        }else{
          this.playerCards[i].element.className = 'whiteNot';
        }
      }
    }
    removeAllChildren(messageArea);
    if(status===1){
      const text = document.createElement('h4');
      text.innerText = 'このカードの数字は？(半角数字で入力)';
      messageArea.appendChild(text);
      const input = document.createElement('input');
      input.setAttribute('type','text');
      input.setAttribute('maxlength','2');
      messageArea.appendChild(input);
      const enter = document.createElement('button');
      enter.innerText = '決定';
      messageArea.appendChild(enter);
      const message = document.createElement('p');
      messageArea.appendChild(message);
      enter.onclick = ()=>{
        const guess = input.value;
        if(guess.length === 0){//空の時処理を終了させる
          return;
        }
        if(this.playerCards[num].num == guess){
          this.playerCards[num].element.innerText = this.playerCards[num].num;
          message.innerText = 'アタック成功！！';
          message.className = 'none';
          this.playerCards[num].element.onclick = ()=>{
            for(var i=0;i<8;i++){
              if(this.playerCards[i].color === 0){
                this.playerCards[i].element.className = 'blackNot';
              }else{
                this.playerCards[i].element.className = 'whiteNot';
              }
              removeAllChildren(messageArea);
            }
          return;}
        }else{
          input.value = null;
          message.innerText = 'アタック失敗！！';
          message.className = 'error';
        }
      }
      input.onkeydown = (event) => {
        if (event.key === 'Enter') {
          enter.onclick();
        }
      };
    }
    return;
  },
  inputOnclickFunc:function(){
    this.playerCards[0].element.onclick = ()=>{this.cardButtonOnclick(0);};
    this.playerCards[1].element.onclick = ()=>{this.cardButtonOnclick(1);};
    this.playerCards[2].element.onclick = ()=>{this.cardButtonOnclick(2);};
    this.playerCards[3].element.onclick = ()=>{this.cardButtonOnclick(3);};
    this.playerCards[4].element.onclick = ()=>{this.cardButtonOnclick(4);};
    this.playerCards[5].element.onclick = ()=>{this.cardButtonOnclick(5);};
    this.playerCards[6].element.onclick = ()=>{this.cardButtonOnclick(6);};
    this.playerCards[7].element.onclick = ()=>{this.cardButtonOnclick(7);};
  },
  clear:function(){
    removeAllChildren(cardArea);
    removeAllChildren(messageArea);
  }
}



cardSerect.classReset();
cardSerect.inputOnclickFunc(person1);
enterButton.onclick = ()=>{
  if(countSerected===8){
    playerName.innerText = '２人目のプレイヤー';
    message.innerText = '２人目のプレイヤーに端末を渡してください';
    cardSerect.classReset();
    cardSerect.inputOnclickFunc(person2);
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
            alert('重複がありました。リロードして１人目のプレイヤーの入力からやり直してください');
            removeAllChildren(gameArea);
            break;
          }
        }
        removeAllChildren(cardSerectArea);
        gamePart.start();
      }else{
        count.className = 'error';
      }
    }
  }else{
    count.className = 'error';
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
