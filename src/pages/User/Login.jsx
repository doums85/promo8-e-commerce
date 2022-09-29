import { Link } from 'react-router-dom';
import { Layout } from '../../components';

export default function Login() {
  return (
    <Layout>
      <section className="section">
        <div className="grid">
          <h1 className="section-title">Sign in </h1>
          {/* Form */}
          <form className="form">
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

            <div className="form__options">
              <a href="#" className="form__link">
                Password forget
              </a>
              <p className="form__forget">
                New customer ?
                <Link to="/user/register" className="form__link">
                  {' '}
                  start here.
                </Link>
              </p>
            </div>

            <a href="#" className="button">
              Sign in
            </a>
          </form>
        </div>
      </section>
    </Layout>
  );
}
