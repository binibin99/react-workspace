import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyButton from './chap01/MyButton';
import DrinkList from './chap01/DrinkList';
import Clock from './chap02/Clock';
import ProfileList from './chap03/ProfileList';
import AlarmList from './chap04/AlarmList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DrinkList />
    <MyButton />
    <Clock />
    <AlarmList />
    <ProfileList />
  </React.StrictMode>
);

reportWebVitals();