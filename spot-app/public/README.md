## SPOT: The BFF Finder (Best Furry Friend)

### Introduction

SPOT is an animal lover's best tool for finding their new furry friend.

- The app for finding your new best furry Friend in the NYC area
- SPOT is an adoption center website that lets users search for NYC animals in need of forever homes
- SPOT is designed for people in the New York City area who want to adopt animals in need in their area, rather than searching for animals at shelters anywhere in the country.


Link to the repo: https://github.com/Ejlugo/Spot

Link to screencast: https://youtu.be/sBgJKBbJCHw

Link to deployed site: http://spotbff.surge.sh/

### Code Snippet

Petfinder's API was dense with information in that it was an array of many nested objects, all of which eventually had the same key of '$t.' Once I was able to identify that pattern, it made it easy to pull the information that I wanted to populate within my app. However, there were some challenges for some information which led to some inconsistencies within the app. For example, dogs that are mixed breeds have an additional object which, when pulling the information as I have below, does not include the full path, and therefore does not show within the app.

```Javascript

const resp = await axios(URL, opts);
  const data = resp.data;
  const dogList = data.petfinder.pets.pet;
  const dogs = dogList.map(dog => {
    const id = dog.id["$t"]
    const photo = dog.media.photos.photo[0]['$t']
    const name = dog.name['$t']
    const breed = dog.breeds.breed['$t']
    const sex = dog.sex['$t']
    const age = dog.age['$t']
    const description = dog.description['$t']
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
  ```
