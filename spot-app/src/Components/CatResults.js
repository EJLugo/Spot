import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import PetResults from './PetResults';

const URL = 'http://api.petfinder.com/pet.find';
const KEY = process.env.REACT_APP_API_KEY;
const PARAMS = {
  key: KEY,
  format: 'json',
  animal: 'cat',
  location: '11102',
  count: 30
};

class CatResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const opts = {
      params: PARAMS,
      adapter: jsonpAdapter,
    };

    try {
      const resp = await axios(URL, opts);
      const data = resp.data;
      const catList = data.petfinder.pets.pet;
      console.log(catList);
      const cats = catList.map(cat => {
        const id = cat.id['$t']
        const name = cat.name['$t']
          return {
            id: id,
            name: name
          }
      })
      this.setState({
        cats: cats
      });
    } catch(e) {
      console.log(e);
    }
  }

    render() {
      return (
        <div>
          <p>I'm a cat</p>
          <PetResults details='this.cdetails.cats' />
        </div>
      );
    }
  }

 export default CatResults;
