import { useUser } from "../UserContext/useUser";
import { Button } from "../Button/Button";

export const UserBlock = () => {
  const { user, login, logout } = useUser();

  return (
    <div>
      {
        user ?
          <>
            <span>{user}</span>
            <Button size="small" onClick={logout}>logout</Button>
          </>
          :
          <Button size="small" onClick={login}>login</Button>
      }
    </div>
  )
};
