import React from 'react';
import AppNavigation from './navigations/AppNavigation';
import AuthNavigation from './navigations/AuthNavigation';

export default function App() {
  const signed = false;

  return <AuthNavigation />;
}
