import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { UserProfile, Login, Registration } from './pages/User';
import { Men, Detail } from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* User Profile */}
        <Route path="/user">
          <Route index element={<UserProfile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Route>
        {/* Shops */}
        <Route path="/collection">
          <Route index element={<Men />} />
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
