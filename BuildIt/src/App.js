import React from 'react';
import { useSelector } from 'react-redux';
import AppNavigation from './navigations/AppNavigation';
import AuthNavigation from './navigations/AuthNavigation';

export default function App() {
  const isSigned = useSelector((state) => state.auth.isSigned);

  return isSigned ? <AppNavigation /> : <AuthNavigation />;
}
