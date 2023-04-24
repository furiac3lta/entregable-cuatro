import './styles/userCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormClose, setDeleteClose }) => {
  const handleDelete = () => {
    deleteUserById(user.id);
    setDeleteClose(false)
  };
  const handleUpdate = () => {
    setUpdateInfo(user);
    setFormClose(false)
  };
  return (
    <article className="user">
      <h2 className="user__name">
        {user.first_name}
        {user.last_name}
      </h2>
      
      <ul className="user__list">
        <li className="user__item">
          <span className="user__label">Email</span>
          <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item">
          <span className="user__label">Birthday</span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer">
        <button onClick={handleDelete} className="user__btn user__delete">
          <i className="bx bx-trash user__icons"></i>
        </button>
        <button onClick={handleUpdate} className="user__btn user__update">
          <i className="bx bx-edit-alt user__icons"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
