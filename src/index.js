import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Home } from './component/Home';
import { SignUp } from './component/class/SignUp';
import { Login } from './component/Login';
import { CreateRoom } from './component/CreateRoom';
import { Room } from './component/Room';
import { Dinning } from './component/Dinning';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { SignUpForm } from './component/SignUpForm';
import { LoginForm } from './component/LoginForm';
import { Contact } from './component/Contact';
import { FileUpload } from './component/FileUpload';
import { getRoomById } from './model/RoomCRUD';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


let childRoutes=[
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'signUp',
    element:<SignUpForm></SignUpForm>
  },
  {
    path:'login',
    element:<LoginForm></LoginForm>
  },
  {
    path:'add',
    element:<CreateRoom></CreateRoom>
  },
  {
    path:'booking',
    element:<Room></Room>
  },{
    path:'dinning',
    element:<Dinning></Dinning>
  },
  {
    path:'/fileupload/:room_id',
    element:<FileUpload />
  },
  {
    path:'booking',
    element:<Room></Room>
  },
  {
    path:'editroom/:room_id',
    element:<CreateRoom></CreateRoom>
    ,loader:async ({params} ) => {
      return await getRoomById(params.room_id);
    }
  },
  {
    path:'contact',
    element:<Contact></Contact>

  }
];

const router= createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:childRoutes
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
