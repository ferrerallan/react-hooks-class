import { useContext, useState } from "react";
import UserContext from "./UserContext";

function Profile() {
  // Acesse o usuário, status e a função setStatus do contexto
  const { user, status, setStatus } = useContext(UserContext);

  // Estado local para controlar o valor do input
  const [newStatus, setNewStatus] = useState(status);

  // Função para atualizar o status no contexto
  const handleChange = (event) => {
    setNewStatus(event.target.value);
    setStatus(event.target.value);
  };

  return (
    <div>
      <h2>Profile com userContext</h2>
      <p>User Name: {user.nome}</p>
      <p>Status: {status}</p>
      {/* Input para alterar o status */}
      <input type="text" value={newStatus} onChange={handleChange} />
    </div>
  );
}

export default Profile;