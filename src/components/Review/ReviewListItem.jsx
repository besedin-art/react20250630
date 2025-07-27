import { UserContainer } from "../User/UserContainer";

export const ReviewListItem = ({ text, userId }) => {
  return (
    <li>
      {text} {<UserContainer id={userId} />}
    </li>
  )
};
