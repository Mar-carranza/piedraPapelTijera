// Variables para acumular los resultados
let victoriasJugador = 0;
let empates = 0;
let victoriasPC = 0;

let textoUsuario = document.getElementById("login");
textoUsuario.onclick = function () {
  let nombreJugador = prompt("¿ CUAL ES TU NOMBRE ?");
  textoUsuario.innerText = "Buena suerte " + nombreJugador + " !";
  textoUsuario.style.fontSize = "32px";
  textoUsuario.style.padding = "5px";
  textoUsuario.style.background = "red";
  textoUsuario.style.color = "white";
  textoUsuario.style.border = "1px solid lightpink";
};

function enviarOpcion() {
  let opciones = document.getElementsByName("juego");
  for (let i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      let eleccionJugador = opciones[i].value;
      //let eleccionJugador = i + 1
      let eleccionPc = Math.floor(Math.random() * (3 + 1 - 1) + 1);

      if (eleccionPc == 1) {
        alert("Yo he elegido ✊");
      } else if (eleccionPc == 2) {
        alert("Yo he elegido ✋");
      } else {
        alert("Yo he elegido ✌");
      }
      let victoriaMp3 = document.getElementById("victoria");

      if (eleccionJugador == eleccionPc) {
        alert("¡ HEMOS EMPATADO !");
        empates += 1;
      } else if (
        (eleccionJugador == 1 && eleccionPc == 3) ||
        (eleccionJugador == 2 && eleccionPc == 1) ||
        (eleccionJugador == 3 && eleccionPc == 2)
      ) {
        alert("¡ HAS GANADO !");
        victoriasJugador += 1;
        victoriaMp3.play();
      } else {
        alert("¡HE GANADO YO! 🤖");
        victoriasPC += 1;
        victoriaMp3.play();
      }

      let mensajeVictoria = "<p>" + victoriasJugador + " victorias </p>";
      let mensajeEmpate = "<p>" + empates + " empates </p>";
      let mensajeDerrotas = "<p>" + victoriasPC + " derrotas </p> ";

      let tablaMarcador = `
            <table>
                <thead>
                    <tr>
                        <th>VICTORIAS</th>
                        <th>EMPATE </th>
                        <th>DERROTAS</th>                  
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td> ${mensajeVictoria} </td>
                    <td> ${mensajeEmpate}</td>
                    <td> ${mensajeDerrotas}</td>
                </tr>
                </tbody>
                </table>
            `;
      document.getElementById("respuesta").innerHTML = tablaMarcador;

      if (victoriasJugador > victoriasPC) {
        document.querySelector("#imagen").innerHTML =
          "<img src='img/victoria.jpg'/>";
      } else if (victoriasJugador == victoriasPC) {
        document.querySelector("#imagen").innerHTML =
          "<img src='img/empate.jpg'/>";
      } else {
        document.querySelector("#imagen").innerHTML =
          "<img src='img/derrota.jpg'/>";
      }
    }
  }
}
