import type { FC } from 'react';
import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Pokedex = lazy(() => import('./pokedex'));
const PokemonDetails = lazy(() => import('./pokedex/details'));

const queryClient = new QueryClient();

const App: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<>Loading...</>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/details/:name" element={<PokemonDetails />} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>
);

export default App;
