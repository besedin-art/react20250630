import { useReducer } from "react";

const initialState = {
  name: '',
  text: '',
  rating: 0
}

const SET_NAME_ACTION = "setName";
const SET_TEXT_ACTION = "setText";
const SET_RATING_ACTION = "setRating";
const CLEAR_ACTION = "clear";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME_ACTION:
      return { ...initialState, name: action.payload }
    case SET_TEXT_ACTION:
      return { ...state, text: action.payload }
    case SET_RATING_ACTION:
      return { ...state, rating: action.payload }
    case CLEAR_ACTION:
      return initialState
    default:
      return state;
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);
  const setName = (value) => {dispatch({ type: SET_NAME_ACTION, payload: value })};
  const setText = (value) => {dispatch({ type: SET_TEXT_ACTION, payload: value })};
  const setRating = (value) => {dispatch({ type: SET_RATING_ACTION, payload: value })};
  const clear = () => {dispatch({ type: CLEAR_ACTION })};

  return {
    form,
    setName,
    setText,
    setRating,
    clear
  };

}