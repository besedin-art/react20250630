import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewListItemContainer } from "../Review/ReviewListItemContainer";

export const Restaurant = ({ name }) => {

  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
      <h2>{name}</h2>
    </div>
  );
}