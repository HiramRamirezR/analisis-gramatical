// Obtén los elementos que se utilizarán para arrastrar y soltar
const simbolos = document.querySelectorAll('.simbolo');
const frase = document.getElementById('frase');

// Agrega un controlador de eventos para cuando se inicie el arrastre
simbolos.forEach(simbolo => {
  simbolo.addEventListener('dragstart', e => {
    // Almacenar la id del elemento arrastrado en los datos de transferencia
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

// Agrega un controlador de eventos para cuando se suelte el objeto arrastrado
frase.addEventListener('drop', e => {
  // Evita el comportamiento predeterminado del navegador
  e.preventDefault();

  // Obtén la id del elemento arrastrado
  const simboloId = e.dataTransfer.getData('text');

  // Obtén el elemento arrastrado y agrega su contenido al contenedor de la frase
  const simboloArrastrado = document.getElementById(simboloId);
  frase.appendChild(simboloArrastrado);
});

// Agrega un controlador de eventos para evitar el comportamiento predeterminado del navegador al arrastrar
frase.addEventListener('dragover', e => {
  e.preventDefault();
});

// Manejador de eventos para arrastrar elementos
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// Manejador de eventos para permitir que un elemento se suelte en otro elemento
function allowDrop(ev) {
  ev.preventDefault();
}

// Manejador de eventos para soltar un elemento arrastrado
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
