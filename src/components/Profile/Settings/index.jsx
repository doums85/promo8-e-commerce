import './Settings.css';

export default function Settings() {
  return (
    <>
      <h1 className="section-title">Welcome back John Doe !</h1>
      <div className="user">
        <img src="/img/user.jpeg" alt="John Doe" className="user__img" />

        <form className="form">
          <input
            type="text"
            placeholder="@email.com"
            className="form__input"
          />
          <input
            type="password"
            placeholder="current password"
            className="form__input"
          />
          <input
            type="password"
            placeholder="new password"
            className="form__input"
          />

          <a href="#" className="button">
            Save
          </a>
        </form>
      </div>
    </>
  );
}
