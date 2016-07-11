var i = Math.floor(0);
var number = Math.floor(Math.random()*50);
var life = 10;
for(i=0;i>-1;i++){
var result = window.confirm('じゅんびOK');
if(result == false){break;}

var answer = parseInt(window.prompt('数あてゲーム。0から49の数字を入力して下さい。'));

var message;
if(number === answer){
  document.write("当たり。");
  document.write("残機は" + life + "です。");
  document.write('<p></p>');
  break;
  }
else if(answer < number){
  document.write(answer);
  document.write("残念、もっと大きいです。");
  life--;
  document.write("残機は" + life + "です。");
  document.write('<p></p>');
  }
  else if(number < answer){
  document.write(answer);
  document.write("残念、もっと小さいです。");
  life--;
  document.write("残機は" + life + "です。");
  document.write('<p></p>');
  }
else{
 document.write("0から2の数字を入力して下さい。");
 }
if(life === 0)
{ document.write(がめおヴぇｒ);
  break;
}

}
