import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components';
import { auth } from '../../lib/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function loginHandler(e) {
    e.preventDefault();
    // auth => from firebase file into lib folder
    // email & password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        if (user) alert(`Welcome back ${user.displayName || 'User'}`);
      })
      .catch(
        (error) => (
          console.error('error login :', error.message), alert(error.message)
        )
      );
  }

  function forgetPasswordHandler() {
    const email = prompt('What is your email address ?');
    if (email) {
      // auth => from firebase file into lib folder
      // email
      sendPasswordResetEmail(auth, email).then((userCredential) => {
        console.log(userCredential);
    /*     if (userCredential.ok) {
          return alert('Email sent : Check your email address');
        }

        alert('Something wrong'); */
      });
    }
  }

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
              onChange={(e) => onChangeHandler(e)(setEmail)}
            />
            <input
              type="password"
              placeholder="Your password"
              className="form__input"
              onChange={(e) => onChangeHandler(e)(setPassword)}
            />

            <div className="form__options">
              <a onClick={forgetPasswordHandler} className="form__link">
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

            <input
              type="submit"
              value=" Sign in"
              onClick={(e) => loginHandler(e)}
              className="button"
            />
          </form>
        </div>
      </section>
    </Layout>
  );
}
