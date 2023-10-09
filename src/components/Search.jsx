import React, { useState } from 'react';

const Search = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onSearchTermChange(inputValue);
    console.log('Search term in Search:', inputValue);
  }
    return(
      <div className='Search-container'>
        <div className='Search-content'>
            <img src='./Images/search.png' alt='Search icon' />
            <input 
              type='text'
              placeholder='Find your coffee'
              value={searchTerm}
              onChange={handleInputChange}
              />
        </div>
      </div>
    )
}

export default Search;