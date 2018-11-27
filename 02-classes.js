'use strict';

// à l'intérieur de la classe on peut juste déclarer des fonctions
// avec la fonction spéciale constructor
// définit les caractéristiques d'un objet
class Maclasse{

    constructor(){
        //garantir l'existence d'un attribut
        //le symbole existe 
        // traitement nécessaire pour que l'objet soit viable
        this.attribut = null;
    }
    //fonction qu'on va attribuer aux objets 
    fonction(){
        console.log(this.attribut);
    }
}

// Pour créer une nouvelle instance, on utilise l'instruction new objet
// on affecte le résultat de cette expression à une variable qu'on utilisera par la suite
var monInstance = new Maclasse()

// existence délimitée par la paire d'accolade
// on ne peut pas déclarer avec const (cas particulier)
for (let i= 0; i < 10; i++){

}

// permet de synchroniser les données
{
    const a = { prop:  'coucou'};
    const b = a;
    b.prop = 'hello';
    console.log(a.prop);
    b = { prop: 'salut'}; //erreur !
}