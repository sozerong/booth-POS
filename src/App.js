import './App.css';
import {Routes,Route,Link,Navigste,Outlet, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu';
import MenuList from './MenuList';
import Cart from './Cart';
import Main from './Main';
import Waiting from './Waiting';
import Complete from './Complete';
import { useState, useRef } from 'react';

function App() {
  return (
    <Routes>
        <Route path="/kiosk2" element={
           <Cart></Cart>
                }/>

        <Route path="/" element={
            <Main></Main>
                }/>
        <Route path="/Waiting" element={
          <Waiting></Waiting>
        }
        />
        <Route path="/Complete" element={
          <Complete></Complete>
        }
        />
    </Routes>
  )
    };


export default App;
