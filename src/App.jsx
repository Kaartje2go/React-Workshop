import GalleryContainer from './Components/Containers/GalleryContainer';
import './App.css';
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GalleryContainer />} />
      </Routes>
    </div>
  );
}

export default App;
