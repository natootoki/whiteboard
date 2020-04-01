var test1 = document.getElementById('add');
var test2 = document.getElementById('point');

var keys =['','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','0','1',
'2','3','4','5','6','7','8','9','','',
'','','','','','a','b','c','d','e',
'f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y',
'z','','','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','',':',';',',','-',
'.','/','@','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','[',
'\\',']','^','','','','\\','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','',''];

var width =[0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,18,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,18,18,
  20,20,20,20,20,20,20,20,0,0, //0-9
0,0,0,0,0,18,20,18,20,18, //a-e
12,20,20,9,11,19,9,30,20,20, //f-o
21,18,14,18,14,20,18,27,20,18, //p-y
18,0,0,0,0,0,0,0,0,0, //z

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,18,18,9,18,
9,18,32,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,18,
  18,18,24,0,0,0,18,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var Keys =['','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','0','!',
'2','3','4','5','6','\'','(',')','','',
'','','','','','A','B','C','D','E',
'F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y',
'Z','','','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','*','+','<','=',
'>','?','`','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','{',
'|','}','~','','','','_','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','',''];

var Width =[0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,18,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,18,9,
  20,20,20,20,20,10,20,20,0,0,
0,0,0,0,0,22,22,22,24,20, //A-E
20,22,24,16,14,22,20,26,24,24, //F-O
20,24,24,22,20,24,24,34,22,22, //P-Y
20,0,0,0,0,0,0,0,0,0, //Z

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,18,18,18,18,
18,18,18,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  9,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var keysz =['','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','わ','ぬ',
'ふ','あ','う','え','お','や','ゆ','よ','','',
'','','','','','ち','こ','そ','し','い',
'は','き','く','に','ま','の','り','も','み','ら',
'せ','た','す','と','か','な','ひ','て','さ','ん',
'つ','','','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','け','れ','ね','ほ',
'る','め','゛','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','゜',
'ー','む','へ','','','','ろ','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','',''];

var widthz =[0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,18,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,32,32,
  32,32,32,32,32,32,32,32,0,0,
0,0,0,0,0,32,32,32,32,32, //A-E
32,32,32,32,32,32,32,32,32,32, //F-O
32,32,32,32,32,32,32,32,32,32, //P-Y
32,0,0,0,0,0,0,0,0,0, //Z

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,32,32,32,32,
32,32,16,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,16,
  32,32,32,0,0,0,32,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var Keysz =['','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','を','',
'','ぁ','ぅ','ぇ','ぉ','ゃ','ゅ','ょ','','',
'','','','','','','','','','ぃ',
'','','','','','','','','','',
'','','','','','','','','','',
'っ','','','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','；','、','＝',
'。','','','','','','','','','',

'','','','','','','','','','',
'','','','','','','','','','「',
'','」','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','','',
'','','','','','','','','',''];

var Widthz =[0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,18,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,32,32,
  32,32,32,32,32,32,32,32,0,0,
0,0,0,0,0,32,32,32,32,32, //A-E
32,32,32,32,32,32,32,32,32,32, //F-O
32,32,32,32,32,32,32,32,32,32, //P-Y
32,0,0,0,0,0,0,0,0,0, //Z

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,32,32,32,32,
32,32,16,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,32,
  32,32,32,0,0,0,32,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0];

var char=0;
var charx =[];
var chary =[];
var player_char=`w`;

document.getElementById("player").innerText = player_char;

//カーソルのオブジェクトを作成
var player = new Object();
player.x = 0;
player.y = 0;
 
//キーボードのオブジェクトを作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.shift = false;
key.kana = false;
key.ctrl = 'around';
 
//メインループ
function main() {
	//キーボードが押された時、keydownfunc関数を呼び出す
	addEventListener("keydown", keydownfunc, false);
	//キーボードが放された時、keyupfunc関数を呼び出す
	addEventListener("keyup", keyupfunc, false);
 
	//方向キーが押されている場合は、カーソルが移動する
	if ( key.left === true ) player.x -= 4;
	if ( key.up === true ) player.y -= 4;
	if ( key.right === true ) player.x += 4;
	if ( key.down === true ) player.y += 4;
 
	//カーソルの位置を決める
	document.getElementById( 'player' ).style.top = player.y + "px";
	document.getElementById( 'player' ).style.left = player.x + "px";
 for(var i=0;i<charx.length;i++){
  document.getElementById( 'chars'+i ).style.top = chary[i] + "px";
	document.getElementById( 'chars'+i ).style.left = charx[i] + "px";
 }
	//main関数、つまり自分自身の関数を呼び出すことでループさせる。
	requestAnimationFrame(main);
}
requestAnimationFrame(main);
 
//キーボードが押されたときに呼び出される関数
function keydownfunc( event ) {
  var key_code = event.keyCode;
  if( key_code === 37 & key.ctrl==='math' ) player.x -= 32;
  else if( key_code === 38 & key.ctrl==='math' ) player.y -= 32;
  else if( key_code === 39 & key.ctrl==='math' ) player.x += 32;
  else if( key_code === 40 & key.ctrl==='math' ) player.y += 32;
	else if( key_code === 37 ) key.left = true;
	else if( key_code === 38 ) key.up = true;
	else if( key_code === 39 ) key.right = true;
  else if( key_code === 40 ) key.down = true;
  else if( key_code === 16 ) key.shift = true;
  else if( key_code === 242 & key.kana ) key.kana = false;
  else if( key_code === 242 & !key.kana ) key.kana = true;
  else if( key_code === 17 & key.ctrl==='around' ){
    key.ctrl = 'write';
    document.getElementById("player").innerText = "|";
}
  else if( key_code === 17 & key.ctrl==='write' ) key.ctrl = 'math';
  else if( key_code === 17 & key.ctrl==='math' ){
    key.ctrl = 'around';
    document.getElementById("player").innerText = player_char;
  }
  else if(key_code === 8 & char>=1){
    char-=1;
    var test1del = document.getElementById("chars"+char);
    test1.removeChild(test1del);
    charx.pop();
    chary.pop();
  }
  else if(key_code !== 229&key.ctrl!==`around`){
  //    if(keys[Number(key_code)]!==''){
        if(key.shift&!key.kana)test1.insertAdjacentHTML('afterbegin','<h1 id="chars'+char+'">'+Keys[Number(key_code)]+'</h1>');
        else if(key.shift&key.kana)test1.insertAdjacentHTML('afterbegin','<h1 id="chars'+char+'">'+Keysz[Number(key_code)]+'</h1>');
        else if(!key.shift&key.kana)test1.insertAdjacentHTML('afterbegin','<h1 id="chars'+char+'">'+keysz[Number(key_code)]+'</h1>');
        else test1.insertAdjacentHTML('afterbegin','<h1 id="chars'+char+'">'+keys[Number(key_code)]+'</h1>');
  //    }
  //  else test1.insertAdjacentHTML('afterbegin','<h1 id="chars'+char+'">'+key_code+'</h1>');
  test2.insertAdjacentHTML('afterbegin','<style>#chars'+char+' {position: absolute;top: 0;left: 0;}</style>');
  charx.push(player.x);
  chary.push(player.y);
  if(key.ctrl==='write'){
    if(!key.kana){
      if(!key.shift) player.x += width[Number(key_code)];
      else player.x += Width[Number(key_code)];
    }
    else{
      if(!key.shift) player.x += widthz[Number(key_code)];
      else player.x += Widthz[Number(key_code)];
    }
  }
  char+=1;
  }
  else if(key_code !== 229&key_code !== 32&key_code !== 8){
    if(key.shift&!key.kana)player_char=Keys[Number(key_code)];
    else if(key.shift&key.kana)player_char=Keysz[Number(key_code)];
    else if(!key.shift&key.kana)player_char=keysz[Number(key_code)];
    else player_char=keys[Number(key_code)];
    document.getElementById("player").innerText = player_char;
  }
  else if(key_code===32){
    test1.insertAdjacentHTML('afterbegin','<h1 id="chars'+char+'">'+player_char+'</h1>');
    test2.insertAdjacentHTML('afterbegin','<style>#chars'+char+' {position: absolute;top: 0;left: 0;}</style>');
    charx.push(player.x);
    chary.push(player.y);
    char+=1;
  }
}
 
//キーボードが放されたときに呼び出される関数
function keyupfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = false;
	if( key_code === 38 ) key.up = false;
	if( key_code === 39 ) key.right = false;
  if( key_code === 40 ) key.down = false;
  if( key_code === 16 ) key.shift = false;
}
