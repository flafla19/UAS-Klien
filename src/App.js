import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Tips from './components/Tips';
import Contact from './components/Contact';
import store from './redux/store';
import News from './components/News';
import { EarthquakeProvider } from './context/EarthquakeContext';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <EarthquakeProvider>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </EarthquakeProvider>
    </Provider>
  );
}

export default App;
