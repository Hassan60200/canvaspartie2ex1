var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.fillStyle='red';
  ctx.moveTo(120,100);
  ctx.quadraticCurveTo(89,30, 55, 100);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(120,100);
  ctx.lineTo(90,200);
  ctx.lineTo(55,100);
  ctx.fillStyle = '#aa6522';
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
