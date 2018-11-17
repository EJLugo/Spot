import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import PetResults from './Components/PetResults';
import ChangeButton from './Components/ChangeButton';
import Footer from './Components/Footer';

const URL = 'http://api.petfinder.com/pet.find';
const KEY = process.env.REACT_APP_API_KEY;
const PARAMS = {
  key: KEY,
  format: 'json',
  animal: 'dog',
  location: '11102', //only want to show results for NYC since this is going to be local shelter
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      }
      this.getView = this.getView.bind(this);
    }

    getView() {
      switch(this.state.dogView) {
        case 'M':
          let dogs = this.state.dogs;
          dogs.filter(dog => dog.sex === 'M')
          return <PetResults details={dogs} />
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
      const dogList = data.petfinder.pets.pet;
      console.log(dogList);
      const dogs = dogList.map(dog => {
        const id = dog.id["$t"]
        const photo = dog.media.photos.photo[0]['$t']
        const name = dog.name['$t']
        const breed = dog.breeds.breed['$t']
        const sex = dog.sex['$t']
        const age = dog.age['$t']
          return {
            id: id,
            photo: photo,
            name: name,
            breed: breed,
            sex: sex,
            age: age
          }
      })

      this.setState({ dogs: dogs });
    } catch(e) {
      console.log(e);
    }
  }


  render() {
    return (
      <div className="App">
        <ChangeButton className='filter-button'/>
        <img src='pawprint.png' alt='pawprint heart' className='pawprint'/>
        <h1>Spot</h1>
        <h2>Find your new Best Furry Friend</h2>
        <PetResults details={this.state.dogs} />
        <Footer />

        {/* {JSON.stringify(this.state.dogs)} */}
        {/* {this.state.dogs.map(dog, id => (
          <div>{dog.id}</div> */}

        {/* ))} */}
      </div>
    );
  }
}

export default App;
