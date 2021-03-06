import './App.css';

import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Blog from './pages/Blog';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route exact path="/news" element={<Blog />} />
      {/* <Route exact path="/login" component={Login} /> */}
      {/* <Route exact path="/register" component={Register} /> */}
      {/* <Navigate from="*" to="/" /> */}
    </Routes>
  );
}

export default App;
