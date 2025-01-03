import './App.css'
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import About from './components/About/About'
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
let router = createBrowserRouter([
  {path:'',element:<Layout />,children:[
    {index:true, element: <Home />},
    {path:'about',element:<About />},
    {path:'portfolio',element:<Portfolio />},
    {path:'contact',element: <Contact />},
    {path:'*',element:<NotFound />}
  ]}
])
function App() {
  return (
    <RouterProvider router={router}>
    <Layout />
    </RouterProvider>
  )
}
export default App