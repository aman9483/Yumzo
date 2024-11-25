import React, { useState, useEffect } from 'react';
import Menu from '../../components/ExploreMenu/Menu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import Loader from '../../components/loader/loader.jsx';  // Import the loader component
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);  // Track loading state

  // Simulating a data fetch or some process that takes time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Set loading to false after 2 seconds
    }, 2000);  // Adjust time as needed

    return () => clearTimeout(timer);  // Cleanup timer
  }, []);

  return (
    <div>
      {/* Display the loader while loading is true */}
      {loading ? (
        <Loader/>  // Show loader component
      ) : (
        <>
          <Menu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
        </>
      )}
    </div>
  );
}

export default Home;
