import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1>
            <br/>
            <p>Taaone, à Tahiti, à l'occasion de son déplacement en Polynésie française,
                 Emmanuel Macron a de nouveau insisté, ce dimanche, sur l'importance de se 
                 faire vacciner, pour enrayer la propagation du Covid-19."Tous les soignants 
                 que j'ai pu voir depuis le début de mon passage ici ont été clairs: 'nous 
                 croyons en la vaccination'. Vous êtes tousengagés dans des métiers de science
                  et de soin, quand la science donne des armes il faut les utiliser", a affirmé 
                  le président de la République, dont c'est le premier déplacement officiel 
                  dans la collectivité d'outre-mer, ajoutant que "la vaccination est un combat
                   essentiel".
            </p>
            <br/>
            <p>Une mobilisation parfois "cynique, manipulatrice"
                Emmanuel Macron a assuré "assume(r) totalement" les décisions prises "le 12
                juillet dernier", notamment la vaccination obligatoire pour les soignants et 
                l'extension du pass sanitaire. Ces mesures sont "proportionnées", a-t-il
                 insisté.

            </p>

        </div>
    );
};

export default About;