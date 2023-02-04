import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import store from './Redux/ConfigureStore';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/" element={<Rockets />} />
        </Routes>
      </Provider>
    </div>
  );
}
export default App;
