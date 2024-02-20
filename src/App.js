import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomeScreen from "./screens/HomeScreen";
import RegisterScreen from './screens/RegisterScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={< HomeScreen/>} />
        <Route path='/register/' element={<RegisterScreen />}  />
      </Routes>
    </Router>
  );
}

export default App;
