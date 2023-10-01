
var logVariables = false;
var logVariables_desplegado = false;

let log = [];
for (let i = 0; i < 20; i++) {
  log[i] = false;
} 

function createDiv() {
    // Crea un div
    var div = document.createElement("div");
    div.style.userSelect = "none";

    // Establece las propiedades del div
    div.style.position = "fixed";
    div.style.left = "0";
    div.style.top = "0";
    div.style.borderRadius = "5px";
    div.style.border = "2px solid blue";
    div.style.background = "black";
    div.style.padding = "5px";
  
    // Agrega un texto al div
    div.innerText = "log";
  
    // Agrega el div al documento
    document.body.appendChild(div);
    logVariables = div;
  
    // Define el tamaño del div al tamaño del contenido
    div.style.width = div.innerWidth + "px";
    div.style.height = div.innerHeight + "px";
  }
  
  createDiv();

  function logVariables_click(){
    if(logVariables_desplegado)
    {
      logVariables_desplegado = false;
      logVariables.innerText = "log";
    }
    else
    {
      logVariables_desplegado = true;
    }
  }

  begin_step.logVariables = function(){
    
  }

  step.logVariables = function(){
      var activo = false;
      if(logVariables_desplegado){
      logVariables.innerHTML="";
      for (let i = 0; i < 20; i++) {
        if (log[i] != false) {
          logVariables.innerHTML += `<li>log[${i}]: ${log[i]}</li>`;
          activo = true;
        }
      }
      if(!activo){logVariables.innerHTML="..."}
    }

  }
 
  end_step.logVariables = function(){
  }

  start_system.logVariables = function(){
    addClickListener(logVariables, logVariables_click);
  }


  //Experimento python

  