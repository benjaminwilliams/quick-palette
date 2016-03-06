
var quickPalette = (function(){

  var col1 = ["76B29A", "ACC273", "C9AF7D", "CC7978", "827DB2"];
  var col3 = ["4C6172", "332C2C","1D2226", "58593B", "717252"];
  var col4 = ["FCDB8E", "A68155","644531", "3E3A31", "877E6F"];

  function addEl(hex){
    return "<div class='box' style='background-color:#" + hex + ";'></div>";
  }

  function buildLine(arr, el){
    for(var i= 0; i < arr.length; i++ ){
      el.innerHTML += addEl(arr[i]);
    }
    el.innerHTML += "<div class='end'></div>";
  }

  function init(){
    var el = document.getElementById('palette');
    buildLine(col1, el);
    buildLine(col3, el);
    buildLine(col4, el);

  }

  return{
    init : init
  }

})();

window.onload = function(){
  quickPalette.init();
};