// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (prop == 'artist') {
    if (value != '') {
      records[id][prop] = value;
      return records
    } else {
      delete records[id][prop];
      return records
    }
  } else if (prop == 'tracks') {
    if (value != ''){
      if ((prop in records[id]) == false) {
        //crear array y agregar cancion
        records[id][prop] = [value];
        return records;
      } else if((prop in records[id]) == true){
          records[id][prop].push(value);
          return records;
      }
    } else {
      delete records[id][prop];
      return records
    }
  } else if (prop == 'albumTitle') {
    if (value != ''){
      records[id].albumTitle = value;
      return records;
    }
  }
  return records;
}

updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');