let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  if(card >= 2 && card <= 6) {
    count ++;
    if(count >= 1) {
      return `${count} Bet`;
    }else if(count <= 0) {
      return `${count} Hold`;
    }
    

  }else if(card >=7 && card <= 9) {
    if(count >= 1) {
      return `${count} Bet`;
    }else if(count <= 0) {
      return `${count} Hold`;
    }

  }else{
    count --;
    if(count >= 1) {
      return `${count} Bet`;
    }else if(count <= 0) {
      return `${count} Hold`;
    }
  }

  // Cambia solo el código encima de esta línea
}

cc(2); cc("J"); cc(9); cc(2); cc(7);