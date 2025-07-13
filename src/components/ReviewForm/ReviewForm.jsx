import { useReducer } from "react";
import { Counter } from "../Counter/Counter";

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

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const { name, text, rating } = form;

  return (
    <form>
      <div>
        <input type="text" placeholder="Имя" value={name} onChange={e => {
          dispatch({ type: SET_NAME_ACTION, payload: e.target.value })
        }} />
      </div>
      <div>
        <textarea placeholder="Текст" value={text} onChange={e => {
          dispatch({ type: SET_TEXT_ACTION, payload: e.target.value })
        }} />
      </div>
      <div>
        Рейтинг: <Counter max="5" value={rating} onChange={value => {
          dispatch({ type: SET_RATING_ACTION, payload: value })
        }} />
      </div>
      <button type="button" onClick={() => {
        dispatch({ type: CLEAR_ACTION })
      }}>clear</button>
    </form>
  );
}