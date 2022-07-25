
import './App.css';
import Navbar from './components/Navbar';
import { Home } from "./components/Home"
import { LogIn } from "./components/LogIn"
import { Routes, Route} from "react-router-dom"
import { SignUpForm } from './components/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes> */}


      <Home/>
      <SignUpForm></SignUpForm>

    </div>
  );
}

export default App;
