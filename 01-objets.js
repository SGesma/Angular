'use strict';

(2+3) * 2;

// j'encadre mon expression 
// faire référence à l'ensemble de cette fonction comme un élément
(function() {
    var unObjet = {};

    unObjet.propriete = 'valeur';
    unObjet.propriete2 = function() {
        console.log(this.propriete); 
    };
// () permet d'invoquer directement une fonction
})()

// convention de nommage pour définir une fonction constructor 
// on met une majuscule pour l'identifier 
var UnConstructeur = function(valeur){
    this.propriete = valeur;
}


var unAutreObjet = new UnConstructeur('uneAutreValeur');

UnConstructeur.prototype.propriete2 = function() {
    console.log(this.propriete); 
};

// propriété propre et propriété hérité
// les objets peuvent avoir un même constructeur (avec des propriétés propres)
// mais des choses en commun à partir(avec) du prototype 

unAutreObjet.propriete2();
unAutreObjet.propriete = 'modif a posteriori';
unAutreObjet.propriete2();