'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
const answers = [
  '{userName}のいいところは声です。<br>{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
  '{userName}のいいところはまなざしです。<br>{userName}に見つめられた人は、気になって仕方がないでしょう。',
  '{userName}のいいところは情熱です。<br>{userName}の情熱に周りの人は感化されます。',
  '{userName}のいいところは厳しさです。<br>{userName}の厳しさがものごとをいつも成功に導きます。',
  '{userName}のいいところは知識です。<br>博識な{userName}を多くの人が頼りにしています。',
  '{userName}のいいところはユニークさです。<br>{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}のいいところは用心深さです。<br>{userName}の洞察に、多くの人が助けられます。',
  '{userName}のいいところは見た目です。<br>内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
  '{userName}のいいところは決断力です。<br>{userName}がする決断にいつも助けられる人がいます。',
  '{userName}のいいところは思いやりです。<br>{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}のいいところは感受性です。<br>{userName}が感じたことに皆が共感し、わかりあうことができます。',
  '{userName}のいいところは節度です。<br>強引すぎない{userName}の考えに皆が感謝しています。',
  '{userName}のいいところは好奇心です。<br>新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
  '{userName}のいいところは気配りです。<br>{userName}の配慮が多くの人を救っています。',
  '{userName}のいいところはその全てです。<br>ありのままの{userName}自身がいいところなのです。',
  '{userName}のいいところは自制心です。<br>やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
]

userNameInput.onkeydown = (event) => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
};

assessmentButton.onclick = ()=>{//ボタンが押されたとき
  const userName = userNameInput.value;
  if(userName.length === 0){//名前が空の時処理を終了させる
    return;
  }
  //診断表示エリアの作成
  removeAllChildren(resultDivided);
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);


  //ツイートエリアの作成
  //<a href="https://twitter.com/intent/tweet?button_hashtag=いいところ診断&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="診断結果">Tweet #いいところ診断</a><script src="https://platform.twitter.com/widgets.js"></script>
  removeAllChildren(tweetDivided);
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('いいところ診断') + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text',result);
  anchor.innerText = 'Tweet #いいところ診断';
  tweetDivided.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src','https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
}


/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @parem {string} userName ユーザーの名前
 * @return {string} 診断結果
*/
function assessment(userName){
  //名前の全文字のコード番号を取得して足し合わせる
  let sumOfCharCode = 0;
  for(let i=0; i<userName.length ; i++){
    sumOfCharCode += userName.charCodeAt(i);
  }
  //文字のコード番号の合計を解答の数で割って添字の数値を求める
  const index = sumOfCharCode%answers.length;
  let result = answers[index];
  //{userName}をユーザーの名前に置き換える
  result = result.replace(/\{userName\}/g, userName);

  return result;
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





// テストコード
console.assert(
  assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
  '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assert(
  assessment('太郎') === assessment('太郎'),
  '入力が同じ名前なら、同じ診断結果を出力する処理が正しくありません。'
);
