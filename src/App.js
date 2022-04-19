import './App.scss'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Properties from './components/Properties'
import Statistics from './components/Statistics'

function App() {
  return (
    <div className="App">
      <Header />
      <Properties />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App
