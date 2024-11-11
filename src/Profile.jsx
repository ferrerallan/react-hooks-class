import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  // Get the user object from UserContext
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile with userContext</h2>
      {/* Display the user's name */}
      <p>User Name: {user.nome}</p>
    </div>
  );
}

export default Profile;
