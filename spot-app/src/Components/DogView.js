import React, { Component } from 'react';

export default function DogView(props) {
  const displayValue = dog(props.value)
  return (
    <div>
      {displayValue}
    </div>
  );
}
