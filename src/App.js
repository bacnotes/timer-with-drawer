import './App.css';
import Timer from './components/Timer'
import Draw from "./components/Draw";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";
function App() {
  return (
    <div className='md:flex'>
      <Timer />
      <Draw />
      <Modal />
      <Overlay />
    </div>
  );
}

export default App;
