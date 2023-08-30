import './App.css'
import FeaturesList from './components/FeaturesList/FeaturesList'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <FeaturesList />
    </div>
  )
}

export default App
