import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import Home from './Home';
import SmallWithSocial from './Footer';
import Nav from './Navbar';
import SignUp from './pages/SignUp';
import SginIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SginIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
