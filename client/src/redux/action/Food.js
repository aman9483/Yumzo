
import axios from 'axios';
import {
  FOOD_FETCH_REQUEST,
  FOOD_FETCH_SUCCESS,
  FOOD_FETCH_FAIL,
} from '../constant/Food';

export const fetchFoods = () => async (dispatch) => {

   const url = "http://localhost:8088"
   
  try {

   
    dispatch({ type: FOOD_FETCH_REQUEST });

    const { data } = await axios.get(`http://localhost:8088/api/v1/AllFood`);

    console.log(data);
    


    dispatch({
      type: FOOD_FETCH_SUCCESS,
      payload: data.foods,
    });
  } catch (error) {
  
    dispatch({
      type: FOOD_FETCH_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
