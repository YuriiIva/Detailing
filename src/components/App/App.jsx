// import Contacts from 'components/Contacts/Contacts';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Main from '../Main/Main';
// import Sidebar from '../Sidebar/Sidebar';
import { HiMenu } from "react-icons/hi";
import Seidbar from "../Seidbar/Seidbar";

import './App.css'
import OurWork from "../OurWork/OurWork";
import Hero from "../Hero/Hero";

const App = () => {
  return (
    <div >
        <Hero/>
        <HiMenu />
        <Seidbar/>
      {/* <Sidnpmebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Main /> */}
      <OurWork/>
    </div>
  );
};

export default App;