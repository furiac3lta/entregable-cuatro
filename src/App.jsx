import { useEffect, useState } from "react";
import "./App.css";
import useUserCrud from "./hooks/useUserCrud";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";
import Alert from "./components/Alert";
import DeleteAlert from "./components/DeleteAlert";

function App() {
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById } =
    useUserCrud();

  const [updateInfo, setUpdateInfo] = useState();
  const [formClose, setFormClose] = useState(false);
  const [alertClose, setAlertClose] = useState(true);
  const [deleteClose, setDeleteClose] = useState(true);
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleOpenForm = () => {
    setFormClose(false);
  };
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Users</h1>
        <button onClick={handleOpenForm} className="app__btn">
          Create new user
        </button>
      </header>
      <DeleteAlert
        deleteClose={deleteClose}
        setDeleteClose={setDeleteClose}
        deleteUserById={deleteUserById}
      />
      <Alert
        alertClose={alertClose}
        setAlertClose={setAlertClose}
        updateInfo={updateInfo}
      />
     
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
        alertClose={alertClose}
        setAlertClose={setAlertClose}
      />
      <div className="app__user__container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormClose={setFormClose}
            setAlertClose={setAlertClose}
            deleteClose={deleteClose}
            setDeleteClose={setDeleteClose}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
