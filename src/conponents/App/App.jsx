// import Contacts from 'components/Contacts/Contacts';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Main from '../Main/Main';
// import Sidebar from '../Sidebar/Sidebar';
import { HiMenu } from "react-icons/hi";
import Seidbar from "../Seidbar/Seidbar";

import './App.css'

const App = () => {
  return (
    <div >
        Hallo man
        <HiMenu />
        <Seidbar/>
      {/* <Sidnpmebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Main /> */}
    </div>
  );
};

export default App;