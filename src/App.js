import './App.css';
import './index.scss';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <div className="App">
      <header className="App-header poc landing-page">
        <Section1 />
        <Section2 />
        <Section3 />
      </header>
    </div>
  );
}

export default App;
