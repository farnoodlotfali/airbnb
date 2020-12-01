import './App.css';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
