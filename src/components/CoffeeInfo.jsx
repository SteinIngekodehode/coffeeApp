import React, { useState, useEffect } from 'react';
import { fetchCoffeeData } from '../FetchedData/Api';
/*import Search from './Search';*/

const CoffeeInfo = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialImages = [
    { name: 'Espresso', image: './Images/coffees/Espresso.png' },
    { name: 'Espresso Macchiato', image: './Images/coffees/Macchiato.png' },
    { name: 'Cafe Misto', image: './Images/coffees/Misto.png' },
    { name: 'Unnamed Coffee', image: './Images/coffees/Coffee-cream.png' },
  ];
console.log(initialImages);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coffeeData = await fetchCoffeeData('', searchTerm);
        console.log('Data from API:', coffeeData);

        if (Array.isArray(coffeeData)) {
          console.log('Filtered Data:', coffeeData);
          setData(coffeeData);
        } else {
          console.error('Invalid data received:', coffeeData);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error in CoffeeInfo:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <div className="coffee-cards">
          {/* Filter data to include only coffee types with initial images */}
          {data
            .filter((coffee) => initialImages.some((img) => img.name === coffee.name))
            .map((coffee) => (
              <div key={coffee.id} className="coffee-card">
                <div className="coffee-image">
                  {/* Use the initial image if available, otherwise use the API image */}
                  <img
                    src={initialImages.find((img) => img.name === coffee.name)?.image || coffee.imageUri}
                    alt={coffee.name}
                  />
                  </div>
                
                <p>{coffee.name}</p>
                <p>{coffee.formCode}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CoffeeInfo;
