import { Layout, Shop } from '../../components';
import { Settings } from '../../components/Profile';

export default function UserProfile() {
  return (
    <Layout>
      <section className="section">
        <div className="grid">
          <Settings />
          {/* Favorites */}
          <Shop title="Your Favorites" />
        </div>
      </section>
    </Layout>
  );
}
