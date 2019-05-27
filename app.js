function video() {
  var rand = Math.floor(Math.random()*11)
  var iframe = document.getElementById('playlist')
  iframe.setAttribute('src', iframe.getAttribute('src').replace(/index=\d+/, 'index='+rand))
}

function ChangeIt() {
  var totalCount = 6;
  var num = Math.ceil(Math.random()*totalCount );
  document.body.background = 'images/'+num+'.jpg';
  document.body.style.backgroundSize = "cover"; // Background repeat
}
