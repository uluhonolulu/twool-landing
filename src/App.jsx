import './App.css'
import Discover from './components/Discover/Index'
import Accordion from './components/FAQ/Index'
import Header from './components/Header/Header'
import Pricing from './components/Pricing/Index'
import Slides from './components/Slider/Index'
import Testimonials from './components/Testimonials/Index';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Slides/>
      <Discover/>
	  <Testimonials/>
      <Accordion/>
      <Pricing/>
    </div>
  )
}

export default App
