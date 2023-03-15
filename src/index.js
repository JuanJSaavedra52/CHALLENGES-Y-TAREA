import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstApp from './FirstApp';
import { GiftExpertApp } from './GiftExpertApp';
import { GifGrid } from './components/GifGrid';
import { Memorize } from './components/Memorize';
import { Father } from './components/Father';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FirstApp value={0} />
    <Father />
    <Memorize />
    <GiftExpertApp />
    <GifGrid />
  </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();