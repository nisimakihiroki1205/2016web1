var i = Math.floor(0);
for(i=0;i>-1;i++){
var result = window.confirm('じゅんびOK');
if(result==false){break;}
var number = Math.floor(Math.random()*3);

var life = 10;

var answer = parseInt(window.prompt('数あてゲーム。0から2の数字を入力して下さい。'));

var message;
if(number === answer){
  document.write("当たり。")
  }
else if(answer < number){
  document.write("残念、もっと大きいです。");
  }
  else if(number < answer){
  document.write("残念、もっと小さいです。");
  }
else{
 document.write("0から2の数字を入力して下さい。");
 }

//document.getElementById('choice').textContent = message;
document.write("残機は" + life + "です。");
}
