import React from 'react';
import './App.css';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Section from './Components/Section';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Popular from './Components/languages/Popular';
import Programming from './Components/languages/Programming';
import WEBDEV from './Components/languages/WEBDEV';
import DATABASE from './Components/languages/DATABASE';
import CODEPART from './Components/CODEPART';
import ACC from './Components/ACC';
import Learn from './Components/Learn';
import Explore from './Components/Explore';
import Sign from './Log/Sign';
import Login from './Log/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Practice from './Components/Quiz/Practice';
function Layout() {
  const location = useLocation();

  // routes where we hide Aside, Section, ACC — but NOT Footer
  const minimalRoutes = [
    '/Components/Explore',
    '/Components/CODEPART',
    '/about',
    '/contact',
    '/Components/Quiz/Practice',
  ];

  const isMinimal = minimalRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      {!isMinimal && <Aside />}
      {!isMinimal && <Section />}

      <Routes>
        <Route path="/Components/Quiz/Practice" element={<Practice />} />

        <Route path="/" element={<Popular />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Components/Explore" element={<Explore />} />
        <Route path="/Components/Learn" element={<Learn />} />
        <Route path="/Components/CODEPART" element={<CODEPART />} />
        <Route path="/languages/WEBDEV" element={<WEBDEV />} />
        <Route path="/languages/DATABASE" element={<DATABASE />} />
        <Route path="/languages/Popular" element={<Popular />} />
        <Route path="/languages/Programming" element={<Programming />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {!isMinimal && <ACC />}
      <Footer />
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
