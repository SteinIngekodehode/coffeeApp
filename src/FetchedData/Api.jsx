const fetchCoffeeData = async (filterBy = '', searchTerm = '') => {
    try {
      const response = await fetch(`https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks?filterBy=${filterBy}&searchTerm=${searchTerm}`);
      
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export { fetchCoffeeData };
  