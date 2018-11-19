import React, { Component } from 'react';
import '../App.css';

export default function CatList(props) {
  return (
    <div className='pet-main-profile'>
      {props.cdetails.map(x => {
      return( <div className='pet-main-details'>
        <img className='photo' src={x.photo} alt='cat'/>
          <div className='pet-details-menu'>
            <p className='pet-details pet-name'>{x.name}</p>
            <p className='pet-details'>{x.description}</p>
            <p className='pet-details'>{x.age}</p>
            <p className='pet-details'>{x.breed}</p>
            <p className='pet-details'>{x.sex}</p>
          </div>
      </div>)
      })}
    </div>
  );
}
