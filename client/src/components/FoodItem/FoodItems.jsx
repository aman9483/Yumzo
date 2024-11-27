// FoodItem.jsx
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import "./FoodItem.css";

const FoodItem = () => {
  const { foodItems, loading, error, cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  if (loading) return <p>Loading food items...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="food-items-container">
      {foodItems.map((food) => (
        <div key={food._id} className="food-item">
          <div className="food-item-img-container">
            <img
              className="food-item-image"
              src={food.FoodImage || assets.placeholderImage}
              alt={food.foodName || "Food item"}
            />
            {!cartItems[food._id] ? (
              <img
                className="add"
                onClick={() => addToCart(food._id)}
                src={assets.add_icon_white}
                alt="Add to cart"
              />
            ) : (
              <div className="food-item-counter">
                <img
                  onClick={() => removeFromCart(food._id)}
                  src={assets.remove_icon_red}
                  alt="Remove from cart"
                />
                <p>{cartItems[food._id]}</p>
                <img
                  onClick={() => addToCart(food._id)}
                  src={assets.add_icon_green}
                  alt="Increase quantity"
                />
              </div>
            )}
          </div>
          <div className="food-item-info">
            <div className="food-item-name-rating">
              <p>{food.foodName}</p>
              <img src={assets.rating_stars} alt="Rating" />
            </div>
            <p className="food-item-desc">{food.FoodDescription}</p>
            <p className="food-item-price">${food.FoodPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItem;
