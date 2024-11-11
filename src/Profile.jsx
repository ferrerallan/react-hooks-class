// src/components/Profile.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile with userContext</h2>
      <p>User Name: {user.nome}</p>
    </div>
  );
}

export default Profile;
