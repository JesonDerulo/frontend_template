import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomeScreen from "./screens/HomeScreen";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileUpdateScreen from './screens/ProfileUpdateScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id/" element={<ProductScreen />} />
        <Route path="/register/" element={<RegisterScreen />} />
        <Route path="/login/" element={<LoginScreen />} />
        <Route path="/profile/" element={<ProfileScreen />} />
        <Route path="/profile/update/" element={<ProfileUpdateScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
