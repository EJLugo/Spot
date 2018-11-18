import React, { Component } from 'react';


export default function Search(props) {
  return (
    <div>
      <form>
        <input type='text'
               onChange={props.handleSearchInput}
               placeholder='Find your BFF'
               value={props.value}
               onSubmit={props.handleSubmit}
        />
        <input type='submit'
               value='submit'
        />
      </form>
    </div>
  )
}

// class Search extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       bestFriend: ''
//     }
//   }
//   render() {
//     return (
//       <form>
//         <input type='text'
//                onChange={props.handleSearchInput}
//                placeholder='Find your BFF'
//                value={props.value}
//                onSubmit={props.handleSubmit}
//                 />
//         <input type='submit'
//                value='submit'
//                 />
//       </form>
//     );
//   }
// }
//
// export default Search;
