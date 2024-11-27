import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItems';
import './FoodDisplay.css';

export const FoodDisplay = ({ category }) => {
    const { foodItems } = useContext(StoreContext);

    // Ensure food_list is defined and is an array
    if (!foodItems|| !Array.isArray(foodItems)) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near to you</h2>
            <div className="food-display-list">
                {foodItems.map((item, index) => {
                    // Filter by category
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                food={item}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
