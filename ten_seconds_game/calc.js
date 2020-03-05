var startTime=null;
var seconds=null;
var score = {
  fir:null,
  sec:null,
  thr:null
};
var person = {
  fir:false,
  sec:false,
  thr:false
};

function start(){
  comment.innerText = null;
  displayArea.innerText = '10秒経ったと思ったらスペースキーorエンターキーを押そう！';
  startTime = new Date();
  console.log('スタートしました');
  document.body.onkeypress = stop;
}

function stop(){
  var nowTime = new Date;
  seconds = (nowTime-startTime)/1000;
  if(9.9<=seconds && seconds<=10.1){
    displayArea.innerText = seconds + '秒でした！完璧！！！！';
  }else if(9.5<=seconds && seconds<=10.5){
    displayArea.innerText = seconds + '秒でした！すごい！！！';
  }else if(9<=seconds && seconds<=11){
    displayArea.innerText = seconds + '秒でした！おしい！';
  }else{
    displayArea.innerText = seconds + '秒でした！あとちょっと…';
  }
  comment.innerText = 'キーを押してゲーム開始！！';

  ranking();

  document.body.onkeypress = start;
}

function ranking(){
  var changed = null;
  var difNew = absoluteValue(seconds-10);

  if(difNew<absoluteValue(score.fir-10) || score.fir==null){
    score.thr = score.sec;
    person.thr = person.sec;
    score.sec = score.fir;
    person.sec = person.fir;
    score.fir = seconds;
    if(score.fir != null){
      person.fir = confirm('プレイヤーがAさんならOK, Bさんならキャンセルを押してください');
    }
    changed = 1;
  }else if(difNew<absoluteValue(score.sec-10) || score.sec==null){
    score.thr = score.sec;
    person.thr = person.sec;
    score.sec = seconds;
    person.sec = confirm('AさんならOK, Bさんならキャンセルを押してください');
    changed = 2;
  }else if(difNew<absoluteValue(score.thr-10) || score.thr==null){
    score.thr = seconds;
    person.thr = confirm('AさんならOK, Bさんならキャンセルを押してください');
    changed = 3;
  }else{
    changed = 4;
  }

  if(score.fir != null && changed==1){
    if(person.fir==true){
      firScore.innerText = 'A ' + score.fir + '(±' + absoluteValue(score.fir-10) + ')';
    }else{
      firScore.innerText = 'B ' + score.fir + '(±' + absoluteValue(score.fir-10) + ')';
    }
  }
  if(score.sec != null  &&  changed<=2){
    if(person.sec==true){
      secScore.innerText = 'A ' + score.sec + '(±' + absoluteValue(score.sec-10) + ')';
    }else{
      secScore.innerText = 'B ' + score.sec + '(±' + absoluteValue(score.sec-10) + ')';
    }
  }
  if(score.thr != null  &&  changed<=3){
    if(person.thr==true){
      thrScore.innerText = 'A ' + score.thr + '(±' + absoluteValue(score.thr-10) + ')';
    }else{
      thrScore.innerText = 'B ' + score.thr + '(±' + absoluteValue(score.thr-10) + ')';
    }
  }
}

function absoluteValue(n){
  if(n<0){
    n *= -1;
  }
  n -= n%0.001;
  return n;
}

document.body.onkeypress = start;
