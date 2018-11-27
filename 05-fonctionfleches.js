'use strict'

//Une expression de fonction fléchée (arrow function en anglais) permet 
// d'avoir une syntaxe plus courte que les expressions de fonction
// et ne possède pas ses propres valeurs pour this

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  // fonction map (applique une fonction sur chacun des éléments)
  // sur la var material on retourne le résultat du tableau(material length)
  // syntaxe de fonction fléchée
  console.log(materials.map(material => material.length));

  // écrire ça en expression de fonction
  console.log(materials.map(function (material) {return material.length; }));

// Une fonction sans paramètre peut s'écrire avec un couple 
// de parenthèses (fonction fléchée coucou)
// si il n'y a pas les accolades (= à un return)
() => 'coucou';

// quand il y a les accolades (il faut faire le return)
() => {'coucou'; };

// force un appel immédiat de la fonction fléchée
(() => 'coucou')();


// sera utilisé surtout dans les traitements asynchrones

(firstName => `Coucou ${firstName}`)('Pierre');

//expression de fonction (traduire ça en fonction fléchée)
const demo1 = function (firstName, lastName){
  return { first: firstName, last: lastName };
};

// la fonction fléchée (suppression du mot function et return)
// on peut supprimer le mot clé return et des accolades (car il n'y a qu'une instruction)
// retourner un objet avec la propriété first et last
const demo2 = (firstName, lastName) => ({ first: firstName, last: lastName });
console.log()


(firstName, lastName) => `Coucou ${firstName}`;

//je suis à l'intérieure d'une class
class Toto{
  constructor (){
    this.name = 'toto';
  }
  //setTimeout (sera appelé plus tard)
  doSomething(){
    setTimeout(() => console.log(this.name), 400);
  }
}