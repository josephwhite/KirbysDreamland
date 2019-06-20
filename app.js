function changeVideo() {
  var rand = Math.floor(Math.random()*12)
  var iframe = document.getElementById('playlist')
  iframe.setAttribute('src', iframe.getAttribute('src').replace(/index=\d+/, 'index='+rand))
}

function changeWallpaper() {
  var totalCount = 9;
  var num = Math.ceil(Math.random()*totalCount);
  document.body.background = 'images/'+num+'.jpg';
  document.body.style.backgroundSize = "cover"; // Background repeat
}
