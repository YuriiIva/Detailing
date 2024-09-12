// import Contacts from 'components/Contacts/Contacts';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Main from '../Main/Main';
// import Sidebar from '../Sidebar/Sidebar';

import Seidbar from "../Seidbar/Seidbar";

// import './App.css'
import OurWork from "../OurWork/OurWork";
import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import s from "./App.module.css";

const App = () => {
  return (
   
    <div className={s.main_container} >

      <Header/>
        <Hero/>
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