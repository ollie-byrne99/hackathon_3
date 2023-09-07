import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Pages from './pages'
import { PageWrapper } from './components';

import './App.css'

function App() {

  return (
    <>
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/pokemon" element={<Pages.PokemonPage />} />
        <Route path="/about" element={<Pages.AboutPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Routes>
    </PageWrapper>
    </>
  )
}

export default App;
