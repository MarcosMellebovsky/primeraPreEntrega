const BIENVENIDA = alert("Bienvenido al cajero automático 👋👋");
let saldo;
saldo = parseInt(prompt("Ingrese su saldo!!"));

while (saldo <= 0){
saldo = parseInt(prompt("Error! Vuelva a ingresar su saldo!"));
}

  do {
    
    opcion = parseInt(prompt(`Bienvenido al cajero automático
  ¿Qué desea hacer?
  
  1. Consultar saldo
  2. Retirar efectivo
  3. Depositar efectivo
  4. Salir

  Ingrese su opción: `));
  
    switch (opcion) {
      case 1:
        consultarSaldo(saldo);
        break;
      case 2:
       saldo = rtirarEfectivo(saldo);
        break;
      case 3:
       saldo =  depositarEfectivo(saldo);
        break;
      case 4:
          alert("Gracias por usar el cajero automático.❤️❤️ ");
        break;
      default:
        alert("Opción inválida.");
    }
  } while (opcion !== 4);

function consultarSaldo(saldo) {
  alert("Su saldo actual es de: " + "$"+ saldo);
}
function rtirarEfectivo(saldo) {  
    let saldoRetirado
     saldoRetirado = parseInt(prompt("¿Cuánto desea retirar?"));
    while (saldoRetirado <= 0){
      saldoRetirado = parseInt(prompt("Error! Vuelva a ingresar la cantidad de saldo a retirar!"));
    }
    let estaSeguro = prompt("Está seguro de que desea retirar: " + "$" + saldoRetirado + "? " + "ingrese: si, si esta seguro ingrese no, si no esta seguro");

    if (estaSeguro == "si") {
    if (saldoRetirado <= saldo) {
        saldo = saldo - saldoRetirado;
        alert("El saldo que te quedó en cuenta es de: $" + saldo);
    } 
    else {
        do {
            saldoRetirado = parseInt(prompt("Error! Vuelve a ingresar una cantidad menor o igual que $" + saldo));
        } while (saldoRetirado > saldo);

        saldo = saldo - saldoRetirado;
        alert("El saldo que te quedó en cuenta es de: $" + saldo);
    } 
  }
  return saldo;
  
}

function depositarEfectivo(saldo) {
  let depositoMaximo = 20000;
  let saldoDepositado = parseInt(prompt(`¿Cuánto desea depositar en su cuenta? Máximo a depositar: $${depositoMaximo}`));

  if (saldoDepositado <= 0) {
      alert("Error! Ingrese un monto válido.");
  } else if (saldoDepositado > depositoMaximo) {
      alert("No se puede depositar esa cantidad, máximo hasta: $" + depositoMaximo);
  } else {
      saldo = saldo + saldoDepositado;
      alert("El saldo que te quedó en cuenta es de: $" + saldo);
  }
  return saldo;
}