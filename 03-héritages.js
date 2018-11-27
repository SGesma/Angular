'use strict';

// 2 class pour 2 types d'objets (ils servent à faire la même chose)
// Mais il y en aura une qui servira à faire des choses spécifiques et l'autre plus génériques
class AnimalDomestique{}
// class PetitChaton peut faire des choses en plus que AnimalDomestique 
class PetitChaton extends AnimalDomestique {}


//le carré c'est le cas général et le rectangle le cas spécifique
// le rectangle sait faire plus de chose qu'un carré donc il est + spécifique
class Rectangle extends Carre {
    
    constructor(longueur, largeur){
        this.longueur = longueur;
        // ? si largeur est vrai (on aura la première valeur sinon la deuxième longueur)
        this.largeur = largeur ? largeur : longueur;
    }

    obtenirSurface (){
        return this.longueur * this.largeur;
    }

}

class Losange extends Carre {
    
    constructor(longueur, petitAngle){
        this.longueur = longueur;
        this.petitAngle = petitAngle;
    }

    obtenirSurface (){
        return this.longueur * this.longueur * Math.sin(this.petitAngle);
    }

}