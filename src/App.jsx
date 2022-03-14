import { Routes, Route } from 'react-router';
import DetailContainer from './Components/Containers/DetailContainer';
import GalleryContainer from './Components/Containers/GalleryContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GalleryContainer />} />
        <Route path="/detail/:planetId" element={<DetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
