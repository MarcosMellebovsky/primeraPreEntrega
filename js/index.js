const BIENVENIDA = alert("Bienvenido al cajero automático");
  let saldo = 100;
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
        rtirarEfectivo(saldo);
        break;
      case 3:
        
        break;
      case 4:
        
        break;
      default:
        alert("Opción inválida.");
    }
  } while (opcion !== 4);

function consultarSaldo(saldo) {
    alert("Su saldo actual es de: " + "$"+ saldo);
}
function rtirarEfectivo(saldo) {
    let saldoRetirado =  prompt("Cuanto desea retirar? ");
    let resulatdo;
    if (saldoRetirado < saldo) {
         alert("No puedes retirar esa cantidad de dinero, ya que tienes " + "$" + saldo + " en tu cuenta");
    }
    do {
       
    } 
    while (saldoRetirado < saldo);
   
    resulatdo = saldo - saldoRetirado;
    alert("El saldo que te quedo en cuenta es de: " + "$" + resulatdo);
    

  
     
    
    
}