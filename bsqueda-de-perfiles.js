// Configuración
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  
  // Cambia solo el código debajo de esta línea
  let retorno = 0;
  for (let i = 0; i < contacts.length; i++) {
    
    // Si el nombre es el nombre de pila
    if (name == (contacts[i]['firstName'])) {
      // Y si prop existe..
      if (prop in contacts[i] == true){
        return contacts[i][prop];

      // Si prop no existe..
      } else if (prop in contacts[i] == false){
        return "No such property";
      }
      //

    }else if (name != (contacts[i]['firstName'])){
      console.log(1)
      retorno = 1;
    }
  }
  if (retorno == 1){
    console.log("hola")
    return "No such contact";
  }
  // Cambia solo el código encima de esta línea
}

lookUpProfile("Bob", "lastName");