import './App.css';
import Timer from './components/Timer'
import Draw from "./components/Draw";
function App() {
  return (
    <div className='md:flex'>
      <Timer />
      <Draw />
    </div>
  );
}

export default App;
