
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';
import Section from './Components/Section/Section';
import Testimonial from './Components/Testimonial/Testimonial';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Section/>
     <Pricing/>
     <Gallery/>
     <Testimonial/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
