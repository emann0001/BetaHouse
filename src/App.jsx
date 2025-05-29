// App.jsx
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './auth/SignUp';
import PopularProperties from './pages/PopularProperties';
import PropertyDetails from './components/PropertyDetails';
import Login from './auth/Login';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/popularproperties" element={<PopularProperties />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
