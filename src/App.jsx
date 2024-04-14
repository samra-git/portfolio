// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Projets from './pages/Projets';
import Details from './pages/Details';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projets/projet/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;