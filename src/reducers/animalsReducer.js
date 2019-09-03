import { FETCH_ANIMALS, CREATE_ANIMAL, REMOVE_ANIMAL } from '../actions/animalActions';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ANIMALS:
      return { ...state, list: [...state.list, ...action.payload] };
    case CREATE_ANIMAL:
      return { ...state, list: [...state.list, ...action.payload] };
    case REMOVE_ANIMAL:
      return { ...state, list: [...state.list.filter(animal => animal._id !== action.payload._id)] };
    default:
      return state;
  }
}
