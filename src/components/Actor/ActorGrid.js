import React from 'react';
import IMG_NOT_FOUND from "../../images/not-found.png";
import ActorCard from './ActorCard';

const ActorGrid = ({data}) => {
  return (
    data.map(({person})=> (<ActorCard
    key={person.id} 
    id={person.id} 
    name={person.name}
    country={person.country?person.country.name:null} 
    image={person.image ? person.image.medium : IMG_NOT_FOUND} 
    birthday={person.birthday}
    gender={person.gender}
    deathday={person.deathday}
    />)
  ));
}

export default ActorGrid;
