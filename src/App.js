import React from 'react';
import './style.css';
import moment from 'moment';
import 'moment/locale/tr';
import YInput from './components/YInput';

export default function App() {
  return (
    <div>
      <h1>Hello React.js !</h1>
      <h2>Tarih: </h2>
      <p> {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
      <YInput name="yildiz" />
    </div>
  );
}
