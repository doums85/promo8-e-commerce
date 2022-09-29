import { Link } from 'react-router-dom';
import { Layout } from '../../components';

export default function Registration() {
  return (
    <Layout>
      <section className="section">
        <div className="grid">
          <h1 className="section-title">Registration </h1>
          {/* Form */}
          <form className="form">
          <input
              type="text"
              placeholder="Full Name"
              className="form__input"
            />
            <input
              type="text"
              placeholder="@email.com"
              className="form__input"
            />
            <input
              type="password"
              placeholder="Your password"
              className="form__input"
            />

            <input
              type="password"
              placeholder="Repeat your password"
              className="form__input"
            />
            <div className="form__options">
              <p className="form__forget">
                Already have an account ?
                <Link to="/user/login" className="form__link">
                  {' '}
                  Sign in
                </Link>
              </p>
            </div>

            <a href="#" className="button">
              Registration
            </a>
          </form>
        </div>
      </section>
    </Layout>
  );
}
