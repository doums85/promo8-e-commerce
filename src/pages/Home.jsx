import { Layout } from '../components';
import {
  Banner,
  Collection,
  Featured,
  NewCollection,
  Offer,
  WomenSection,
} from '../components/Home';

export default function Home() {
  return (
    <Layout>
      {/* Main */}
      <main className="main">
        {/* Banner */}
        <Banner />
        {/* Features */}
        <Featured />
        {/* Collection */}
        <Collection />
        {/* Women Section */}
        <WomenSection />
        {/* Offer */}
        <Offer />
        {/* New Collection */}
        <NewCollection />
      </main>
    </Layout>
  );
}
