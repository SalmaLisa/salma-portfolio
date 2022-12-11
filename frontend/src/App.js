
import { RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Skills from './Components/Skills';
import { router } from './Routes/Router';

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
