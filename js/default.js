var i = Math.floor(0);
for(i=0;i>-1;i++){
var result = window.confirm('じゅんびOK');
if(result==false){break;}
var number = Math.floor(Math.random()*3);

var life = 10;

var answer = parseInt(window.prompt('数あてゲーム。0から2の数字を入力して下さい。'));

var message;
if(number === answer){
  message = 'あたり';
  }
else if(answer<number){
  message = '残念、もっと大きいです。';
  }
  else if(number<answer){
  message = '残念、もっと小さいです。';
  }
else{
 message = '0から2の数字を入力して下さい。';
 }


document.getElementById('choice').textContent = message;
document.getElementById('choice').textContent = life;
}
