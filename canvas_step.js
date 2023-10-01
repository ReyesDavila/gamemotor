function dibujar() {
  // Borra todo el canvas.
  ctx.clearRect(0, 0, originalCanvasWidth, originalCanvasHeight);

  draw_oculto();
  draw();

  // Solicita que el canvas se vuelva a dibujar en el siguiente intervalo de tiempo.
  window.requestAnimationFrame(dibujar);
}

dibujar();
onResize(); //ajustando canvas