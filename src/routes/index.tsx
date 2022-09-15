import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default IndexRouter;
