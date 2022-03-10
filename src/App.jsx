import logo from './logo.svg';
import GalleryContainer from './Components/Containers/GalleryContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GalleryContainer />
    </div>
  );
}

export default App;
