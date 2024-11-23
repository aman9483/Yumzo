import React, { useState } from 'react';
import Menu from '../../components/ExploreMenu/Menu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Menu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
   
    </div>
  )
}

export default Home