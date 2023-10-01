const body = document.body;
const canvas = document.querySelector('#mi-canvas');
const ctx = canvas.getContext('2d');
var originalCanvasWidth = canvas.width;
var originalCanvasHeight = canvas.height;


// Función que se ejecuta cuando se redimenciona la pantalla
function onResize() {
  var rect = body.getBoundingClientRect();
  // Código que se ejecutará cuando se redimencione la pantalla
  var proporcion = 16/9;
  var width = rect.width;
  var height = width/proporcion;

  while(height>rect.height)
  {
    width-=1;
    height = width/proporcion;
  }
  canvas.width = width;
  canvas.height = height;


  var left = (rect.width-canvas.width)/2;

  canvas.style.left = left+"px";
  
  // Establecer la escala del canvas
  var scaleWidth = canvas.width / originalCanvasWidth;
  var scaleHeight = canvas.height / originalCanvasHeight;
  ctx.scale(scaleWidth, scaleHeight);

}


// Escuchamos el evento resize
window.addEventListener("resize", onResize);

