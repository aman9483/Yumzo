
import {
  FOOD_FETCH_REQUEST,
  FOOD_FETCH_SUCCESS,
  FOOD_FETCH_FAIL,
} from '../constant/Food';

const initialState = {
  foods: [],
  loading: false,
  error: null,
};


export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_FETCH_REQUEST:
      return { ...state, loading: true };

    case FOOD_FETCH_SUCCESS:
      return { ...state, loading: false, foods: action.payload };

    case FOOD_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
