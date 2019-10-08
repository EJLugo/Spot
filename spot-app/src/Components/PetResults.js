import React from 'react';
import '../App.css';

export default function PetResults(props) {
  return (
    <div className='pet-main-profile'>
      {props.details.map(x => {
      return ( 
          <div className='pet-main-details'>
            <img className='photo' src={x.photo} alt='dog'/>
              <div className='pet-details-menu'>
                <p className='pet-details pet-name'>{x.name}</p>
                <p className='pet-details'>{x.age}</p>
                <p className='pet-details'>{x.breed}</p>
                <p className='pet-details'>{x.sex}</p>
                <p className='pet-details'>{x.description}</p> 
              </div>
        </div>
      )
      })}
    </div>
  );
}
