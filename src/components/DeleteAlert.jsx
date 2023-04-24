import './styles/deleteAlert.css'

const DeleteAlert = ({ deleteClose, setDeleteClose, updateInfo, deleteUserById }) => {

    const handleExit = () => {
        setDeleteClose(true);
      };

  return (
    <div className={`alert-container ${deleteClose && "close"}`}>
      <div className="alert">
        <span className="alert__label">  {deleteUserById && "Usuario eliminado"}
        </span>
        <button onClick={handleExit} className="alert__button">
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default DeleteAlert
