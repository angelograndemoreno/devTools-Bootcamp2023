let names = ("angelo","angelo","juan","daniel")
function countNameRepetitions(names) {
    const result = {}
 
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      result[name] = result[name] ? result[name] + '' : '';
    }
  
     return result;
}
console.log(countNameRepetitions(names));

    

    
