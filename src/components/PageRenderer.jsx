// src/components/PageRenderer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFound';

function PageRenderer() {
  const { page } = useParams();

  switch (page) {
    case 'home':
      return <Home />;
    case 'blog':
      return <Blog />;
    case 'contact-us':
      return <Contact/>;
    case 'login':
      return <Login />;
    default:
      return <NotFoundPage />; // Render a 404 page if no match
  }
}

export default PageRenderer;
