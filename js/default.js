var i = Math.floor(0);
for(i=0;i>-1;i++){
var result = window.confirm('じゅんびOK');
if(result==false){break;}
var number = Math.floor(Math.random()*3);

var life = 10;

var answer = window.prompt("数あてゲーム。0から2の数字を入力して下さい。","""");

var message;
if(number === answer){
  document.write("当たり。")
  document.write("残機は" + life + "です。");
  }
else if(answer < number){
  document.write("残念、もっと大きいです。");
  life--;
  document.write("残機は" + life + "です。");
  }
  else if(number < answer){
  document.write("残念、もっと小さいです。");
  life--;
  document.write("残機は" + life + "です。");
  }
else{
 document.write("0から2の数字を入力して下さい。");
 }


}
