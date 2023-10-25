import './App.css';
import Carrousel from './components/carrousel';
import cat1 from "./lib/assets/1.jpeg";
import cat2 from "./lib/assets/2.jpeg";
import cat3 from "./lib/assets/3.jpeg";
import cat4 from "./lib/assets/4.jpeg";
import cat5 from "./lib/assets/5.jpeg";

function App() {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-pink-400">
      <Carrousel className='w-96 h-96' images={[cat1,cat2,cat3,cat4,cat5]}/>
    </div>
  );
}

export default App;
