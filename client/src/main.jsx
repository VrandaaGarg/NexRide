import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import RideGuide from "./Pages/RideGuide.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="rideGuide" element={<RideGuide />} />
      {/*Private routes*/}
      <Route path='' element={<PrivateRoute />}>
         <Route path='/profile' element={<ProfileScreen />} />
    </Route>
  </Route>
)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
