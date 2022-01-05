import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <div className="top-left-rectangle" />
      <div className="App-header">
        <div className="App-wrapper">
          <Navbar />
          <MainContainer />
        </div>
        <div className="features-wrapper">
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
