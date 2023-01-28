// const calcular = document.querySelector('#calcular')

// calcular.addEventListener("click", () => {
//   console.log("Eu fui clicado!")
// })

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado";
})
