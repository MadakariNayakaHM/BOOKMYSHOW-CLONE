import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CardsSlide from './Components/CardsSlide';
import Footer from './Components/Footer';
import Gift from './Components/Gift';


import Header from './Components/Header';
import Hero from './Components/Hero';
import Ticket from './Components/Ticket';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CardsSlide/>
      <Ticket/>
      <Gift/>
      <Footer/>
    
    </div>
   
  );
}

export default App;
