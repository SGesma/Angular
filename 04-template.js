'use strict';

`texte`

`ligne de texte 1
ligne de texte 2`

// interpolation ${}
`texte ${expression} texte`

// on peut mettre une étiquitte
etiquette `texte ${expression} texte`

const titre = `Mes vacances au soleil`;

const html = `
    <article>
        <h1>${titre}</h1>
    </article>
    `;


// moteur de template en couche pour Angular