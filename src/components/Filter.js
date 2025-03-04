// import React, { Component } from 'react'

// export class Filter extends Component {
//     constructor(props) {   
//         super(props);
//         this.state = {
//             categories: [
//                 {
//                     key: 'all',
//                     name: 'All'
//                 },
//                 {
//                     key: 'ring',
//                     name: 'Rings'
//                 },
//                 {
//                     key: 'bracelet',
//                     name: 'Bracelets'
//                 },
//                 {
//                     key: 'necklace',
//                     name: 'Necklaces'
//                 },
//                 {
//                     key: 'brooch',
//                     name: 'Brooches'
//                 },
//                 {
//                     key: 'earring',
//                     name: 'Earrings'
//                 }
           
//             ]
//         }
//     }
//     render() {
//         return (
//             <div className='filter'>
//                 {/* Поле ввода для поиска */}
//                 <input 
//                     type="text" 
//                     placeholder="Search..." 
//                     onChange={(e) => this.props.searchItems(e.target.value)}
//                 />

//                 {/* Категории */}
//                 <div className='categories'>
//                     {this.state.categories.map(el => (
//                         <button key={el.key} onClick={() => this.props.filterItems(el.key)}>
//                             {el.name}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Filter;

// import React, { useState } from "react";

// export default function Filter({ closeMenu, filterItems, searchItems }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     searchItems(e.target.value);
//   };

//   return (
//     <div className="sidebar">
//       <button className="close-btn" onClick={closeMenu}>×</button>

//       <h3>Filter</h3>

//       <input 
//         type="text" 
//         placeholder="Search..." 
//         value={query} 
//         onChange={handleSearch} 
//       />

//       <button onClick={() => filterItems("all")}>All</button>
//       <button onClick={() => filterItems("ring")}>Rings</button>
//       <button onClick={() => filterItems("earring")}>Earrings</button>
//       <button onClick={() => filterItems("bracelet")}>Bracelets</button>
//       <button onClick={() => filterItems("necklace")}>Necklaces</button>
//       <button onClick={() => filterItems("brooch")}>Brooches</button>
//     </div>
//   );
// }
