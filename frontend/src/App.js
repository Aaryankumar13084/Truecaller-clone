import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import Register from './components/Register';
   import Login from './components/Login';
   import Search from './components/Search';

   const App = () => (
     <Router>
       <Routes>
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<Search />} />
       </Routes>
     </Router>
   );

   export default App;