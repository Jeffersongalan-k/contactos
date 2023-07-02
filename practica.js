//array de contactos
let contactos = ["nombre1", "nombre2", "nombre3"];
// new
function nuevoContacto(name) {
  contactos.push(name);
}
nuevoContacto("nombre8");
// del
function borrarContacto(name) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i] === name) {
      contactos.splice(i, 1);
      break;
    }
  }
}
borrarContacto("nombre1");
// imprimir contactos
function impr() {
  console.log(contactos);
}


