// main modules
import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import Navbar from './components/Navbar';
import HomeElement from './components/Home';
import AboutElement from './components/About';
import CourseElement from './components/Course';
// styles
import './global.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HomeElement />
    <a name='About'></a>
    <AboutElement />
    <a name='Course'></a>
    <CourseElement />
  </React.StrictMode>
);