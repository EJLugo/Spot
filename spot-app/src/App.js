import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import PetResults from './Components/PetResults';
import Footer from './Components/Footer';
import Search from './Components/Search';

const URL = 'http://api.petfinder.com/pet.find';
const KEY = process.env.REACT_APP_API_KEY;
const PARAMS = {
  key: KEY,
  format: 'json',
  // animal: 'animal',
  location: '11102', //only want to show results for NYC since this is going to be local shelter
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
      dogs: []
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
      const animalList = data.petfinder.pets.pet;
      console.log(animalList);
      const animals = animalList.map(animal => {
        const id = animal.id["$t"]
        const photo = animal.media.photos.photo[0]['$t']
        const name = animal.name['$t']
        const breed = animal.breeds.breed['$t']
        const sex = animal.sex['$t']
        const age = animal.age['$t']
        const description = animal.description['$t']
          return {
            id: id,
            photo: photo,
            name: name,
            breed: breed,
            sex: sex,
            age: age,
            description: description
          }
      })

      this.setState({ animals: animals });
    } catch(e) {
      console.log(e);
    }
  }

  // renderAllDogs() {
  //     async fetch() => {
  //     const opts = {
  //       params: PARAMS,
  //       adapter: jsonpAdapter,
  //     };
  //
  //     try {
  //       const resp = await axios(URL, opts);
  //       const data = resp.data;
  //       const animalList = data.petfinder.pets.pet;
  //       console.log(animalList);
  //       let dogs = animalList.filter(dog => dog.animal['$t'] === "Dog")
  //       const dogList = dogs.map(dog => {
  //         const id = dog.id["$t"]
  //         const photo = dog.media.photos.photo[0]['$t']
  //         const name = dog.name['$t']
  //         const breed = dog.breeds.breed['$t']
  //         const sex = dog.sex['$t']
  //         const age = dog.age['$t']
  //         const description = dog.description['$t']
  //           return {
  //             id: id,
  //             photo: photo,
  //             name: name,
  //             breed: breed,
  //             sex: sex,
  //             age: age,
  //             description: description
  //           }
  //     })
  //     this.setState({ dogs: dogs });
  //       } catch(e) {
  //         console.log(e);
  //       }
  //     }
    // }


  render() {
    return (
      <div className="App">
        <Search />
        <img src='pawprint.png' alt='pawprint heart' className='pawprint'/>
        <h1>Spot</h1>
        <h2>Find your new Best Furry Friend</h2>
        <PetResults details={this.state.animals} />
        <Footer />
        <div className='dog-grid'>
          <p>I am dog grid</p>
        </div>
      </div>
    );
  }
}

export default App;
