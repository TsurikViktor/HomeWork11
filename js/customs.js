//создать новый массив, который будет содержать 
//только имена мастеров из Hufflepuff. 

const wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor'
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff'
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff'
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor'
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor'
    }];

let mastersHufflepuff = [];

mastersHufflepuff = wizards.reduce(function (hufflepuff, master) {
  if (master.house === 'Hufflepuff') {
    hufflepuff.push(master.name);
  }
  return hufflepuff;
}, []);

console.log(wizards);
console.log(mastersHufflepuff);

//Написать скрипт, который сделает полную копию исходного объекта с использованием рекурсии для вложенных объектов.
//Исходный и полученный результат вывести в консоль.

const info = {
    formatted_address : "Washington Square, New York, NY 10012, Сполучені Штати Америки",
    geometry: {
       location: {
          lat: 40.7308838,
          lng: -73.997332
       },
       viewport: {
          northeast: {
             lat: 40.7333674,
             lng: -73.99379435000002
          },
          southwest: {
             lat: 40.72847220000001,
             lng: -74.00132615
          }
       }
    },
    name: "Washington Square Park"
  };

const copyInfo = getCopyObj(info);

function getCopyObj(info) {
  const newCopyInfo = {};
 
  for(const i in info) {
    if (info[i] instanceof Object) {
      newCopyInfo[i] = getCopyObj(info[i]);
      continue;
    }
    newCopyInfo[i] = info[i];
  }
  return newCopyInfo;
};

console.log(info);
console.log(copyInfo);
