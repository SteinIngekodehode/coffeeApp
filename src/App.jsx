import React, { useState } from 'react';
import Navbar from './components/Header/Navbar';
import Heading from './components/Header/Heading/';
import Search from './components/Search';
import CoffeeInfo from './components/CoffeeInfo';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    console.log('Search term in App:', newSearchTerm);
  };
  return (
    <>
      <Navbar />
      <Heading />
      <Search searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
     <CoffeeInfo searchTerm={searchTerm}/>
      <Footer />
      </>
  );
}

export default App;


