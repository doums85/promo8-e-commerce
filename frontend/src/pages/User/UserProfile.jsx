import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Layout, Shop } from '../../components';
import { Settings } from '../../components/Profile';
import { auth } from '../../lib/firebase';

export default function UserProfile() {
  function disconnectHandler() {
    signOut(auth)
      .then(() => alert('Your disconnected '))
      .catch((error) => alert(error.message));
  }

  onAuthStateChanged(auth, (userCredential) => {
    if (userCredential) {
      console.log(userCredential);
    } else {
      console.log('You are not authenticated');
    }
  });

  return (
    <Layout>
      <section className="section">
        <div className="grid">
          <button onClick={disconnectHandler}>Disconnect</button>
          <Settings />
          {/* Favorites */}
          <Shop title="Your Favorites" />
        </div>
      </section>
    </Layout>
  );
}
