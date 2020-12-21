document.onkeydown = function(e) {
     if (e.keyCode == 32) {
       generateHex();
    }
};

var hexadecimals = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function generateHex(){
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    var random = hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
    hex += random;
  }
  document.body.style.backgroundColor = hex;
  document.getElementById("hexcode").innerHTML = hex;
}
