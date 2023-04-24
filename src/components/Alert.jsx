import "./styles/alert.css";

const Alert = ({ alertClose, setAlertClose, updateInfo }) => {
  console.log(updateInfo);
  const handleExit = () => {
    setAlertClose(true);
  };

  return (
    <div className={`alert-container ${alertClose && "close"}`}>
      <div className="alert">
        <span className="alert__label">  {updateInfo ? "Usuario editado" : "Usuario creado"}
        </span>
        <button onClick={handleExit} className="alert__button">
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default Alert;
