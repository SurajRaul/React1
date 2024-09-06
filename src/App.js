import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Room } from './component/Room';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Dinning } from './component/Dinning';
import { Login } from './component/Login';
import { CreateRoom } from './component/CreateRoom';
import { SignUpForm } from './component/SignUpForm';
import { LoginForm } from './component/LoginForm';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <>
      <Header></Header>
        <Outlet></Outlet>
        {/* <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/createRoom" element={<CreateRoom />} />
        <Route path="/booking" element={<Room />} />
        <Route path="/dinning" element={<Dinning />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Body></Body> */}
        {/* <Room></Room> */}
      <Footer></Footer>
      </>
    </Provider>
  );
}

export default App;
