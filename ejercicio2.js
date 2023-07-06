function createPhoneNumber(numbers) {
    // Verificar si el array tiene 10 números
    if (numbers.length !== 10) {
      return "El array debe contener 10 números.";
    }
  
    // Convertir los primeros tres números en el formato "(XXX) "
    var phoneNumber = "(" + numbers.slice(0, 3).join("") + ") ";
  
    // Agregar los siguientes tres números
    phoneNumber += numbers.slice(3, 6).join("");
  
    // Agregar el guion medio
    phoneNumber += "-";
  
    // Agregar los últimos cuatro números
    phoneNumber += numbers.slice(6).join("");
  
    return phoneNumber;
  }
  
  // Ejemplo de uso
  var numbers = [3, 0, 5, 1, 2, 7, 7, 2, 4, 9];
  var phoneNumber = createPhoneNumber(numbers);
  console.log(phoneNumber)