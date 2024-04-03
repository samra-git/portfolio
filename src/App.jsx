// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projet1 from './pages/Projet1';
import Projet2 from './pages/Projet2';
import Projet4 from './pages/Projet4';
import Projet3 from './pages/Projet3';
import Projet5 from './pages/Projet5';
import Projet6 from './pages/Projet6';
import Projet7 from './pages/Projet7';
import Error from './pages/Error';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Projets from './pages/Projets';
import Details from './pages/Details';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projet/:id" element={<Details />} />
                <Route path="/projet1" element={<Projet1 />} />
                <Route path="/projet2" element={<Projet2 />} />
                <Route path="/projet3" element={<Projet3 />} />
                <Route path="/projet4" element={<Projet4 />} />
                <Route path="/projet5" element={<Projet5 />} />
                <Route path="/projet6" element={<Projet6 />} />
                <Route path="/projet7" element={<Projet7 />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;