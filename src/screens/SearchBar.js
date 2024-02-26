// // SearchBar.js
// import React, { useState } from 'react';
// import { TextInput } from 'react-native';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (text) => {
//     setQuery(text);
//     onSearch(text);
//   };

//   return (
//     <TextInput
//       placeholder="Search Products..."
//       value={query}
//       onChangeText={handleSearch}
//     />
//   );
// };

// export default SearchBar;

import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;
