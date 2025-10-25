import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Contact from './Contact.jsx';
import About from './About.jsx'

console.log(`You are on ${window.location.pathname}`)
const path=window.location.pathname;
const root=createRoot(document.getElementById('root'))

if(path==='/'){
  root.render(<Home/>)
}else if(path==='/About'){
  root.render(<About/>)
}else if(path==='/Contact'){
  root.render(<Contact/>)
}

