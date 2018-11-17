import React, { Component } from 'react';

export default function Search(props) {
  return (
    <div>
      <Search onChange={props.handleSearchInput}
              placeholder='Find your BFF'
              value={props.value}
              onSearch={props.handleSubmit}
              enterButton
      />
    </div>
  )
}
