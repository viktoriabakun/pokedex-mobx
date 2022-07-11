import type { FC } from 'react';
import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const PokemonList = lazy(() => import('./pokemon/list'));
const PokemonDetails = lazy(() => import('./pokemon/details'));

const queryClient = new QueryClient();

const App: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<>Loading...</>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/details/:name" element={<PokemonDetails />} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>
);

export default App;
