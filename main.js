
Object.keys(start_system).forEach(function(key) {
    start_system[key]();
  });

function ejecucion_constante() {
    Object.keys(begin_step).forEach(function(key) {
        begin_step[key]();
      });

      Object.keys(step).forEach(function(key) {
        step[key]();
      });

      Object.keys(end_step).forEach(function(key) {
        end_step[key]();
      });
  }
  
  setInterval(ejecucion_constante, 33.33);

