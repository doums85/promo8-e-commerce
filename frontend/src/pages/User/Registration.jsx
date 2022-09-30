import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function registerHandler(e) {
    e.preventDefault();
    // auth => from firebase file into lib folder
    // email & password
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          console.log('user credential :', user);

          user.displayName = name
        })
        .catch(
          (error) => (
            console.error('error creating user credential :', error.message),
            alert(error.message)
          )
        );

      return;
    }

    alert('Passwords are not the same! Please try again');
  }

  return (
    <Layout>
      <section className="section">
        <div className="grid">
          <h1 className="section-title">Registration </h1>
          {/* Form */}
          <form className="form">
            <input
              onChange={(e) => onChangeHandler(e)(setName)}
              type="text"
              placeholder="Full Name"
              className="form__input"
              required
            />
            <input
              onChange={(e) => onChangeHandler(e)(setEmail)}
              type="text"
              placeholder="@email.com"
              className="form__input"
              required
            />
            <input
              onChange={(e) => onChangeHandler(e)(setPassword)}
              type="password"
              placeholder="Your password"
              className="form__input"
              required
            />

            <input
              onChange={(e) => onChangeHandler(e)(setPasswordConfirm)}
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

            <input
              type="submit"
              value="Registration"
              onClick={(e) => registerHandler(e)}
              className="button"
            />
          </form>
        </div>
      </section>
    </Layout>
  );
}
