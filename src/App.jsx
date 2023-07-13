import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import {Link} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {createRoot} from "react-dom/client";
import AdoptedPetContext from './AdoptedPetContext';
import SearchParams from "./SearchParams";
import Details from './Details';

const queryClient = new QueryClient({
    defaultOptions:{
        staleTime: Infinity,
        cacheTime: Infinity,
    },
});

const App = () => {
    const adoptedPet = useState(null);
    return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
        <header>
            <Link to="/">Adopt Me!</Link>
        </header>
        <h1>Adopt Me!</h1>~
        <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path='/' element={<SearchParams />} />
        </Routes>
        </AdoptedPetContext.Provider>
        </QueryClientProvider>
    </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); 